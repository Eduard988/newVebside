import React, { Component } from 'react';

import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let Path = "/Dialogs/" + props.id

   return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={Path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;