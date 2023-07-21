import React from 'react';
import Text from '../Text';


import './home.css'
import Header from '../Header';
const Home=()=>{
    return(
    <>
    <div className='head' ><Header/></div>
    <div className="div-Chitter">
    {/* <h1 className="header-title">Chitter-bitter</h1> */}
      <div className="fix">Welcome to the Future of Content Creation.</div>
    </div>
    </>
    )
  }
  export default Home;