import React from 'react'
import * as stylecustomContentblog from "../css/index.module.css"
import image1 from '../images/backfree500.png'
import empowerman from '../images/empower.jpg'
import criminal from '../images/criminal.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contentblog = ({frompath}) => {
    if (frompath) {
        return (
            <div>
                <div className={stylecustomContentblog.texture2}>
                    <div class="container-fluid d-inline-flex ">
                        <h1 class="display-6 text-white align-self-center ps-md-2 ms-md-2">ศูนย์ปราบปรามผู้มีอิทธิพล มือปืนรับจ้างและผู้ร้ายสำคัญ
                            CRIMINAL ENTERPRISE AND CRIMES VIOLENCE SUPPRESSION TASK FORCE
                        </h1>

                        <img src={image1} class="float-end h-50"></img>
                    </div>

                </div>
                <div class="container-fluid">
                    <div class="row my-3">

                        <div class="col-7">
                            <p class="display-4">
                                ผู้มีอิทธิพล
                            </p>
                            <h5 className={stylecustomContentblog.textparagraph} class="text-dark" style={{ textIndent: '2rem' }}>
                                บุคคลหรือกลุ่มบุคคลที่ดำรงตนด้วยการกระทำการด้วยตนเองหรือใช้ จ้างวาน สนับสนุนการกระทำการใดๆ ที่ผิดกฎหมายหรืออยู่เหนือกฎหมาย
                                ซึ่งโดยปกติพฤติกรรมดังกล่าวเป็นความผิดอาญาอยู่แล้ว
                                แต่ผลของการกระทำนั้นเป็นการคึกคะนอง ส่งผลกระทบในวงกว้างต่อสังคม ก่อให้เกิดความรำคาญความเสียหาย ความหวาดกลัว
                                หรือการสร้างเครือข่าย ขยายผล ซึ่งบ่อนทำลายเศรษฐกิจ สังคม การเมือง หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชน
                            </h5>
                        </div>
                        <div class="col">
                            <img src={empowerman} class="float-end w-75" ></img>
                        </div>
                    </div>
                    <div class="row my-3" style={{backgroundColor:'black'}}>
                        
                        <div class="col" >
                            <img src={criminal} class="float-start w-75" ></img>
                        </div>
                        <div class="col-7 text-white">
                            <p class="display-4 mt-3">
                                ผู้ร้ายสำคัญ
                            </p>
                            <h5 className={stylecustomContentblog.textparagraph} class="text-white" style={{ textIndent: '2rem' }}>
                            ผู้ร้ายสำคัญ หมายถึง ผู้ต้องหาว่ากระทำความผิดร้ายแรงทำให้ประชาชนรู้สึกว่าใจร้าย โหดเหี้ยม หรือเสียหายทางทรัพย์สินจำนวนมาก
                             และก่อเหตุต่อเนื่อง เป็นตัวอันตราย รวมไปถึง ซื้อขาย และสะสม ประดิษฐ์อาวุธต่าง ๆ ที่ทำอันตรายได้ 
                            </h5>
                        </div>
                        
                    </div>

                </div>
            </div>

        )
    }
    else {
        return (
            <div className={stylecustomContentblog.texture2}>
                <div class="container-fluid d-inline-flex ">
                    <h1 class="display-6 text-white align-self-center ms-md-4">ศูนย์ปราบปรามผู้มีอิทธิพล มือปืนรับจ้างและผู้ร้ายสำคัญ
                        CRIMINAL ENTERPRISE AND CRIMES VIOLENCE SUPPRESSION TASK FORCE
                    </h1>
                    <img src={image1} class="float-end h-50"></img>
                </div>
            </div>


        )
    }
}
export default Contentblog