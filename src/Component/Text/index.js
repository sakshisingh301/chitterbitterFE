import React from 'react';
import './text.css'
import { Col, Row,Image  } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Text = () => {
   return (
      <>

         <div className="middleNew">
            <Row>
               <div className="">
                  <Col className="revolution" span={24}>Revolutionize Creativity</Col>
               </div>
            </Row>
            <Row className="revolution">
               <Col span={12}>Unleash the power of ChatGPT clone’s AI-driven text generator! It’s time to give your content the x-factor that’ll make it stand out </Col>
               <Col span={12}>Capture your audience’s imagination with breathtaking image generation. Let our state-of-the-art AI paint the perfect image for you.</Col>
            </Row>

            <Row justify="center" align="middle" style={{ marginTop: '20px' }}>
               <div>
                  <FontAwesomeIcon icon={faSun} spin size="2xl" style={{ color: "#fdc500" }} />
               </div>
            </Row>

            <Row >
               <Col className="getStarted" span={24}>Get  Started</Col>
            </Row>
            <Row >
               <Col className="content1" span={24}>Ready to redefine your content creation game? Don’t wait – embark on this thrilling journey now!</Col>
            </Row>
            <Row className='robot'>
               {/* <img src='../../../chitterbitter/Apps-Like-Chai.jpg' alt="Image description" /> */}
               <Image 
                  width={200}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbcZcLCbI6ch7X5-wtZaVrxcrD4Cg_4rMYybhrgR3tHHSkfS2EfWGyv0u4S2CWrsqnCo&usqp=CAU"
                  preview={false}
               />
               
            </Row>

         </div>

      </>

   )
};
export default Text;