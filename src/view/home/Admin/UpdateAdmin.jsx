import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminService from '../../../service/AdminService';


const UpdateAdmin = () => {
  const { id } = useParams();
  const [Data, setData] = useState({});
  const [file, setFile] = useState({});


  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange=(event) =>{

    setFile(event.target.files[0])

  }

  const onUpdate = (e) => {
    e.preventDefault();
    const formData=new FormData();

    formData.append('file',file);
    formData.append('name',Data.name);
    formData.append('email',Data.email);
    formData.append('password',Data.password);
    formData.append('login',Data.login);
    formData.append('mobile',Data.mobile);
    AdminService.update(id, formData)
      .then((res) => {
        console.log(res);
        navigate("/admin-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return () => {
      AdminService.getOne(id).then((res) => {
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
      <h4 className="card-title">Update admin</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form  onSubmit={onUpdate} method="post">
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input name="name" value={Data.name} onChange={onChangeHandler} type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input name="email" value={Data.email} onChange={onChangeHandler} type="email" className="form-control" placeholder="Email" />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input name="password" value={Data.password} onChange={onChangeHandler} type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Login</label>
            <div className="col-sm-9">
              <input name="login" type="text" value={Data.login} onChange={onChangeHandler} className="form-control" placeholder="Login" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Mobile</label>
            <div className="col-sm-9">
              <input name="mobile" type="text" value={Data.mobile} onChange={onChangeHandler} className="form-control" placeholder="Mobile" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Profile picture</label>
            <div className="col-sm-9">
              <input type="file" onChange={handleFileChange} 
                        name="photo" className="form-control" placeholder="" />
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

export default UpdateAdmin
