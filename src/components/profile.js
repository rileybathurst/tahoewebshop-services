import React from "react"
import { getUser } from "../services/auth"
import Services from "./services"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
      {/* <li>test</li> */}
    </ul>
    <hr />
    <Services />
  </>
)
export default Profile