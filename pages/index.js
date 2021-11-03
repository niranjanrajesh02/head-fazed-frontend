import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HeadFazed</title>
      </Head>
      <div>
        <Navbar />
        {/* <h1>Welcome to HeadFazed</h1> */}
      </div>

    </div>
  )
}
