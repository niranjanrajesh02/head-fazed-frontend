import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'
import { useEffect } from 'react';
export default function Home() {
  const { user, error, isLoading } = useUser();
  // console.log(user, error, isLoading);
  useEffect(() => {
    if (user) {
      console.log(user);
      var config = {
        method: 'get',
        url: `/users/find?emailID=${user.email}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response.data);
          if (response.data === false) {
            var data = JSON.stringify({
              "email": user.email,
              "username": user.nickname
            });
            var config2 = {
              method: 'post',
              url: '/users',
              headers: {
                'Content-Type': 'application/json'
              },
              data: data
            };

            axios(config2)
              .then(function (response) {
                console.log((response.data));
              })
              .catch(function (error) {
                console.log(error);
              });

          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isLoading])

  return (
    <>
      <Head>
        <title>HeadFazed</title>
      </Head>
      <main>
        <Navbar />
      </main>

    </>
  )
}
