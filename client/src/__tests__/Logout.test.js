import React, { useState } from 'react';
import { mount,shallow } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { logoutSuccess } from '../redux/userSlice'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
import moxios from 'moxios';
import {updateSuccess,updateError} from '../redux/userSlice';
Enzyme.configure({adapter:new EnzymeAdapter()});

const store = configureStore({reducer:{user:userReducer}})
const setup = () => {
    const history = createMemoryHistory();
    return shallow(<Provider store={store}>
                    <Router location={history.location} navigator={history}>
                        <Sidebar/>
                    </Router>
                </Provider>)
}

test('Sidebar renders successfully',() => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true)
});

// SUCCESSFULL API CALL DISPARCHES LOGOUT SUCCESS ACTION
test('clicking dispatches logout success action',() => {
    store.dispatch(logoutSuccess())
    const newState = store.getState()
    const expectedState = {
        user: { userInfo: null, pending: false, error: false, isLoggedIn: false }
    }
    expect(newState).toEqual(expectedState)
});


