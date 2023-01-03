import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const CREATE_post = gql`
   mutation (
      $input: CreatePostInput!
    ) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
`;

function Create() {

    const [createPost, { data, error }] = useMutation(CREATE_post);

    if (error) return <p>Error..</p>;

    console.log(data);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                createPost({ variables: {"input": {"title": "A Captivating Post Title", "body": "Some interesting content."}}});
            }}
        >
            <button type="submit">
                Create Todo
            </button>
        </form>
    )
}

export default Create;