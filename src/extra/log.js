import { Layout, Icon, Row, Col, Menu } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const MyFooter = () => (
  <Footer style={{ backgroundColor: '#fff' }}>
    <Row type="flex" justify="space-between" align="middle">
      <Col span={8}>
        <Menu mode="horizontal">
          <Menu.Item>
            <a href="#" className="footer-link">
              ¿Quiénes somos?
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="footer-link">
              Nosotros
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="footer-link">
              Términos y condiciones
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={8}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <a href="#" className="footer-link">
              <FacebookOutlined />
            </a>
          </Col>
          <Col span={8}>
            <a href="#" className="footer-link">
              <TwitterOutlined />
            </a>
          </Col>
          <Col span={8}>
            <a href="#" className="footer-link">
              <InstagramOutlined />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Footer>
);

export default MyFooter;