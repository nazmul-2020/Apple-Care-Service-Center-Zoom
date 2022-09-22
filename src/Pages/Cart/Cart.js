import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ss from '../../assets/Images/iPhoneRepair/iphone 12 mini.png'
import as from '../../assets/Images/iPhoneRepair/one/Battery_Replacement.png'
import sd from '../../assets/Images/Watch/icons-apple-watch-100.png'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className='iPhoneBanner'>
                <div className='overlay h-100 d-flex align-items-center justify-content-center'>
                    <div className='text-white text-center'>
                        <h3 className='mb-0'>Cart</h3>
                        <Link className='text-white' to='/'>Home</Link>
                    </div>
                </div>

            </div>

            <div>
                <div className="container">
                    <div className="table-responsive">
                        <div className="table-wrapper ">
                            <table className="table table-striped w-75 mx-auto">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th style={{ width: " 22%;" }}>PRODUCT</th>
                                        <th style={{ width: " 22%;" }}>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src={ss} alt="" width='30' height='50' />
                                        </td>
                                        <td>2000</td>
                                        <td>1</td>
                                        <td>2000</td>
                                        <td>
                                            <a href="" className="delete" title="Delete" data-toggle="tooltip"><MdDelete className="material-icons">&#xE872;</MdDelete></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                        <img src={as} alt="" width='30' height='50' />
                                        </td>
                                        <td>1000</td>
                                        <td>1</td>
                                        <td>1000</td>
                                        <td>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><MdDelete className="material-icons">&#xE872;</MdDelete></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                        <img src={ss} alt="" width='30' height='50' />
                                        </td>
                                        <td>1000</td>
                                        <td>1</td>
                                        <td>1000</td>
                                        <td>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><MdDelete className="material-icons">&#xE872;</MdDelete></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> 
                                            <img src={sd} alt="" width='30' height='50' />
                                        </td>
                                        <td>1000</td>
                                        <td>1</td>
                                        <td>1000</td>
                                        <td>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><MdDelete className="material-icons">&#xE872;</MdDelete></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td> <img src={ss} alt="" width='30' height='50' /></td>
                                        <td>1000</td>
                                        <td>1</td>
                                        <td>1000</td>
                                        <td>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><MdDelete className="material-icons">&#xE872;</MdDelete></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;