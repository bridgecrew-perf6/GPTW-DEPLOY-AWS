import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Router} from 'react-router-dom'
import moxios from 'moxios';
import FaqSearch from '../components/FaqSearch';
Enzyme.configure({adapter:new EnzymeAdapter()});

test('check if faq component exists',() => {
    const wrapper = shallow(<FaqSearch />)
    expect(wrapper.exists()).toBe(true)
})

beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
})

test('Successfull api call',async () => {
    const expectedResult = [{
        answer: "The CEO Culture Dashboard is a research-based, real-time feedback tool that has been designed keeping the CEO’s unique culture-challenge in mind – that culture takes over when the CEO leaves the room.",
        category: "Pricing",
        createdAt: "2021-12-24T10:20:40.880Z",
        createdBy: "61c57493858fad953c8f3cab",
        question: "What is the CEO Culture Dashboard?",
        updatedAt: "2021-12-24T10:20:40.880Z",
        __v: 0,
        _id: "61c59ef870ce279708eb22b2"
    }]

    moxios.wait(() => {
         const request = moxios.requests.mostRecent()
         request.respondWith({ status: 200, response: expectedResult }) //mocked response
    })
    const wrapper = mount(<FaqSearch />)
    const faqList = wrapper.find('[data-test="faq-list"]');
    expect(wrapper.exists()).toBe(true)
});