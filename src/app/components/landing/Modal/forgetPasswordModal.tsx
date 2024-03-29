import { useState } from 'react';
import { Modal, Paper, Typography, TextField, Button, Link, IconButton, Box, Container, Grid, FormHelperText } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import axios from 'axios';
import _ from 'lodash';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function ForgotPasswordModal(props: any) {

    const { handleModalSwitch, onClose, open } = props;

    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSucess] = useState(false);


    const handleEmailChange = (e: any) => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let value = e.target.value.toLowerCase();
        let isValid = regex.test(value);

        console.log(e);

        if (isValid) {
            setErrorMsg("");
            setEmail(e.target.value);
            setDisabled(false);
        }
        else {
            setDisabled(true);
            setErrorMsg("Please enter a valid email address!");
        }


    };

    const debouncedOnChange = _.debounce(handleEmailChange, 500);

    const handleSubmit = async () => {
        try {
            // Make a POST request to the login endpoint with email and password
            const apiCall = await axios.post('/api/forgot_password', { "email": email }).then((response) => {
                const { status, data } = response;

                if (status == 200) {
                    const { registeredEmail, message } = data;
                    if (registeredEmail) {
                        setSucess(true);
                    }
                    else {
                        setErrorMsg("Please enter a registered email address.");
                    }
                }
            })



        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Paper style={{ maxWidth: 800, margin: 'auto', marginTop: 50, paddingBottom: '25px' }}>
                <Box style={{ padding: 16, display: 'flex', borderBottom: '1px solid #e9ecef', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Typography variant="h6">Forgot Password</Typography>
                    <IconButton color="inherit" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box>
                    <Container>
                        {success ? <Typography variant="subtitle1">A password reset link has been sent to your registered email address. Please click on it to reset your password.</Typography> :
                            <>
                                <Grid container padding={"0.5rem"}>
                                    <Grid item sm={2} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                                        Email Address
                                    </Grid>

                                    <Grid item sm={10} padding={"0.5rem"}>
                                        <TextField id="outlined-basic"
                                            fullWidth

                                            type="email"
                                            variant="outlined"
                                            // helperText= {"Please Enter Valid email address"} 
                                            placeholder="Enter email (required)"
                                            onChange={debouncedOnChange}

                                            required />



                                    </Grid>
                                    {errorMsg !== "" ?
                                        <Grid container padding={"0.5rem"}>
                                            <Grid item sm={2}></Grid>
                                            <Grid item sm={10} padding={"0.5rem"}>
                                                <FormHelperText sx={{ marginTop: '10px' }} error={errorMsg !== ""}>
                                                    {errorMsg}
                                                </FormHelperText>
                                            </Grid>
                                        </Grid> : ""}

                                </Grid>
                                <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                                    <Button variant="contained" color="secondary" onClick={(e) => handleModalSwitch(true)} style={{ marginRight: 8 }}>
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: 8 }} disabled={disabled}>
                                        Submit
                                    </Button>

                                </Box>
                            </>
                        }
                    </Container>
                </Box>
            </Paper>
        </Modal>
    );
};
