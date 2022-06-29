import React from "react";

import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogoutButton from "../components/LogoutButton";
import { render } from "react-dom";

function Emails(props) {

  const MyContext = React.createContext(/* some value */);

  props.emails.data.forEach(element => {
    if (element.attributes.email === props.useremail) {
      // console.log(element.id); // yup
      MyContext.displayId = element.id;
      MyContext.displayDomain = element.attributes.domain;
    }
  });

  // console.log(MyContext);
  // console.log(MyContext.displayId);

  return (
    <p>
      {MyContext.displayDomain}
    </p>
  );
}

const Account3 = ({ serverData }) => {
  const { user } = useAuth0();
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <h2>emails</h2>
        <Emails emails={serverData} useremail={user.email} />
        <LogoutButton />
      </nav>
    </>
  );
};

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(Account3);

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