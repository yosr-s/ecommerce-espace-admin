import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomerService from '../../../service/CustomerService'

const CustomerList = () => {
  const [Customers, setCustomer] = useState();
  const getAll=()=>{
    CustomerService.getAll()
    .then((res)=>{
        console.log(res)
        setCustomer(res.data.data)
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
          CustomerService.deleteOne(id).then((res)=>{
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
      <h4 className="card-title">Customers list</h4>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Localization</th>
              <th scope="col">Orders</th>
              <th scope="col">Profile picture</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {Customers?.map((item,index)=>{
               return(
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.localization}</td>
              <td>  <td>{item.orders?.map((i)=>{
                return <tr>{i.contenu}</tr>
               })}</td></td>
              <td> <> <img style={{width:"100px"}} src={"http://localhost:3000/file/"+item.photo}></img></></td>
              <td><span class="d-flex justify-content-end">
                     <Link to={`/update-customer/${item._id}`} class="me-2 btn btn-primary shadow btn-xs sharp" data-bs-toggle="tooltip"
                    data-placement="top" title="Edit"><i class="fas fa-pencil-alt"></i> </Link>
                     <a href="javascript:void(0);" onClick={(e)=> onDelete(item._id)} class="btn btn-danger shadow btn-xs sharp" data-bs-toggle="tooltip"
                    data-placement="top" title="btn-close"><i class="fas fa-times text-white"></i></a>
                    </span>
             </td>
            </tr>
             )
            })}  
           
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

export default CustomerList
