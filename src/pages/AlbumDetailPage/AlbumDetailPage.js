import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
const AlbumDetailPage = props => {
  useEffect(() => {
    console.log(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Album detail page</h1>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
};

export default AlbumDetailPage;
