import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ChakraProvider } from "@chakra-ui/react";
import { NostrClientProvider } from "./context/nostr-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NostrClientProvider relay="wss://relay.nostr.net">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </NostrClientProvider>
  </React.StrictMode>
);
