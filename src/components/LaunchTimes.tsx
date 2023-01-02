import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const GET_Launches = gql`
  query {
    launches(limit: 10) {
    launch_site {
      site_id
      site_name
    }
    launch_date_utc
    }
  }
`;

function LaunchTimes() {

    const { data } = useQuery(GET_Launches);

    return (
        <div>
            {data.launches.map((launch : any) => {
                return (
                    <div key={launch.launch_date_utc}>
                        <p>
                            {launch.launch_date_utc}
                        </p>
                        <p>
                            {launch.launch_site.site_id}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default LaunchTimes;