import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Cart from "./Pages/Cart/Cart";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import IPad from "./Pages/Home/Information/IPad/IPad";
import IPadDetails from "./Pages/Home/Information/IPad/IPadDetails/IPadDetails";
import IPhone from "./Pages/Home/Information/IPhone/IPhone";
import IPhoneAllBatter from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneAllBatter";
import IPhoneBattery from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneBattery.js";
import IPhoneBatteryId from "./Pages/Home/Information/IPhone/IPhoneBattery/IPhoneBatteryId";
import IPhoneId from "./Pages/Home/Information/IPhone/IPhoneId/IPhoneId";
import IPhoneUnlock from "./Pages/Home/Information/IPhoneUnlock";
import IMac22 from "./Pages/Home/Information/Mac/IMac22";
import MacBookProId from "./Pages/Home/Information/Mac/IMacBookPro/MacBookProId/MacBookProId";
// import IMac22 from "./Pages/Home/Information/Mac/IMacBookPro/iMac22";
// import IMacBookPro from "./Pages/Home/Information/Mac/IMacBookPro/IMacBookPro";

import Mac from "./Pages/Home/Information/Mac/Mac";
import MacBookPro from "./Pages/Home/Information/Mac/MacBookPro";
import MacBook from "./Pages/Home/Information/MacBook";
import Watch from "./Pages/Home/Information/Watch/Watch";
import WatchBattery from "./Pages/Home/Information/Watch/WatchBattery/WatchBattery";
import WatchId from "./Pages/Home/Information/Watch/WatchId/WatchId";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import MacBookProDetails from "./Pages/One/MacBookProDetails/MacBookProDetails";
import One from "./Pages/One/One";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*---------------- Category Route start------------------ */}
        <Route path="/macBook" element={<MacBook />}></Route>
        <Route path="/macBook" element={<MacBook />}></Route>
        <Route path="/macBookPro" element={<MacBookPro />}></Route>
        <Route path="/macBookProDetails" element={<MacBookProDetails />}></Route>
        <Route path="/macBookProId" element={<MacBookProId />}></Route>
        <Route path="/iPhone" element={<IPhone />}></Route>
        <Route path="/iphoneId" element={<IPhoneId />}></Route>
        <Route path="/iPhoneBattery" element={<IPhoneBattery />}></Route>
        <Route path="/iPhoneBatterId" element={<IPhoneBatteryId />}></Route>
        <Route path="/iPhoneAllBatter" element={<IPhoneAllBatter />}></Route>
        <Route path="/iMac" element={<Mac />}>
          <Route path='/iMac22' element={<IMac22 />}></Route>
        </Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/watchId" element={<WatchId />}></Route>
        <Route path="/watchBattery" element={<WatchBattery />}></Route>

        <Route path="/iPhoneUnlock" element={<IPhoneUnlock />}></Route>
        <Route path="/iPad" element={<IPad />}></Route>
        <Route path="/iPadDetails" element={<IPadDetails />}></Route>
        {/*---------------- Category Route start------------------ */}
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path=""></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/one" element={<One />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
