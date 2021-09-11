import React from "react"
import TopNav from "../components/topNav"
import Personallayout from "../components/personal"
import OtherMenu from "../components/othermenu"
import Contentblog from "../components/contentblog"

const IndexPage =() => {
  
  return (
    
    <main>
    <title>Home</title>
      <TopNav />
      <Contentblog/>
      <Personallayout/>
      <OtherMenu/>
    </main>

  )
  
}

export default IndexPage
