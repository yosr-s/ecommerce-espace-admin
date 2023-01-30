import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryService from '../../../service/CategoryService';
const AddCategory = () => {
  const[Data, setData] = useState({});

  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setData({
    ...Data,
    [e.target.name]: e.target.value,
    });
};
const onSubmitHandler = (e) => {
  e.preventDefault();
  CategoryService.create(Data)
  .then((res) => {
    console.log(res)
    navigate("/category-list")
  })
  .catch((err) => {
    console.log(err);
  });
};
  return (
    <>
    <div className="content-body">
    <div className="col-xl-10 col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Add Category</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={onSubmitHandler} method="post">
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input type="text" name="name" onChange={onChangeHandler} className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
          <div class="input-group  ">
			<span class="input-group-text border-0">Description</span>
			<textarea class="form-control" name="description" onChange={onChangeHandler} rows="1"></textarea>
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

export default AddCategory
