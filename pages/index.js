import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'
import { useEffect } from 'react';
import SignUptoApi from 'functions/SignUpToApi';
export default function Home() {
  const { user, error, isLoading } = useUser();
  // console.log(user, error, isLoading);
  useEffect(() => {
    if (user) {
      SignUptoApi(user);
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
