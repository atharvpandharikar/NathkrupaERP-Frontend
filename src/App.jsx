import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import OEMCatalogue from './pages/OEMCatalogue';
import OEMModelSelect from './pages/OEMModelSelect';
import Account from './pages/Account';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/oem-catalogue" element={<OEMCatalogue />} />
          <Route path="/oem-catalogue/:makerId" element={<OEMModelSelect />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
