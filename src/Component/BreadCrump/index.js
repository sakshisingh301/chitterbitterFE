import React from 'react';
import { Breadcrumb } from 'antd';

const Bread = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
        href:'http://localhost:3000'
      },
      {
        title: 'text to text',
        href: 'http://localhost:3000/text',
      },
      {
        title: 'text to image',
        href: 'http://localhost:3000/image',
      },
    ]}
  />
);
  export default Bread;