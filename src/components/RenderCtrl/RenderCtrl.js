import React from 'react';
import { Alert, Spin } from 'antd';

import './render-ctrl.scss';
export const RenderCtrl = props => {
  return props.error ? (
    <Alert
      message='Something went wrong'
      closable
      description={"We're sorry, please try refresh the page"}
      type='error'
      showIcon
    />
  ) : props.loading ? (
    <div className='spinner-container'>
      <Spin className='spinner' size='large' />
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default RenderCtrl;
