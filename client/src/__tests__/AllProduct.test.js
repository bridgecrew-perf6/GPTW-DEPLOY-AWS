// ALL PRODUCTS TEST
import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import AllProductPage from '../pages/AllProductsPage'
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
Enzyme.configure({adapter:new EnzymeAdapter()});

const store = configureStore({reducer:{user:userReducer}})
const setup = (props) => {
    const history = createMemoryHistory();
    return shallow(<Provider store={store}>
                    <Router location={history.location} navigator={history}>
                        <AllProductPage props={props}/>
                    </Router>
                </Provider>)
}

test('renders all products page successfully',() => {
    const wrapper = setup()
    expect(wrapper.exists()).toBe(true)
})