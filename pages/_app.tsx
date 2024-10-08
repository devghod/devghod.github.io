/* 
 Add css help of Head Component on 
 entire web page. you also use 
 @import and @font-face css property here with html 
 style tag all example 
 include  in article 

 Note:
  Do not encluide font in _app.js file. For adding font in entire website use _document.js
*/
import React from 'react'
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
