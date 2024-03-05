import { useContext } from "react";
import { NostrClientContext } from "../context/nostr-client";
import { NostrClient } from "../services/nostr-client";

export function useNostrClient() {
  const client = useContext(NostrClientContext);

  return client as NostrClient;
}
