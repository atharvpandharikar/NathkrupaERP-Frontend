import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import VehicleSearchResults from './pages/VehicleSearchResults';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import OEMCatalogue from './pages/OEMCatalogue';
import OEMModelSelect from './pages/OEMModelSelect';
import Account from './pages/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle-parts" element={<VehicleSearchResults />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/oem-catalogue" element={<OEMCatalogue />} />
          <Route path="/oem-catalogue/:makerId" element={<OEMModelSelect />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
