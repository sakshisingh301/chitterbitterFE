import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './bread.css';

const Bread = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb separator=">" >
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {pathParts.map((part, index) => (
        <Breadcrumb.Item key={index}>
          <Link to={`/${pathParts.slice(0, index + 1).join('/')}`}>
            {part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Bread;
