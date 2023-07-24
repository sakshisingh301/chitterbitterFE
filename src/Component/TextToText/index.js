import React from 'react';
import { Button, Form, message, Space } from 'antd';
import './text1.css'
import Header from '../Header';
import Bread from '../BreadCrump';
import TextArea from 'antd/es/input/TextArea';
import { promptsService } from '../../services/promptGenerationService';
const inputStyle = {
  background: '#C8B1E4', // Change the background color here
  fontFamily: 'Arial, sans-serif',
  marginRight: '57em' // Change the font family here
  // Add any other styles you want to apply to the input placeholder
};

const fetchDataFromService = async () => {
  try {
    const response = await promptsService();
    if (response.status === 200) 
    return response.data; 

  } catch (error) {
    throw error;
  }
};
// const response = await fetchDataFromService();

const TextToText = () => {

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
      <div>
      {/* {response.prompt} */}
      </div>



    </div>




  );

}

const RenderForm = () => {
  const [form] = Form.useForm();
  const onFinish = (event) => {
    let result=fetchDataFromService();
    console.log(result);
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
        <TextArea rows={5} placeholder="Enter your use case." style={inputStyle} />
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