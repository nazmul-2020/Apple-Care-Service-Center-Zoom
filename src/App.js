import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import IPad from "./Pages/Home/Information/IPad/IPad";
import IPadDetails from "./Pages/Home/Information/IPad/IPadDetails/IPadDetails";
import IPhone from "./Pages/Home/Information/IPhone/IPhone";
import IPhoneAllBatter from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneAllBatter";
import IPhoneBattery from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneBattery.js";
import IPhoneBatteryId from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneBatteryId";
import IphoneDetails from "./Pages/Home/Information/IPhone/IPhoneId/IPhoneId";
import IPhoneUnlock from "./Pages/Home/Information/IPhoneUnlock";
import Mac from "./Pages/Home/Information/Mac";
import MacBook from "./Pages/Home/Information/MacBook";
import Watch from "./Pages/Home/Information/Watch";
import One from "./Pages/One/One";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*---------------- Category Route start------------------ */}
        <Route path="/macBook" element={<MacBook />}></Route>
        <Route path="/iPhone" element={<IPhone />}></Route>
        <Route path="/iphoneDetails" element={<IphoneDetails/>}></Route>
        <Route path="/iPhoneBattery" element={<IPhoneBattery/>}></Route>
        <Route path="/iPhoneBatterId" element={<IPhoneBatteryId/>}></Route>
        <Route path="/iPhoneAllBatter" element={<IPhoneAllBatter/>}></Route>
        <Route path="/iMac" element={<Mac />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/iPhoneUnlock" element={<IPhoneUnlock />}></Route>
        <Route path="/iPad" element={<IPad />}></Route>
        <Route path="/iPadDetails" element={<IPadDetails/>}></Route>
        {/*---------------- Category Route start------------------ */}
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/one" element={<One />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
