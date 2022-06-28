import React from "react"
import { getUser } from "../services/auth"

function DotCom(props) {
  const domain = props.domain;
  const com = '.com';

  if (domain.includes(com)) {
    return <span className="box">.com's cost $15.99</span>;
  } else {
    return <span>other domains cost other amounts</span>;
  }
}

const Services = () => (
  <>
    <h2>Your Servives</h2>
    <ul>
      <li>Domain: {getUser().domain} <DotCom domain={getUser().domain} /></li>
      <li>Hosting: {getUser().hosting}</li>
    </ul>
  </>
)
export default Services