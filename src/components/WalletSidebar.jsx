import React from 'react'

const WalletSidebar = () => {
  return (
    <>
    <div className="wallet-bar wow fadeInRight dz-scroll active" id="wallet-bar" data-wow-delay="0.7s">	
      <div className="row ">
        {/*column*/}
        <div className="col-xl-12">
          <div className="card bg-transparent contacts mb-0">
            <div className="card-body pb-2">
              <div id="pieChart" />
              <div className="d-flex align-items-center justify-content-between mb-3">
                <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={14} height={14} rx={3} fill="#13C28F" />
                </svg><span>Income</span>
                <h6 className="ms-auto font-w700 mb-0">30%</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={14} height={14} rx={3} fill="#FD5353" />
                </svg>
                <span>Expense</span>
                <h6 className="ms-auto font-w700 mb-0">40%</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={14} height={14} rx={3} fill="#EEEEEE" />
                </svg>
                <span>Unknown</span>
                <h6 className="ms-auto font-w700 mb-0">50%</h6>
              </div>
            </div>
            <div className="card order remove-radius mb-0">
              <div className="card-body ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-primary">Orders</span>
                    <h3 className="font-w600 mb-0">2,76k</h3>
                  </div>
                  <div className="order-svg">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.32 12.7504H15C12.51 12.7504 11.25 11.3404 11.25 8.55045V5.68045C11.25 4.66045 11.37 3.20045 12.43 2.40045C13.32 1.74045 14.6 1.69045 16.49 2.24045C18.97 2.96045 21.04 5.03045 21.76 7.51045C22.31 9.39045 22.26 10.6804 21.6 11.5604C20.8 12.6304 19.34 12.7504 18.32 12.7504ZM14.28 3.36045C13.87 3.36045 13.55 3.44045 13.34 3.60045C12.95 3.89045 12.76 4.57045 12.76 5.68045V8.56045C12.76 10.8004 13.62 11.2604 15.01 11.2604H18.33C19.43 11.2604 20.11 11.0704 20.41 10.6804C20.76 10.2204 20.73 9.30045 20.34 7.95045C19.76 5.98045 18.06 4.27045 16.09 3.70045C15.35 3.47045 14.75 3.36045 14.28 3.36045Z" fill="#2696FD" />
                      <path d="M11.0699 22.7503C10.5399 22.7503 9.99988 22.7103 9.45988 22.6203C5.36988 21.9603 2.03988 18.6403 1.37988 14.5503C0.529883 9.29032 3.91988 4.33032 9.10988 3.27032C9.51988 3.19032 9.90988 3.45032 9.99988 3.85032C10.0799 4.26032 9.81988 4.65032 9.41988 4.74032C5.02988 5.64032 2.14988 9.84032 2.87988 14.3103C3.43988 17.7703 6.24988 20.5803 9.70988 21.1403C14.1999 21.8603 18.3899 18.9703 19.2799 14.5603C19.3599 14.1503 19.7599 13.8903 20.1599 13.9703C20.5699 14.0503 20.8299 14.4503 20.7499 14.8503C19.7999 19.5203 15.7199 22.7503 11.0699 22.7503Z" fill="#2696FD" />
                    </svg>
                  </div>
                </div>
                <div id="NewCustomers" />
              </div>
            </div>
            <div className="card mb-0">
              <div className="card-body pb-2">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <span className="text-success">Profit</span>
                    <h3 className="font-w600 mb-0">70,232k</h3>
                  </div>
                  <div className="trad-svg">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#28BE9D" />
                      <path d="M5.59998 19.7499H4C3.04 19.7499 2.25 18.9599 2.25 17.9999V9.37988C2.25 8.41988 3.04 7.62988 4 7.62988H5.59998C6.55998 7.62988 7.34998 8.41988 7.34998 9.37988V17.9999C7.34998 18.9599 6.55998 19.7499 5.59998 19.7499ZM4 9.11987C3.86 9.11987 3.75 9.22987 3.75 9.36987V17.9999C3.75 18.1399 3.86 18.2499 4 18.2499H5.59998C5.73998 18.2499 5.84998 18.1399 5.84998 17.9999V9.37988C5.84998 9.23988 5.73998 9.12988 5.59998 9.12988H4V9.11987Z" fill="#28BE9D" />
                      <path d="M12.8002 19.7504H11.2002C10.2402 19.7504 9.4502 18.9604 9.4502 18.0004V6.19043C9.4502 5.23043 10.2402 4.44043 11.2002 4.44043H12.8002C13.7602 4.44043 14.5502 5.23043 14.5502 6.19043V18.0004C14.5502 18.9604 13.7602 19.7504 12.8002 19.7504ZM11.2002 5.94043C11.0602 5.94043 10.9502 6.05043 10.9502 6.19043V18.0004C10.9502 18.1404 11.0602 18.2504 11.2002 18.2504H12.8002C12.9402 18.2504 13.0502 18.1404 13.0502 18.0004V6.19043C13.0502 6.05043 12.9402 5.94043 12.8002 5.94043H11.2002Z" fill="#28BE9D" />
                      <path d="M19.9999 19.75H18.3999C17.4399 19.75 16.6499 18.96 16.6499 18V3C16.6499 2.04 17.4399 1.25 18.3999 1.25H19.9999C20.9599 1.25 21.7499 2.04 21.7499 3V18C21.7499 18.96 20.9599 19.75 19.9999 19.75ZM18.3999 2.75C18.2599 2.75 18.1499 2.86 18.1499 3V18C18.1499 18.14 18.2599 18.25 18.3999 18.25H19.9999C20.1399 18.25 20.2499 18.14 20.2499 18V3C20.2499 2.86 20.1399 2.75 19.9999 2.75H18.3999Z" fill="#28BE9D" />
                    </svg>
                  </div>
                </div>
                <div id="columnChart" />
              </div>
            </div>
            <div className="card order remove-radius mb-0">
              <div className="card-body">
                <div>
                  <h3 className="fs-20 mb-0">Others</h3>
                  <p>Lorem Ipsum is simply dummy text.</p>
                </div>
                <div className="d-flex align-items-start pb-3 dz-border">
                  <div>
                    <svg className="me-3" width={49} height={49} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 25C46 37.1503 36.1503 47 24 47C11.8497 47 2 37.1503 2 25C2 12.8497 11.8497 3 24 3C36.1503 3 46 12.8497 46 25ZM4.2 25C4.2 35.9352 13.0648 44.8 24 44.8C34.9352 44.8 43.8 35.9352 43.8 25C43.8 14.0648 34.9352 5.2 24 5.2C13.0648 5.2 4.2 14.0648 4.2 25Z" fill="#E3E3E3" />
                      <path d="M24.5 0C27.7174 3.8367e-08 30.9033 0.633711 33.8757 1.86495C36.8482 3.09619 39.5491 4.90085 41.8241 7.17589C44.0992 9.45092 45.9038 12.1518 47.135 15.1243C48.3663 18.0967 49 21.2826 49 24.5H41.65C41.65 22.2478 41.2064 20.0177 40.3445 17.937C39.4827 15.8562 38.2194 13.9656 36.6269 12.3731C35.0344 10.7806 33.1438 9.51733 31.063 8.65547C28.9823 7.7936 26.7522 7.35 24.5 7.35V0Z" fill="#27AE60" />
                    </svg>
                  </div>
                  <div className>
                    <h5 className="mb-0">Installment</h5>
                    <span>$5,412</span>
                  </div>
                </div>
                <div className="d-flex align-items-center py-3 dz-border">
                  <div>
                    <svg className="me-3" width={49} height={49} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24ZM4.2 24C4.2 34.9352 13.0648 43.8 24 43.8C34.9352 43.8 43.8 34.9352 43.8 24C43.8 13.0648 34.9352 4.2 24 4.2C13.0648 4.2 4.2 13.0648 4.2 24Z" fill="#E3E3E3" />
                      <path d="M24.5 0C28.8412 5.17688e-08 33.1045 1.15351 36.8535 3.34247C40.6025 5.53143 43.7025 8.67723 45.8363 12.4579C47.9701 16.2385 49.061 20.5183 48.9974 24.859C48.9338 29.1998 47.7179 33.4457 45.4742 37.1622C43.2306 40.8787 40.0397 43.9323 36.2281 46.0105C32.4166 48.0886 28.1214 49.1167 23.782 48.9895C19.4426 48.8623 15.215 47.5843 11.5318 45.2864C7.84854 42.9885 4.84203 39.7532 2.81996 35.9117L9.32397 32.4882C10.7394 35.1773 12.844 37.442 15.4222 39.0505C18.0005 40.659 20.9598 41.5536 23.9974 41.6426C27.035 41.7317 30.0416 41.012 32.7097 39.5573C35.3778 38.1026 37.6114 35.9651 39.182 33.3636C40.7525 30.762 41.6036 27.7899 41.6482 24.7513C41.6927 21.7128 40.9291 18.717 39.4354 16.0705C37.9418 13.4241 35.7717 11.222 33.1475 9.68973C30.5232 8.15746 27.5389 7.35 24.5 7.35V0Z" fill="#FD5353" />
                    </svg>
                  </div>
                  <div className>
                    <h5 className="mb-0">Investment</h5>
                    <span>$3,784</span>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <div>
                    <svg className="me-3" width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M47 25C47 37.1503 37.1503 47 25 47C12.8497 47 3 37.1503 3 25C3 12.8497 12.8497 3 25 3C37.1503 3 47 12.8497 47 25ZM5.2 25C5.2 35.9352 14.0648 44.8 25 44.8C35.9352 44.8 44.8 35.9352 44.8 25C44.8 14.0648 35.9352 5.2 25 5.2C14.0648 5.2 5.2 14.0648 5.2 25Z" fill="#E3E3E3" />
                      <path d="M25 0C29.5182 5.38793e-08 33.952 1.22446 37.8299 3.54319C41.7077 5.86191 44.8847 9.18822 47.023 13.1684C49.1613 17.1486 50.181 21.6339 49.9737 26.1474C49.7663 30.6608 48.3396 35.0337 45.8454 38.8011L39.5918 34.6608C41.3377 32.0236 42.3364 28.9626 42.4816 25.8032C42.6267 22.6437 41.9129 19.504 40.4161 16.7179C38.9193 13.9318 36.6954 11.6033 33.9809 9.98023C31.2664 8.35712 28.1628 7.5 25 7.5V0Z" fill="#FF9F00" />
                    </svg>
                  </div>
                  <div className>
                    <h5 className="mb-0">Property</h5>
                    <span>$3,784</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wallet-bar-close" />
      
    </>
  )
}

export default WalletSidebar
