import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Avatar, Button, Collapse, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";

import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ComponentFormPopup from './componentChilds/ComponentFormPopup';
import UploadFileToFirebase from './componentChilds/UploadFileToFirebase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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

export default function FirebaseTestConnect() {


    // const [fName, setFName] = React.useState("");
    // const [lName, setLName] = React.useState("");
    const [data, listData] = React.useState([]);
    const [itemSelect, setItemSelect] = React.useState(undefined);
    const [titleForm, setTitleForm] = React.useState("");
    const [dataItemEdit, setDataItemEdit] = React.useState({});

    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    const [openForm, setOpenForm] = React.useState(false);

    const handleOpen = (id) => {
        if (id) {
            setItemSelect(id);
        }
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const handleCloseForm = () => setOpenForm(false);

    React.useEffect(() => {
        let test = setTimeout(() => {
            setOpenAlert(false);
        }, 3000);
        return () => {
            clearTimeout(test);
        }
    }, [openAlert])

    React.useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'UserTyping/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            // tranfer data here
            const temp = []
            for (let id in data) {
                temp.push({
                    id: id,
                    firstName: data[id].firstName,
                    lastName: data[id].lastName,
                    url: data[id].url
                })
            }
            listData(temp);
        });

    }, [])

    // use Firebase insert data
    const handleAdd = (fname, lname, id, imgUrl) => {
        const db = getDatabase();

        // add data to firebase
        set(ref(db, 'UserTyping/' + id), {
            firstName: fname,
            lastName: lname,
            url: imgUrl
        }).then(() => {
            // Data saved successfully!
            console.log("successFully");
        })
            .catch((error) => {
                // The write failed...
                console.log("The write failed...");
            });

        setOpenForm(false);
        setOpenAlert(true);
    }

    const handleDelete = () => {
        if (itemSelect) {
            const db = getDatabase();
            remove(ref(db, '/UserTyping/' + itemSelect));
            setOpen(false);
            setOpenAlert(true);
        }
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const handleShowForm = (type, data) => {
        if (data) {
            setDataItemEdit(data);
        } else {
            setDataItemEdit({});
        }
        setOpenForm(true);
        setTitleForm(type);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Collapse in={openAlert}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => handleCloseAlert()}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }

                >update Success !</Alert>
            </Collapse>

            <Grid container spacing={2}>

                <ComponentFormPopup
                    open={openForm}
                    handleClose={handleCloseForm}
                    type={titleForm}
                    handleAdd={handleAdd}
                    data={dataItemEdit}
                />

                <Grid item xs={4}>
                    <Item>
                        <Button variant="contained" onClick={() => handleShowForm("Add")}>Add User</Button>
                    </Item>
                   
                </Grid>
                <Grid item xs={8}>
                    <Item>List User</Item>
                    <Grid item xs={12} sx={{ py: '1rem' }}>
                        {
                            data.length === 0 ? <Alert severity="warning">No data here — check it out!</Alert>

                                : <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">stt</TableCell>
                                                <TableCell align="center">avatar</TableCell>
                                                <TableCell align="center">First Name</TableCell>
                                                <TableCell align="center">Last Name</TableCell>
                                                <TableCell align="center">delete</TableCell>
                                                <TableCell align="center">edit</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map((item, index) => (
                                                <TableRow
                                                    key={item.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">
                                                        {index}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Avatar alt={item.url} src={item.url} />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {item.firstName}
                                                    </TableCell>
                                                    <TableCell align="center">{item.lastName}</TableCell>
                                                    <TableCell align="center">
                                                        <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => handleOpen(item.id)} color='primary' />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <EditIcon onClick={() => handleShowForm("Edit", item)} sx={{ cursor: 'pointer' }} color='primary' />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Item
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure want to delete item ?
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: "end" }}>
                            <Button variant="contained" onClick={() => handleDelete()}>Delete</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </Box>
    )
}
