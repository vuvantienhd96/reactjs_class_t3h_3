import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContactDetailEdit } from '../../actions/contactActions';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

class ContactDetail extends Component {
    constructor(props) {
        super(props);
    }
    id = this.props.match.params.id;

    componentDidMount() {
        this.props.ContactDetailEdit(this.id);
    }

    render() {
        console.log(this.props.detailContact);
        const { detailContact } = this.props
        return (

            <div>
                <h1 className='display-4'>Detail Contact</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <Typography variant="h5" gutterBottom component="div">
                                    {detailContact.name}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {detailContact.email} --- {detailContact.phone}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <img src="https://picsum.photos/200/300?grayscale" alt="something" width="100%" height={300} />
                        </Grid>
                    </Grid>
                </Box>

            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    detailContact: state.contact.detailContact
});
export default connect(mapStatetoProps, { ContactDetailEdit })(ContactDetail);
