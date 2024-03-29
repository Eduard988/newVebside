import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";

import state from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );

}

rerenderEntireTree ();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
