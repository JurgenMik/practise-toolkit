This is a practise repository.
## Table of Contents
* <strong>Overview</strong>
    * <strong>Redux</strong>
    * <strong>TypeScript</strong>
    * <strong>GraphQL</strong>
    * <strong>React hooks</strong>
    * <strong>Performance</strong>
### Screenshots
![image](https://user-images.githubusercontent.com/89903354/210188150-55b1f4c2-bccb-4f23-b443-623523001c34.png)

Redux is a <strong>state management</strong> library for JavaScript applications.
It is often used with React, but it can be used with any frontend or backend JavaScript framework.
The basic idea behind Redux is to <strong>centralize</strong> the application's state in a single store, and to use reducer functions to update the state based on actions.
* <strong>Note</strong>
  * <strong>Redux(store)</strong> single store as CDS
    * <strong>Middleware</strong>
      * Thunk
      * Api requests - intercepting related actions to perform API calls 
  * <strong>Reducers</strong> manages the state and <strong>returns</strong> the newly updated state
    * <strong>Combining multiple Reducers</strong>
  * <strong>Actions</strong> two properties: type(unique identifier) & payload(data)
  * <strong>Dispatch</strong> actions are dispatched to update the data
  * <strong>Connect</strong> connecting a component the store 
  
![image](https://user-images.githubusercontent.com/89903354/210267094-036a148c-8b93-4672-b27d-8859ee78f1e4.png)

GraphQL is a <strong>query</strong> language for your API that allows clients to request
<strong>specific</strong> data and to receive exactly what they need, rather than a fixed set of data. It provides a flexible way to request data from a server and is often used as an <strong>alternative</strong> to REST APIs.
GraphQL is often used with a client-side library like Apollo 
* <strong>Note</strong>
  * <strong>GraphQL Schema</strong> defining the data structure(blueprint) that is queried
  * <strong>Types</strong> defining the fields & their types that a client can query or mutate
    * <strong>Scalar Types</strong> basic types(Int, String etc...)
    * <strong>Object Types</strong> custom types that define the shape of the data in the schema
  * <strong>Mutations</strong> Defined in the schema as a field - performing operations that change data on the server (creating, updating or deleting) records
  * <strong>Error handling</strong> represented as an array of error of objects, included in .res along with the data. Usually done via middleware
  * <strong>Variables</strong> sending dynamic data as part of the query or mutation
  * <strong>Input Types</strong> defining the shape of the input data passed to a query or mutation

![image](https://user-images.githubusercontent.com/89903354/211154092-75b1f00a-de55-49ea-a6b8-30b755ad8684.png)

TypeScript is a programming language that is a <strong>typed</strong> superset of JavaScript. It was developed and is maintained by Microsoft. TypeScript adds <strong>optional</strong> static typing to JavaScript, 
which can help <strong>improve</strong> the quality and maintainability of your code.
