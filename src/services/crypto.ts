import { ec as EC } from "elliptic";
import { schnorr } from "@noble/curves/secp256k1";

export class Crypto {
  private static keyPairCurveName = "secp256k1";
  private static hashAlgorithm = "SHA-256";
  private static ec = new EC(Crypto.keyPairCurveName);
  private static crypto = window.crypto.subtle;

  public static createKeyPair() {
    const keys = this.ec.genKeyPair();

    const publicKey = keys.getPublic("hex").substring(2).substring(0, 64);
    const privateKey = keys.getPrivate("hex");

    console.log({ publicKey, privateKey });

    return { publicKey, privateKey };
  }

  public static toHex(data: ArrayBuffer | Uint8Array) {
    const hashArray = Array.from(new Uint8Array(data));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  }

  public static async hash(data: string) {
    const buffer = await this.crypto.digest(
      this.hashAlgorithm,
      new TextEncoder().encode(data)
    );

    return this.toHex(buffer);
  }

  public static sign(privateKey: string, data: string) {
    const signature = schnorr.sign(privateKey, data)

    return this.toHex(signature);
  }
}
