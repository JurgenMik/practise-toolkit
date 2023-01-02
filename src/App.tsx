import React from 'react';
import LaunchTimes from './components/LaunchTimes';
import Rocket from './components/Rocket';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://api.spacex.land/graphql/',
    }),
})

function App() {
  return (
      <ApolloProvider client={client}>
        <LaunchTimes />
        <Rocket />
      </ApolloProvider>
  );
}

export default App;
