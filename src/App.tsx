import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./Pages/Event";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Event />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
