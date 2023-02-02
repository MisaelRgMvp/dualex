import React from 'react';
import { Layout, Icon, Row, Col, Menu } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Footer } = Layout;

const MyFooter = () => (
  
  <Footer style={{ backgroundColor: '#fff' }}>
    <Row type="flex" justify="space-between" align="middle">
      <Col span={8}>
        <Menu mode="horizontal">
         

          <Menu.Item>
            <Link to='/terms'>
              Términos y condiciones
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={8}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
              <FacebookOutlined />
          </Col>
          <Col span={8}>
              <TwitterOutlined />
          </Col>
          <Col span={8}>
              <InstagramOutlined />
          </Col>
        </Row>
      </Col>
    </Row>
  </Footer>
);

export default MyFooter;