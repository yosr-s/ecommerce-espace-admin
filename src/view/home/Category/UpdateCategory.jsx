import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CategoryService from '../../../service/CategoryService';

const UpdateCategory = () => {
  const { id } = useParams();
  const [Data, setData] = useState({});

  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    CategoryService.update(id, Data)
      .then((res) => {
        console.log(res);
        navigate("/category-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return () => {
      CategoryService.getOne(id).then((res) => {
        console.log("data of get by id update ", res.data);
        setData(res.data);
      });
    };
  },[]);

  return (
    <>
    <div className="content-body">
    <div className="col-xl-10 col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Update Category</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form  onSubmit={onUpdate} method="post" >
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input name="name" value={Data.name} onChange={onChangeHandler} type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
          <div class="input-group  ">
			<span class="input-group-text border-0">Description</span>
			<textarea class="form-control" value={Data.description} rows="1" name="description" onChange={onChangeHandler}></textarea>
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

export default UpdateCategory
