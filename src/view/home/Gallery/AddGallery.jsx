import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../../service/ProductService";
import GalleryService from "../../../service/GalleryService";

const AddGallery = () => {
  const [Data, setData] = useState({});
  const [file, setFile] = useState({});
  const navigate = useNavigate();
  const [Products, setProducts] = useState([]);
  const [prod, setProd] = useState("");

  const onChangeHandlerProd = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    console.log(e.target.value)
    setProd(e.target.value);
    console.log('prod',prod)
  };

  const getAll = () => {
    ProductService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
        console.log(Products)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
  }, []);

  const handleFileChange=(event) =>{

    setFile(event.target.files[0])

  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(file)
    Data.product = prod.product;

    const formData=new FormData();

   
   
    formData.append('product',prod);
    formData.append('file',file);

    GalleryService.create(formData)
      .then((res) => {
        console.log(res);
       {/*} navigate("/gallery-list");*/}
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
              <h4 className="card-title">Add gallery</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form  onSubmit={onSubmitHandler} enctype="multipart/form-data">
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Photo</label>
                    <div className="col-sm-9">
                      <input
                     
                       name="url_photo"
                        type="file"
                        onChange={handleFileChange}
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-md-3 col-xs-12 control-label">
                      Product
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <select name="product" onChange={onChangeHandlerProd} >
                        {Products?.map((item)=>{
                          return <option  value={item._id}>{item.ref}</option>
                        })}
                      </select>
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

export default AddGallery;
