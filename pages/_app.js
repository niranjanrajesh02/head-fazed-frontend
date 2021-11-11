import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UserWrapper from 'HOC/UserWrapper';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'http://localhost:4000';
  
  return (
    <UserProvider>
      <UserWrapper>
        <Component {...pageProps} />
      </UserWrapper> 
    </UserProvider>
  )
}

export default MyApp
