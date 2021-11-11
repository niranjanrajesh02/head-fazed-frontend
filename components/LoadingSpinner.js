import React from 'react'
import Loader from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100%', marginTop: '15%' }}>
      <Loader
        type="TailSpin"
        color="#40e0d0"
        height={100}
        width={100}
      />
    </div>
  )
}

export default LoadingSpinner
