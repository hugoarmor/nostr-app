import { v4 } from "uuid";
import { Hex } from "node-forge";
import { Crypto } from "./crypto";

type NostrEvent = {
  pubkey: string;
  created_at: number;
  kind: number;
  tags: string[];
  content: string;
  id?: string;
  sig?: string;
};

type Uuid = string;

export class NostrClient {
  private socket: WebSocket;
  private keyPair: { publicKey: Hex; privateKey: Hex };
  public messageHandlers: Map<Uuid, (event: any) => void> = new Map();

  constructor(relay: string) {
    this.socket = new WebSocket(relay);
    this.keyPair = Crypto.createKeyPair();

    this.subscribe();
  }

  private subscribe() {
    const subId = Crypto.createKeyPair().privateKey.substring(0, 16);
    const filter = { authors: [this.keyPair.publicKey] };
    this.socket.addEventListener("open", () => {
      this.socket.send(JSON.stringify(["REQ", subId, filter]));
    });

    this.socket.addEventListener("message", (message) => {
      let [_type, _subId, event] = JSON.parse(message.data as string);

      if (!event || event == true) return;

      let { _kind, content } = event ?? {};

      this.messageHandlers.forEach((handler) => handler(content ?? {}));
    });
  }

  public async publish(content: string) {
    let event: NostrEvent = {
      pubkey: this.keyPair.publicKey,
      created_at: Math.floor(Date.now() / 1000),
      kind: 1,
      tags: [],
      content: content,
    };

    let signedEvent = await this.getSignedEvent(event, this.keyPair.privateKey);

    this.socket.send(JSON.stringify(["EVENT", signedEvent]));
  }

  public registerHandler(handler: (content: any) => void): Uuid {
    const uuid = v4();
    this.messageHandlers.set(uuid, handler);

    return uuid;
  }

  public unregisterHandler(uuid: Uuid) {
    this.messageHandlers.delete(uuid);
  }

  private async getSignedEvent(event: NostrEvent, privateKey: Hex) {
    let eventData = JSON.stringify([
      0,
      event.pubkey,
      event.created_at,
      event.kind,
      event.tags,
      event.content,
    ]);

    event.id = await Crypto.hash(eventData);
    event.sig = Crypto.sign(event.id, privateKey);

    return event;
  }
}
