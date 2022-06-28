import * as React from "react"
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

// I might need this just to tell gatsby I am grabbing data from the api
// but then again I might not need the plugin if its all live

function Hey(props) {
  // console.log("hey")
  // console.log(props.client)

  return <div>Hey</div>
}

const ClientPage = () => (
  <Layout>
    <Seo title="client test" />
    <h1>Static grab that i might not use</h1>


    <StaticQuery
      query={query}
      render={data => (
        <>
          {
            data.allStrapiClient.edges.map(client => (
              <div key={client.node.id}>
                <Hey client={client} />
                {client.node.name}
              </div>
            ))
          }
        </>
      )}
    />
  </Layout >
)

export default ClientPage

const query = graphql`
query ClientQuery {
  allStrapiClient {
    edges {
      node {
        id
        name
      }
    }
  }
}
`