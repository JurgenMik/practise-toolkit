import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';


const UPDATE_post = gql`
  mutation (
    $id: ID!
    $input: UpdatePostInput!
  ) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

function Edit() {

    const [updatePost, { data, error }] = useMutation(UPDATE_post);

    if (error) return <p>Error..</p>;

    console.log(data)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                updatePost({ variables: {"input": {"title": "Lost", "body": "content"}, "id": 1 }});
            }}
        >
            <button type="submit">
                Edit Post
            </button>
        </form>
    )
}

export default Edit;