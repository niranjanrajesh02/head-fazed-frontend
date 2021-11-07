import Navbar from '@components/Navbar/Navbar'
import AnnouncementBand from '@components/AnnouncementBand/AnnouncementBand'
import Carousel from '@components/Carousel/Carousel'
import AdvBanner from '@components/AdvBanner/AdvBanner'
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>HeadFazed</title>
      </Head>
      <div>
        <Navbar />
        <AnnouncementBand />
        <Carousel />
        <AdvBanner />
        <h1>Welcome to HeadFazed</h1>
      </div>

    </div>
  )
}
