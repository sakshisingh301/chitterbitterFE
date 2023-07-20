import React from 'react';
import { Breadcrumb } from 'antd';
const Bread = () => (
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">text to text</a>,
        },
        {
          title: <a href="">text to image</a>,
        },
      ]}
    />
  );
  export default Bread;