import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from 'pages/MainPage/MainPage';
import { RenderCtrl } from 'components/RenderCtrl/RenderCtrl';
import albums from 'tests/fixtures/albums';

test('should render main Page with albums list', () => {
  const wrapper = shallow(<MainPage albums={albums} total={7} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render main Page with error alert on error', () => {
  const wrapper = shallow(
    <RenderCtrl error={true}>
      <MainPage albums={[]} />
    </RenderCtrl>
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render main Page with spinner on loading', () => {
  const wrapper = shallow(
    <RenderCtrl loading={true}>
      <MainPage albums={[]} />
    </RenderCtrl>
  );
  expect(wrapper).toMatchSnapshot();
});
