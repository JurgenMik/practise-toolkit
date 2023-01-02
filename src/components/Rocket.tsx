import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

 const id = 'falcon1'

const GET_Rocket = gql`
   query($rocketId: ID!) {
      rocket(id: $rocketId) {
        company
        name
      }
    }
`;

function Rocket() {

    const { error, data } = useQuery(GET_Rocket, {
        variables: { rocketId: id}
    });

    if (error) return <p>Error</p>;

    return (
        <div>
            <p>{data.rocket.name}</p>
        </div>
    )
}

export default Rocket;