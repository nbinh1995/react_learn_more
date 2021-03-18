import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import io from "socket.io-client";

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

const initState ={
    general: [
        {from: 'binh', msg: 'hello'},
        {from: 'ntqb', msg: 'halo'},
        {from: 'nbinh', msg: 'hi'},
    ],
    topic2: [
        {from: 'binh' ,msg: 'hello'},
        {from: 'nbinh' ,msg: 'hi'}
    ]
};


export const CTX = createContext();

const msgReducer = (state,action)=>{
    const {from,msg,topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
        state[topic]=[
            ...state[topic],
            {from:from,msg:msg}
        ];
        return {...state};
        default:
        return state;
    }
}

let socket;

const sendChatAction = (value) => {
    socket.emit("chatMessage",value );
}
function Store(props) {
    // const [allCharts, setAllCharts] = useState({})
    const [allChats, updateChats] = useReducer(msgReducer, initState);
    
    const user ='binh'+Math.random(100).toFixed(0);

    if(!socket){
        socket = io.connect(':3001');
        socket.on("chatMessage", (msg) => {
            updateChats({type:'RECEIVE_MESSAGE',payload: msg});
        });
    }

    return (
        <CTX.Provider value={{allChats ,sendChatAction ,user}}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;