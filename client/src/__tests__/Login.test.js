import React, { useState } from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import Login from '../components/Login';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
import moxios from 'moxios';
import {updateSuccess,updateError} from '../redux/userSlice';
Enzyme.configure({adapter:new EnzymeAdapter()});

const store = configureStore({reducer:{user:userReducer}})
const setup = () => {
    const history = createMemoryHistory();
    return mount(<Provider store={store}>
                    <Router location={history.location} navigator={history}>
                        <Login/>
                    </Router>
                </Provider>)
}

describe('render',() => {
    test('Login component renders successfully',() => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true)
    });
});

const mockSetEmail = jest.fn();
jest.mock('react',() => ({
    ...jest.requireActual('react'),
    useState:(initialState) => [initialState,mockSetEmail]
}))

// TESTING USESTATE INPUT VALUE IN THE TATE 
describe('Testing to check if usestate works as expected',() => {
    test('submit button exist',() => {
        const wrapper = setup();
        const submitBtn = wrapper.find('[data-test="submit-btn"]');
        expect(submitBtn.exists()).toBe(true);
    });
    test('Inputs value in email input',() => {
        const mockSetEmail = jest.fn();
        React.useState = jest.fn(() => ["",mockSetEmail]);
        const wrapper = setup();
        const emailInput = wrapper.find('[data-test="email"]');
        const mockEvent = {target:{value:'shehbaz_s@gmail.com'} };
        emailInput.simulate("change",mockEvent);
        expect(mockSetEmail).toHaveBeenCalledWith('shehbaz_s@gmail.com');
    });
    test('Inputs value in password input',() => {
        const mockSetPassword = jest.fn();
        React.useState = jest.fn(() => ["",mockSetPassword]);
        const wrapper = setup();
        const passwordInput = wrapper.find('[data-test="password"]');
        const mockEvent = {target:{value:'12345678'} };
        passwordInput.simulate("change",mockEvent);
        expect(mockSetPassword).toHaveBeenCalledWith('12345678');
    });
});



//  SUCCESSFULL API CALLS
describe('submitting sets redux store with userdata',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const user = {
        department: "Administration",
        email: "kalpeshmaru@kalpesh.com",
        firstname: "Kalpesh",
        industry: "Agriculture, forestry and fishing",
        isAdmin: false,
        lastname: "Maru",
        phone: 9920805299,
        __v: 0,
        _id: "61b30d8faf79a9b54bc7f3f2"
    }
    test('Updating redux user state',() => {
        store.dispatch(updateSuccess(user))
        const newState = store.getState()
        const expectedState =  {
            user: {
              userInfo: {
                department: 'Administration',
                email: 'kalpeshmaru@kalpesh.com',
                firstname: 'Kalpesh',
                industry: 'Agriculture, forestry and fishing',
                isAdmin: false,
                lastname: 'Maru',
                phone: 9920805299,
                __v: 0,
                _id: '61b30d8faf79a9b54bc7f3f2'
              },
              pending: false,
              error: false,
              isLoggedIn: true
            }
          }
        expect(newState).toEqual(expectedState)
    });
});


// API CALLS FOR UNSUCCESSFULL REQUESTS
describe('failed api request calls updateError action',() => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());
    test('failed api call',() => {
        const store = configureStore({reducer:{user:userReducer}})
        const updateFailedState =  {
            user: { userInfo: {}, pending: false, error: true, isLoggedIn: false }
          }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({status:500,response:updateFailedState})
        });
        const expected = {
            user: { userInfo: {}, pending: false, error: true, isLoggedIn: false }
        }
        store.dispatch(updateError(updateFailedState));
        const newState = store.getState();
        expect(newState).toEqual(expected)
    })
})

