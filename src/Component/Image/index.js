
import React, { useState } from 'react';
import Header from '../Header';
import { Button, Form, message, Space, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { imageGeneration } from '../../services/promptGenerationService';
import Bread from '../BreadCrump';

const bgImgStyle={
    backgroundImage:
  "url('https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=')",
    height:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


const inputStyle = {
    background: '#C8B1E4',
    fontFamily: 'Arial, sans-serif',
    marginRight: '57em',
  };
  const fetchDataFromService = async (event) => {
    try {
      const response = await imageGeneration(event);
      if (response.status === 200) return response.data;
    } catch (error) {
      throw error;
    }
  };
const Image=()=>{
    const [isImageGenerated, setIsImageGenerated] = useState(false);
const [responseData, setResponseData] = useState(null);
const [isLoading, setIsLoading] = useState(false);

    const RenderForm = () => {
        const [form] = Form.useForm();
        const navigate = useNavigate();
    
        const onFinish = async (event) => {
          
      console.log(event);
      setIsLoading(true);
      let result = await fetchDataFromService(event);
      setIsImageGenerated(true);
      setResponseData(result.imageUrl);
      setIsLoading(false);
      
         
         
          message.success('Image Generated Successfully !!');
          
    
        };
    
        const onFinishFailed = () => {
          message.error('Image Generation failed!');
        };
    
        const onCancel = () => {
          navigate('/');
        };
    
        return (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="Prompt"
              label={<span className='labelStyle'>Prompt</span>}
              rules={[
                {
                  required: true,
                },
                {
                  type: 'text',
                  warningOnly: true,
                },
                {
                  type: 'string',
                  min: 0,
                },
              ]}
            >
              <TextArea rows={5} placeholder="Enter your prompt for image generation." style={inputStyle} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button className="buttonGen" type='primary' htmlType="submit">
                  Generate image
                </Button>
                <Button htmlType="button" onClick={onCancel}>
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        );
      };
    return(
        <div style={bgImgStyle}>
    <div>
        <div className='head'>
          <Header />
        </div>
        <div className='breadcrump'>
        <Bread />
      </div>
        <div className='heading'> Text to Image generator</div>
        <div className='heading2'>Simply enter your text and watch the magic happen—our gizmo turns words into beautiful images!</div>
        <Spin style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}tip="Loading" size="large" spinning={isLoading}>
        <div className="content" />
      </Spin>
        <div className='border'>
        <RenderForm />
      </div>
      {isImageGenerated && (
        <div className='promptResult'>
        <h2 style={{marginLeft : '10px', color : 'aliceblue'}}>Image:</h2>
        <hr className='hrCSS'/>
        <br/>
        <div style={{marginLeft : '10px', color : 'aliceblue',marginBottom: '10px'}}>
        {/* <img src={responseData} alt="Generated Image" /> */}
        <iframe src={responseData} height="200" width="300" title="Generated image"></iframe>
          
        </div>
      </div>
      )}
      </div>
        </div>)

}
export default Image;