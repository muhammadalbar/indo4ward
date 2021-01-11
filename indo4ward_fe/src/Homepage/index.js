import React, { useState } from 'react'
import { Flex, Wrapper } from './styles'
import {TextField, Button, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Homepage = () => {

    const [value, setValue] = useState({
        activity: ''
    })
    const handleChange = (e) => {
        setValue({
            activity: e.target.value
        })
    }
    const handleSubmit = () => {
        if(value.activity === ''){
            alert('Insert your activity first!')
        }
        else{
            console.log(value)
            setValue({
                activity: ''
            })
        }

    }
    const handleDelete = () => {
        alert('Delete function is not ready yet')
    }

    return(
        <Wrapper>
            <Flex direction="column" alignItems="center">
                <h1>To Do List</h1>
                <Flex direction="row" justify="center">
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
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
                    <Paper className="paper">
                        <Flex direction="row" justify="space-between">
                            <p>Belanja ke supermarket</p>
                            <DeleteIcon className="deleteBtn" onClick={handleDelete} />
                        </Flex>
                    </Paper>

                </Flex>
            </Flex>
        </Wrapper>
    )
}

export default Homepage