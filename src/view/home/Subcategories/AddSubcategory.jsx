import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryService from '../../../service/CategoryService';
import SubCategoryService from '../../../service/SubCategoryService';

const AddSubcategory = () => {
  const [Categories, setCategories] = useState();
  const[Data, setData] = useState({});
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setData({
    ...Data,
    [e.target.name]: e.target.value,
    });
};
const getAll=()=>{
  CategoryService.getAll()
    .then((res)=>{
        console.log(res.data)
        setCategories(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
};
useEffect(()=>{
  getAll()
},[]);
const onSubmitHandler = (e) => {
  e.preventDefault();
  SubCategoryService.create(Data)
  .then((res) => {
    console.log(res)
    navigate("/subcategory-list")
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
      <h4 className="card-title">Add Subcategory</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={onSubmitHandler} method="post">
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input name="name" onChange={onChangeHandler} type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
          <div class="input-group  ">
			<span class="input-group-text border-0">Description</span>
			<textarea name="description" onChange={onChangeHandler} class="form-control" rows="1"></textarea>
         </div>
         </div>
         <div className="mb-3 row">
         <label className="col-md-3 col-xs-12 control-label">Category</label>
                <div className="col-md-6 col-xs-12"> 
                <select name="category" onChange={onChangeHandler} id="">
                  {Categories?.map((item)=>{return <option> {item._id}</option>})}
                  </select>                                           
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

export default AddSubcategory
