import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="deznav">
      <div className="deznav-scroll">	
        <ul className="metismenu" id="menu">
          <li><Link to="/" className=" " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-home" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3077 20.8538H5.69266C3.181 20.8538 1.146 18.8097 1.146 16.298V9.50548C1.146 8.25882 1.916 6.69132 2.906 5.92132L7.84683 2.07132C9.33183 0.916317 11.706 0.861317 13.246 1.94298L18.911 5.91215C20.0018 6.67298 20.8543 8.30465 20.8543 9.63382V16.3072C20.8543 18.8097 18.8193 20.8538 16.3077 20.8538ZM8.69016 3.15298L3.74933 7.00298C3.0985 7.51632 2.521 8.68048 2.521 9.50548V16.298C2.521 18.0488 3.94183 19.4788 5.69266 19.4788H16.3077C18.0585 19.4788 19.4793 18.058 19.4793 16.3072V9.63382C19.4793 8.75382 18.8468 7.53465 18.1227 7.03965L12.4577 3.07048C11.4127 2.33715 9.68933 2.37382 8.69016 3.15298Z" fill="#9C99FF" />
                  <path d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V13.75C10.3125 13.3742 10.6242 13.0625 11 13.0625C11.3758 13.0625 11.6875 13.3742 11.6875 13.75V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z" fill="#9C99FF" />
                </svg>
              </div>

             <span className="nav-text">Dashboard</span>
            </Link>
           
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-home1" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7502 20.8538H8.25016C3.27266 20.8538 1.146 18.7272 1.146 13.7497V8.24967C1.146 3.27217 3.27266 1.14551 8.25016 1.14551H13.7502C18.7277 1.14551 20.8543 3.27217 20.8543 8.24967V13.7497C20.8543 18.7272 18.7277 20.8538 13.7502 20.8538ZM8.25016 2.52051C4.02433 2.52051 2.521 4.02384 2.521 8.24967V13.7497C2.521 17.9755 4.02433 19.4788 8.25016 19.4788H13.7502C17.976 19.4788 19.4793 17.9755 19.4793 13.7497V8.24967C19.4793 4.02384 17.976 2.52051 13.7502 2.52051H8.25016Z" fill="#9C99FF" />
                  <path d="M14.2817 17.6463C13.9059 17.6463 13.5942 17.3346 13.5942 16.9588V13.3838C13.5942 13.008 13.9059 12.6963 14.2817 12.6963C14.6576 12.6963 14.9692 13.008 14.9692 13.3838V16.9588C14.9692 17.3346 14.6576 17.6463 14.2817 17.6463Z" fill="#9C99FF" />
                  <path d="M14.2817 7.51699C13.9059 7.51699 13.5942 7.20533 13.5942 6.82949V5.04199C13.5942 4.66616 13.9059 4.35449 14.2817 4.35449C14.6576 4.35449 14.9692 4.66616 14.9692 5.04199V6.82949C14.9692 7.20533 14.6576 7.51699 14.2817 7.51699Z" fill="#9C99FF" />
                  <path d="M14.2818 12.2833C12.5859 12.2833 11.2109 10.9083 11.2109 9.21244C11.2109 7.5166 12.5859 6.1416 14.2818 6.1416C15.9776 6.1416 17.3526 7.5166 17.3526 9.21244C17.3526 10.9083 15.9684 12.2833 14.2818 12.2833ZM14.2818 7.5166C13.3468 7.5166 12.5859 8.27744 12.5859 9.21244C12.5859 10.1474 13.3468 10.9083 14.2818 10.9083C15.2168 10.9083 15.9776 10.1474 15.9776 9.21244C15.9776 8.27744 15.2076 7.5166 14.2818 7.5166Z" fill="#9C99FF" />
                  <path d="M7.71826 17.6459C7.34243 17.6459 7.03076 17.3342 7.03076 16.9584V15.1709C7.03076 14.7951 7.34243 14.4834 7.71826 14.4834C8.0941 14.4834 8.40576 14.7951 8.40576 15.1709V16.9584C8.40576 17.3342 8.10326 17.6459 7.71826 17.6459Z" fill="#9C99FF" />
                  <path d="M7.71826 9.30449C7.34243 9.30449 7.03076 8.99283 7.03076 8.61699V5.04199C7.03076 4.66616 7.34243 4.35449 7.71826 4.35449C8.0941 4.35449 8.40576 4.66616 8.40576 5.04199V8.61699C8.40576 8.99283 8.10326 9.30449 7.71826 9.30449Z" fill="#9C99FF" />
                  <path d="M7.71829 15.8585C6.02246 15.8585 4.64746 14.4835 4.64746 12.7876C4.64746 11.0918 6.02246 9.7168 7.71829 9.7168C9.41413 9.7168 10.7891 11.0918 10.7891 12.7876C10.7891 14.4835 9.41413 15.8585 7.71829 15.8585ZM7.71829 11.0918C6.78329 11.0918 6.02246 11.8526 6.02246 12.7876C6.02246 13.7226 6.78329 14.4835 7.71829 14.4835C8.65329 14.4835 9.41413 13.7226 9.41413 12.7876C9.41413 11.8526 8.66246 11.0918 7.71829 11.0918Z" fill="#9C99FF" />
                </svg>
              </div>
              <span className="nav-text">Admins</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-admin">Add</Link></li>
              <li><Link to="/admin-list">List</Link></li>	
             
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" id="cms-icon" className="cms-svg" viewBox="0 0 60 60" width={22} height={22}><path d="M30,10A20,20,0,1,0,50,30,20.023,20.023,0,0,0,30,10Zm0,38A18,18,0,1,1,48,30,18.021,18.021,0,0,1,30,48Z" /><path d="M59.849,27.168a2.8,2.8,0,0,0-2.336-2.415l-3.183-.521a24.733,24.733,0,0,0-3.052-7.351l1.88-2.626A2.8,2.8,0,0,0,53.1,10.88a24.812,24.812,0,0,0-1.9-2.086A28.1,28.1,0,0,0,49.1,6.878a2.782,2.782,0,0,0-3.351-.039L43.119,8.722A24.733,24.733,0,0,0,35.768,5.67l-.521-3.182A2.8,2.8,0,0,0,32.819.149a26.3,26.3,0,0,0-5.651,0,2.8,2.8,0,0,0-2.415,2.336L24.232,5.67a24.733,24.733,0,0,0-7.351,3.052l-2.626-1.88a2.789,2.789,0,0,0-3.374.053A27.541,27.541,0,0,0,8.805,8.783a24.827,24.827,0,0,0-1.918,2.108,2.793,2.793,0,0,0-.048,3.36l1.883,2.63A24.733,24.733,0,0,0,5.67,24.232l-3.182.521A2.8,2.8,0,0,0,.149,27.181a26.715,26.715,0,0,0,0,5.654,2.8,2.8,0,0,0,2.336,2.412l3.183.521a24.733,24.733,0,0,0,3.052,7.351L6.851,45.734A2.8,2.8,0,0,0,6.9,49.12c.561.687,1.2,1.389,1.9,2.086A25.306,25.306,0,0,0,10.9,53.122a2.756,2.756,0,0,0,3.351.039l2.629-1.883a24.733,24.733,0,0,0,7.351,3.052l.521,3.182a2.8,2.8,0,0,0,2.428,2.339,26.687,26.687,0,0,0,5.651,0,2.8,2.8,0,0,0,2.415-2.336l.521-3.183a24.733,24.733,0,0,0,7.351-3.052l2.626,1.88a2.765,2.765,0,0,0,3.387-.063,25.238,25.238,0,0,0,2.074-1.888q1.047-1.047,1.916-2.108a2.789,2.789,0,0,0,.039-3.35l-1.883-2.63a24.733,24.733,0,0,0,3.052-7.351l3.182-.521a2.8,2.8,0,0,0,2.339-2.428,26.741,26.741,0,0,0,0-5.638ZM57.862,32.6a.81.81,0,0,1-.674.669l-3.85.631a1,1,0,0,0-.817.785A22.766,22.766,0,0,1,49.236,42.6a1,1,0,0,0,.023,1.13l2.287,3.2a.791.791,0,0,1,.01.926,25.934,25.934,0,0,1-1.765,1.938,23.493,23.493,0,0,1-1.915,1.746.789.789,0,0,1-.964,0l-3.179-2.275a1,1,0,0,0-1.13-.023,22.766,22.766,0,0,1-7.915,3.285,1,1,0,0,0-.785.817l-.631,3.851a.782.782,0,0,1-.654.671,24.514,24.514,0,0,1-5.223,0,.786.786,0,0,1-.667-.674l-.631-3.85a1,1,0,0,0-.785-.817A22.766,22.766,0,0,1,17.4,49.236a1,1,0,0,0-1.13.023l-3.182,2.278a.782.782,0,0,1-.928.028,22.89,22.89,0,0,1-1.949-1.774,25.814,25.814,0,0,1-1.746-1.915.8.8,0,0,1,0-.963l2.275-3.18a1,1,0,0,0,.023-1.13,22.766,22.766,0,0,1-3.285-7.915,1,1,0,0,0-.817-.785l-3.851-.631a.806.806,0,0,1-.671-.654,24.6,24.6,0,0,1,0-5.223.786.786,0,0,1,.674-.667l3.85-.631a1,1,0,0,0,.817-.785A22.766,22.766,0,0,1,10.764,17.4a1,1,0,0,0-.023-1.13L8.463,13.083a.8.8,0,0,1-.019-.937,22.471,22.471,0,0,1,1.765-1.938,25.613,25.613,0,0,1,1.915-1.746.8.8,0,0,1,.964,0l3.179,2.275a1,1,0,0,0,1.13.023,22.766,22.766,0,0,1,7.915-3.285,1,1,0,0,0,.785-.817l.631-3.851a.782.782,0,0,1,.654-.671,24.514,24.514,0,0,1,5.223,0,.786.786,0,0,1,.667.674l.631,3.85a1,1,0,0,0,.785.817A22.766,22.766,0,0,1,42.6,10.764a1,1,0,0,0,1.13-.023l3.182-2.278a.794.794,0,0,1,.94-.018A25.975,25.975,0,0,1,49.8,10.219a22.447,22.447,0,0,1,1.744,1.916.8.8,0,0,1-.013.952l-2.275,3.18a1,1,0,0,0-.023,1.13,22.766,22.766,0,0,1,3.285,7.915,1,1,0,0,0,.817.785l3.851.631a.786.786,0,0,1,.672.661,24.605,24.605,0,0,1,0,5.214Z" /><path d="M20,25a2,2,0,0,1,2,2,1,1,0,0,0,2,0,4,4,0,0,0-8,0v6a4,4,0,0,0,8,0,1,1,0,0,0-2,0,2,2,0,0,1-4,0V27A2,2,0,0,1,20,25Z" /><path d="M33.179,23.016a1,1,0,0,0-1.116.632L30,29.152l-2.063-5.5A1,1,0,0,0,26,24V36a1,1,0,0,0,2,0V29.515l1.063,2.837a1,1,0,0,0,1.874,0L32,29.515V36a1,1,0,0,0,2,0V24A1,1,0,0,0,33.179,23.016Z" /><path d="M36,27a4,4,0,0,0,4,4,2,2,0,1,1-2,2,1,1,0,0,0-2,0,4,4,0,1,0,4-4,2,2,0,1,1,2-2,1,1,0,0,0,2,0,4,4,0,0,0-8,0Z" /></svg>
              </div>
              <span className="nav-text">Customers</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-customer">Add</Link></li>
              <li><Link to="/customer-list">List</Link></li>
         
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-apps" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 12.1921C10.8808 12.1921 10.7617 12.1646 10.6517 12.1004L2.5575 7.41627C2.23666 7.22377 2.1175 6.8021 2.31 6.4721C2.5025 6.1421 2.92416 6.03211 3.25416 6.22461L11 10.7071L18.7 6.25211C19.03 6.05961 19.4517 6.17877 19.6442 6.49961C19.8367 6.82961 19.7175 7.25127 19.3967 7.44377L11.3575 12.1004C11.2383 12.1554 11.1192 12.1921 11 12.1921Z" fill="#9C99FF" />
                  <path d="M11 20.4968C10.6242 20.4968 10.3125 20.1851 10.3125 19.8093V11.4951C10.3125 11.1193 10.6242 10.8076 11 10.8076C11.3758 10.8076 11.6875 11.1193 11.6875 11.4951V19.8093C11.6875 20.1851 11.3758 20.4968 11 20.4968Z" fill="#9C99FF" />
                  <path d="M11.0001 20.8538C10.1934 20.8538 9.39592 20.6797 8.76342 20.3313L3.86842 17.6088C2.53925 16.8755 1.50342 15.1063 1.50342 13.5847V8.40551C1.50342 6.88384 2.53925 5.12384 3.86842 4.38134L8.76342 1.66801C10.0193 0.971341 11.9809 0.971341 13.2368 1.66801L18.1318 4.39051C19.4609 5.12384 20.4968 6.89301 20.4968 8.41467V13.5938C20.4968 15.1155 19.4609 16.8755 18.1318 17.618L13.2368 20.3313C12.6043 20.6797 11.8068 20.8538 11.0001 20.8538ZM11.0001 2.52051C10.4226 2.52051 9.85425 2.63967 9.43258 2.86884L4.53758 5.59134C3.65758 6.07717 2.87842 7.39717 2.87842 8.40551V13.5847C2.87842 14.593 3.65758 15.913 4.53758 16.408L9.43258 19.1305C10.2668 19.598 11.7334 19.598 12.5676 19.1305L17.4626 16.408C18.3426 15.913 19.1218 14.6022 19.1218 13.5847V8.40551C19.1218 7.39717 18.3426 6.07717 17.4626 5.58217L12.5676 2.85967C12.1459 2.63967 11.5776 2.52051 11.0001 2.52051Z" fill="#9C99FF" />
                </svg>
              </div>
              <span className="nav-text">Providers</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-provider">Add</Link></li>
              <li><Link to="/provider-list">List</Link></li>
             
              
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={22} height={22} strokeWidth={3}><g id="_17_Pie_Chart" data-name="17 Pie Chart"><path d="M4.648,44.321C-3.759,25.663,9.471,3.466,29.933,2.083A1.017,1.017,0,0,1,31,3.08V29.8a1,1,0,0,1-.5.866L6.06,44.776A1.016,1.016,0,0,1,4.648,44.321ZM29,4.17C10.893,6.094-.809,25.566,6.036,42.48L29,29.223Zm1.5,26.5L6.06,44.776a.922.922,0,0,1-1.412-.456M32,62A29.881,29.881,0,0,1,6.6,47.963a1.015,1.015,0,0,1,.346-1.4L31,32.684a1,1,0,0,1,1,0l24.78,14.31a1.015,1.015,0,0,1,.336,1.414A29.94,29.94,0,0,1,32,62ZM8.867,47.767a27.995,27.995,0,0,0,45.98.42L31.5,34.7ZM57.73,45.236,33.5,31.246a1,1,0,0,1-.5-.866V3.08a1.017,1.017,0,0,1,1.067-1C54.714,3.479,67.988,26.091,59.134,44.8A.968.968,0,0,1,57.73,45.236ZM35,29.8,57.772,42.951C65.015,25.99,53.3,6.114,35,4.17Z" fill="#9C99FF" /></g></svg>
              </div>
              <span className="nav-text">Delivery-men</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-delivery">Add</Link></li>
              <li><Link to="/delivery-list">List</Link></li>
             
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-bootstrap" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.50026 20.8544C5.22526 20.8544 4.93193 20.827 4.6386 20.772C4.48276 20.7353 4.34526 20.6986 4.20776 20.6619C4.05193 20.6161 3.90525 20.5611 3.76775 20.5061C3.73108 20.4969 3.70361 20.4786 3.67611 20.4694C3.35527 20.3044 3.08026 20.1395 2.83276 19.9561C2.81443 19.947 2.80527 19.9286 2.78694 19.9194C2.64944 19.8094 2.52109 19.6995 2.40193 19.5711C2.27359 19.4336 2.18192 19.3236 2.08109 19.2136C1.87025 18.9386 1.69609 18.6636 1.54026 18.3428C1.52192 18.3153 1.51278 18.2786 1.50361 18.2419C1.44861 18.1136 1.40276 17.9853 1.36609 17.8478C1.31109 17.6553 1.27442 17.5269 1.24692 17.3894C1.18275 17.0686 1.15527 16.7844 1.15527 16.5094V4.13444C1.15527 2.38361 2.38361 1.15527 4.13444 1.15527H6.88444C8.63527 1.15527 9.86361 2.38361 9.86361 4.13444V16.5003C9.86361 17.6369 9.4236 18.7186 8.6261 19.5344C8.47944 19.6811 8.36942 19.7819 8.26859 19.8644C7.97526 20.1211 7.59944 20.3503 7.1961 20.5153C7.10444 20.552 6.99443 20.5978 6.87526 20.6436C6.4261 20.7811 5.9586 20.8544 5.50026 20.8544ZM4.34526 19.2503C4.43692 19.2869 4.52861 19.3145 4.62027 19.342C4.72111 19.3695 4.82193 19.3969 4.92276 19.4244C5.42693 19.5161 5.96777 19.4886 6.39861 19.342C6.46278 19.3145 6.55442 19.2869 6.63692 19.2503C6.93026 19.1311 7.16859 18.9845 7.37942 18.8103C7.47109 18.737 7.53527 18.6728 7.59944 18.6178C8.17694 18.0219 8.47943 17.2886 8.47943 16.5094V4.13444C8.47943 3.14444 7.86527 2.53027 6.87526 2.53027H4.12526C3.13526 2.53027 2.5211 3.14444 2.5211 4.13444V16.5003C2.5211 16.6928 2.53944 16.8944 2.58527 17.1053C2.6036 17.1878 2.63109 17.2886 2.65859 17.3986C2.69526 17.4994 2.72277 17.5819 2.75944 17.6736C2.77777 17.7011 2.78692 17.7286 2.79609 17.7469C2.80525 17.7653 2.81442 17.7928 2.82359 17.8111C2.93359 18.0128 3.04361 18.1869 3.16278 18.3428C3.22694 18.4161 3.30944 18.5078 3.39194 18.5994C3.49278 18.7094 3.57526 18.7736 3.66693 18.8469C3.6761 18.8561 3.69444 18.8653 3.70361 18.8744C3.85027 18.9844 4.01526 19.0853 4.20776 19.1861C4.22609 19.1953 4.24443 19.1953 4.26276 19.2044C4.28109 19.2136 4.30859 19.2319 4.34526 19.2503Z" fill="#9C99FF" />
                  <path d="M17.875 20.8544H5.5C5.12417 20.8544 4.8125 20.5428 4.8125 20.1669C4.8125 19.7911 5.12417 19.4794 5.5 19.4794C5.82083 19.4794 6.13251 19.4336 6.39834 19.342C6.46251 19.3145 6.55416 19.2869 6.63666 19.2503C6.92999 19.1311 7.16832 18.9844 7.37916 18.8103C7.47082 18.7369 7.53501 18.6728 7.59917 18.6178L13.8692 12.3569C13.9975 12.2286 14.1717 12.1553 14.355 12.1553H17.875C19.6258 12.1553 20.8542 13.3836 20.8542 15.1344V17.8844C20.8542 19.6261 19.6258 20.8544 17.875 20.8544ZM8.67166 19.4794H17.875C18.865 19.4794 19.4792 18.8653 19.4792 17.8753V15.1253C19.4792 14.1353 18.865 13.5211 17.875 13.5211H14.6392L8.67166 19.4794Z" fill="#9C99FF" />
                  <path d="M4.40902 20.6894C4.34486 20.6894 4.2807 20.6802 4.21653 20.6619C3.5382 20.4602 2.91487 20.0844 2.41987 19.5802C1.92487 19.0944 1.54903 18.471 1.34736 17.7927C1.23736 17.426 1.43903 17.0502 1.80569 16.9402C2.17236 16.8302 2.5482 17.0319 2.66736 17.3894C2.9607 18.3244 3.69402 19.0577 4.62902 19.351C4.98652 19.461 5.1882 19.846 5.0782 20.2127C4.97737 20.4969 4.70236 20.6894 4.40902 20.6894Z" fill="#9C99FF" />
                  <path d="M8.12148 19.7444C7.94731 19.7444 7.77315 19.6803 7.63565 19.5428C7.36982 19.277 7.36067 18.8461 7.6265 18.5711C8.1765 18.0119 8.47899 17.2694 8.47899 16.4903V7.63528C8.47899 7.45195 8.55233 7.27778 8.68066 7.14945L11.1648 4.66527C12.3657 3.46444 14.1807 3.46444 15.3815 4.66527L17.3248 6.60862C18.5623 7.84612 18.5623 9.58777 17.3248 10.8253L8.60734 19.5336C8.46984 19.6803 8.29565 19.7444 8.12148 19.7444ZM9.85399 7.9286V16.3528L16.3532 9.86277C17.0498 9.16611 17.0498 8.29528 16.3532 7.58944L14.4098 5.64611C13.7223 4.95861 12.824 4.95861 12.1365 5.64611L9.85399 7.9286Z" fill="#9C99FF" />
                  <path d="M5.49967 18.1038C4.61967 18.1038 3.89551 17.3797 3.89551 16.4997C3.89551 15.6197 4.61967 14.8955 5.49967 14.8955C6.37967 14.8955 7.10384 15.6197 7.10384 16.4997C7.10384 17.3797 6.37967 18.1038 5.49967 18.1038ZM5.49967 16.2705C5.37134 16.2705 5.27051 16.3713 5.27051 16.4997C5.27051 16.7563 5.72884 16.7563 5.72884 16.4997C5.72884 16.3713 5.62801 16.2705 5.49967 16.2705Z" fill="#9C99FF" />
                </svg>
              </div>
              <span className="nav-text">Categories</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-category">Add</Link></li>
              <li><Link to="/category-list">List</Link></li>
              
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="icon-forms" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0001 16.3905C10.7709 16.3905 10.5326 16.308 10.3492 16.143L7.98425 14.0713C7.09508 13.2921 6.97591 11.9538 7.71841 11.028C8.47008 10.093 9.80841 9.9188 10.7709 10.643L11.0001 10.8171L11.2384 10.6338C12.2009 9.90963 13.5392 10.0838 14.2909 11.0188C15.0334 11.9446 14.9142 13.283 14.0251 14.0621L11.6601 16.1338C11.4676 16.308 11.2292 16.3905 11.0001 16.3905ZM8.88258 13.0355L11.0001 14.8871L13.1176 13.0355C13.4567 12.7421 13.5026 12.238 13.2184 11.8896C12.9342 11.5321 12.4301 11.468 12.0634 11.743L11.4126 12.2288C11.1651 12.4121 10.8351 12.4121 10.5876 12.2288L9.93675 11.743C9.57925 11.468 9.06591 11.5321 8.78175 11.8896C8.50675 12.238 8.55258 12.7421 8.88258 13.0355Z" fill="#9C99FF" />
                  <path d="M15.5835 20.8538H6.41683C2.37433 20.8538 1.146 19.6255 1.146 15.583V6.41634C1.146 2.37384 2.37433 1.14551 6.41683 1.14551H7.79183C9.396 1.14551 9.90016 1.66801 10.5418 2.52051L11.9168 4.35384C12.2193 4.75717 12.2652 4.81217 12.8335 4.81217H15.5835C19.626 4.81217 20.8543 6.04051 20.8543 10.083V15.583C20.8543 19.6255 19.626 20.8538 15.5835 20.8538ZM6.41683 2.52051C3.13516 2.52051 2.521 3.14384 2.521 6.41634V15.583C2.521 18.8555 3.13516 19.4788 6.41683 19.4788H15.5835C18.8652 19.4788 19.4793 18.8555 19.4793 15.583V10.083C19.4793 6.81051 18.8652 6.18717 15.5835 6.18717H12.8335C11.6602 6.18717 11.2752 5.78384 10.8168 5.17884L9.44183 3.34551C8.96516 2.71301 8.8185 2.52051 7.79183 2.52051H6.41683V2.52051Z" fill="#9C99FF" />
                </svg>
              </div>
              <span className="nav-text">Subcategories</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-subcategory">Add</Link></li>
              <li><Link to="/subcategory-list">List</Link></li>
            
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.41683 9.85433H4.5835C2.36516 9.85433 1.146 8.63516 1.146 6.41683V4.5835C1.146 2.36516 2.36516 1.146 4.5835 1.146H6.41683C8.63516 1.146 9.85433 2.36516 9.85433 4.5835V6.41683C9.85433 8.63516 8.63516 9.85433 6.41683 9.85433ZM4.5835 2.521C3.13516 2.521 2.521 3.13516 2.521 4.5835V6.41683C2.521 7.86516 3.13516 8.47933 4.5835 8.47933H6.41683C7.86516 8.47933 8.47933 7.86516 8.47933 6.41683V4.5835C8.47933 3.13516 7.86516 2.521 6.41683 2.521H4.5835Z" fill="#9C99FF" />
                  <path d="M17.4168 9.85433H15.5835C13.3652 9.85433 12.146 8.63516 12.146 6.41683V4.5835C12.146 2.36516 13.3652 1.146 15.5835 1.146H17.4168C19.6352 1.146 20.8543 2.36516 20.8543 4.5835V6.41683C20.8543 8.63516 19.6352 9.85433 17.4168 9.85433ZM15.5835 2.521C14.1352 2.521 13.521 3.13516 13.521 4.5835V6.41683C13.521 7.86516 14.1352 8.47933 15.5835 8.47933H17.4168C18.8652 8.47933 19.4793 7.86516 19.4793 6.41683V4.5835C19.4793 3.13516 18.8652 2.521 17.4168 2.521H15.5835Z" fill="#9C99FF" />
                  <path d="M17.4168 20.8543H15.5835C13.3652 20.8543 12.146 19.6352 12.146 17.4168V15.5835C12.146 13.3652 13.3652 12.146 15.5835 12.146H17.4168C19.6352 12.146 20.8543 13.3652 20.8543 15.5835V17.4168C20.8543 19.6352 19.6352 20.8543 17.4168 20.8543ZM15.5835 13.521C14.1352 13.521 13.521 14.1352 13.521 15.5835V17.4168C13.521 18.8652 14.1352 19.4793 15.5835 19.4793H17.4168C18.8652 19.4793 19.4793 18.8652 19.4793 17.4168V15.5835C19.4793 14.1352 18.8652 13.521 17.4168 13.521H15.5835Z" fill="#9C99FF" />
                  <path d="M6.41683 20.8543H4.5835C2.36516 20.8543 1.146 19.6352 1.146 17.4168V15.5835C1.146 13.3652 2.36516 12.146 4.5835 12.146H6.41683C8.63516 12.146 9.85433 13.3652 9.85433 15.5835V17.4168C9.85433 19.6352 8.63516 20.8543 6.41683 20.8543ZM4.5835 13.521C3.13516 13.521 2.521 14.1352 2.521 15.5835V17.4168C2.521 18.8652 3.13516 19.4793 4.5835 19.4793H6.41683C7.86516 19.4793 8.47933 18.8652 8.47933 17.4168V15.5835C8.47933 14.1352 7.86516 13.521 6.41683 13.521H4.5835Z" fill="#9C99FF" />
                </svg>	
              </div>
              <span className="nav-text">Products</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/add-product">Add</Link></li>
              <li><Link to="/product-list">List</Link></li>
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="Layer_1" height={22} viewBox="0 0 512 512" width={22} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m383.7 108.665-105.652-106.305a8 8 0 0 0 -5.674-2.36h-231.374a33.038 33.038 0 0 0 -33 33v446a33.038 33.038 0 0 0 33 33h312.029a33.038 33.038 0 0 0 33-33v-156.2l104.287-104.289a46.879 46.879 0 1 0 -66.3-66.3l-37.99 37.99v-75.9a8 8 0 0 0 -2.326-5.636zm14.74 91.751 43.671 43.671-153.1 153.1-43.671-43.671zm22.064-22.065 43.671 43.671-10.751 10.751-43.668-43.673zm-182.396 190.549 35.36 35.361-44.128 8.228zm46.219-337.525 69.9 70.327h-69.9zm85.702 447.625a17.019 17.019 0 0 1 -17 17h-312.029a17.019 17.019 0 0 1 -17-17v-446a17.019 17.019 0 0 1 17-17h227.327v93.7a8 8 0 0 0 8 8h93.7v88.5l-142.889 142.893a8 8 0 0 0 -2.186 4.079l-13.634 67.779a8 8 0 0 0 9.309 9.442l68.619-12.793a8 8 0 0 0 4.191-2.207l76.592-76.593zm108.971-315.474a30.994 30.994 0 0 1 0 43.671l-3.512 3.512-43.67-43.671 3.511-3.512a30.915 30.915 0 0 1 43.671 0zm-276.96 211.481a8 8 0 0 1 -8 8h-124.903a8 8 0 0 1 0-16h124.9a8 8 0 0 1 8.003 8zm-140.9-69.72a8 8 0 0 1 8-8h165.035a8 8 0 0 1 0 16h-165.038a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h255.752a8 8 0 1 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.719a8 8 0 0 1 8-8h255.752a8 8 0 0 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h169.352a8 8 0 0 1 0 16h-169.355a8 8 0 0 1 -8-8z" fill="#9C99FF" /></svg>
              </div>
              <span className="nav-text">Galleries</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="add-gallery">Add</Link></li>
              <li><Link to="gallery-list">List</Link></li>
            
            </ul>
          </li>
          <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
              <div className="menu-icon">
                <svg id="Layer_1" height={22} viewBox="0 0 512 512" width={22} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m383.7 108.665-105.652-106.305a8 8 0 0 0 -5.674-2.36h-231.374a33.038 33.038 0 0 0 -33 33v446a33.038 33.038 0 0 0 33 33h312.029a33.038 33.038 0 0 0 33-33v-156.2l104.287-104.289a46.879 46.879 0 1 0 -66.3-66.3l-37.99 37.99v-75.9a8 8 0 0 0 -2.326-5.636zm14.74 91.751 43.671 43.671-153.1 153.1-43.671-43.671zm22.064-22.065 43.671 43.671-10.751 10.751-43.668-43.673zm-182.396 190.549 35.36 35.361-44.128 8.228zm46.219-337.525 69.9 70.327h-69.9zm85.702 447.625a17.019 17.019 0 0 1 -17 17h-312.029a17.019 17.019 0 0 1 -17-17v-446a17.019 17.019 0 0 1 17-17h227.327v93.7a8 8 0 0 0 8 8h93.7v88.5l-142.889 142.893a8 8 0 0 0 -2.186 4.079l-13.634 67.779a8 8 0 0 0 9.309 9.442l68.619-12.793a8 8 0 0 0 4.191-2.207l76.592-76.593zm108.971-315.474a30.994 30.994 0 0 1 0 43.671l-3.512 3.512-43.67-43.671 3.511-3.512a30.915 30.915 0 0 1 43.671 0zm-276.96 211.481a8 8 0 0 1 -8 8h-124.903a8 8 0 0 1 0-16h124.9a8 8 0 0 1 8.003 8zm-140.9-69.72a8 8 0 0 1 8-8h165.035a8 8 0 0 1 0 16h-165.038a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h255.752a8 8 0 1 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.719a8 8 0 0 1 8-8h255.752a8 8 0 0 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h169.352a8 8 0 0 1 0 16h-169.355a8 8 0 0 1 -8-8z" fill="#9C99FF" /></svg>
              </div>
              <span className="nav-text">Orders</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="order-list">List</Link></li>
            
            </ul>
          </li>
        
        </ul>
        <div className="plus-box">
          <div className="media"> 
            <span>
              <svg width={22} height={29} viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.74982 1.40323C2.74982 2.17821 2.13421 2.80645 1.37482 2.80645C0.615425 2.80645 -0.000183105 2.17821 -0.000183105 1.40323C-0.000183105 0.628246 0.615425 0 1.37482 0C2.13421 0 2.74982 0.628246 2.74982 1.40323Z" fill="#FCFCFC" />
                <path d="M9.16648 1.40323C9.16648 2.17821 8.55088 2.80645 7.79148 2.80645C7.03209 2.80645 6.41648 2.17821 6.41648 1.40323C6.41648 0.628246 7.03209 0 7.79148 0C8.55088 0 9.16648 0.628246 9.16648 1.40323Z" fill="#FCFCFC" />
                <path d="M15.5832 1.40323C15.5832 2.17821 14.9675 2.80645 14.2082 2.80645C13.4488 2.80645 12.8332 2.17821 12.8332 1.40323C12.8332 0.628246 13.4488 0 14.2082 0C14.9675 0 15.5832 0.628246 15.5832 1.40323Z" fill="#FCFCFC" />
                <path d="M21.9998 1.40323C21.9998 2.17821 21.3842 2.80645 20.6248 2.80645C19.8654 2.80645 19.2498 2.17821 19.2498 1.40323C19.2498 0.628246 19.8654 0 20.6248 0C21.3842 0 21.9998 0.628246 21.9998 1.40323Z" fill="#FCFCFC" />
                <path d="M2.74982 7.95161C2.74982 8.72659 2.13421 9.35484 1.37482 9.35484C0.615425 9.35484 -0.000183105 8.72659 -0.000183105 7.95161C-0.000183105 7.17663 0.615425 6.54839 1.37482 6.54839C2.13421 6.54839 2.74982 7.17663 2.74982 7.95161Z" fill="#FCFCFC" />
                <path d="M9.16648 7.95161C9.16648 8.72659 8.55088 9.35484 7.79148 9.35484C7.03209 9.35484 6.41648 8.72659 6.41648 7.95161C6.41648 7.17663 7.03209 6.54839 7.79148 6.54839C8.55088 6.54839 9.16648 7.17663 9.16648 7.95161Z" fill="#FCFCFC" />
                <path d="M15.5832 7.95161C15.5832 8.72659 14.9675 9.35484 14.2082 9.35484C13.4488 9.35484 12.8332 8.72659 12.8332 7.95161C12.8332 7.17663 13.4488 6.54839 14.2082 6.54839C14.9675 6.54839 15.5832 7.17663 15.5832 7.95161Z" fill="#FCFCFC" />
                <path d="M21.9998 7.95161C21.9998 8.72659 21.3842 9.35484 20.6248 9.35484C19.8654 9.35484 19.2498 8.72659 19.2498 7.95161C19.2498 7.17663 19.8654 6.54839 20.6248 6.54839C21.3842 6.54839 21.9998 7.17663 21.9998 7.95161Z" fill="#FCFCFC" />
                <path d="M2.74982 14.5C2.74982 15.275 2.13421 15.9032 1.37482 15.9032C0.615425 15.9032 -0.000183105 15.275 -0.000183105 14.5C-0.000183105 13.725 0.615425 13.0968 1.37482 13.0968C2.13421 13.0968 2.74982 13.725 2.74982 14.5Z" fill="#FCFCFC" />
                <path d="M9.16648 14.5C9.16648 15.275 8.55088 15.9032 7.79148 15.9032C7.03209 15.9032 6.41648 15.275 6.41648 14.5C6.41648 13.725 7.03209 13.0968 7.79148 13.0968C8.55088 13.0968 9.16648 13.725 9.16648 14.5Z" fill="#FCFCFC" />
                <path d="M15.5832 14.5C15.5832 15.275 14.9675 15.9032 14.2082 15.9032C13.4488 15.9032 12.8332 15.275 12.8332 14.5C12.8332 13.725 13.4488 13.0968 14.2082 13.0968C14.9675 13.0968 15.5832 13.725 15.5832 14.5Z" fill="#FCFCFC" />
                <path d="M21.9998 14.5C21.9998 15.275 21.3842 15.9032 20.6248 15.9032C19.8654 15.9032 19.2498 15.275 19.2498 14.5C19.2498 13.725 19.8654 13.0968 20.6248 13.0968C21.3842 13.0968 21.9998 13.725 21.9998 14.5Z" fill="#FCFCFC" />
                <path d="M2.74982 21.0484C2.74982 21.8234 2.13421 22.4516 1.37482 22.4516C0.615425 22.4516 -0.000183105 21.8234 -0.000183105 21.0484C-0.000183105 20.2734 0.615425 19.6452 1.37482 19.6452C2.13421 19.6452 2.74982 20.2734 2.74982 21.0484Z" fill="#FCFCFC" />
                <path d="M9.16648 21.0484C9.16648 21.8234 8.55088 22.4516 7.79148 22.4516C7.03209 22.4516 6.41648 21.8234 6.41648 21.0484C6.41648 20.2734 7.03209 19.6452 7.79148 19.6452C8.55088 19.6452 9.16648 20.2734 9.16648 21.0484Z" fill="#FCFCFC" />
                <path d="M15.5832 21.0484C15.5832 21.8234 14.9675 22.4516 14.2082 22.4516C13.4488 22.4516 12.8332 21.8234 12.8332 21.0484C12.8332 20.2734 13.4488 19.6452 14.2082 19.6452C14.9675 19.6452 15.5832 20.2734 15.5832 21.0484Z" fill="#FCFCFC" />
                <path d="M21.9998 21.0484C21.9998 21.8234 21.3842 22.4516 20.6248 22.4516C19.8654 22.4516 19.2498 21.8234 19.2498 21.0484C19.2498 20.2734 19.8654 19.6452 20.6248 19.6452C21.3842 19.6452 21.9998 20.2734 21.9998 21.0484Z" fill="#FCFCFC" />
                <path d="M2.74982 27.5968C2.74982 28.3718 2.13421 29 1.37482 29C0.615425 29 -0.000183105 28.3718 -0.000183105 27.5968C-0.000183105 26.8218 0.615425 26.1935 1.37482 26.1935C2.13421 26.1935 2.74982 26.8218 2.74982 27.5968Z" fill="#FCFCFC" />
                <path d="M9.16648 27.5968C9.16648 28.3718 8.55088 29 7.79148 29C7.03209 29 6.41648 28.3718 6.41648 27.5968C6.41648 26.8218 7.03209 26.1935 7.79148 26.1935C8.55088 26.1935 9.16648 26.8218 9.16648 27.5968Z" fill="#FCFCFC" />
                <path d="M15.5832 27.5968C15.5832 28.3718 14.9675 29 14.2082 29C13.4488 29 12.8332 28.3718 12.8332 27.5968C12.8332 26.8218 13.4488 26.1935 14.2082 26.1935C14.9675 26.1935 15.5832 26.8218 15.5832 27.5968Z" fill="#FCFCFC" />
                <path d="M21.9998 27.5968C21.9998 28.3718 21.3842 29 20.6248 29C19.8654 29 19.2498 28.3718 19.2498 27.5968C19.2498 26.8218 19.8654 26.1935 20.6248 26.1935C21.3842 26.1935 21.9998 26.8218 21.9998 27.5968Z" fill="#FCFCFC" />
              </svg>
            </span>
          </div>
          <div className="info">
            <h3 className="fs-20">Upgrade you <br />Account to Pro</h3>
            <a href="javascript:void(0);" className="btn bg-white btn-sm">Upgrade</a>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Navbar
