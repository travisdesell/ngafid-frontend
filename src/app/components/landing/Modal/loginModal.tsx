import { useState } from 'react';
import { Modal, Paper, Typography, TextField, Button, Link, IconButton, Box, Container, Grid, FormHelperText } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import axios from 'axios';

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

export default function LoginModal(props: any) {

    
    const { onSubmit, handleModalSwitch, onClose, open } = props;
    
    // console.log(open);
    // console.log(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const handleEmailChange = (e: any) => {console.log(e);setEmail(e.target.value);};
    const handlePasswordChange = (e: any) => {console.log(e.keyCode);setPassword(e.target.value)};
    
    
    const handleSubmit = async () => {
        try {
            // Make a POST request to the login endpoint with email and password
            const apiCall = await axios.post('/api/login', {"email": email,"password": password
        }).then((response) => {
                const { status, data } = response;

                if (status == 200) {
                    const { denied, loggedIn,loggedOut,message } = data;
                    console.log(message);
                    if (loggedIn) {
                        window.location.href = '/welcome';
                    }
                    if (loggedOut){
                        setErrorMsg("Invalid email or password!");
                    }
                }
            })

        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleKeyDown = (e:any)=>{
        if(e.keyCode == 13){
            handleSubmit();
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Paper style={{ maxWidth: 800, margin: 'auto', marginTop: 50, paddingBottom: '25px' }}>
                <Box style={{ padding: 16, display: 'flex', borderBottom: '1px solid #e9ecef', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Typography variant="h6">Login</Typography>
                    <IconButton color="inherit" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box>
                    <Container>

                        <Grid container padding={"0.5rem"}>
                            <Grid item sm={2} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                                Email Address
                            </Grid>

                            <Grid item sm={10} padding={"0.5rem"}>
                                <TextField id="outlined-basic" 
                                fullWidth
                                error={false}
                                type="email" 
                                variant="outlined"
                                // helperText= {"Please Enter Valid email address"} 
                                placeholder="Enter email (required)"
                                onChange={handleEmailChange}
                                value={email}
                                required />
                            </Grid>



                        </Grid>
                        <Grid container padding={"0.5rem"}>
                            <Grid item sm={2} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                                Password
                            </Grid>

                            <Grid item sm={10} padding={"0.5rem"}>
                                <TextField 
                                id="outlined-basic"
                                type="password" 
                                fullWidth 
                                variant="outlined" 
                                onChange={handlePasswordChange}
                                value={password}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter pasword (required)" 
                                required />
                            </Grid>



                        </Grid>

                        {errorMsg !== "" ?
                                        <Grid container padding={"0.5rem"}>
                                            <Grid item sm={2}></Grid>
                                            <Grid item sm={10} padding={"0 0.5rem"}>
                                                <FormHelperText sx={{ fontSize: '0.9rem' }} error={errorMsg !== ""}>
                                                    {errorMsg}
                                                </FormHelperText>
                                            </Grid>
                                        </Grid> : ""}

                        
                        <Link variant="body2" style={{ display: 'block', textAlign: 'right', marginTop: 8 }}>
                            <Button onClick={(e)=>handleModalSwitch(false)}>Forgot password?</Button>
                            
                        </Link>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: 8 }}>
                                Submit
                            </Button>

                        </Box>
                    </Container>
                </Box>
            </Paper>
        </Modal>
    );
};
