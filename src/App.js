import { Routes, Route} from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
