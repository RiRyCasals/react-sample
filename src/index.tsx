import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import StateCounter from './components/UseStateSample';
import ReducerCounter from './components/UseReducerSample';
import MemoFizzBuzz from './components/Parent'
import CallbackButton from './components/UseCallbackSample'
import UseMemoSample from './components/UseMemoSample';
import Clock from './components/Clock';
import UseContextSample from './components/UseContextSample'
import ImageUploader from './components/UseRefSample';
import UseImperativeHandle from './components/UseImperativeHandle';
import Input from './components/UseDebugValueSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Hello/>
    <Name/>
    <Message/>
    <Parent/>
    <Page/>
    <StateCounter initialValue={0}/>
    <ReducerCounter initialValue={0}/>
    <MemoFizzBuzz/>
    <CallbackButton/>
    <UseMemoSample/>
    <Clock/>
    <UseContextSample/>
    <ImageUploader/>
    <UseImperativeHandle/>
    <Input/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
