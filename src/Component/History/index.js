import React, {useEffect} from 'react';
import Bread from '../BreadCrump';
import Header from '../Header';
import { Table, Tag, Space } from 'antd';
import { historyRetrieval } from '../../services/promptGenerationService';
import './history.css';

const bgImgStyle = {
    backgroundImage:
        "url('https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.webp?b=1&s=170667a&w=0&k=20&c=9qLJlUTDiRqDq9aOSgGSGDJD9aA2j2rMJ4Tb1Can4i4=')",
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];



const History = () => {
    // useEffect(async (event) => {
    //     // This code will run when the component is first mounted
    //     // You can place any initialization or side-effect code here
    //     console.log('Component mounted.');
    //     let res = await fetchDataFromService(event)
    //     console.log('result', res);
    //   }, []);
    useEffect(() => {
        const fetchData = async (event) => {
          try {
            // This code will run when the component is first mounted
            // You can place any initialization or side-effect code here
            console.log('Component mounted.');
            let res = await fetchDataFromService(event);
            console.log('result', res.historyResponse);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        fetchData();
      }, []);
      

      const fetchDataFromService = async (event) => {
        try {
          const response = await historyRetrieval(event);
          if (response.status === 200) return response.data;
        } catch (error) {
          throw error;
        }
      };
    
    const paginationConfig = {
        pageSize: 5,
        total: data.length,
      };
      const headerRowStyle = () => {
        return {
          backgroundColor: '#333', // Background color for the header row
          color: '#fff', // Text color for the header row
          fontWeight: 'bold', // Font weight for the header row text
        };
      };
    return (
        <div style={{ minHeight: '100vh' }}>
            <div style={bgImgStyle}>
                <div className='headHistory'>
                    <Header />
                </div>
                <div className='breadcrump'>
                    <Bread />
                </div>
                <div className='myHistory'> My History</div>
                <div className='borderHistory'>
                <Table dataSource={data} columns={columns} pagination={paginationConfig} className="custom-table"/>
                </div>
            </div>

        </div>
    );
};

export default History;