import '@/app/styles/globals.css'

import Nav from "@/Components/Nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <script
        src="https://kit.fontawesome.com/d5d3cf2fd3.js"
        crossorigin="anonymous"
      ></script> */}




      <body>

        <Nav />

        {children}



      </body>
    </html>
  )
}
