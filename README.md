# nostr-app
This is a custom implementation of a simple nostr client. It acts as a simplified posting app.
<br>
The idea is to show that with a client connection to a relay being set, you can emit the events and listen them to apply the necessary changes.
Please enjoy!

## First Steps
To run the app, first install the dependencies:
```bash
yarn
```

Then you can run the app locally by simply running:
```bash
yarn start
```

Than you can access the app at http://localhost:3000 or whatever is the available port.

## Architecture Decisions
For making this application, while using react, it was defined to have the business logics for each module separated in a service `ts` file with the respective classes.
The reason for this decision is to have a contract designing for simplifying it's implementation and possible refactoring to any other type of implementation.
These examples can be seen in the `src/services/` folder with the crypto and nostr-client services.

One other important decision was to separate the nostr client into a context for itself, the idea is to enforce a singleton logic for the nostr-client once tha app component is mounted.
With that, the access of this client can be made via hook with `useNostrClient`.

## Challenges
The main challenge was to have a better definition of the basics of `nostr` itself, because it seemed kind of blurry at first. But after a few studies on this topic, I was able to identify the main ideas of `nostr` working itself as a protocol, a set of good practices to run client communications with transparency and security.

Then after that it was only a matter of designing a simple scenario of just posting a simple text, sending it as an event to a chosen relay and also listening to the event to persist the change into the app feed.
Of course the idea is to also have these listeners on some other servers, but for understanding purposes, the defined scope was enough.
