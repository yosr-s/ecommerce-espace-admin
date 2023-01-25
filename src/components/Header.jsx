import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserService from '../service/UserService';

const Header = () => {
  const navigate = useNavigate()
  const onSubmitHandler = () => {
    Swal.fire({
      title: 'Are you sure to logout?',
      showDenyButton: true,
      showCancelButton: true,
      confirmedText: 'Yes',
      denyButtonText: `No`,
    }).then((result)=>{
      if (result.isConfirmed){
        UserService.logout()
        .then((res)=>{
          console.log(res)
        });
        localStorage.clear("user");
        localStorage.clear("token");
        localStorage.clear("refreshToken");
        navigate("/login");
        
      }else if(result.isDenied){
        Swal.fire('not')
      }
    });
  };
  return (
    <>
      <div className="nav-header">
      <a href="index.html" className="brand-logo">
        <svg className="logo-abbr" width={40} height={40} viewBox="0 0 576 672" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.00292 165C-30.9998 505 180 618 288.003 672C289.669 671.183 291.364 670.354 293.088 669.511C396.895 618.73 602.494 518.153 572.003 166L288.003 0L4.00292 165ZM63.0234 202.7C35.6872 467.9 203.473 559.88 287.82 602C288.895 601.474 289.986 600.94 291.094 600.399C372.093 560.798 539.498 478.953 515.617 203.48L287.82 74L63.0234 202.7Z" fill="white" />
          <path d="M499 392L235 238L289 204L514 336L499 392Z" fill="white" />
          <path d="M499 392L235 238L289 204L514 336L499 392Z" stroke="white" />
          <path d="M59 278L336 434L290 476L44 334L59 278Z" fill="white" />
          <path d="M59 278L336 434L290 476L44 334L59 278Z" stroke="white" />
        </svg>
        <div className="brand-title">
          <h1 className="mb-0">Salreo</h1>
        </div> 
      </a>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" /><span className="line" /><span className="line" />
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x={22} y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} y={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect width={4} height={4} rx={2} fill="#2A353A" />
            <rect y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={22} y={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect y={22} width={4} height={4} rx={2} fill="#2A353A" />
          </svg>		
        </div>
      </div>
    </div>
    {/***********************************
      Nav header end
  ************************************/}
    {/***********************************
      Chat box start
  ************************************/}
    <div className="chatbox">
      <div className="chatbox-close" />
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#chat_model"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll  " id="DLAB_W_Contacts_Body">
                <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li className="active dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Archie Parker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Alfie Mason</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">B</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Bashid Samim</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Breddie Ronan</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Ceorge Carson</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">D</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Darry Parker</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Denry Hunter</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">J</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Jack Ronan</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Jacob Tucker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>James Logan</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Joshua Weston</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">O</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Oliver Acker</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Oscar Weston</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card chat dz-chat-history-box d-none">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);" className="dz-chat-history-back">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24" /><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x={14} y={7} width={2} height={10} rx={1} /><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " /></g></svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat with Khelesh</h6>
                  <p className="mb-0 text-success">Online</p>
                </div>							
                <div className="dropdown">
                  <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={5} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={19} cy={12} r={2} />
                      </g>
                    </svg>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2" /> View profile</li>
                    <li className="dropdown-item"><i className="fa fa-users text-primary me-2" /> Add to btn-close friends</li>
                    <li className="dropdown-item"><i className="fa fa-plus text-primary me-2" /> Add to group</li>
                    <li className="dropdown-item"><i className="fa fa-ban text-primary me-2" /> Block</li>
                  </ul>
                </div>
              </div>
              <div className="card-body msg_card_body dz-scroll" id="DLAB_W_Contacts_Body3">
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div className="card-footer type_msg">
                <div className="input-group">
                  <textarea className="form-control" placeholder="Type your message..." defaultValue={""} />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="alerts" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Notications</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll" id="DLAB_W_Contacts_Body1">
                <ul className="contacts">
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">KK</div>
                      <div className="user_info">
                        <span>David Nester Birthday</span>
                        <p className="text-primary">Today</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SOCIAL</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont success">RU</div>
                      <div className="user_info">
                        <span>Perfection Simplified</span>
                        <p>Jame Smith commented on your status</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">AU</div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont info">MO</div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer" />
            </div>
          </div>
          <div className="tab-pane fade" id="notes">
            <div className="card mb-sm-3 mb-md-0 note_card">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
                </div>
                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll" id="DLAB_W_Contacts_Body2">
                <ul className="contacts">
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>New order placed..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Youtube, a video-sharing website..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>john just buy your product..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/***********************************
      Chat box End
  ************************************/}
    {/***********************************
      Header start
  ************************************/}
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="header-title">
                <h3 className="mb-0">Dashboard</h3>
              </div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item">
                <div className="input-group search-area me-3">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-text"><a href="javascript:void(0)">
                      <svg className="me-3 mb-1 user-search" width={15} height={15} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#2696FD" />
                        <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="var(--primary)" />
                      </svg>
                    </a></span>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 14.4375C9.1025 14.4375 7.5625 12.8975 7.5625 11C7.5625 9.1025 9.1025 7.5625 11 7.5625C12.8975 7.5625 14.4375 9.1025 14.4375 11C14.4375 12.8975 12.8975 14.4375 11 14.4375ZM11 8.9375C9.86333 8.9375 8.9375 9.86333 8.9375 11C8.9375 12.1367 9.86333 13.0625 11 13.0625C12.1367 13.0625 13.0625 12.1367 13.0625 11C13.0625 9.86333 12.1367 8.9375 11 8.9375Z" fill="var(--primary)" />
                    <path d="M13.9424 20.3408C13.7499 20.3408 13.5574 20.3133 13.3649 20.2674C12.7966 20.1116 12.3199 19.7541 12.0174 19.2499L11.9074 19.0666C11.3666 18.1316 10.6241 18.1316 10.0833 19.0666L9.98242 19.2408C9.67992 19.7541 9.20325 20.1208 8.63492 20.2674C8.05742 20.4233 7.46158 20.3408 6.95742 20.0383L5.38075 19.1308C4.82158 18.8099 4.41825 18.2874 4.24409 17.6549C4.07909 17.0224 4.16158 16.3716 4.48242 15.8124C4.74825 15.3449 4.82159 14.9233 4.66575 14.6574C4.50992 14.3916 4.11575 14.2358 3.57492 14.2358C2.23659 14.2358 1.14575 13.1449 1.14575 11.8066V10.1933C1.14575 8.85494 2.23659 7.7641 3.57492 7.7641C4.11575 7.7641 4.50992 7.60827 4.66575 7.34244C4.82159 7.0766 4.75742 6.65494 4.48242 6.18744C4.16158 5.62827 4.07909 4.96827 4.24409 4.34494C4.40909 3.71244 4.81242 3.18994 5.38075 2.8691L6.96658 1.9616C8.00242 1.34744 9.36825 1.70494 9.99158 2.7591L10.1016 2.94244C10.6424 3.87744 11.3849 3.87744 11.9258 2.94244L12.0266 2.76827C12.6499 1.70494 14.0158 1.34744 15.0608 1.97077L16.6374 2.87827C17.1966 3.1991 17.5999 3.7216 17.7741 4.3541C17.9391 4.9866 17.8566 5.63744 17.5357 6.1966C17.2699 6.6641 17.1966 7.08577 17.3524 7.3516C17.5083 7.61744 17.9024 7.77327 18.4433 7.77327C19.7816 7.77327 20.8724 8.8641 20.8724 10.2024V11.8158C20.8724 13.1541 19.7816 14.2449 18.4433 14.2449C17.9024 14.2449 17.5083 14.4008 17.3524 14.6666C17.1966 14.9324 17.2607 15.3541 17.5357 15.8216C17.8566 16.3808 17.9482 17.0408 17.7741 17.6641C17.6091 18.2966 17.2057 18.8191 16.6374 19.1399L15.0516 20.0474C14.7033 20.2399 14.3274 20.3408 13.9424 20.3408ZM10.9999 16.9491C11.8158 16.9491 12.5766 17.4624 13.0991 18.3699L13.1999 18.5441C13.3099 18.7366 13.4933 18.8741 13.7133 18.9291C13.9333 18.9841 14.1533 18.9566 14.3366 18.8466L15.9224 17.9299C16.1608 17.7924 16.3441 17.5633 16.4174 17.2883C16.4908 17.0133 16.4541 16.7291 16.3166 16.4908C15.7941 15.5924 15.7299 14.6666 16.1333 13.9608C16.5366 13.2549 17.3708 12.8516 18.4158 12.8516C19.0024 12.8516 19.4699 12.3841 19.4699 11.7974V10.1841C19.4699 9.6066 19.0024 9.12994 18.4158 9.12994C17.3708 9.12994 16.5366 8.7266 16.1333 8.02077C15.7299 7.31494 15.7941 6.3891 16.3166 5.49077C16.4541 5.25244 16.4908 4.96827 16.4174 4.69327C16.3441 4.41827 16.1699 4.19827 15.9316 4.0516L14.3458 3.1441C13.9516 2.90577 13.4291 3.04327 13.1908 3.4466L13.0899 3.62077C12.5674 4.52827 11.8066 5.0416 10.9908 5.0416C10.1749 5.0416 9.41408 4.52827 8.89158 3.62077L8.79075 3.43744C8.56158 3.05244 8.04825 2.91494 7.65408 3.1441L6.06825 4.06077C5.82992 4.19827 5.64658 4.42744 5.57325 4.70244C5.49992 4.97744 5.53658 5.2616 5.67408 5.49994C6.19658 6.39827 6.26075 7.3241 5.85742 8.02994C5.45408 8.73577 4.61992 9.1391 3.57492 9.1391C2.98825 9.1391 2.52075 9.6066 2.52075 10.1933V11.8066C2.52075 12.3841 2.98825 12.8608 3.57492 12.8608C4.61992 12.8608 5.45408 13.2641 5.85742 13.9699C6.26075 14.6758 6.19658 15.6016 5.67408 16.4999C5.53658 16.7383 5.49992 17.0224 5.57325 17.2974C5.64658 17.5724 5.82075 17.7924 6.05908 17.9391L7.64492 18.8466C7.83742 18.9658 8.06658 18.9933 8.27742 18.9383C8.49742 18.8833 8.68075 18.7366 8.79992 18.5441L8.90075 18.3699C9.42325 17.4716 10.1841 16.9491 10.9999 16.9491Z" fill="var(--primary)" />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1  p-3 height370">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge primary" />
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>10 minutes ago</span>
                          <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge info">
                        </div>
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                          <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge danger">
                        </div>
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>30 minutes ago</span>
                          <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge success">
                        </div>
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>15 minutes ago</span>
                          <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge warning">
                        </div>
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge dark">
                        </div>
                        <a className="timeline-panel text-muted" href="javascript:void(0);">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell-icon " href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                  <svg className="bell-animi" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0183 18.8193C8.88246 18.8193 6.74663 18.4801 4.72079 17.8018C3.95079 17.5359 3.36413 16.9951 3.10746 16.2893C2.84163 15.5834 2.93329 14.8043 3.35496 14.1076L4.40913 12.3568C4.62913 11.9901 4.83079 11.2568 4.83079 10.8259V8.17676C4.83079 4.76676 7.6083 1.98926 11.0183 1.98926C14.4283 1.98926 17.2058 4.76676 17.2058 8.17676V10.8259C17.2058 11.2476 17.4075 11.9901 17.6275 12.3659L18.6725 14.1076C19.0666 14.7676 19.14 15.5651 18.8741 16.2893C18.6083 17.0134 18.0308 17.5634 17.3066 17.8018C15.29 18.4801 13.1541 18.8193 11.0183 18.8193ZM11.0183 3.36426C8.36913 3.36426 6.20579 5.51842 6.20579 8.17676V10.8259C6.20579 11.4951 5.93079 12.4851 5.59163 13.0626L4.53746 14.8134C4.33579 15.1526 4.28079 15.5101 4.39996 15.8126C4.50996 16.1243 4.78496 16.3626 5.16079 16.4909C8.99246 17.7743 13.0533 17.7743 16.885 16.4909C17.215 16.3809 17.4716 16.1334 17.5908 15.8034C17.71 15.4734 17.6825 15.1159 17.4991 14.8134L16.445 13.0626C16.0966 12.4668 15.8308 11.4859 15.8308 10.8168V8.17676C15.8308 5.51842 13.6766 3.36426 11.0183 3.36426Z" fill="var(--primary)" />
                    <path d="M12.7232 3.61203C12.6591 3.61203 12.5949 3.60286 12.5307 3.58453C12.2649 3.5112 12.0082 3.4562 11.7607 3.41953C10.9816 3.3187 10.2299 3.3737 9.52407 3.58453C9.2674 3.66703 8.9924 3.58453 8.81823 3.39203C8.64407 3.19953 8.58907 2.92453 8.6899 2.67703C9.06573 1.71453 9.9824 1.08203 11.0274 1.08203C12.0724 1.08203 12.9891 1.70536 13.3649 2.67703C13.4566 2.92453 13.4107 3.19953 13.2366 3.39203C13.0991 3.5387 12.9066 3.61203 12.7232 3.61203Z" fill="var(--primary)" />
                    <path d="M11.0183 20.9092C10.1108 20.9092 9.23081 20.5425 8.58914 19.9008C7.94748 19.2592 7.58081 18.3792 7.58081 17.4717H8.95581C8.95581 18.0125 9.17581 18.5442 9.56081 18.9292C9.94581 19.3142 10.4775 19.5342 11.0183 19.5342C12.155 19.5342 13.0808 18.6083 13.0808 17.4717H14.4558C14.4558 19.3692 12.9158 20.9092 11.0183 20.9092Z" fill="var(--primary)" />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end of-visible">
                  <div className="dropdown-header">
                    <h4 className="title mb-0">Notification</h4>
                    <a href="javascript:void(0);" className="d-none"><i className="flaticon-381-settings-6" /></a>
                  </div>
                  <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{height: 380}}>
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-info">
                            KG
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Resport created successfully</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-success">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img alt="image" width={50} src="images/avatar/1.jpg" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-danger">
                            KG
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Resport created successfully</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-primary">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end" /></a>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell-link" href="javascript:void(0);">
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5833 19.4788H6.41659C3.07075 19.4788 1.14575 17.5538 1.14575 14.208V7.79134C1.14575 4.44551 3.07075 2.52051 6.41659 2.52051H15.5833C18.9291 2.52051 20.8541 4.44551 20.8541 7.79134V14.208C20.8541 17.5538 18.9291 19.4788 15.5833 19.4788ZM6.41659 3.89551C3.79492 3.89551 2.52075 5.16967 2.52075 7.79134V14.208C2.52075 16.8297 3.79492 18.1038 6.41659 18.1038H15.5833C18.2049 18.1038 19.4791 16.8297 19.4791 14.208V7.79134C19.4791 5.16967 18.2049 3.89551 15.5833 3.89551H6.41659Z" fill="var(--primary)" />
                    <path d="M10.9999 11.797C10.2299 11.797 9.45071 11.5587 8.85488 11.0728L5.98571 8.78115C5.69238 8.54282 5.63738 8.11198 5.87571 7.81865C6.11405 7.52532 6.54488 7.47032 6.83822 7.70865L9.70737 10.0003C10.404 10.5595 11.5865 10.5595 12.2832 10.0003L15.1524 7.70865C15.4457 7.47032 15.8857 7.51615 16.1149 7.81865C16.3532 8.11198 16.3074 8.55199 16.0049 8.78115L13.1357 11.0728C12.549 11.5587 11.7699 11.797 10.9999 11.797Z" fill="var(--primary)" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown header-profile2">
                  <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="header-info2 d-flex align-items-center">
                      <div className="d-flex align-items-center sidebar-info">
                        <div>
                          <h4 className="mb-0">Nella Vita</h4>
                          <span className="d-block text-end">Admin</span>
                        </div>
                      </div>
                      <img src="images/user.jpg" alt />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end" style={{}}>
                    <a href="app-profile.html" className="dropdown-item ai-icon ">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                          <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="var(--primary)" fillRule="nonzero" />
                        </g>
                      </svg>
                      <span className="ms-2">Profile </span>
                    </a>
                    <a href="chat.html" className="dropdown-item ai-icon ">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect x={0} y={0} width={24} height={24} />
                          <path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="var(--primary)" />
                        </g>
                      </svg>
                      <span className="ms-2">Message </span>
                    </a>
                    <a href="email-inbox.html" className="dropdown-item ai-icon ">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect x={0} y={0} width={24} height={24} />
                          <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                          <circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                        </g>
                      </svg>
                      <span className="ms-2">Notification </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item ai-icon ">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect x={0} y={0} width={24} height={24} />
                          <path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                          <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000" />
                        </g>
                      </svg>
                      <span className="ms-2">Settings </span>
                    </a>
                    <Link to="" onClick={(e)=>{onSubmitHandler()}} className="dropdown-item ai-icon">
                      <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                      <span className="ms-2">Logout </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link  menu-wallet wallet-arrow  ms-3 me-0" href="javascript:void(0);">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
                    <path d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z" fill="white" />
                    <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
      
    </>
  )
}

export default Header
