import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProviderService from "../../../service/ProviderService";

const AddProvider = () => {
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
    formData.append("company", Data.company);
    formData.append("mobile", Data.mobile);

    ProviderService.create(formData)
      .then((res) => {
        console.log(res);
        navigate("/provider-list");
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
              <h4 className="card-title">Add provider</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={onChangeHandler}
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={onChangeHandler}
                        name="email"
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
                        onChange={onChangeHandler}
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Company</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company"
                        onChange={onChangeHandler}
                        name="company"
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
                        onChange={onChangeHandler}
                        name="mobile"
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
                        onChange={handleFileChange}
                        name="file"
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

export default AddProvider;
