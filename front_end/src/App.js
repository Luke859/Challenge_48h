import logo from './css/index.css';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout.js'
import CategoryPage from './components/Categories/Categories';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path='/categories' element={<CategoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
