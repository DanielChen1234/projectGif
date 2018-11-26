import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<Search />)
})

describe('picture amount', () =>{
    it('starts with a count of 6', () => {
        const wrapper = shallow(<Search />)
        const pictureAmountState = wrapper.state().pictureAmount
        expect(pictureAmountState).toEqual(6)
    })
})

describe('search paramaters', () =>{
    it('starts as an empty string', () => {
        const wrapper = shallow(<Search />)
        const searchParamatersState = wrapper.state().searchParamaters
        expect(searchParamatersState).toEqual('')
    })
})

describe('MPPA', () =>{
    it('starts as an empty string', () => {
        const wrapper = shallow(<Search />)
        const MPPAState = wrapper.state().MPPA
        expect(MPPAState).toEqual('')
    })
})