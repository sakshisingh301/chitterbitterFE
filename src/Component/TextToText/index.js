import React, { useState, useRef } from 'react';
import { Button, Form, message, Space, Select, Skeleton } from 'antd';
import './text1.css';
import Header from '../Header';
import Bread from '../BreadCrump';
import TextArea from 'antd/es/input/TextArea';
import { promptsService } from '../../services/promptGenerationService';
import { useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const bgImgStyle = {
  backgroundImage:
    "url('https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=')",
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
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
  const [copied, setCopied] = useState(false);
  const myDivRef = useRef(null);
  const [lang, setLang] = useState("English")

  const handleChange = (value) => {
    setLang(value)
    console.log(`selected ${value}`);
  };

  const scrollToDiv = () => {
    if (myDivRef.current) {
      const rect = myDivRef.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
      });
      // myDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleCopy = () => {
    setCopied(true);
    message.success('Prompt copied to clipboard');
  };


  const fetchDataFromService = async (event) => {
    try {
      const response = await promptsService(event, lang);
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
          label={<span className='labelStyleText'>Use-Case</span>}
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
          <TextArea rows={5} className='textAreaText' placeholder="Enter your use case." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Select defaultValue={lang} style={{ width: 150}} onChange={handleChange}
              options={[
                { value: 'English', label: 'English' },
                { value: 'Hindi', label: 'Hindi' },
                { value: 'Spanish', label: 'Spanish' },
                { value: 'German', label: 'German' },
                { value: 'Arabic', label: 'Arabic' },
                { value: 'Italian', label: 'Italian' },
                { value: 'Indonesian', label: 'Indonesian' },
                { value: 'Telugu', label: 'Telugu' },
                { value: 'Dutch', label: 'Dutch' },
                { value: 'Portuguese', label: 'Portuguese' },
                { value: 'Japanese', label: 'Japanese' },
                { value: 'Korean', label: 'Korean' },
                { value: 'Turkish', label: 'Turkish' },
                { value: 'Urdu', label: 'Urdu' },
                { value: 'Gujarati', label: 'Gujarati' },
                { value: 'Vietnamese', label: 'Vietnamese' },
                { value: 'French', label: 'French' },
                { value: 'Russian', label: 'Russian' },
                { value: 'Bengali', label: 'Bengali' },
                { value: 'Mandarin Chinese', label: 'Mandarin Chinese' },
                { value: 'Tamil', label: 'Tamil' },
                { value: 'Marathi', label: 'Marathi' },
                { value: 'Hungarian', label: 'Hungarian' },
              ]}
            />
          </Space>
          <Space style={{ float: 'right' }}>
            <Button className="buttonGenText" type='primary' htmlType="submit" onClick={scrollToDiv}>
              Generate Prompt
            </Button>
            <Button className='cancelBtnText' htmlType="button" onClick={onCancel}>
              <FontAwesomeIcon icon={faXmark} size='xl' />
              &nbsp;Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={bgImgStyle}>
        <div className='headText'>
          <Header />
        </div>
        <div className='breadcrump'>
          <Bread />
        </div>
        <div className='headingText'> Search prompt</div>
        <div className='heading2Text'>Describe your product/requirements under the ‘use case’ section. Be as precise as possible to ensure that an accurate prompt can be generated to match your needs.</div>
        {/* <Spin style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} tip="Loading" size="large" spinning={isLoading}>
          <div className="content" />
        </Spin> */}
        <div className='borderText' ref={myDivRef}>
          <RenderForm />
        </div>
        {isLoading && (<div className='skeletonCssText'>
          <Skeleton loading={isLoading} active avatar>
          </Skeleton>
        </div>
        )}
        {isPromptGenerated && !isLoading && (
          <div className='promptResultMainText'>
            <div className='promptResultText'>
              <h2 style={{ marginLeft: '10px', color: 'aliceblue' }}>Prompt:</h2>
              <hr className='hrCSSText' />
              <br />
              <div style={{ marginLeft: '10px', color: 'aliceblue', marginBottom: '10px' }}>
                {responseData}
              </div>
              <div style={{ float: 'right' }}>
                <Button className='copyPromptBtnText' >Search Generated Prompt</Button> &nbsp;
                <CopyToClipboard text={responseData} onCopy={handleCopy}>
                  <Button className='copyPromptBtnText' >
                    <FontAwesomeIcon icon={faCopy} size='lg' />
                    &nbsp;Copy Prompt</Button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToText;
