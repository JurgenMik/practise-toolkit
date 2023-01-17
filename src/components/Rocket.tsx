import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import {useSelector, connect} from "react-redux";
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

function Rocket(props: any) {

    const rocket = useSelector((state: any) => state.rocket);

     useQuery(GET_Rocket, {
        variables: { rocketId: id},
        onCompleted: (data) => {
            props.dispatch({ type: 'query_Rocket', data});
        },
        onError: (error) => {
            props.dispatch({ type: 'query_Rocket_Error', error});
        }
    });

    return (
        <div>
            <p>{rocket.name}</p>
            <p>{rocket.error}</p>
        </div>
    )
}

export default connect()(Rocket);