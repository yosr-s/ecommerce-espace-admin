import React from 'react'

const UpdateGallery = () => {
  return (
    <>
    <div className="content-body">
    <div className="col-xl-10 col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Update gallery</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Photo</label>
            <div className="col-sm-9">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Product</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Product" />
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

export default UpdateGallery
