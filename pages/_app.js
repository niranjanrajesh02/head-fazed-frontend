import Navbar from '@components/Navbar/Navbar'
import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from '@auth0/nextjs-auth0';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'http://localhost:4000';
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
