import React from 'react';
import ReactDOM from 'react-dom';
import SortAndFilter from '../components/SortAndFilter';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<SortAndFilter />)
})

describe('Rating Err', () =>{
    it('starts with a "FILTER BY RATING"', () => {
        const wrapper = shallow(<SortAndFilter />)
        const ratingErrState = wrapper.state().ratingErr
        expect(ratingErrState).toEqual('FILTER BY RATING')
    })
})