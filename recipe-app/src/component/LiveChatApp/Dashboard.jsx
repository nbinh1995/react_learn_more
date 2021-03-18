import React, { useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Chip, List, ListItem, ListItemText, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import {CTX} from './Store';

const useStyles = makeStyles(
    theme => ({
        root:{
            padding: theme.spacing(3,2),
            textAlign: 'center',
            margin: '50px',
        },
        flex:{
            display: 'flex',
            alignItems: 'center'
        },
        topicsWindow:{
            width: '30%',
            height: '300px',
            borderRight: '1px solid grey',
        },
        chatWindow:{
            width: '70%',
            height: '300px',
            padding: '20px'
        },
        chatBox:{
            width: '85%',
        },
        button:{
            width: '15%',
        }
    }));

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    const classes = useStyles();
    const [textValue, changeTextValue] = useState('')
    // CTX Store
    const {allChats, sendChatAction ,user} =  useContext(CTX);

    const topics = Object.keys(allChats);

    //local state
    const [activeTopic, changeActiveTopic] = useState(topics[0])
    return (
        <div>
            <Paper className={classes.root}> 
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography component='h5' variant='h5'>
                    {activeTopic}
                </Typography>
            </Paper>
            <div className={classes.flex}>
                <div className={classes.topicsWindow}>
                    <List>
                        {
                            topics.map(topic => (
                                <ListItem key={topic} onClick={e =>changeActiveTopic(e.target.innerText)}>
                                    <ListItemText>{topic}</ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className={classes.chatWindow}>
                    <List>
                        {
                            allChats[activeTopic].map((chat,i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.Chip} />
                                    <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </List>
                </div>
            </div>
            <div className={classes.flex}>
                <TextField 
                label ="Send a chat"
                className={classes.chatBox}
                value={textValue}
                onChange={e => changeTextValue(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={ () =>{
                    sendChatAction({from: user, msg: textValue, topic: activeTopic});
                    changeTextValue('');
                }}>
                    Send
                </Button>
            </div>

        </div>
    );
}

export default Dashboard;