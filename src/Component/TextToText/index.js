import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';
import './text1.css'
import Header from '../Header';
import Bread from '../BreadCrump';
const inputStyle = {
  background: '#C8B1E4', // Change the background color here
  fontFamily: 'Arial, sans-serif', // Change the font family here
  // Add any other styles you want to apply to the input placeholder
};

const TextToText = () => {
  return (
    <div>
      <div className='head'>
        <Header />
      </div>
      <div className='breadcrump'>
        <Bread/>
      </div>
      <div className='border'>
        <RenderForm />
      </div>

    </div>




  );

}

const RenderForm = () => {
  const [form] = Form.useForm();
  const onFinish = (event) => {
    console.log(event);
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      UseCase: 'https://taobao.com/',
    });
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
        <Input placeholder="Enter your use case." style={inputStyle} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button className="buttonGen" type='primary' htmlType="submit">
            Generate Prompt
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default TextToText;