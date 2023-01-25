import logo from './logo.svg';
import './App.css';
import Home from './view/home/Home';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashbord from './view/home/Dashbord';
import AddAdmin from './view/home/Admin/AddAdmin';
import AdminList from './view/home/Admin/AdminList';
import AddCustomer from './view/home/Customer/AddCustomer';
import CustomerList from './view/home/Customer/CustomerList';
import AddProvider from './view/home/Provider/AddProvider';
import ProviderList from './view/home/Provider/ProviderList';
import AddDelivery from './view/home/Delivery/AddDelivery';
import DeliveryList from './view/home/Delivery/DeliveryList';
import AddCategory from './view/home/Category/AddCategory';
import CategoryList from './view/home/Category/CategoryList';
import AddSubcategory from './view/home/Subcategories/AddSubcategory';
import SubcategoryList from './view/home/Subcategories/SubcategoryList';
import AddProduct from './view/home/Product/AddProduct';
import ProductList from './view/home/Product/ProductList';
import AddGallery from './view/home/Gallery/AddGallery';
import GalleryList from './view/home/Gallery/GalleryList';
import UpdateAdmin from './view/home/Admin/UpdateAdmin';
import UpdateCustomer from './view/home/Customer/UpdateCustomer';
import UpdateProvider from './view/home/Provider/UpdateProvider';
import UpdateCategory from './view/home/Category/UpdateCategory';
import UpdateDelivery from './view/home/Delivery/UpdateDelivery';
import UpdateGallery from './view/home/Gallery/UpdateGallery';
import UpdateProduct from './view/home/Product/UpdateProduct';
import UpdateSubcategory from './view/home/Subcategories/UpdateSubcategory';
import Login from './components/Login';
import OrderList from './view/home/Order/OrderList';



function App() {
  const PrivateRoutes = ({ children }) => {
    if (!localStorage.getItem("user")) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes> }>
            <Route path="/" element={<PrivateRoutes><Dashbord /></PrivateRoutes>} />
            <Route path="/add-admin" element={<PrivateRoutes><AddAdmin /></PrivateRoutes>} />
            <Route path="/admin-list" element={<PrivateRoutes><AdminList /></PrivateRoutes>} />
            <Route path="/add-customer" element={<PrivateRoutes><AddCustomer /></PrivateRoutes>} />
            <Route path="/customer-list" element={<PrivateRoutes><CustomerList /></PrivateRoutes>} />
            <Route path="/add-provider" element={<PrivateRoutes><AddProvider /></PrivateRoutes>} />
            <Route path="/provider-list" element={<PrivateRoutes><ProviderList /></PrivateRoutes>} />
            <Route path="/add-delivery" element={<PrivateRoutes><AddDelivery /></PrivateRoutes>} />
            <Route path="/delivery-list" element={<PrivateRoutes><DeliveryList /></PrivateRoutes>} />
            <Route path="/add-category" element={<PrivateRoutes><AddCategory /></PrivateRoutes>} />
            <Route path="/category-list" element={<PrivateRoutes><CategoryList /></PrivateRoutes>} />
            <Route path="/add-subcategory" element={<PrivateRoutes><AddSubcategory /></PrivateRoutes>} />
            <Route path="/subcategory-list" element={<PrivateRoutes><SubcategoryList /></PrivateRoutes>} />
            <Route path="/add-product" element={<PrivateRoutes><AddProduct /></PrivateRoutes>} />
            <Route path="/product-list" element={<PrivateRoutes><ProductList /></PrivateRoutes>} />
            <Route path="/add-gallery" element={<PrivateRoutes><AddGallery /></PrivateRoutes>} />
            <Route path="/gallery-list" element={<PrivateRoutes><GalleryList /></PrivateRoutes>} />
            <Route path="/update-admin/:id" element={<PrivateRoutes><UpdateAdmin /></PrivateRoutes>} />
            <Route path="/update-customer/:id" element={<PrivateRoutes><UpdateCustomer /></PrivateRoutes>} />
            <Route path="/update-provider/:id" element={<PrivateRoutes><UpdateProvider /></PrivateRoutes>} />
            <Route path="/update-category/:id" element={<PrivateRoutes><UpdateCategory /></PrivateRoutes>} />
            <Route path="/update-delivery/:id" element={<PrivateRoutes><UpdateDelivery /></PrivateRoutes>} />
            <Route path="/update-gallery/:id" element={<PrivateRoutes><UpdateGallery /></PrivateRoutes>} />
            <Route path="/update-product/:id" element={<PrivateRoutes><UpdateProduct /></PrivateRoutes>} />
            <Route path="/update-subcategory/:id" element={<PrivateRoutes><UpdateSubcategory /></PrivateRoutes>} />
            <Route path="/order-list" element={<PrivateRoutes><OrderList /></PrivateRoutes>} />













          </Route>
          <Route path="/login" element={<Login />} />


      </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App;
