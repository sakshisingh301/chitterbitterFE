
import React, { useState } from 'react';
import Header from '../Header';
import { Button, Form, message, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { imageGeneration } from '../../services/promptGenerationService';


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
    const RenderForm = () => {
        const [form] = Form.useForm();
        const navigate = useNavigate();
    
        const onFinish = async (event) => {
          
      console.log(event);
      let result = await fetchDataFromService(event);
      setIsImageGenerated(true);
      setResponseData(result.imageUrl);
      
         
         
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
    return(<div>
        <div className='head'>
          <Header />
        </div>
        <div className='heading'> Text to Image generator</div>
        <div className='heading2'>Simply enter your text and watch the magic happen—our gizmo turns words into beautiful images!</div>
        <div className='border'>
        <RenderForm />
      </div>
      {isImageGenerated && (
        <div className='promptResult'>
        <h2 style={{marginLeft : '10px', color : 'aliceblue'}}>Image:</h2>
        <hr className='hrCSS'/>
        <br/>
        <div style={{marginLeft : '10px', color : 'aliceblue',marginBottom: '10px'}}>
          {responseData}
        </div>
      </div>
      )}
        </div>)

}
export default Image;