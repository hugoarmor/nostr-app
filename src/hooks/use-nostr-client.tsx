import { useContext } from "react";
import { NostrClientContext } from "../context/nostr-client";

export function useNostrClient() {
  const client = useContext(NostrClientContext);

  return client;
}
