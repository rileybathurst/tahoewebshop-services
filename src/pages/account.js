import React from "react";

import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
/* 👇 Import the withAuthenticationRequired HOC 👇 */
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogoutButton from "../components/LogoutButton";

const Account = () => {
  const { user } = useAuth0();
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <p>Email: {user.email}</p>

        <p>this is where I need the whole if this login then use the thing</p>


        {/* 👇 New Code */}
        <LogoutButton />
      </nav>
    </>
  );
};

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(Account);