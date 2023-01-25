import React from 'react'

const AddProduct = () => {
  return (
    <>
    <div className="content-body">
    <div className="col-xl-10 col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Add product</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Ref</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Reference" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Price</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Price" />
            </div>
        </div>
        <div className="mb-3 row">
          <div class="input-group  ">
			<span class="input-group-text border-0">Description</span>
			<textarea class="form-control" rows="1"></textarea>
         </div>
         </div>

        
         
         
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Photo</label>
            <div className="col-sm-9">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
         
          
          <div className="mb-3 row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Ajouter</button>
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

export default AddProduct
