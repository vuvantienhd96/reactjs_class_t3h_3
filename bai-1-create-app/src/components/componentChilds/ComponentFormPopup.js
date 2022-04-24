import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ComponentFormPopup({
    open,
    handleClose,
    type,
    handleAdd,
    data
}) {

    const inputElFName = React.useRef(data ? data.firstName : '');
    const inputElLName = React.useRef(data ? data.lastName : '');

    const handleSubmit = () => {
        const { value } = inputElFName.current;
        let id = uuidv4();
        // check form edit 
        if(data && data.id){
            id = data.id;
        }
        handleAdd(value, inputElLName.current.value, id);
    }
    console.log('$data', data);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-titleasdaddd"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>
                        the modal {type}
                    </Typography>
                    <Grid item xs={12} sx={{ py: '1rem' }}>
                        <TextField 
                            inputRef={inputElFName} 
                            name="fName"
                            defaultValue={data ? data.firstName : ''}
                            id="outlined-firstName" label="firstName" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{ py: '1rem' }}>
                        <TextField 
                            inputRef={inputElLName}
                            defaultValue={data ? data.lastName : ''}
                            name="lName" 
                            id="outlined-lastName" label="lastName" variant="outlined" />
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: "end" }}>
                            <Button variant="contained" onClick={handleSubmit}>submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
