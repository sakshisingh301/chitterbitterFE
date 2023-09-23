
import React, { useState } from 'react';
import Header from '../Header';
import { Button, Form, message, Space, Image, Skeleton } from 'antd';
import './image.css'
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { imageGeneration } from '../../services/promptGenerationService';
import Bread from '../BreadCrump';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from 'file-saver'

const bgImgStyle = {
  backgroundImage:
    "url('https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=')",
  height: '50em',
  backgroundSize: 'cover',
};

const fetchDataFromService = async (event) => {
  try {
    const response = await imageGeneration(event);
    if (response.status === 200) return response.data;
  } catch (error) {
    throw error;
  }
};
const ImageComponent = () => {
  const [isImageGenerated, setIsImageGenerated] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);

//   const downloadImageLocal = (res) => {
//     console.log(res)
//     var data = new Blob([res], {type: 'image/jpeg'});
// var csvURL = window.URL.createObjectURL(data);
// var tempLink = document.createElement('a');
// tempLink.href = csvURL;
// tempLink.setAttribute('download', 'filename.jpeg');
// tempLink.click();
//   }

const downloadImageLocal = (imageUrl) => {
 console.log(imageUrl);
  fetch(imageUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch image (${response.status})`);
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = url;
      tempLink.setAttribute('download', 'image.jpg'); // Set the download filename to 'image.jpg'
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    })
    .catch((error) => {
      console.error('Error downloading image:', error);
    });
};



 


const onViewImage = () => {
  console.log(responseData)
    if (responseData) {
      console.log('come here')
      setVisible(true);
      <Image
        width={200}
        style={{
          display: 'none',
        }}
        preview={{
          visible,
          scaleStep,
          src: responseData,
          onVisibilityChange: (value) => {
            console.log('visibile = ', value)
            setVisible(value);
          }
        }}
      />
    }
  };

 
 
  

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
          label={<span className='labelStyleImage'>Prompt</span>}
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
          <TextArea rows={5} className='textAreaImage' placeholder="Enter your prompt for image generation." />
        </Form.Item>
        <Form.Item>
          <Space>

            <Button className="buttonGenImage" type='primary' htmlType="submit">
              Generate image
            </Button>
            <Button htmlType="button" className='cancelBtnImage' onClick={onCancel}>
              <FontAwesomeIcon icon={faXmark} size='xl' />
              &nbsp;Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };
  
  return (
    <div className='bgImage' style={bgImgStyle}>
      <div>
        <div className='headImage'>
          <Header />
        </div>
        <div className='breadcrump'>
          <Bread />
        </div>
        <div className='headingImage'> Text to Image generator</div>
        <div className='heading2Image'>Simply enter your text and watch the magic happen—our gizmo turns words into beautiful images!</div>
        {/* <Spin style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} tip="Loading" size="large" spinning={isLoading}>
          <div className="content" />
        </Spin> */}
        <div className='borderImage'>
          <RenderForm />
        </div>
        {isLoading && (<div className='skeletonCssImage'>
          <Skeleton loading={isLoading} active avatar>
          </Skeleton>
        </div>
        )}
        {isImageGenerated && !isLoading && (
          <div className='promptResultImage'>
            <h2 style={{ marginLeft: '10px', color: 'aliceblue' }}>Image:</h2>
            <hr className='hrCSS' />
            <br />
            <div style={{ marginLeft: '10px', color: 'aliceblue', marginBottom: '10px' }}>
              Image summary
              </div>
              <div>
              <Button type='primary' onClick={() => setVisible(true)}>
              View Image
            </Button> &nbsp;
            <Button
  htmlType="button"
  onClick={() => {
    console.log('Download Image button clicked');
    downloadImageLocal({responseData});
  }}
>
  <FontAwesomeIcon icon={faDownload} size='xl' />
  &nbsp;Download Image
</Button>



            <Image
        width={200}
        style={{
          display: 'none',
        }}
        preview={{
          visible,
          scaleStep,
          src: responseData,
          onVisibleChange: (value) => {
            console.log('visibile = ', responseData)
            setVisible(value);
          }
        }}
      />
              {/* <img src={responseData} alt="Generated Image" /> */}
              {/* <iframe src={responseData} height="200" width="300" title="Generated image"></iframe> */}

            </div>
          </div>
        )}
      </div>
    </div>)

}
export default ImageComponent;