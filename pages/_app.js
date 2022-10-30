import '../styles/index.css'
  

import React, { useEffect } from 'react'

// const ThemeContext = React.createContext('light');

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   Prism.highlightAll()
  // }, [])

  // const { toggle } = useContext(ThemeContext);
  // console.log(toggle)

  return (
    


        <Component {...pageProps} />
      


  )

}

export default MyApp
