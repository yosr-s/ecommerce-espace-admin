import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService';
import ProductService from '../../service/ProductService';

const Dashbord = () => {
  const [Categories, setCategories] = useState();
  const [Subcategories, setSubcategories] = useState();
  const [Products, setProducts] = useState();



  const getAll=()=>{
    CategoryService.getAll()
    .then((res)=>{
        console.log(res.data)
        setCategories(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
};
const getAllProd=()=>{
  ProductService.getAll()
  .then((res)=>{
      console.log(res)
      setProducts(res.data.data)
  })
  .catch((err)=>{
      console.log(err)
  })
};
const getAllSub=()=>{
  CategoryService.getAll()
  .then((res)=>{
      console.log(res.data)
      setSubcategories(res.data)
  })
  .catch((err)=>{
      console.log(err)
  })
};
useEffect(()=>{
  getAll();
  getAllSub();
  getAllProd();
  
 
},[]);

  return (
    <>
   <div className="content-body">
  {/* Modal */}
  <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title">Make Payment</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Seller Mobile Number</label>
            <input type="number" className="form-control mb-3" id="exampleInputEmail1" placeholder="Number" />
            <label className="form-label">product Name</label>
            <input type="email" className="form-control mb-3" id="exampleInputEmail2" placeholder=" Name" />
            <label className="form-label">Amount</label>
            <input type="number" className="form-control mb-3" id="exampleInputEmail3" placeholder="Amount" />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title">Make Payment</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <label className="form-label">Payment method</label>
          <div>
            <select className=" w-100 mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value={1}>Bank Card</option>
              <option value={2}>Online</option>
              <option value={3}>Cash On Time</option>
            </select>
          </div>
          <label className="form-label">Amount</label>
          <input type="email" className="form-control mb-3" id="exampleInputEmail4" placeholder="Rupee" />
          <label className="form-label">Card Holder Name</label>                    
          <input type="email" className="form-control mb-3" id="exampleInputEmail5" placeholder="Amount" />
          <label className="form-label">Card Name</label>                           
          <input type="email" className="form-control mb-3" id="exampleInputEmail6" placeholder="Amount" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title">Enter Debit or Credit card Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <label className="form-label">Card Number</label>
          <input type="number" className="form-control mb-3" id="exampleInputEmail7" placeholder="card no." />
          <label className="form-label">Expiry/Validity</label>                    
          <input type="number" className="form-control mb-3" id="exampleInputEmail8" placeholder="Year/Month" />
          <label className="form-label">CVV</label>                           
          <input type="number" className="form-control mb-3" id="exampleInputEmail9" placeholder={123} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title">Send invoice</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <label className="form-label">Send email to</label>
          <input type="email" className="form-control mb-3" id="exampleInputEmail10" placeholder="Art Vandelay<art@vandelay.com>" />
          <label className="form-label">Subject</label>                    
          <input type="number" className="form-control mb-3" id="exampleInputEmail11" placeholder="invoice Vi-001 from America" />
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  {/* row */}
  <div className="container-fluid pt-0">
    <div className="row">
      <div className="col-xl-12">
        <div className="payment-bx">
          <div className="d-flex  justify-content-between flex-wrap">
            <div className="payment-content">
              <h1 className="font-w500 mb-2">Good morning, Dude </h1>
              <p className="dz-para">Market has been growing in volume at rate of 2.3%</p>
            </div>
            <div className="mb-4 mb-xl-0">
              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Make a payment
              </button>
              <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Withdraw
              </button>
            </div>
          </div>
          
        </div>
        {/*iciiiiiiiiiiiii */}
      <div className="swiper overflow-hidden" id="card-swiper">
  <div className="swiper-wrapper">
    {/*swiper-slide*/}
    <div className="swiper-slide col-md-4">
      <div className="card card-box blue">
        <div className="back-image">
          <svg width={108} height={84} viewBox="0 0 108 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M26.3573 53.0816C-3.53952 45.6892 -21.7583 15.3438 -14.3294 -14.7003C-6.90051 -44.7444 23.3609 -63.1023 53.2577 -55.7099C83.1545 -48.3174 101.373 -17.972 93.9444 12.0721C86.5155 42.1162 56.2541 60.4741 26.3573 53.0816Z" stroke="#01A3FF" />
              <path d="M28.021 46.351C1.8418 39.8777 -14.109 13.2911 -7.59921 -13.036C-1.0894 -39.3632 25.4137 -55.4524 51.5929 -48.9792C77.7722 -42.5059 93.723 -15.9193 87.2132 10.4078C80.7034 36.735 54.2003 52.8242 28.021 46.351Z" stroke="#01A3FF" />
              <path d="M19.6265 51.4174C-6.55274 44.9442 -22.5035 18.3576 -15.9937 -7.96958C-9.48393 -34.2967 17.0191 -50.3859 43.1984 -43.9127C69.3776 -37.4395 85.3284 -10.8529 78.8186 15.4743C72.3088 41.8014 45.8058 57.8906 19.6265 51.4174Z" stroke="#01A3FF" />
              <path d="M10.9723 56.4198C-15.0615 49.9826 -30.8995 23.4265 -24.3891 -2.90312C-17.8787 -29.2328 8.51036 -45.3475 34.5442 -38.9103C60.578 -32.473 76.416 -5.91694 69.9055 20.4127C63.3951 46.7423 37.0061 62.8571 10.9723 56.4198Z" stroke="#01A3FF" />
              <path d="M2.31889 61.4223C-23.8604 54.9491 -39.8112 28.3625 -33.3014 2.0353C-26.7916 -24.2918 -0.288486 -40.3811 25.8908 -33.9078C52.07 -27.4346 68.0208 -0.848004 61.511 25.4792C55.0012 51.8063 28.4981 67.8955 2.31889 61.4223Z" stroke="#01A3FF" />
              <path d="M-6.33532 66.4247C-32.3691 59.9874 -48.2071 33.4313 -41.6967 7.1017C-35.1863 -19.2279 -8.79725 -35.3427 17.2365 -28.9054C43.2704 -22.4682 59.1083 4.08788 52.5979 30.4175C46.0875 56.7472 19.6985 72.8619 -6.33532 66.4247Z" stroke="#01A3FF" />
              <circle cx="-3.26671" cy="24.0209" r="48.8339" transform="rotate(103.889 -3.26671 24.0209)" stroke="#01A3FF" />
            </g>
          </svg>	
        </div>
        <div className="card-body p-4  d-flex align-items-center justify-content-between ">
          <div className="d-flex align-items-center  ">
            <div className="icon-box icon-box-lg bg-primary me-2">
              <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.321289" y="-6.86646e-05" width={24} height={24} rx={10} fill="var(--primary)" />
                <path d="M8.58498 21.7499C8.19648 21.7499 7.81248 21.6007 7.52148 21.3097L3.01173 16.7999C2.42448 16.2134 2.42448 15.2609 3.01173 14.6744C3.59898 14.0871 4.54998 14.0871 5.13723 14.6744L8.76348 18.3006L19.7172 10.7819C20.4012 10.3124 21.3372 10.4864 21.8067 11.1704C22.277 11.8551 22.103 12.7904 21.4182 13.2606L9.43548 21.4859C9.17673 21.6629 8.88048 21.7499 8.58498 21.7499Z" fill="#FCFCFC" />
                <path d="M8.58498 13.4819C8.19648 13.4819 7.81248 13.3327 7.52148 13.0417L3.01173 8.53194C2.42448 7.94469 2.42448 6.99294 3.01173 6.40644C3.59898 5.81919 4.54998 5.81919 5.13723 6.40644L8.76348 10.0327L19.7172 2.51394C20.4012 2.04444 21.3372 2.21844 21.8067 2.90244C22.277 3.58719 22.103 4.52244 21.4182 4.99269L9.43548 13.2187C9.17673 13.3957 8.88048 13.4819 8.58498 13.4819Z" fill="#FCFCFC" />
              </svg>		
            </div>
            <div>
              <h4 className="fs-15 font-w600 mb-0">Total<br />Categories</h4>
            </div>
          </div>	
          <div className="chart-num">
            <h2 className="font-w600 mb-0 fs-28 counter_up" data-number={3932} data-speed={10000}>{Categories?.length}</h2>
          </div>
        </div>	
      </div>
    </div>
    {/*swiper-slide*/}
    {/*swiper-slide*/}
    <div className="swiper-slide col-md-4">
      <div className="card card-box">
        <div className="back-image">
          <svg width={108} height={84} viewBox="0 0 108 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M26.3573 53.0816C-3.53952 45.6892 -21.7583 15.3438 -14.3294 -14.7003C-6.90051 -44.7444 23.3609 -63.1023 53.2577 -55.7099C83.1545 -48.3174 101.373 -17.972 93.9444 12.0721C86.5155 42.1162 56.2541 60.4741 26.3573 53.0816Z" stroke="#01A3FF" />
              <path d="M28.021 46.351C1.8418 39.8777 -14.109 13.2911 -7.59921 -13.036C-1.0894 -39.3632 25.4137 -55.4524 51.5929 -48.9792C77.7722 -42.5059 93.723 -15.9193 87.2132 10.4078C80.7034 36.735 54.2003 52.8242 28.021 46.351Z" stroke="#01A3FF" />
              <path d="M19.6265 51.4174C-6.55274 44.9442 -22.5035 18.3576 -15.9937 -7.96958C-9.48393 -34.2967 17.0191 -50.3859 43.1984 -43.9127C69.3776 -37.4395 85.3284 -10.8529 78.8186 15.4743C72.3088 41.8014 45.8058 57.8906 19.6265 51.4174Z" stroke="#01A3FF" />
              <path d="M10.9723 56.4198C-15.0615 49.9826 -30.8995 23.4265 -24.3891 -2.90312C-17.8787 -29.2328 8.51036 -45.3475 34.5442 -38.9103C60.578 -32.473 76.416 -5.91694 69.9055 20.4127C63.3951 46.7423 37.0061 62.8571 10.9723 56.4198Z" stroke="#01A3FF" />
              <path d="M2.31889 61.4223C-23.8604 54.9491 -39.8112 28.3625 -33.3014 2.0353C-26.7916 -24.2918 -0.288486 -40.3811 25.8908 -33.9078C52.07 -27.4346 68.0208 -0.848004 61.511 25.4792C55.0012 51.8063 28.4981 67.8955 2.31889 61.4223Z" stroke="#01A3FF" />
              <path d="M-6.33532 66.4247C-32.3691 59.9874 -48.2071 33.4313 -41.6967 7.1017C-35.1863 -19.2279 -8.79725 -35.3427 17.2365 -28.9054C43.2704 -22.4682 59.1083 4.08788 52.5979 30.4175C46.0875 56.7472 19.6985 72.8619 -6.33532 66.4247Z" stroke="#01A3FF" />
              <circle cx="-3.26671" cy="24.0209" r="48.8339" transform="rotate(103.889 -3.26671 24.0209)" stroke="#01A3FF" />
            </g>
          </svg>	
        </div>
        <div className="card-body p-4 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <div className="icon-box icon-box-lg bg-success me-2">
              <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21.5C5.225 21.5 0.5 16.775 0.5 11C0.5 5.225 5.225 0.5 11 0.5C16.775 0.5 21.5 5.225 21.5 11C21.5 16.775 16.775 21.5 11 21.5ZM11 2.6875C6.45 2.6875 2.6875 6.45 2.6875 11C2.6875 15.55 6.45 19.3125 11 19.3125C15.55 19.3125 19.3125 15.55 19.3125 11C19.3125 6.45 15.55 2.6875 11 2.6875Z" fill="#FCFCFC" />
                <path d="M9.3373 15.1126C9.0748 15.1126 8.7248 15.0251 8.5498 14.7626L6.3623 12.5751C5.9248 12.1376 5.9248 11.4376 6.3623 11.0001C6.7998 10.5626 7.4998 10.5626 7.9373 11.0001L9.3373 12.4001L14.0623 7.6751C14.4998 7.2376 15.1998 7.2376 15.6373 7.6751C16.0748 8.1126 16.0748 8.8126 15.6373 9.2501L10.1248 14.7626C9.8623 15.0251 9.5998 15.1126 9.3373 15.1126Z" fill="#FCFCFC" />
              </svg>
            </div>
            <div>
              <h4 className="fs-15 font-w600 mb-0">Total<br /> Subcategories</h4>
            </div>
          </div>	
          <div className="chart-num">
            <h2 className="font-w600 mb-0 fs-28 counter_up" data-number={1932} data-speed={10000}>{Subcategories?.length}</h2>
          </div>
        </div>	
      </div>
    </div>
    {/*swiper-slide*/}
    {/*swiper-slide*/}
    <div className="swiper-slide col-md-4">
      <div className="card card-box pink">
        <div className="back-image">
          <svg width={108} height={84} viewBox="0 0 108 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M26.3573 53.0816C-3.53952 45.6892 -21.7583 15.3438 -14.3294 -14.7003C-6.90051 -44.7444 23.3609 -63.1023 53.2577 -55.7099C83.1545 -48.3174 101.373 -17.972 93.9444 12.0721C86.5155 42.1162 56.2541 60.4741 26.3573 53.0816Z" stroke="#01A3FF" />
              <path d="M28.021 46.351C1.8418 39.8777 -14.109 13.2911 -7.59921 -13.036C-1.0894 -39.3632 25.4137 -55.4524 51.5929 -48.9792C77.7722 -42.5059 93.723 -15.9193 87.2132 10.4078C80.7034 36.735 54.2003 52.8242 28.021 46.351Z" stroke="#01A3FF" />
              <path d="M19.6265 51.4174C-6.55274 44.9442 -22.5035 18.3576 -15.9937 -7.96958C-9.48393 -34.2967 17.0191 -50.3859 43.1984 -43.9127C69.3776 -37.4395 85.3284 -10.8529 78.8186 15.4743C72.3088 41.8014 45.8058 57.8906 19.6265 51.4174Z" stroke="#01A3FF" />
              <path d="M10.9723 56.4198C-15.0615 49.9826 -30.8995 23.4265 -24.3891 -2.90312C-17.8787 -29.2328 8.51036 -45.3475 34.5442 -38.9103C60.578 -32.473 76.416 -5.91694 69.9055 20.4127C63.3951 46.7423 37.0061 62.8571 10.9723 56.4198Z" stroke="#01A3FF" />
              <path d="M2.31889 61.4223C-23.8604 54.9491 -39.8112 28.3625 -33.3014 2.0353C-26.7916 -24.2918 -0.288486 -40.3811 25.8908 -33.9078C52.07 -27.4346 68.0208 -0.848004 61.511 25.4792C55.0012 51.8063 28.4981 67.8955 2.31889 61.4223Z" stroke="#01A3FF" />
              <path d="M-6.33532 66.4247C-32.3691 59.9874 -48.2071 33.4313 -41.6967 7.1017C-35.1863 -19.2279 -8.79725 -35.3427 17.2365 -28.9054C43.2704 -22.4682 59.1083 4.08788 52.5979 30.4175C46.0875 56.7472 19.6985 72.8619 -6.33532 66.4247Z" stroke="#01A3FF" />
              <circle cx="-3.26671" cy="24.0209" r="48.8339" transform="rotate(103.889 -3.26671 24.0209)" stroke="#01A3FF" />
            </g>
          </svg>	
        </div>
        <div className="card-body p-4 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <div className="icon-box icon-box-lg bg-pink me-2">
              <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3.5C11.9233 3.5 9.89324 4.11582 8.16652 5.26957C6.43981 6.42333 5.09399 8.06321 4.29927 9.98184C3.50455 11.9005 3.29661 14.0117 3.70176 16.0485C4.10691 18.0853 5.10693 19.9562 6.57539 21.4247C8.04384 22.8931 9.91477 23.8931 11.9516 24.2983C13.9884 24.7034 16.0996 24.4955 18.0182 23.7008C19.9368 22.9061 21.5767 21.5602 22.7305 19.8335C23.8842 18.1068 24.5 16.0767 24.5 14C24.5 12.6211 24.2284 11.2558 23.7008 9.98184C23.1731 8.70791 22.3997 7.5504 21.4247 6.57538C20.4496 5.60037 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5ZM14 22.4C12.3387 22.4 10.7146 21.9074 9.33322 20.9844C7.95185 20.0614 6.8752 18.7495 6.23942 17.2146C5.60364 15.6797 5.4373 13.9907 5.76141 12.3613C6.08553 10.7318 6.88555 9.23507 8.06032 8.06031C9.23508 6.88555 10.7318 6.08552 12.3613 5.76141C13.9907 5.43729 15.6797 5.60364 17.2146 6.23942C18.7495 6.87519 20.0614 7.95185 20.9844 9.33322C21.9074 10.7146 22.4 12.3387 22.4 14C22.4 16.2278 21.515 18.3644 19.9397 19.9397C18.3644 21.515 16.2278 22.4 14 22.4Z" fill="#FCFCFC" />
                <path d="M13.9998 8.75006C13.7214 8.75006 13.4543 8.86069 13.2574 9.0576C13.0605 9.25451 12.9498 9.52158 12.9498 9.80006V15.0501C12.9498 15.3285 13.0605 15.5956 13.2574 15.7925C13.4543 15.9894 13.7214 16.1001 13.9998 16.1001C14.2783 16.1001 14.5454 15.9894 14.7423 15.7925C14.9392 15.5956 15.0498 15.3285 15.0498 15.0501V9.80006C15.0498 9.52158 14.9392 9.25451 14.7423 9.0576C14.5454 8.86069 14.2783 8.75006 13.9998 8.75006ZM14.7453 17.4756L14.5878 17.3391L14.3988 17.2446L14.1993 17.1501C14.0298 17.1176 13.8549 17.1275 13.69 17.1788C13.5252 17.23 13.3755 17.3212 13.2543 17.4441C13.1599 17.5408 13.085 17.6549 13.0338 17.7801C12.9733 17.9116 12.9446 18.0554 12.9498 18.2001C12.951 18.4755 13.0604 18.7395 13.2543 18.9351C13.3561 19.0309 13.4732 19.109 13.6008 19.1661C13.7265 19.2216 13.8624 19.2503 13.9998 19.2503C14.1373 19.2503 14.2732 19.2216 14.3988 19.1661C14.5264 19.109 14.6436 19.0309 14.7453 18.9351C14.9393 18.7395 15.0487 18.4755 15.0498 18.2001C15.0496 18.0593 15.021 17.9201 14.9658 17.7906C14.9124 17.6729 14.8376 17.5661 14.7453 17.4756Z" fill="#FCFCFC" />
              </svg>
            </div>
            <div>
              <h4 className="fs-15 font-w600 mb-0">Total<br />Products</h4>
            </div>
          </div>	
          <div className="chart-num">
            <h2 className="font-w600 mb-0 fs-28 counter_up" data-number={2932} data-speed={10000}>{Products?.length}</h2>
          </div>
        </div>	
      </div>
    </div>
    {/*swiper-slide*/}
    {/*swiper-slide*/}
    <div className="swiper-slide">
      <div className="card card-box secondary">
        <div className="back-image">
          <svg width={108} height={84} viewBox="0 0 108 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M26.3573 53.0816C-3.53952 45.6892 -21.7583 15.3438 -14.3294 -14.7003C-6.90051 -44.7444 23.3609 -63.1023 53.2577 -55.7099C83.1545 -48.3174 101.373 -17.972 93.9444 12.0721C86.5155 42.1162 56.2541 60.4741 26.3573 53.0816Z" stroke="#01A3FF" />
              <path d="M28.021 46.351C1.8418 39.8777 -14.109 13.2911 -7.59921 -13.036C-1.0894 -39.3632 25.4137 -55.4524 51.5929 -48.9792C77.7722 -42.5059 93.723 -15.9193 87.2132 10.4078C80.7034 36.735 54.2003 52.8242 28.021 46.351Z" stroke="#01A3FF" />
              <path d="M19.6265 51.4174C-6.55274 44.9442 -22.5035 18.3576 -15.9937 -7.96958C-9.48393 -34.2967 17.0191 -50.3859 43.1984 -43.9127C69.3776 -37.4395 85.3284 -10.8529 78.8186 15.4743C72.3088 41.8014 45.8058 57.8906 19.6265 51.4174Z" stroke="#01A3FF" />
              <path d="M10.9723 56.4198C-15.0615 49.9826 -30.8995 23.4265 -24.3891 -2.90312C-17.8787 -29.2328 8.51036 -45.3475 34.5442 -38.9103C60.578 -32.473 76.416 -5.91694 69.9055 20.4127C63.3951 46.7423 37.0061 62.8571 10.9723 56.4198Z" stroke="#01A3FF" />
              <path d="M2.31889 61.4223C-23.8604 54.9491 -39.8112 28.3625 -33.3014 2.0353C-26.7916 -24.2918 -0.288486 -40.3811 25.8908 -33.9078C52.07 -27.4346 68.0208 -0.848004 61.511 25.4792C55.0012 51.8063 28.4981 67.8955 2.31889 61.4223Z" stroke="#01A3FF" />
              <path d="M-6.33532 66.4247C-32.3691 59.9874 -48.2071 33.4313 -41.6967 7.1017C-35.1863 -19.2279 -8.79725 -35.3427 17.2365 -28.9054C43.2704 -22.4682 59.1083 4.08788 52.5979 30.4175C46.0875 56.7472 19.6985 72.8619 -6.33532 66.4247Z" stroke="#01A3FF" />
              <circle cx="-3.26671" cy="24.0209" r="48.8339" transform="rotate(103.889 -3.26671 24.0209)" stroke="#01A3FF" />
            </g>
          </svg>	
        </div>
        <div className="card-body p-4 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <div className="icon-box icon-box-lg bg-secondary me-2">
              <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3015 14.3637C22.3015 14.7636 22.2749 15.1635 22.2215 15.5613C22.2338 15.4711 22.2461 15.3788 22.2584 15.2886C22.1518 16.0761 21.9426 16.8472 21.633 17.5793C21.6678 17.4973 21.7027 17.4152 21.7355 17.3353C21.4361 18.0428 21.0464 18.7072 20.5789 19.3163C20.6322 19.2466 20.6855 19.1789 20.7388 19.1092C20.2671 19.7203 19.7175 20.2679 19.1084 20.7396C19.1782 20.6862 19.2459 20.6329 19.3156 20.5796C18.7065 21.0472 18.042 21.4368 17.3345 21.7362C17.4166 21.7014 17.4986 21.6665 17.5786 21.6337C16.8464 21.9413 16.0753 22.1525 15.2878 22.2592C15.3781 22.2469 15.4704 22.2346 15.5606 22.2223C14.7669 22.3269 13.961 22.3269 13.1653 22.2223C13.2555 22.2346 13.3478 22.2469 13.438 22.2592C12.6505 22.1525 11.8794 21.9434 11.1473 21.6337C11.2293 21.6686 11.3114 21.7034 11.3914 21.7362C10.6838 21.4368 10.0194 21.0472 9.4103 20.5796C9.48003 20.6329 9.54771 20.6862 9.61743 20.7396C9.0063 20.2679 8.45874 19.7183 7.98706 19.1092C8.04038 19.1789 8.0937 19.2466 8.14702 19.3163C7.67944 18.7072 7.2898 18.0428 6.99038 17.3353C7.02525 17.4173 7.06011 17.4993 7.09292 17.5793C6.7853 16.8472 6.57407 16.0761 6.46743 15.2886C6.47974 15.3788 6.49204 15.4711 6.50435 15.5613C6.39976 14.7677 6.39976 13.9617 6.50435 13.166C6.49204 13.2563 6.47974 13.3485 6.46743 13.4388C6.57407 12.6513 6.78325 11.8802 7.09292 11.1481C7.05806 11.2301 7.02319 11.3121 6.99038 11.3921C7.2898 10.6846 7.67944 10.0201 8.14702 9.41104C8.0937 9.48077 8.04038 9.54844 7.98706 9.61817C8.45874 9.00704 9.00835 8.45948 9.61743 7.9878C9.54771 8.04112 9.48003 8.09444 9.4103 8.14776C10.0194 7.68018 10.6838 7.29053 11.3914 6.99112C11.3093 7.02598 11.2273 7.06085 11.1473 7.09366C11.8794 6.78604 12.6505 6.57481 13.438 6.46817C13.3478 6.48047 13.2555 6.49278 13.1653 6.50508C13.9589 6.40049 14.7649 6.40049 15.5606 6.50508C15.4704 6.49278 15.3781 6.48047 15.2878 6.46817C16.0753 6.57481 16.8464 6.78399 17.5786 7.09366C17.4965 7.05879 17.4145 7.02393 17.3345 6.99112C18.042 7.29053 18.7065 7.68018 19.3156 8.14776C19.2459 8.09444 19.1782 8.04112 19.1084 7.9878C19.7196 8.45948 20.2671 9.00909 20.7388 9.61817C20.6855 9.54844 20.6322 9.48077 20.5789 9.41104C21.0464 10.0201 21.4361 10.6846 21.7355 11.3921C21.7006 11.3101 21.6658 11.228 21.633 11.1481C21.9406 11.8802 22.1518 12.6513 22.2584 13.4388C22.2461 13.3485 22.2338 13.2563 22.2215 13.166C22.2749 13.5639 22.3015 13.9638 22.3015 14.3637C22.3015 14.6262 22.4164 14.903 22.6009 15.0897C22.7793 15.2681 23.0706 15.4014 23.3269 15.3891C23.5915 15.3768 23.8663 15.2906 24.0529 15.0897C24.2375 14.8887 24.3543 14.6426 24.3523 14.3637C24.3502 13.3383 24.1964 12.2965 23.8786 11.3203C23.5709 10.3729 23.13 9.45821 22.5497 8.6461C22.242 8.21338 21.9078 7.79708 21.5386 7.41563C21.1674 7.03213 20.7634 6.69376 20.3389 6.36973C19.5473 5.7627 18.6634 5.30538 17.7303 4.96085C16.7706 4.60811 15.7431 4.42354 14.7239 4.38253C13.6903 4.34151 12.6321 4.46866 11.6375 4.75167C10.6838 5.02237 9.75278 5.44073 8.92427 5.98624C8.10396 6.52559 7.34722 7.17979 6.72173 7.93653C6.3813 8.35079 6.05933 8.7835 5.78452 9.24288C5.50767 9.7043 5.28413 10.1903 5.07905 10.6887C4.69146 11.6341 4.48023 12.641 4.4023 13.6582C4.32232 14.6898 4.42075 15.748 4.66275 16.7528C4.89859 17.7229 5.29234 18.6724 5.81118 19.5255C6.31978 20.3622 6.95757 21.1415 7.6897 21.7916C8.42798 22.4458 9.25444 23.0098 10.1547 23.4158C10.6469 23.6394 11.1535 23.8362 11.6744 23.9818C12.2076 24.1315 12.7531 24.2218 13.3027 24.2854C14.3424 24.4084 15.4006 24.3387 16.424 24.1315C17.4022 23.9326 18.3599 23.5655 19.2315 23.0795C20.0867 22.6017 20.8844 21.9864 21.5612 21.2769C22.2441 20.5632 22.8347 19.7429 23.2736 18.859C23.7227 17.9566 24.0529 16.9928 24.2046 15.9961C24.2867 15.4526 24.3441 14.9092 24.3441 14.3596C24.3441 14.0971 24.2292 13.8202 24.0447 13.6336C23.8663 13.4552 23.575 13.3219 23.3187 13.3342C23.0541 13.3465 22.7793 13.4326 22.5927 13.6336C22.4184 13.8387 22.3015 14.0848 22.3015 14.3637Z" fill="#FCFCFC" />
                <path d="M14.3652 20.6883C14.6277 20.6883 14.9046 20.5735 15.0912 20.3889C15.2696 20.2105 15.4029 19.9193 15.3906 19.6629C15.3783 19.3984 15.2922 19.1236 15.0912 18.9369C14.8902 18.7524 14.6442 18.6375 14.3652 18.6375C14.1027 18.6375 13.8259 18.7524 13.6393 18.9369C13.4609 19.1154 13.3276 19.4066 13.3399 19.6629C13.3522 19.9275 13.4383 20.2023 13.6393 20.3889C13.8402 20.5735 14.0884 20.6883 14.3652 20.6883ZM12.376 12.0771C12.376 11.9438 12.3842 11.8125 12.4027 11.6792C12.3904 11.7695 12.378 11.8618 12.3657 11.952C12.4027 11.6874 12.4724 11.429 12.5749 11.1829C12.5401 11.265 12.5052 11.347 12.4724 11.427C12.5749 11.187 12.7062 10.9615 12.8641 10.7543C12.8108 10.8241 12.7574 10.8917 12.7041 10.9615C12.8641 10.7564 13.0466 10.5739 13.2517 10.4139C13.182 10.4672 13.1143 10.5205 13.0445 10.5739C13.2517 10.416 13.4773 10.2847 13.7172 10.1822C13.6352 10.217 13.5531 10.2519 13.4732 10.2847C13.7193 10.1822 13.9777 10.1124 14.2422 10.0755C14.152 10.0878 14.0597 10.1001 13.9694 10.1124C14.234 10.0796 14.5006 10.0796 14.7651 10.1124C14.6749 10.1001 14.5826 10.0878 14.4924 10.0755C14.7569 10.1124 15.0153 10.1801 15.2635 10.2826C15.1815 10.2478 15.0994 10.2129 15.0194 10.1801C15.2594 10.2826 15.485 10.4139 15.6921 10.5718C15.6224 10.5185 15.5547 10.4652 15.485 10.4118C15.69 10.5718 15.8726 10.7543 16.0325 10.9594C15.9792 10.8897 15.9259 10.822 15.8726 10.7523C16.0305 10.9594 16.1617 11.185 16.2643 11.4249C16.2294 11.3429 16.1945 11.2609 16.1617 11.1809C16.2643 11.429 16.334 11.6854 16.3689 11.952C16.3565 11.8618 16.3442 11.7695 16.3319 11.6792C16.3648 11.9438 16.3648 12.2104 16.3319 12.4729C16.3442 12.3826 16.3565 12.2904 16.3689 12.2001C16.3319 12.4647 16.2622 12.7231 16.1597 12.9712C16.1945 12.8892 16.2294 12.8072 16.2622 12.7272C16.1597 12.9671 16.0284 13.1927 15.8685 13.4019C15.9218 13.3322 15.9751 13.2645 16.0284 13.1948C15.8685 13.3998 15.6859 13.5824 15.4809 13.7423C15.5506 13.689 15.6183 13.6357 15.688 13.5824C15.4829 13.7382 15.2614 13.8654 15.0276 13.97C14.7282 14.1033 14.4473 14.3124 14.2155 14.5421C13.6782 15.0774 13.3788 15.7972 13.344 16.5519C13.3378 16.7016 13.3419 16.8513 13.3419 17.001C13.3419 17.2635 13.4568 17.5404 13.6413 17.727C13.8197 17.9054 14.111 18.0387 14.3673 18.0264C14.6318 18.0141 14.9067 17.928 15.0933 17.727C15.2778 17.526 15.3927 17.2799 15.3927 17.001C15.3927 16.7918 15.3845 16.5827 15.4111 16.3755C15.3988 16.4658 15.3865 16.558 15.3742 16.6483C15.3988 16.4842 15.4419 16.3263 15.5055 16.1725C15.4706 16.2545 15.4358 16.3366 15.4029 16.4165C15.4706 16.2566 15.5588 16.1089 15.6654 15.9695C15.6121 16.0392 15.5588 16.1069 15.5055 16.1766C15.608 16.0474 15.7249 15.9326 15.8541 15.83C15.7844 15.8833 15.7167 15.9367 15.647 15.99C15.8459 15.8382 16.0694 15.75 16.2889 15.6352C16.5616 15.4916 16.8118 15.303 17.0456 15.104C17.4578 14.7534 17.8064 14.2878 18.0238 13.7915C18.151 13.5003 18.2658 13.2112 18.3232 12.8974C18.3807 12.5816 18.4217 12.2576 18.4053 11.9356C18.3766 11.3121 18.2187 10.7256 17.9315 10.174C17.4209 9.19368 16.457 8.4431 15.3906 8.16829C14.7734 8.01038 14.152 8.00833 13.5285 8.12728C13.2312 8.18265 12.9584 8.29339 12.6795 8.41234C12.4724 8.50052 12.2755 8.60921 12.093 8.74046C11.5721 9.1137 11.1189 9.57718 10.8154 10.1493C10.4995 10.7441 10.3273 11.4024 10.3252 12.0791C10.3232 12.3416 10.4401 12.6185 10.6246 12.8051C10.8031 12.9835 11.0943 13.1168 11.3506 13.1045C11.9084 13.0779 12.3739 12.6534 12.376 12.0771Z" fill="#FCFCFC" />
              </svg>
            </div>
            <div>
              <h4 className="fs-15 font-w600 mb-0">Invoice<br />padding</h4>
            </div>
          </div>	
          <div className="chart-num">
            <h2 className="font-w600 mb-0 fs-28 counter_up" data-number={3932} data-speed={10000}>3.932</h2>
          </div>
        </div>	
      </div>
    </div>
    {/*swiper-slide*/}
  </div>
  <div className="swiper-pagination" />
</div>




        <div className="row">
          <div className="col-xl-8">
            <div className="card crypto-chart h-auto">
              <div className="card-header pb-0 border-0 flex-wrap">
                <div>
                  <div className="chart-title mb-3">
                    <h2 className="heading">Project Statistic</h2>	
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="round weekly" id="dzOldSeries">
                      <div>
                        <input type="checkbox" id="checkbox1" name="radio" defaultValue="weekly" />
                        <label htmlFor="checkbox1" className="checkmark" />
                      </div>
                      <div>
                        <span>This Month</span>
                        <h4 className="mb-0">1.982</h4>
                      </div>
                    </div>
                    <div className="round" id="dzNewSeries">
                      <div>
                        <input type="checkbox" id="checkbox" name="radio" defaultValue="monthly" />
                        <label htmlFor="checkbox" className="checkmark" />
                      </div>
                      <div>
                        <span>This Week</span>
                        <h4 className="mb-0">1.345</h4>
                      </div>	
                    </div>
                  </div>
                </div>
                <div className="p-static">
                  <div className="d-flex align-items-center mb-3 ">
                    <select className="image-select default-select dashboard-select " id="box" aria-label="Default">
                      <option value="month">This Month</option>
                      <option value="week">This Weeks</option>
                      <option value="today">Today</option>
                    </select> 
                    <div className="dropdown custom-dropdown">
                      <div className="btn sharp btn-primary tp-btn " data-bs-toggle="dropdown">
                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                          <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                          <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item active selected" href="javascript:void(0);">Option 1</a>
                        <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                        <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                      </div>
                    </div>
                  </div>
                  <div className="progress-content">
                    <div className="d-flex justify-content-between">
                      <h6>Total</h6>
                      <span className="pull-end">3.982</span>
                    </div>
                    <div className="progress mt-2">
                      <div className="progress-bar bg-primary" style={{width: '80%', height: '100%'}} role="progressbar">
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-2 custome-tooltip pb-0">
                <div id="activity" />
              </div>
            </div>
            <div className="card lastest_trans h-auto">
              <div className="card-header dz-border flex-wrap pb-3">
                <div>
                  <h2 className="heading">Lastest Transaction</h2>
                </div>
                <div className="d-flex align-items-center">
                  <select className="image-select default-select dashboard-select me-2 bg-white" aria-label="Default">
                    <option selected>This Month</option>
                    <option value={1}>This Weeks</option>
                    <option value={2}>Today</option>
                  </select>
                  <div className="dropdown custom-dropdown">
                    <div className="btn sharp btn-primary tp-btn mx-2" data-bs-toggle="dropdown">
                      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                        <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                        <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                      </svg>
                    </div>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                      <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                      <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {/*list*/}
                <div className="table-responsive">
                  <table className="table shadow-hover trans-table border-no dz-border tbl-btn short-one mb-0 ">
                    <tbody>
                      <tr className="trans-td-list">
                        <td>
                          <div className="trans-list">
                            <div className="profile-img">
                              <img src="images/trans/1.jpg" className="avtar" alt />
                            </div>
                            <div className="user-info">
                              <h6 className="font-500 mb-0 ms-3">Portu Studio</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fs-15 font-w500"> $ 650,036.34</span>
                        </td>
                        <td>
                          <span className="font-w400">March 25, 2021</span>
                        </td>
                        <td className="pe-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="icon-box btn-secondary light me-2">
                              <a href="javascript:void(0);">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="#252289" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.7499 20.8538H8.24992C3.27242 20.8538 1.14575 18.7272 1.14575 13.7497V8.24967C1.14575 3.27217 3.27242 1.14551 8.24992 1.14551H13.7499C18.7274 1.14551 20.8541 3.27217 20.8541 8.24967V13.7497C20.8541 18.7272 18.7274 20.8538 13.7499 20.8538ZM8.24992 2.52051C4.02409 2.52051 2.52075 4.02384 2.52075 8.24967V13.7497C2.52075 17.9755 4.02409 19.4788 8.24992 19.4788H13.7499C17.9758 19.4788 19.4791 17.9755 19.4791 13.7497V8.24967C19.4791 4.02384 17.9758 2.52051 13.7499 2.52051H8.24992Z" fill="#252289" />
                                  <path d="M10.9999 13.9879C10.8257 13.9879 10.6516 13.9238 10.5141 13.7863L7.76407 11.0363C7.49824 10.7704 7.49824 10.3304 7.76407 10.0646C8.02991 9.79878 8.4699 9.79878 8.73574 10.0646L10.9999 12.3288L13.2641 10.0646C13.5299 9.79878 13.9699 9.79878 14.2357 10.0646C14.5016 10.3304 14.5016 10.7704 14.2357 11.0363L11.4857 13.7863C11.3482 13.9238 11.1741 13.9879 10.9999 13.9879Z" fill="#252289" />
                                  <path d="M11 13.9886C10.6242 13.9886 10.3125 13.6769 10.3125 13.3011V5.96777C10.3125 5.59194 10.6242 5.28027 11 5.28027C11.3758 5.28027 11.6875 5.59194 11.6875 5.96777V13.3011C11.6875 13.6861 11.3758 13.9886 11 13.9886Z" fill="#252289" />
                                  <path d="M11.0001 16.7107C9.0659 16.7107 7.12257 16.399 5.28007 15.7848C4.92257 15.6657 4.73007 15.2715 4.84924 14.914C4.96841 14.5565 5.3534 14.3548 5.72007 14.4832C9.13007 15.6198 12.8792 15.6198 16.2892 14.4832C16.6467 14.364 17.0409 14.5565 17.1601 14.914C17.2792 15.2715 17.0867 15.6657 16.7292 15.7848C14.8776 16.4082 12.9342 16.7107 11.0001 16.7107Z" fill="#252289" />
                                </svg>
                              </a>
                            </div>
                            <div className="dropdown custom-dropdown">
                              <div className="btn sharp btn-secondary light icon-box  border-0 me-0 " data-bs-toggle="dropdown">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                                  <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                                  <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="trans-td-list">
                        <td>
                          <div className="trans-list">
                            <div className="profile-img">
                              <img src="images/trans/2.jpg" className="avtar" alt />
                            </div>
                            <div className="user-info">
                              <h6 className="font-500 mb-0 ms-3">Akademi Studio</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fs-15 font-w500"> $ 650,036.34</span>
                        </td>
                        <td>
                          <span className="font-w400">March 25, 2021</span>
                        </td>
                        <td className="pe-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="icon-box btn-secondary light me-2">
                              <a href="javascript:void(0);">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="#252289" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.7499 20.8538H8.24992C3.27242 20.8538 1.14575 18.7272 1.14575 13.7497V8.24967C1.14575 3.27217 3.27242 1.14551 8.24992 1.14551H13.7499C18.7274 1.14551 20.8541 3.27217 20.8541 8.24967V13.7497C20.8541 18.7272 18.7274 20.8538 13.7499 20.8538ZM8.24992 2.52051C4.02409 2.52051 2.52075 4.02384 2.52075 8.24967V13.7497C2.52075 17.9755 4.02409 19.4788 8.24992 19.4788H13.7499C17.9758 19.4788 19.4791 17.9755 19.4791 13.7497V8.24967C19.4791 4.02384 17.9758 2.52051 13.7499 2.52051H8.24992Z" fill="#252289" />
                                  <path d="M10.9999 13.9879C10.8257 13.9879 10.6516 13.9238 10.5141 13.7863L7.76407 11.0363C7.49824 10.7704 7.49824 10.3304 7.76407 10.0646C8.02991 9.79878 8.4699 9.79878 8.73574 10.0646L10.9999 12.3288L13.2641 10.0646C13.5299 9.79878 13.9699 9.79878 14.2357 10.0646C14.5016 10.3304 14.5016 10.7704 14.2357 11.0363L11.4857 13.7863C11.3482 13.9238 11.1741 13.9879 10.9999 13.9879Z" fill="#252289" />
                                  <path d="M11 13.9886C10.6242 13.9886 10.3125 13.6769 10.3125 13.3011V5.96777C10.3125 5.59194 10.6242 5.28027 11 5.28027C11.3758 5.28027 11.6875 5.59194 11.6875 5.96777V13.3011C11.6875 13.6861 11.3758 13.9886 11 13.9886Z" fill="#252289" />
                                  <path d="M11.0001 16.7107C9.0659 16.7107 7.12257 16.399 5.28007 15.7848C4.92257 15.6657 4.73007 15.2715 4.84924 14.914C4.96841 14.5565 5.3534 14.3548 5.72007 14.4832C9.13007 15.6198 12.8792 15.6198 16.2892 14.4832C16.6467 14.364 17.0409 14.5565 17.1601 14.914C17.2792 15.2715 17.0867 15.6657 16.7292 15.7848C14.8776 16.4082 12.9342 16.7107 11.0001 16.7107Z" fill="#252289" />
                                </svg>
                              </a>
                            </div>
                            <div className="dropdown custom-dropdown">
                              <div className="btn sharp btn-secondary light icon-box  border-0 me-0 " data-bs-toggle="dropdown">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                                  <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                                  <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="trans-td-list">
                        <td>
                          <div className="trans-list">
                            <div className="profile-img">
                              <img src="images/trans/3.jpg" className="avtar" alt />
                            </div>
                            <div className="user-info">
                              <h6 className="font-500 mb-0 ms-3">Kleon Studio</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fs-15 font-w500"> $ 650,036.34</span>
                        </td>
                        <td>
                          <span className="font-w400">March 25, 2021</span>
                        </td>
                        <td className="pe-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="icon-box btn-secondary light me-2">
                              <a href="javascript:void(0);">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="#252289" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.7499 20.8538H8.24992C3.27242 20.8538 1.14575 18.7272 1.14575 13.7497V8.24967C1.14575 3.27217 3.27242 1.14551 8.24992 1.14551H13.7499C18.7274 1.14551 20.8541 3.27217 20.8541 8.24967V13.7497C20.8541 18.7272 18.7274 20.8538 13.7499 20.8538ZM8.24992 2.52051C4.02409 2.52051 2.52075 4.02384 2.52075 8.24967V13.7497C2.52075 17.9755 4.02409 19.4788 8.24992 19.4788H13.7499C17.9758 19.4788 19.4791 17.9755 19.4791 13.7497V8.24967C19.4791 4.02384 17.9758 2.52051 13.7499 2.52051H8.24992Z" fill="#252289" />
                                  <path d="M10.9999 13.9879C10.8257 13.9879 10.6516 13.9238 10.5141 13.7863L7.76407 11.0363C7.49824 10.7704 7.49824 10.3304 7.76407 10.0646C8.02991 9.79878 8.4699 9.79878 8.73574 10.0646L10.9999 12.3288L13.2641 10.0646C13.5299 9.79878 13.9699 9.79878 14.2357 10.0646C14.5016 10.3304 14.5016 10.7704 14.2357 11.0363L11.4857 13.7863C11.3482 13.9238 11.1741 13.9879 10.9999 13.9879Z" fill="#252289" />
                                  <path d="M11 13.9886C10.6242 13.9886 10.3125 13.6769 10.3125 13.3011V5.96777C10.3125 5.59194 10.6242 5.28027 11 5.28027C11.3758 5.28027 11.6875 5.59194 11.6875 5.96777V13.3011C11.6875 13.6861 11.3758 13.9886 11 13.9886Z" fill="#252289" />
                                  <path d="M11.0001 16.7107C9.0659 16.7107 7.12257 16.399 5.28007 15.7848C4.92257 15.6657 4.73007 15.2715 4.84924 14.914C4.96841 14.5565 5.3534 14.3548 5.72007 14.4832C9.13007 15.6198 12.8792 15.6198 16.2892 14.4832C16.6467 14.364 17.0409 14.5565 17.1601 14.914C17.2792 15.2715 17.0867 15.6657 16.7292 15.7848C14.8776 16.4082 12.9342 16.7107 11.0001 16.7107Z" fill="#252289" />
                                </svg>
                              </a>
                            </div>
                            <div className="dropdown custom-dropdown">
                              <div className="btn sharp btn-secondary light icon-box  border-0 me-0 " data-bs-toggle="dropdown">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                                  <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                                  <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="trans-td-list">
                        <td>
                          <div className="trans-list">
                            <div className="profile-img">
                              <img src="images/trans/4.jpg" className="avtar" alt />
                            </div>
                            <div className="user-info">
                              <h6 className="font-500  mb-0 ms-3">Nextrun Studio</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fs-15 font-w500"> $ 650,036.34</span>
                        </td>
                        <td>
                          <span className="font-w400">March 25, 2021</span>
                        </td>
                        <td className="pe-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="icon-box btn-secondary light me-2">
                              <a href="javascript:void(0);">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="#252289" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.7499 20.8538H8.24992C3.27242 20.8538 1.14575 18.7272 1.14575 13.7497V8.24967C1.14575 3.27217 3.27242 1.14551 8.24992 1.14551H13.7499C18.7274 1.14551 20.8541 3.27217 20.8541 8.24967V13.7497C20.8541 18.7272 18.7274 20.8538 13.7499 20.8538ZM8.24992 2.52051C4.02409 2.52051 2.52075 4.02384 2.52075 8.24967V13.7497C2.52075 17.9755 4.02409 19.4788 8.24992 19.4788H13.7499C17.9758 19.4788 19.4791 17.9755 19.4791 13.7497V8.24967C19.4791 4.02384 17.9758 2.52051 13.7499 2.52051H8.24992Z" fill="#252289" />
                                  <path d="M10.9999 13.9879C10.8257 13.9879 10.6516 13.9238 10.5141 13.7863L7.76407 11.0363C7.49824 10.7704 7.49824 10.3304 7.76407 10.0646C8.02991 9.79878 8.4699 9.79878 8.73574 10.0646L10.9999 12.3288L13.2641 10.0646C13.5299 9.79878 13.9699 9.79878 14.2357 10.0646C14.5016 10.3304 14.5016 10.7704 14.2357 11.0363L11.4857 13.7863C11.3482 13.9238 11.1741 13.9879 10.9999 13.9879Z" fill="#252289" />
                                  <path d="M11 13.9886C10.6242 13.9886 10.3125 13.6769 10.3125 13.3011V5.96777C10.3125 5.59194 10.6242 5.28027 11 5.28027C11.3758 5.28027 11.6875 5.59194 11.6875 5.96777V13.3011C11.6875 13.6861 11.3758 13.9886 11 13.9886Z" fill="#252289" />
                                  <path d="M11.0001 16.7107C9.0659 16.7107 7.12257 16.399 5.28007 15.7848C4.92257 15.6657 4.73007 15.2715 4.84924 14.914C4.96841 14.5565 5.3534 14.3548 5.72007 14.4832C9.13007 15.6198 12.8792 15.6198 16.2892 14.4832C16.6467 14.364 17.0409 14.5565 17.1601 14.914C17.2792 15.2715 17.0867 15.6657 16.7292 15.7848C14.8776 16.4082 12.9342 16.7107 11.0001 16.7107Z" fill="#252289" />
                                </svg>
                              </a>
                            </div>
                            <div className="dropdown custom-dropdown">
                              <div className="btn sharp btn-secondary light icon-box  border-0 me-0 " data-bs-toggle="dropdown">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                                  <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                                  <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="trans-td-list">
                        <td>
                          <div className="trans-list">
                            <div className="profile-img">
                              <img src="images/trans/3.jpg" className="avtar" alt />
                            </div>
                            <div className="user-info">
                              <h6 className="font-w500 mb-0 ms-3">Akademi Studio</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fs-15 font-w500"> $ 650,036.34</span>
                        </td>
                        <td>
                          <span className="font-w400">March 25, 2021</span>
                        </td>
                        <td className="pe-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="icon-box btn-secondary light me-2">
                              <a href="javascript:void(0);">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="#252289" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.7499 20.8538H8.24992C3.27242 20.8538 1.14575 18.7272 1.14575 13.7497V8.24967C1.14575 3.27217 3.27242 1.14551 8.24992 1.14551H13.7499C18.7274 1.14551 20.8541 3.27217 20.8541 8.24967V13.7497C20.8541 18.7272 18.7274 20.8538 13.7499 20.8538ZM8.24992 2.52051C4.02409 2.52051 2.52075 4.02384 2.52075 8.24967V13.7497C2.52075 17.9755 4.02409 19.4788 8.24992 19.4788H13.7499C17.9758 19.4788 19.4791 17.9755 19.4791 13.7497V8.24967C19.4791 4.02384 17.9758 2.52051 13.7499 2.52051H8.24992Z" fill="#252289" />
                                  <path d="M10.9999 13.9879C10.8257 13.9879 10.6516 13.9238 10.5141 13.7863L7.76407 11.0363C7.49824 10.7704 7.49824 10.3304 7.76407 10.0646C8.02991 9.79878 8.4699 9.79878 8.73574 10.0646L10.9999 12.3288L13.2641 10.0646C13.5299 9.79878 13.9699 9.79878 14.2357 10.0646C14.5016 10.3304 14.5016 10.7704 14.2357 11.0363L11.4857 13.7863C11.3482 13.9238 11.1741 13.9879 10.9999 13.9879Z" fill="#252289" />
                                  <path d="M11 13.9886C10.6242 13.9886 10.3125 13.6769 10.3125 13.3011V5.96777C10.3125 5.59194 10.6242 5.28027 11 5.28027C11.3758 5.28027 11.6875 5.59194 11.6875 5.96777V13.3011C11.6875 13.6861 11.3758 13.9886 11 13.9886Z" fill="#252289" />
                                  <path d="M11.0001 16.7107C9.0659 16.7107 7.12257 16.399 5.28007 15.7848C4.92257 15.6657 4.73007 15.2715 4.84924 14.914C4.96841 14.5565 5.3534 14.3548 5.72007 14.4832C9.13007 15.6198 12.8792 15.6198 16.2892 14.4832C16.6467 14.364 17.0409 14.5565 17.1601 14.914C17.2792 15.2715 17.0867 15.6657 16.7292 15.7848C14.8776 16.4082 12.9342 16.7107 11.0001 16.7107Z" fill="#252289" />
                                </svg>
                              </a>
                            </div>
                            <div className="dropdown custom-dropdown">
                              <div className="btn sharp btn-secondary light icon-box  border-0 me-0 " data-bs-toggle="dropdown">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                                  <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                                  <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                                </svg>
                              </div>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                                <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>	
                </div>
              </div>
              <div className="table-pagenation pt-3 mt-0">
                <p>Showing 1-5 from 100 data</p>
                <nav>
                  <ul className="pagination pagination-gutter pagination-primary no-bg me-3">
                    <li className="page-item page-indicator">
                      <a className="page-link" href="javascript:void(0)">
                        <i className="fa-solid fa-angle-left" /></a>
                    </li>
                    <li className="page-item "><a className="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="javascript:void(0)">2</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                    <li className="page-item page-indicator">
                      <a className="page-link" href="javascript:void(0)">
                        <i className="fa-solid fa-angle-right" /></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h4 className="fs-20 font-w600 mb-0">Pie Chart</h4>
                      <div className="dropdown custom-dropdown">
                        <div className="btn sharp btn-primary tp-btn " data-bs-toggle="dropdown">
                          <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.47908 4.58333C8.47908 3.19 9.60659 2.0625 10.9999 2.0625C12.3933 2.0625 13.5208 3.19 13.5208 4.58333C13.5208 5.97667 12.3933 7.10417 10.9999 7.10417C9.60658 7.10417 8.47908 5.97667 8.47908 4.58333ZM12.1458 4.58333C12.1458 3.95083 11.6324 3.4375 10.9999 3.4375C10.3674 3.4375 9.85408 3.95083 9.85408 4.58333C9.85408 5.21583 10.3674 5.72917 10.9999 5.72917C11.6324 5.72917 12.1458 5.21583 12.1458 4.58333Z" fill="#252289" />
                            <path d="M8.47908 17.4163C8.47908 16.023 9.60659 14.8955 10.9999 14.8955C12.3933 14.8955 13.5208 16.023 13.5208 17.4163C13.5208 18.8097 12.3933 19.9372 10.9999 19.9372C9.60658 19.9372 8.47908 18.8097 8.47908 17.4163ZM12.1458 17.4163C12.1458 16.7838 11.6324 16.2705 10.9999 16.2705C10.3674 16.2705 9.85408 16.7838 9.85408 17.4163C9.85408 18.0488 10.3674 18.5622 10.9999 18.5622C11.6324 18.5622 12.1458 18.0488 12.1458 17.4163Z" fill="#252289" />
                            <path d="M8.47908 11.0003C8.47908 9.60699 9.60659 8.47949 10.9999 8.47949C12.3933 8.47949 13.5208 9.60699 13.5208 11.0003C13.5208 12.3937 12.3933 13.5212 10.9999 13.5212C9.60658 13.5212 8.47908 12.3937 8.47908 11.0003ZM12.1458 11.0003C12.1458 10.3678 11.6324 9.85449 10.9999 9.85449C10.3674 9.85449 9.85408 10.3678 9.85408 11.0003C9.85408 11.6328 10.3674 12.1462 10.9999 12.1462C11.6324 12.1462 12.1458 11.6328 12.1458 11.0003Z" fill="#252289" />
                          </svg>
                        </div>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">Option 1</a>
                          <a className="dropdown-item" href="javascript:void(0);">Option 2</a>
                          <a className="dropdown-item" href="javascript:void(0);">Option 3</a>
                        </div>
                      </div>
                    </div>
                    <div id="pieChart1" />
                    <div className="chart-labels">
                      <ul className="d-flex align-items-baseline justify-content-between mt-3">
                        <li>
                          <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={14} height={14} rx={7} fill="#D7D7D7" />
                          </svg><span className="font-w300">Grey</span>
                        </li>
                        <li>
                          <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={14} height={14} rx={7} fill="#9568ff" />
                          </svg>
                          <span className="font-w300">Green</span>
                        </li>
                        <li>
                          <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={14} height={14} rx={7} fill="#2696FD" />
                          </svg>
                          <span className="font-w300">Blue</span>
                        </li>
                        <li>
                          <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={14} height={14} rx={7} fill="#252289" />
                          </svg>
                          <span className="font-w300">Dark</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card bg-primary">
                  <div className="card-body dz-date-picker">
                    <div className="dz-calender">
                      <input type="text" className="form-control d-none" id="datetimepicker" style={{}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>								
          </div>
          <div className="col-xl-4">
            <div className="card h-auto">
              <div className="card-header border-0 pb-1 ">
                <div>
                  <h4 className="mb-0 fs-20 font-w600">Weekly Summary</h4>
                </div>
              </div>
              <div className="card-body pb-0 pt-3 px-3 d-flex align-items-center flex-wrap">
                <div id="pieChart2" />
                <div className="weeklydata">
                  <div className=" d-flex align-items-center mb-2">
                    <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.000488281" width={14} height={14} rx={3} fill="#FF9F00" />
                    </svg>	
                    <h6 className="mb-0 fs-14 font-w400">Income</h6>
                    <span className="text-primary font-w700 ms-auto">30%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.000488281" width={14} height={14} rx={3} fill="#FD5353" />
                    </svg>												
                    <h6 className="mb-0 fs-14 font-w400">Expense</h6>	
                    <span className="text-primary font-w700 ms-auto">46%</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.000488281" width={14} height={14} rx={3} fill="#d5dfe7" />
                    </svg>	
                    <h6 className="mb-0 fs-14 font-w400">Unknown</h6>	
                    <span className="text-primary font-w700 ms-auto">10%</span>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0 pb-0 px-3">
                <div id="columnChart1" className="chartjs" />
              </div>
            </div>	
            <div className="card h-auto">
              <div className="card-body">
                <h4 className="fs-20 mb-0 mt-0">Invoices Sent</h4>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <div id="radialchart" />
                <h5 className="mb-0 fs-18 font-w500 text-center">On Progress <span className="text-primary fs-18 font-w500s">70%</span></h5>
              </div>
            </div>
            <div className="card contacts h-auto">
              <div className="card-header border-0 pb-0">
                <div>
                  <h2 className="heading mb-0">Invoices Sent</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="card-body loadmore-content  recent-activity-wrapper py-0 dz-scroll" id="RecentActivityContent">
                {/*student*/}
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic1.jpg" className=" avtar avtar-lg" alt />
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Dedi Cahyadi</a></h6>
                    <span className="fs-14 font-w400 text-wrap">Head Manager</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$776</span>											
                </div>
                {/*/student*/}
                {/*student*/}
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic2.jpg" className=" avtar avtar-lg" alt />	
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Evans John</a></h6>
                    <span className=" text-wrap text-break">Programmer</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$777</span>		
                </div>
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic1.jpg" className=" avtar avtar-lg" alt />
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Dedi Cahyadi</a></h6>
                    <span className="fs-14 font-w400 text-wrap">Head Manager</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$778</span>											
                </div>
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic2.jpg" className=" avtar avtar-lg" alt />	
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Evans John</a></h6>
                    <span className=" text-wrap text-break">Programmer</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$779</span>		
                </div>
                {/*/student*/}
                {/*student*/}
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic3.jpg" className="avtar avtar-lg" alt />	
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Brian Brandon</a></h6>
                    <span>Graphic Designer</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$776</span>
                </div>
                {/*/student*/}
                {/*student*/}
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic4.jpg" className="avtar avtar-lg" alt />	
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Bella Brownlee</a></h6>
                    <span className=" text-wrap">Software Engineer</span>
                  </div>	
                  <span className="text-primary ms-auto invoice-price">$710</span>
                </div>
                {/*/student*/}
                {/*student*/}
                <div className="d-flex align-items-center student">
                  <span className="dz-media">
                    <img src="images/invoice-send-img/pic2.jpg" className="avtar avtar-lg" alt />	
                  </span>
                  <div className="user-info">
                    <h6 className="name"><a href="app-profile.html">Evans John</a></h6>
                    <span className=" text-wrap">Programmer</span>
                  </div>
                  <span className="text-primary ms-auto invoice-price">$711</span>
                </div>
                {/*/student*/}
              </div>
              <div className="card-footer border-0 pt-3 px-3 px-sm-4">
                <a href="contact.html" className="btn btn-block btn-primary  dz-load-more" id="RecentActivity" rel="ajax/recentactivity.html">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Dashbord
