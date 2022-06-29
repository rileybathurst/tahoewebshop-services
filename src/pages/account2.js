import React from "react";

import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
/* 👇 Import the withAuthenticationRequired HOC 👇 */
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogoutButton from "../components/LogoutButton";

function Same(props) {
  const { user } = useAuth0();
  if (user.email === props.email) {
    return <p>You are logged in</p>;
  }
  return <p>You are not logged in</p>;
}

// create an array of all the emails I have on file
function Emails(props) {
  const emails = [];
  props.emails.data.forEach(element => emails.push(element.attributes.email));

  if (emails.includes(props.useremail)) {
    return <p>me</p>;
  } else {
    return null;
  }
}

const Account2 = ({ serverData }) => {
  const { user } = useAuth0();
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <p>Email: {user.email}</p>
        <p>{serverData.data[0].attributes.email}</p>

        <p>this is where I need the whole if this login then use the thing</p>

        <Same email={user.email} />

        <hr />
        <h2>emails</h2>
        obviouslly I shouldnt do this publically<br />
        <Emails emails={serverData} useremail={user.email} />
        <hr />

        {/* 👇 New Code */}
        <LogoutButton />
      </nav>
    </>
  );
};

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(Account2);

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