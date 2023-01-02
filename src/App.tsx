import React from 'react';
import LaunchTimes from './components/LaunchTimes';
import {ApolloClient, ApolloProvider, HttpLink} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
  }),
})

function App() {
  return (
      <ApolloProvider client={client}>
        <LaunchTimes />
      </ApolloProvider>
  );
}

export default App;
