import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../../service/ProductService";
import CategoryService from "../../../service/CategoryService";
import SubCategoryService from "../../../service/SubCategoryService";
import ProviderService from "../../../service/ProviderService";

const AddProduct = () => {
  const [Data, setData] = useState({});
  const [files, setFile] = useState({});
  const [Categories, setCategories] = useState();
  const [cat, setCat] = useState({});
  {/*const [Subcategories, setSubcategories] = useState();
const [sub,setSub]=useState({});*/}
 



  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeHandlerCat = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setCat({[e.target.name]: {_id:e.target.value},});
  };
 {/* const onChangeHandlerSub = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setSub({[e.target.name]: {_id:e.target.value},});
  };*/}
  const getAll = () => {
    CategoryService.getAll()
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 {/* const getAllSub = () => {
    SubCategoryService.getAll()
      .then((res) => {
        console.log(res.data);
        setSubcategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };*/}
  useEffect(() => {
    getAll();
   {/* getAllSub();*/}
  }, []);
 

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

 
 
  const onSubmitHandler = (e) => {
    e.preventDefault();



    console.log(files);
    const formData = new FormData();
    for(let i=0;i<files.length;i++){
      formData.append(`files-${i}`, files[i]);
    }
   {/* files.forEach((files, i) => {
      FormData.append(`files-${i}`, files);
    });*/}

    Data.category = cat.category;
    formData.append("category", Data.category);
   {/* Data.subcategory = sub.subcategory;
  formData.append("subcategory", Data.subcategory);*/}


    formData.append("ref", Data.ref);
    formData.append("price", Data.price);
    formData.append("qte", Data.qte);
    formData.append("description", Data.description);
  

    ProductService.create(formData)
      .then((res) => {
        console.log(res);
        navigate("/product-list");
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
              <h4 className="card-title">Add product</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Ref</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Reference"
                        name="ref"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Quantity</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Qte"
                        name="qte"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Price</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        name="price"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div class="input-group  ">
                      <span class="input-group-text border-0">Description</span>
                      <textarea name="description" onChange={onChangeHandler}  class="form-control" rows="1"></textarea>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-md-3 col-xs-12 control-label">
                      Category
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <select name="category" onChange={onChangeHandlerCat} >
                        {Categories?.map((item) => {
                          return <option  value={item._id}> {item.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                {/*  <div className="mb-3 row">
                    <label className="col-md-3 col-xs-12 control-label">
                      Subcategory
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <select name="subcategory" onChange={onChangeHandlerSub} >
                        {Subcategories?.map((item) => {
                          return <option  value={item._id}> {item.name}</option>;
                        })}
                      </select>
                    </div>
                      </div> */}
                 
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Photo</label>
                    <div className="col-sm-9">
                      <input
                        type="file"
                        className="form-control"
                        placeholder=""
                        name="files"
                        onChange={handleFileChange}
                        multiple
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

export default AddProduct;
