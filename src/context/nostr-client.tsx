import { createContext } from "react";
import { NostrClient } from "../services/nostr";

type NostrClientProviderProps = {
  relay: string;
  children: React.ReactNode;
};
export const NostrClientContext = createContext<NostrClient | null>(null);
export function NostrClientProvider({
  relay,
  children,
}: NostrClientProviderProps) {
  const client = new NostrClient(relay);

  return (
    <NostrClientContext.Provider value={client}>
      {children}
    </NostrClientContext.Provider>
  );
}
