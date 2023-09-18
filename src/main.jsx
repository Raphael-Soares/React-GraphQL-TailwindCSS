import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import { ApolloProvider } from "@apollo/client";
import { client as ApolloClientConfig } from "./lib/apollo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClientConfig}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
