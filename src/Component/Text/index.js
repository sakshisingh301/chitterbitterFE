import React from 'react';
import './text.css'
import { Col, Row } from 'antd';
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

            <Row className='imageRow'>
               <div>
                  <FontAwesomeIcon icon={faSun} spin size="2xl" style={{ color: "#fff700" }} />
               </div>
            </Row>
         </div>

      </>

   )
};
export default Text;