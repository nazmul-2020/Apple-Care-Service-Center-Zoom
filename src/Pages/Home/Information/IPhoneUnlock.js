// import React from 'react';

import React, { useState } from 'react'
import imac from '../../../assets/img/imac.jpg'



const IPhoneUnlock = () => {

    const [show, setShow] = useState(false)
    const [showa, setShoa] = useState(false)

    // const [showResults, setShowResults] =useState(false)

    //   const onClick = () => setShowResults(true)

    return (
        <div>


            {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}
            <button onClick={() => setShow(!show)} >Toggle</button>
            <br />
            <button onClick={() => setShoa(!showa)} >ffff</button>

            {
                show ? <div>
                    <h1>IPhoneUnlock</h1>
                    <h1>IPhoneUnlock</h1>
                    <h1>IPhoneUnlock</h1>
                    <h1>IPhoneUnlock</h1>
                    <h1>IPhoneUnlock</h1>
                    <h1>IPhoneUnlock</h1>
                </div> : null
            }

           {
            showa?
            <div className="search-result searchServiceResult" style={{ display: "" }}>
            <ul className="item-list serviceList">
                <li>
                    <img src={imac} alt="" />
                    <p>iPhone Repair</p>
                </li>

                <li>
                <img src={imac} alt="" />
                    <p>iPad Repair</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>iMac Repair</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>Watch Repair</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>iPhone Unlock</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>Battery Replacement</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>Rear Case Replacement</p>
                </li>
                <li>
                    <img src={imac} alt="" />
                    <p>Liquid Damage</p>
                </li>
            </ul>
        </div>
        :null
           }





            {/* <div>
                <input type="submit" value="Search" onClick={onClick} />
                {showResults ? <Results /> : null}
            </div>
            )
}

const Results = () => (
            <div id="results" className="search-results">
                Some Results
            </div> */}

        </div>
    );
};

export default IPhoneUnlock;