import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;
const About = () => {
  return (
    <div>
      <Title>About</Title>
      <Paragraph style={{ fontSize: '20px' }}>
        Applay Music is the last homework from Applaudo Studio&apos;s React Trainee program. In
        this homework the trainee must put all his effort to show that he is able to put into
        practice everything learned during the program.
      </Paragraph>
    </div>
  );
};

export default About;
