import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { resolvers } from "./graphql/resolvers";
import App from "./App";

import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: resolvers
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
