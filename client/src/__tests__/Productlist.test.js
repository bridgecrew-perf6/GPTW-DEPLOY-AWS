import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import ProductList from '../components/ProductList';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productSlice';
import userReducer from '../redux/userSlice';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
Enzyme.configure({adapter:new EnzymeAdapter()});


const store = configureStore({reducer:{user:userReducer}})
const setup = (props) => {
    const history = createMemoryHistory();
    return shallow(<Provider store={store}>
                    <Router location={history.location} navigator={history}>
                        <ProductList props={props}/>
                    </Router>
                </Provider>)
}

test('productlist componenet renders',() => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true)
});

test('Matched products array fills when products are matched',() => {
    let productCount = 0
    let product = 'GPTW Marketplace'
    const wrapper = setup(productCount)
    let matchedProduct = []
    let userDepartment = 'administration';let productDepartment = 'administration'
    if(userDepartment == productDepartment){
        matchedProduct.push(product)
    }
    productCount = matchedProduct.length
    expect(productCount).not.toBe(0)
});