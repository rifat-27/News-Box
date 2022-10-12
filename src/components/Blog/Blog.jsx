import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1>1. What is the purpose of react router?</h1>
      <p>
        ReactJS Router is mainly used for developing Single Page Web
        Applications. React Router is used to define multiple routes in the
        application. When a user types a specific URL into the browser, and if
        this URL path matches any 'route' inside the router file, the user will
        be redirected to that particular route.
      </p>
      <h1>2. How does contextApi works?</h1>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux.
      </p>
      <h1>3. Describe useRef Hook</h1>
      <p>
        In a React component, useState and useReducer can cause your component
        to re-render each time there is a call to the update functions. In this
        article, you will find out how to use the useRef() hook to keep track of
        variables without causing re-renders, and how to enforce the
        re-rendering of React Components. In React components, there are times
        when frequent changes have to be tracked without enforcing the
        re-rendering of the component. It can also be that there is a need to
        re-render the component efficiently. While useState and useReducer hooks
        are the React API to manage local state in a React component, they can
        also come at a cost of being called too often making the component to
        re-render for each call made to the update functions.
      </p>
    </div>
  )
}

export default Blog
