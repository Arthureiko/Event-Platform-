import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl60t2pim48lz01uk70a0ftpx/master",
  cache: new InMemoryCache(),
});
