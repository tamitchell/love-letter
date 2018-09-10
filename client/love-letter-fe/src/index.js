import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const client = new ApolloClient({ uri: "http://localhost:7000/graphql" });

render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
