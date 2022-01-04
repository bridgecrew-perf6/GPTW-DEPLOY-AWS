// ROUTES TESTING 
import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import App from '../App';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import NotfoundPage from '../pages/NotFoundPage'
import AdminPage from '../pages/AdminPage'
import AllProductsPage from '../pages/AllProductsPage'
// import {MemoryRouter} from 'react-router-dom'
import {MemoryRouter} from 'react-router'
import ProductListPage from '../pages/ProductListPage';
import ProfilePage from '../pages/ProfilePage';
import Loginpage from '../pages/Loginpage';
import RegisterPage from '../pages/RegisterPage';
import Homepage from '../pages/Homepage';
import FaqPage from '../pages/FaqPage'
Enzyme.configure({adapter:new EnzymeAdapter()});
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>

test('Invalid path to redirect to 404 page',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/random']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(AdminPage)).toHaveLength(0);
    expect(wrapper.find(NotfoundPage)).toHaveLength(1);
})

test('Testing protected routes dashboard',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/dashboard']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(AdminPage)).toHaveLength(0);
})

test('Testing protected routes product',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/product']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(ProductListPage)).toHaveLength(0);
})

test('Testing protected routes allproduct',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/allproduct']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(AllProductsPage)).toHaveLength(0);
})

test('Testing protected routes profile',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/profile']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(ProfilePage)).toHaveLength(0);
})

test('Testing protected routes faq',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/faq']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(FaqPage)).toHaveLength(0);
})

test('Login route renders login component',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/login']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(Loginpage)).toHaveLength(1);
})

test('Register route renders register component',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/register']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(RegisterPage)).toHaveLength(1);
})

test('Home route renders home component',() => {
    const store = configureStore({reducer:{user:userReducer}})
    const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </Provider>
    )
    expect(wrapper.find(Homepage)).toHaveLength(1);
})