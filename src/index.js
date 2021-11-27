import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';


const style = { background: '#0092ff', padding: '8px 0' };


ReactDOM.render(

  <>
<Divider orientation="left">Horizontal</Divider>
  <Row gutter={32}>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
  </Row>
  <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
