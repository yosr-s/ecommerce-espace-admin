import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../../service/CustomerService";

const AddCustomer = () => {
  const [Data, setData] = useState({});
  const [file, setFile] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(file);
    const formData = new FormData();

    formData.append("file", file);
    formData.append("name", Data.name);
    formData.append("email", Data.email);
    formData.append("password", Data.password);
    formData.append("localization", Data.localization);
    formData.append("mobile", Data.mobile);

    CustomerService.create(formData)
      .then((res) => {
        console.log(res);
        navigate("/customer-list");
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
              <h4 className="card-title">Add customer</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                      <input
                        onChange={onChangeHandler}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input
                        name="email"
                        onChange={onChangeHandler}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">
                      Localization
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Localization"
                        name="localization"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Mobile</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        name="mobile"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">
                      Profile picture
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="file"
                        className="form-control"
                        placeholder=""
                        name="photo"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
