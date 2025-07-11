// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import topbar from "../vendor/topbar"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  longPollFallbackMs: 2500,
  params: {_csrf_token: csrfToken}
})

// Show progress bar on live navigation and form submits
topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
window.addEventListener("phx:page-loading-start", _info => topbar.show(300))
window.addEventListener("phx:page-loading-stop", _info => topbar.hide())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket

import React from "react"
import ReactDOM from "react-dom/client";
import App from "./App";

const reactRoot = document.getElementById("root");
if (reactRoot) {
    const root = ReactDOM.createRoot(reactRoot);
    root.render(<App />);
}
  
// import React from "react"
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { RelayEnvironmentProvider } from "react-relay";
// import { Environment, Network } from "relay-runtime";

// const HTTP_ENDPOINT = "/api";

// const fetchGraphQL = async (request, variables) => {
//   const resp = await fetch(HTTP_ENDPOINT, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: request.text, variables }),
//   });
//   if (!resp.ok) {
//     throw new Error("Response failed.");
//   }
//   return await resp.json();
// };

// const environment = new Environment({
//   network: Network.create(fetchGraphQL),
// });

// const reactRoot = document.getElementById("root");
// if (reactRoot) {
//   const root = ReactDOM.createRoot(reactRoot);
//   root.render(
//     <RelayEnvironmentProvider environment={environment}>
//       <App />
//     </RelayEnvironmentProvider>
//   );
// }

// import React from "react"
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import { ApolloProvider } from "@apollo/react-hooks"
// import ApolloClient from "apollo-boost"

// const client = new ApolloClient({ uri: "/api" })

// const reactRoot = document.getElementById("root");
// if (reactRoot) {
//   const root = ReactDOM.createRoot(reactRoot);
//   root.render(
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   );
// }