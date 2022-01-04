import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import Main from '../components/Main';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productSlice';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
import moxios from 'moxios';
import {productupdateSuccess,productupdateError,productupdateStart} from '../redux/productSlice';
Enzyme.configure({adapter:new EnzymeAdapter()});


const store = configureStore({reducer:{product:productReducer}})
const setup = () => {
    const history = createMemoryHistory();
    return mount(<Provider store={store}>
                    <Router location={history.location} navigator={history}>
                        <Main/>
                    </Router>
                </Provider>)
}

// SUCCESFULL API CALL SETS THE REDUX STATE WITH PRODUCTS 
describe('submitting sets redux store with productdata',() => {
    const product = 
    [{
        createdAt: "2021-12-08T12:24:01.198Z",
        createdBy: "61a779821118abec1802a901",
        description: "To operationalize culture management by tracking real-time correlations between culture and business Leadership Effectiveness, Employee Engagement, Talent Management, Business Continuity, Customer Engagement, Operational Effectiveness",
        imgUrl: "https://lissen.io/wp-content/uploads/2021/04/training.png",
        name: "CEO CULTURE DASHBOARD",
        price: 12000,
        price_per_month: 1500,
        productFor: ["Business Owner", "Management", "Project", "Business Head", "Human Resource"],
        productUrl: "ttps://lissen.io/cfs/",
        updatedAt: "2021-12-08T12:24:01.198Z",
        _id: "61b0a3e1bfce37130a24cbf5"
    }]
    test('Updating redux product state',() => {
        store.dispatch(productupdateSuccess(product))
        const newState = store.getState()
        const expectedState =  {
            product: {
              productInfo: [{
                createdAt: "2021-12-08T12:24:01.198Z",
                createdBy: "61a779821118abec1802a901",
                description: "To operationalize culture management by tracking real-time correlations between culture and business Leadership Effectiveness, Employee Engagement, Talent Management, Business Continuity, Customer Engagement, Operational Effectiveness",
                imgUrl: "https://lissen.io/wp-content/uploads/2021/04/training.png",
                name: "CEO CULTURE DASHBOARD",
                price: 12000,
                price_per_month: 1500,
                productFor: ["Business Owner", "Management", "Project", "Business Head", "Human Resource"],
                productUrl: "ttps://lissen.io/cfs/",
                updatedAt: "2021-12-08T12:24:01.198Z",
                _id: "61b0a3e1bfce37130a24cbf5"
              }],
              pending: false,
              error: false,
            }
          }
        expect(newState).toEqual(expectedState)
    });
}); 

// UNSUCCESSFULL API CALLS
describe('failed api request calls productupdateError action',() => {
    const store = configureStore({reducer:{product:productReducer}})
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());
    test('failed api call',() => {
        const updateFailedState =  {
            product: { productInfo: [], pending: false, error: true}
          }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({status:500,response:updateFailedState})
        });
        const expected = {
            product: { productInfo: [], pending: false, error: true }
        }
        store.dispatch(productupdateError(updateFailedState));
        const newState = store.getState();
        expect(newState).toEqual(expected)
    })
})