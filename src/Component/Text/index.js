import React from 'react';
import './text.css'
import { Col, Row, Image, Typography, List, Avatar } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

         </div>

      </>

   )
};
export default Text;