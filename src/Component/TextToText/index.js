import React, { useState } from 'react';
import { Button, Form, message, Space, Spin } from 'antd';
import './text1.css';
import Header from '../Header';
import Bread from '../BreadCrump';
import TextArea from 'antd/es/input/TextArea';
import { promptsService } from '../../services/promptGenerationService';
import { useNavigate } from 'react-router-dom';

const bgImgStyle={
  backgroundImage:
"url('https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=')",
  height:'50em',
  backgroundSize: 'cover',
};

// const inputStyle = {
//   background: rgb(44 140 138);
//     font-family: Arial, sans-serif;
//     margin-right: 57em;
// };

const TextToText = () => {
  const [responseData, setResponseData] = useState(null);
  const [isPromptGenerated, setIsPromptGenerated] = useState(false);
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const fetchDataFromService = async (event) => {
    try {
      const response = await promptsService(event);
      if (response.status === 200) return response.data;
    } catch (error) {
      throw error;
    }
  };

  const RenderForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (event) => {
      setIsLoading(true);
      console.log(event.UseCase);
      let result = await fetchDataFromService(event);
      setIsPromptGenerated(true);
      setIsLoading(false);
      setResponseData(result.prompt);
      setFormData(result.prompt);
      message.success('Prompt Generated Successfully !!');
      

    };

    const onFinishFailed = () => {
      message.error('Prompt Generation failed!');
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
          name="UseCase"
          label={<span className='labelStyle'>Use-Case</span>}
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
          <TextArea rows={5} className='textArea' placeholder="Enter your use case." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button className="buttonGen" type='primary' htmlType="submit">
              Generate Prompt
            </Button>
            <Button className='cancelBtn' htmlType="button" onClick={onCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div style={bgImgStyle}>
      <div className='head'>
        <Header />
      </div>
      <div className='breadcrump'>
        <Bread />
      </div>
      <div className='heading'> Search prompt</div>
      <div className='heading2'>Describe your product/requirements under the ‘use case’ section. Be as precise as possible to ensure that an accurate prompt can be generated to match your needs.</div>
      <Spin style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}tip="Loading" size="large" spinning={isLoading}>
        <div className="content" />
      </Spin>
      <div className='border'>
        <RenderForm />
      </div>
      {isPromptGenerated && (
        <div className='promptResult'>
        <h2 style={{marginLeft : '10px', color : 'aliceblue'}}>Prompt:</h2>
        <hr className='hrCSS'/>
        <br/>
        <div style={{marginLeft : '10px', color : 'aliceblue',marginBottom: '10px'}}>
          {responseData}
        </div>
      </div>
      )}
    </div>
  );
};

export default TextToText;
