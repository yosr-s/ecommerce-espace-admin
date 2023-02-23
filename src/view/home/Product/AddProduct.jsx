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
  const [cat, setCat] = useState("");
  const [Subcategories, setSubcategories] = useState([]);
const [sub,setSub]=useState("");
const [Providers, setProviders] = useState([]);
const [Prov,setProv]=useState("");
 



  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
 {/*} const onChangeHandlerCat = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setCat(e.target.value);
    console.log(e.target.value);
    console.log('cat:',cat)
  };*/}
  const onChangeHandlerCat = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setCat(e.target.value);
    console.log('cat:',cat)
  };

  const onChangeHandlerSub = (e) => {


    console.log({[e.target.name]: e.target.value,})

    console.log(e.target.value)
    setSub(e.target.value);
    console.log('sub:',sub)
  };
  const onChangeHandlerProv = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setProv(e.target.value);
    console.log(e.target.value._id)
    console.log('prov:',Prov)
  };
  const getAll = () => {
    CategoryService.getAll()
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
        console.log(Categories)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllSub = () => {
    SubCategoryService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setSubcategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllProv = () => {
    ProviderService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setProviders(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
    getAllSub();
    getAllProv();
  }, []);
 

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

 
 
  const onSubmitHandler = (e) => {
    e.preventDefault();



    console.log(files);
    const formData = new FormData();

    for(let i=0;i<files.length;i++){
      formData.append(`files`, files[i]);
    }
  
    

   formData.append('category',cat)
   
  formData.append("subcategory", sub);
  formData.append("provider",Prov)


    formData.append("ref", Data.ref);
    formData.append("price", Data.price);
    formData.append("qte", Data.qte);
    formData.append("description", Data.description);
    formData.append("name",Data.name);
  

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
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
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
                  <div className="mb-3 row">
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
                  </div> 
                  <div className="mb-3 row">
                    <label className="col-md-3 col-xs-12 control-label">
                      Provider
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <select name="provider" onChange={onChangeHandlerProv} >
                        {Providers?.map((item) => {
                          return <option  value={item._id}> {item.company}</option>;
                        })}
                      </select>
                    </div>
                      </div> 
                 
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
