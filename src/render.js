import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";
import {root} from "./index";
import state from "./redux/state";



export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );

}

