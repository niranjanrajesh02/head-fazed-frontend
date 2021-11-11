import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { UserContext } from './UserContext';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0'
import SignUptoApi from 'functions/SignUpToApi';
function UserWrapper({ children }) {
  const [userDB, setUserDB] = useState(null);
  const { user, error, isLoading } = useUser();
  const value = useMemo(() => ({ userDB, setUserDB }), [userDB, setUserDB]);

  useEffect(() => {
    (async () => {
      if (user) {
        await SignUptoApi(user);
        let config = {
          method: 'get',
          url: `users/${user.email}`
        };

        axios(config)
          .then(function (response) {
            // console.log((response.data));
            setUserDB({
              name: response.data.username,
              email: response.data.email,
              cartItems: response.data.cart.products.length,
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })()
  }, [isLoading])
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )

}

export default UserWrapper;
