import React from "react";

const Documenttable =()=>{
    return(
    <div class="table-responsive-md my-5"> 
    <table class="table table-bordered table-hover text-center" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Document</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>แบบฟอร์มร้องเรียน</td>
      <a href="../แบบฟอร์มร้องเรียน.doc" download>
      <td>ดาวน์โหลดฟอร์ม</td>
      </a>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>แบบฟอร์มแจ้งเบาะแส</td>
      <a href="../แบบฟอร์มร้องเรียน.doc" download>
      <td>ดาวน์โหลดฟอร์ม</td>
      </a>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>แบบฟอร์มยื่นคำร้อง</td>
      <a href="../แบบฟอร์มร้องเรียน.doc" download>
      <td>ดาวน์โหลดฟอร์ม</td>
      </a>
    </tr>
  </tbody>
</table>
  </div>)
}

export default Documenttable