import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </div>
    );
};

export default MainLayout;