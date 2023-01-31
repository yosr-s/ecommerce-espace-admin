import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SubCategoryService from '../../../service/SubCategoryService';

const SubcategoryList = () => {
  const [Subcategories, setSubCategories] = useState();
  const getAll=()=>{
      SubCategoryService.getAll()
      .then((res)=>{
          console.log(res)
          setSubCategories(res.data.data)
      })
      .catch((err)=>{
          console.log(err)
      })
  };
  useEffect(()=>{
      getAll()
  },[]);
  const onDelete = (id) => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              SubCategoryService.deleteOne(id).then((res)=>{
                  getAll();
              });
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
   
  }
  return (
    <>
    <div className="content-body">
    <div className="col-lg-10">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Subcategory list</h4>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
          <thead>
            <tr>
            <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {Subcategories?.map((item,index)=>{
              return(
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.category.name}</td> 
              <td><span class="d-flex justify-content-end">
                     <Link to={`/update-subcategory/${item._id}`} class="me-2 btn btn-primary shadow btn-xs sharp" data-bs-toggle="tooltip"
                    data-placement="top" title="Edit"><i class="fas fa-pencil-alt"></i> </Link>
                     <a href="javascript:void(0);" onClick={(e)=> onDelete(item._id)} class="btn btn-danger shadow btn-xs sharp" data-bs-toggle="tooltip"
                    data-placement="top" title="btn-close"><i class="fas fa-times text-white"></i></a>
                    </span>
             </td>
            </tr>
             )})} 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

 
</div>

      
    </>
  )
}

export default SubcategoryList
