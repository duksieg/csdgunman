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
      {/* <div class="d-flex justify-content-center bg-black ">
            <img src ={banner} class="img-fluid" alt="ศุนย์ปราบปรามผู้มีอิทธิพล มือปืนรับจ้าง และผู้ร้ายสำคัญ" />
      </div> */}
      <Contentblog/>
      <Personallayout/>
      <OtherMenu/>
    </main>

  )
  
}

export default IndexPage
