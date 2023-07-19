import React from 'react';
import './text.css'
import { Col, Row, Image, Typography, List, Avatar, Carousel } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const contentStyle = {
   width: '100%', height: '450px', objectFit: 'cover'
};

const data = [
   {
      title: 'Text to Text',
      desc: 'Revamped Conversations',
      picture: 'https://cdn-icons-png.flaticon.com/512/7613/7613950.png',
      route: '/text'
   },
   {
      title: 'Text To Image',
      desc: 'Visual Storytelling',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHk6OyjvBHzodt26JUWQqjVUKBfGRkgC7R5YFW1rx6dHhiZdwMse16Jef11gmVNyKKBI&usqp=CAU',
      route: '/image',
   },
   {
      title: 'Search Prompt',
      desc: 'Search Results',
      picture: 'https://cdn.iconscout.com/icon/free/png-256/free-search-1403342-1188283.png?f=webp',
      route: '/searchPrompt'
   },
];


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

            <div className='listOption'>
               <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                     <List.Item
                        actions={[
                           <Link to={item.route}>
                              <Typography.Text>&#187;</Typography.Text>
                           </Link>
                        ]}
                     >
                        <List.Item.Meta
                           avatar={<Avatar src={item.picture} />}
                           title={item.title}
                           description={item.desc}
                        />
                     </List.Item>
                  )}
               />
            </div>
            <div>
               <Carousel autoplay={true}>
                  <div>
                     <img style={contentStyle} src="https://static.scientificamerican.com/sciam/cache/file/1B052E70-458D-4084-A9CA4CE2E9B65C07_source.jpg" alt="Slide 1" />
                  </div>
                  <div>
                     <img style={contentStyle} src="https://media.istockphoto.com/id/1140559408/photo/blockchain-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=dhMvSYqCmMmbX5AFchuXSgQFoxv0CzTTVkLSjY-ohzA=" alt="Slide 2" />
                  </div>
                  <div>
                     <img style={contentStyle} src="https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=" alt="Slide 3" />
                  </div>
               </Carousel>
            </div>
            <Row className="footer">

               <div>
                  <FontAwesomeIcon icon={faInstagram} spin size="2xl" style={{ color: "#fdc500" }} />
               </div>

               <div>
                  <FontAwesomeIcon icon={faTwitter} spin size="2xl" style={{ color: "#fdc500" }} />
               </div>

               <div>
                  <FontAwesomeIcon icon={faTwitch} spin size="2xl" style={{ color: "#fdc500" }} />
               </div>

            </Row>
            <div className='last'>© Chitter-Bitter 2023 – Unleashing Creativity</div>


         </div>

      </>

   )
};
export default Text;