import React from 'react';
import ReactDOM from 'react-dom';
import GifsLoader from '../components/Search';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<GifsLoader />)
})