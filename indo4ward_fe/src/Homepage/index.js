import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Card, Wrapper } from './styles'
import {TextField, Button, Paper} from '@material-ui/core';
import NatureIcon from '@material-ui/icons/Nature';
import SpeedIcon from '@material-ui/icons/Speed';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Homepage = () => {
    const baseUrl = 'https://indo4ward-db.herokuapp.com/api'

    const [open, setOpen] = useState(false)
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    

    const [info, setInfo] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/weather`)
        .then((res) => {
            const info = res.data
            console.log(res)
            setInfo(info)
        })
    }, [])

    const [value, setValue] = useState({
        activity: ''
    })
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/todo`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
    }, [])

    const handleChange = (e) => {
        setValue({
            activity: e.target.value
        })
    }

    const handleSubmit = async () => {
        if(value.activity === ''){
            alert('Insert your activity first!')
        }
        else{
            console.log(value)
            const todo = {
                activity: value.activity
            }
            await axios.post(`${baseUrl}/create-todo`, todo)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            setValue({
                activity: ''
            })
            setOpen(true)
            setTimeout(function(){ 
                window.location.reload() 
            }, 
                1000);
        }

    }

    const handleDelete = (id) => {
        axios.delete(`${baseUrl}/delete-todo/${id}`)
        .then((res) => {
            console.log(res)
            alert("Your activity has successfully deleted")
            window.location.reload()
        })
    }

    return(
        <Wrapper>
            <Flex direction="column" alignItems="center">
                <h1>4 Day Weather Outlook</h1>
                {info.map((info) => (
                    <Card>
                        <Flex direction="column" alignItems="center">
                            <Flex diretion="row" justify="space-around" wrap="wrap">
                                <h4>{info.day}</h4>
                                <h4>{info.forecast}</h4>
                            </Flex>
                            <Flex diretion="row" justify="space-around">
                                <Flex direction="row" justify="center">
                                    <NatureIcon className="icon" />
                                    <p>{info.temperature}</p>
                                </Flex>
                                <Flex direction="row" justify="center">
                                    <SpeedIcon className="icon" />
                                    <p>{info.wind_speed}</p>
                                </Flex>
                            </Flex>
                        </Flex>
                        
                    </Card>
                ))}
            </Flex>
            <Flex direction="column" alignItems="center">
                <h1>To Do List</h1>
                <Flex direction="row" justify="center">
                    <TextField 
                        id="outlined-basic" 
                        label="What's your activity today?" 
                        variant="outlined" 
                        value={value.activity}
                        onChange={handleChange} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit}
                    >
                    Submit
                    </Button>
                </Flex>
                <Flex direction="column" alignItems="center">
                    {items.map((items) => (
                        <Paper className="paper">
                            <Flex direction="row" justify="space-between">
                                <p>{items.activity}</p>
                                <DeleteIcon className="deleteBtn" onClick={() => handleDelete(items.id_todo)} />
                            </Flex>
                        </Paper>
                    ))}
                </Flex>
            </Flex>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Your activity successfully added!
                </Alert>
            </Snackbar>
        </Wrapper>
    )
}

export default Homepage