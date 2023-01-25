import React from 'react'

const UpdateCustomer = () => {
  return (
    <>
    <div className="content-body">
    <div className="col-xl-10 col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Update customer</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Localization</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Localization" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Mobile</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Mobile" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Profile picture</label>
            <div className="col-sm-9">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
         
          
          <div className="mb-3 row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

      
    </>
  )
}

export default UpdateCustomer
