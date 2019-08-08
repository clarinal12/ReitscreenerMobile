/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import { NativeRouter, Route, Switch } from "react-router-native";
import { AsyncStorage } from "@react-native-community/async-storage";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import Login from "./src/Login";
import Signup from "./src/Signup";
import Home from "./src/Home";

const httpLink = createHttpLink({
  uri: "http://dev-api.reitscreener.com/graphql"
});

const authLink = setContext(async (_, { headers }) => {
  // const token = await AsyncStorage.getItem("accessToken");
  const token = null;
  // const token = "sampleToken";

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </NativeRouter>
    </ApolloProvider>
  );
};

export default App;
