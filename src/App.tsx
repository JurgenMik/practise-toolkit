import React from 'react';
import LaunchTimes from './components/LaunchTimes';
import Rocket from './components/Rocket';
import Create from './mutations/Create';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";

const clientOne = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://api.spacex.land/graphql/',
    }),
})

const clientTwo = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://graphqlzero.almansi.me/api',
    }),
})

function App() {
  return (
        <>
        <ApolloProvider client={clientOne}>
            <LaunchTimes/>
            <Rocket/>
        </ApolloProvider>
        <ApolloProvider client={clientTwo}>
            <Create />
        </ApolloProvider>
        </>
  );
}

export default App;
