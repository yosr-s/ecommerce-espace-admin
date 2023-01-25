import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminService from '../../../service/AdminService';

const AddAdmin = () => {
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
  AdminService.create(Data)
  .then((res) => {
    console.log(res)
    navigate("/admin-list")
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
      <h4 className="card-title">Add admin</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input type="text" name="name" onChange={onChangeHandler} className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="email" name="email" onChange={onChangeHandler} className="form-control" placeholder="Email" />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input type="password" name="password" onChange={onChangeHandler} className="form-control" placeholder="Password" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Login</label>
            <div className="col-sm-9">
              <input type="text" onChange={onChangeHandler} name="login" className="form-control" placeholder="Login" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Mobile</label>
            <div className="col-sm-9">
              <input type="text"onChange={onChangeHandler} name="mobile" className="form-control" placeholder="Mobile" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Profile picture</label>
            <div className="col-sm-9">
              <input type="file" onChange={onChangeHandler} name="photo" className="form-control" placeholder="" />
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

export default AddAdmin
