import * as React from "react"
import { Link } from "gatsby"
import { getUser } from "../services/auth"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StrapiPage = ({ serverData }) => {

  let number = `${getUser().strapi}`;

  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>
        Strapi test
      </h1>

      <p>This is pulliing data from the api theres a lot to do with this but atleast its a proof of concept</p>
      <p>{serverData.data?.[number].attributes.domain}</p>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default StrapiPage

// getServerData is a get not just a function name
export async function getServerData() {
  try {
    const res = await fetch(`http://45.79.101.19:1342/api/clients/`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
