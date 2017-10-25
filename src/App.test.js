import React from 'react';
import App from './App';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
import { expect } from 'chai';
import sinon from 'sinon';
import Tile from './components/Tile';

Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).to.have.length(1);
  });

  it('renders 9 <Tile /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Tile)).to.have.length(9);
  })

  it('renders an `.board`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.board')).to.have.length(1);
  });


})
