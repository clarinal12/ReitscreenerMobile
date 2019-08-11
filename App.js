/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import { NativeRouter, Route, Switch } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { StyleProvider } from "native-base";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Home from "./src/Home";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

const httpLink = createHttpLink({
  uri: "http://dev-api.reitscreener.com/graphql"
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");
  return {
    headers: {
      ...headers,
      token: token ? `${token}` : ""
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
      <StyleProvider style={getTheme(material)}>
        <NativeRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </NativeRouter>
      </StyleProvider>
    </ApolloProvider>
  );
};

export default App;
