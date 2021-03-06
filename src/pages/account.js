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
  // console.log(props.emails)

  let rack = props.emails;

  // console.log(rack.data);
  // console.log(rack.data[0]);
  // console.log(rack.data[0].id);

  // const array1 = ['a', 'b', 'c'];
  // array1.forEach(element => console.log(element));

  // let rack2 = rack.data[0].map; // map isnt a function
  let rack2 = rack.data; // map isnt a function
  // console.log(rack2);

  // rack2.forEach(element => console.log(element));
  rack2.forEach(element => console.log(element.attributes.email));

  // ok now return this out

  // ok ok now put the emails in an array
  const emails = [];
  rack2.forEach(element => emails.push(element.attributes.email));

  /*  if (emails.includes(props.useremail)) {
 
     return <p>me</p>;
   } */

  return (
    <>
      {rack2.map(element => (
        <div key={element.id}>
          <p>{element.attributes.email}</p>
        </div>
      ))}
      {emails}
    </>
  );
}

const Account = ({ serverData }) => {
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
export default withAuthenticationRequired(Account);

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