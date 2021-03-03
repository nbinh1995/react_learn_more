import React from 'react';
import PropTypes from 'prop-types';
import { Chip, List, ListItem, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';

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
    return (
        <div>
            <Paper className={classes.root}> 
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography component='h5' variant='h5'>
                    Topic placeholder
                </Typography>
            </Paper>
            <div className={classes.flex}>
                <div className={classes.topicsWindow}>
                    <List>
                        {
                            ['topic'].map(topic => (
                                <ListItem key={topic}>
                                    <ListItemText>{topic}</ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className={classes.chatWindow}>
                    <List>
                        {
                            [{from:'user',msg:'hello'}].map((chat,i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.Chip} />
                                    <Typography variant='p' >{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </List>
                </div>
            </div>
            <div className={classes.flex}>
            
            </div>

        </div>
    );
}

export default Dashboard;