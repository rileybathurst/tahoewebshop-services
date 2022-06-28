import React from "react"
import { Router } from "@reach/router"
import Layout from "../src/components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Services from "../components/services"
import Login from "../components/login"
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Profile path="/app/profile" />
      <Services path="/app/services" />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App