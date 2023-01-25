import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import WalletSidebar from '../../components/WalletSidebar'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>
  {/********************
  Preloader start
    *********************/}
  <div id="preloader">
    <div className="loader" />
  </div> 
  {/********************
  Preloader end
    *********************/}
  {/***********************************
  Main wrapper start
    ************************************/}
  <div id="main-wrapper" className="wallet-open active show">
    {/***********************************
      Nav header start
  ************************************/}
  <Header/>
    {/***********************************
      Header end ti-comment-alt
  ************************************/}
    {/***********************************
      Sidebar start
  ************************************/}
    <Navbar/>
    {/***********************************
      Sidebar end
  ************************************/}
    {/*****
		Wallet Sidebar
		*****/}
    <WalletSidebar/>
    {/***********************************
      Content body start
  ************************************/}
          <Outlet></Outlet>

    
    {/***********************************
      Content body end
  ************************************/}
    {/***********************************
				Footer start
			************************************/}
  <Footer/>
    {/***********************************
      Footer end
  ************************************/}
    {/***********************************
     Support ticket button start
  ************************************/}
    {/***********************************
     Support ticket button end
  ************************************/}
  </div>
</div>

      
    </>
  )
}

export default Home
