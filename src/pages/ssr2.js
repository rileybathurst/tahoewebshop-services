import * as React from "react"

const SSR2Page = ({ serverData }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <p>{serverData.data[0].attributes.name}</p>
  </main>
)
export default SSR2Page

export async function getServerData() {
  try {
    const res = await fetch(`http://45.79.101.19:1342/api/clients`)
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
      props: {}
    }
  }
}