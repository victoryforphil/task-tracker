import React from 'react';
import Head from 'next/Head';
import Link from 'next/Link';
import {
  Layout,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd';

import 'antd/dist/antd.css';

const {
  Header,
  Content,
} = Layout;
const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-ant-design)</title>
      </Head>
  
      <Header>
        <Link href="/next">
          <a>Go to next page</a>
        </Link>
      </Header>
  
      <Content style={{ padding: 48 }}>
        
      </Content>
    </React.Fragment>
  );
};

export default Home;
