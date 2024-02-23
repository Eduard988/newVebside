import React, {Component} from 'react';
import './App.css';

import Nav from "../Navbar/Nav";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Dialogs from "../Dialog/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "../Music/Music";
import News from "../News/News";
import {addPost} from "../redux/state";



const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='headerrr'>
                    <Header/>
                </div>
                <div className='naviation'>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/Dialogs/*'
                                   element={<Dialogs state={props.state.messagePage} />}/>
                            <Route path='/Content'
                                   element={<Content
                                       state={props.state.contentPage}
                                       addPost={props.addPost} />}/>
                            <Route path='/Music' element={<Music />}/>
                            <Route path='/News' element={<News />}/>
                        </Routes>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;