import * as React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer } = Layout;

interface Props {
  children?: React.ReactNode
}

const AppLayout: React.FC<Props> = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorWhite },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }} color="primary">
        <strong style={{ color: colorWhite, marginRight: ".1875rem" }}>GitHub</strong>
        <span style={{ color: colorWhite }}>Jobs</span>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default AppLayout;