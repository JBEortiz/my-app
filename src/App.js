import logo from './logo.svg';
import './App.css';
import NotFountPage from './pages/404/NotFountPage';
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
import Navbar from './pages/Navbar';
import Navigation from './pages/Navigation';
import Footers from './pages/footer/Footers';
import { Route, createBrowserRouter,
  Router,Routes,HomeLayoutRoute
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage></HomePage>,
  },
]);
function App() {
  return (
   

    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<NotFountPage/>} />
         <Route path="/404" element={<ContactPage/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
