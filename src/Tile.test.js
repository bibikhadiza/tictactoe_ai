import React from 'react';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
import { expect } from 'chai';
import sinon from 'sinon';
import Tile from './components/Tile';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from 'enzyme';

describe('<Tile />', () => {
  it('renders 1 <Tile /> component', () => {
    const component = shallow(<Tile />);
    expect(component).to.have.length(1)
  });
})
