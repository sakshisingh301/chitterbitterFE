import React, { useState } from 'react';
import { Button, Form, message, Space } from 'antd';
import './text1.css';
import Header from '../Header';
import Bread from '../BreadCrump';
import TextArea from 'antd/es/input/TextArea';
import { promptsService } from '../../services/promptGenerationService';
import { useNavigate } from 'react-router-dom';

const inputStyle = {
  background: '#C8B1E4',
  fontFamily: 'Arial, sans-serif',
  marginRight: '57em',
};

const TextToText = () => {
  const [responseData, setResponseData] = useState(null);
  const [isPromptGenerated, setIsPromptGenerated] = useState(false);

  const fetchDataFromService = async () => {
    try {
      const response = await promptsService();
      if (response.status === 200) return response.data;
    } catch (error) {
      throw error;
    }
  };

  const RenderForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (event) => {
      let result = await fetchDataFromService();
      setIsPromptGenerated(true);
      setResponseData(result.prompt);
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
          <TextArea rows={5} placeholder="Enter your use case." style={inputStyle} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button className="buttonGen" type='primary' htmlType="submit">
              Generate Prompt
            </Button>
            <Button htmlType="button" onClick={onCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div>
      <div className='head'>
        <Header />
      </div>
      <div className='breadcrump'>
        <Bread />
      </div>
      <div className='heading'> Search prompt</div>
      <div className='heading2'>Describe your product/requirements under the ‘use case’ section. Be as precise as possible to ensure that an accurate prompt can be generated to match your needs.</div>
      <div className='border'>
        <RenderForm />
      </div>
      {isPromptGenerated && (
        <div>
          {responseData}
        </div>
      )}
    </div>
  );
};

export default TextToText;
