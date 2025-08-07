import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import SuccessPage from './pages/SuccessPage';
import FailedPage from './pages/FailedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<FailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
