import React from 'react';
import Container from "react-bootstrap/Container";
import Bag1 from './images/bag1.jpg'
import Bag2 from './images/bag2.jpg'
import homeData from '../Home-data';
import homeData2 from '../Home-data2';
import Shop from './Shop';

const Home = () => {

  return (
    <div>
     
     <Shop Data={homeData} type={"women"}/> 

      <Container fluid='xxl' className='short'>
      <div className="left-d">
        <img src={Bag1} alt="" className='bag-i' />
        <div className="mini">
          <h1>Mini backpack</h1>
          <h2>Bags & Accessories</h2>
          </div>
      </div>
      <div className="right-d">
        <img src={Bag2} alt="" />
        <div className="mini big">
          <h2>Big Sale</h2>
          <h1>50% off</h1>
          </div>
      </div>
      </Container>

    

     <Shop Data={homeData2} type={"men"}/>


    </div>
  );
}

export default Home;
