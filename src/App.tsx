import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import "./App.css"
import Main from "./components/main/main"

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  )
}

export default App
