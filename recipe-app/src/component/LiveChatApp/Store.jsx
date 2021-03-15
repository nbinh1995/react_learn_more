import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { io } from "socket.io-client";

Store.propTypes = {
    
};
    // msg {
    // from:"user"
    // msg: "hi"
    // topic: "general"
    // };
    // state{
    //     topic1[
    //         {msg},{msg},{msg}
    //     ],
    //     topic2[

    //     ]
    // }

const initialState ={
    general: [
        {from: 'binh', msg: 'hello'},
        {from: 'binh', msg: 'hello'},
        {from: 'binh', msg: 'hello'},
    ],
    topic2: [
        {from: 'binh' ,msg: 'hello'},
        {from: 'binh' ,msg: 'hello'}
    ]
};


export const CTX = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                // [topic]:[
                //     ...state[topic],
                //     {from,msg}
                // ]
            }
        default:
        return state;
    }
}

let socket;

const sendChatAction = (socket,value) => {
    socket.emit("chat message",value );
}
function Store(props) {
    if(!socket){
        socket = io(':3001');
    }

    const user ='binh'+Math.random(100).toFixed(2);

    const [allChats, dispatch] = React.useReducer(
        reducer,
        initialState
    );

    return (
        <CTX.Provider value={allChats ,sendChatAction ,user}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;