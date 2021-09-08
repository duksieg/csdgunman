
import React from 'react'
import tempic from '../images/backfree500.png'


const User = ({ name, idcard, courtname, charge, caseid, casestation }) => {

    return (
        <div class="col-3 col-md-2 col-lg-3"  >
            <div className="d-flex mt-2">
                <div class="card bg-transparent mx-md-3 my-md-2 mx-lg-4 my-lg-2"  >
                    <img class="card-img-top" src={tempic} />
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <button type="button" class=" btn bg-transparent" data-toggle="modal" data-target="#exampleModalCenter" >
                                <p class="card-text stretched-link" style={{ fontSize: '16px' }, { fontSize: '2vmin' }, { color: '#ffffff' }}>{name}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        </div>
    )

}

export default User