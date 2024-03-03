import { Box, Button, Container, FormControlLabel, Grid, IconButton, Input, List, ListItem, MenuItem, Modal, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { Close as CloseIcon } from '@mui/icons-material';
import { useState } from "react";
import DropdownSelectInput from "../dropdownSelectInput";
import countryList from './../../../data/country';
import stateList from './../../../data/state';
import fleetList from './../../../data/fleet';
import TextInput from "../textInput";
import TextInputV2 from "../textInputV2";
import RadioInput from "../radioInput";
import axios from "axios";

export default function CreateAccount(props: any) {
    const { onClose, open,message } = props;

    console.log(message);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [fleetType, setFleetType] = useState('');
    const [phNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = async () => {
        try {
            // Make a POST request to '/create-account' with formData
            //const response = await axios.post('/create-account', formData);
            console.log('Account created successfully!');

            // Reset the form after successful submission
            //dispatch(resetForm());
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordRegex = /[\@\#\$\%\^\&\*\(\)\_\+\!\/\\\.,a-zA-Z0-9 ]*/;

    return (

        <Modal
            open={open}
            onClose={onClose}
            sx={{ overflow: "scroll" }}
        >

            <Paper style={{ maxWidth: 1200, margin: 'auto', marginTop: 50, paddingBottom: '25px' }}>

                <Box padding={"1.25rem"} style={{ 'height': '100%' }}>
                    <Box marginBottom={"0.25rem"} sx={{ backgroundColor: 'white', opacity: "0.8" }}>
                        <Box style={{ display: 'flex', borderBottom: '1px solid #e9ecef', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <Typography padding={"0.75rem 1.25rem"} fontSize={"1.25rem"} variant="h6">Create an NGAFID Account</Typography>
                            <IconButton color="inherit" onClick={onClose}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Box padding={"1.25rem"}>

                            <TextInputV2
                                label={"Email Address"}
                                type="email"
                                placeholder1={"Enter email (required)"}
                                placeholder2={"Confirm email (required)"}
                                value1={email}
                                value2={confirmEmail}
                                setFunc1 = {setEmail}
                                setFunc2 = {setConfirmEmail}
                                regex={emailRegex}
                                errorMsg1="Email was not valid."
                                errorMsg2="Confirmation email was not valid."
                                matchErrMsg="Emails do not match."
                            />

                            <TextInputV2
                                label={"Password"} 
                                type="password" 
                                placeholder1={"Password (required)"} 
                                placeholder2={"Confirm Password (required)"}
                                value1={password}
                                value2={confirmPassword}
                                setFunc1 = {setPassword}
                                setFunc2 = {setConfirmPassword}
                                regex={passwordRegex}
                                errorMsg1="Password was not valid. Must be minimum 10 characters long and consist of letters, numbers, spaces and any of the following special characters: @#$%^&*()_+!/\"
                                errorMsg2="Confirmation ePassword was not valid. Must be minimum 10 characters long and consist of letters, numbers, spaces and any of the following special characters: @#$%^&*()_+!/\"
                                matchErrMsg="Passwords do not match."
                                minLength={10}
                                />

                            <TextInput 
                                label="First Name" 
                                setFunc={setFirstName} 
                                value={firstName} 
                                regex=""
                                errorMsg=""
                                />

                            <TextInput 
                                label="Last Name" 
                                setFunc={setLastName} 
                                value={lastName} 
                                regex=""
                                errorMsg=""
                                />

                            <DropdownSelectInput 
                                label="Country" 
                                data={countryList} 
                                value={country} 
                                setFunc={setCountry} 
                                />
                            
                            {country === "USA" ?
                                <DropdownSelectInput label="State" data={stateList} value={state} setFunc={setState} />
                                : ""
                            }

                            <TextInput 
                                label="City" 
                                setFunc={setCity} 
                                value={city}
                                regex=""
                                errorMsg=""
                                />

                            <TextInput 
                                label="Address" 
                                setFunc={setAddress} 
                                value={address} 
                                regex=""
                                errorMsg=""
                                />

                            <TextInput 
                                label="Phone Number" 
                                setFunc={setPhoneNumber} 
                                value={phNumber} 
                                type="tel"
                                regex=""
                                errorMsg="" 
                                />

                            <TextInput 
                                label="Zip Code" 
                                setFunc={setZipcode} 
                                value={zipcode} 
                                type="tel" 
                                regex=""
                                errorMsg=""
                                />

                            <RadioInput 
                                label="Account Type" 
                                data={fleetList}
                                value={fleetType} 
                                setFunc={setFleetType}
                                regex=""
                                errorMsg=""
                                />


                            <Grid container padding={"0.5rem"}>
                                <Grid item sm={11} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>

                                </Grid>
                                <Grid item sm={1} padding={"0.5rem"}>
                                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: 8 }} disabled={true}>
                                        Submit
                                    </Button>
                                </Grid>


                            </Grid>

                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Modal>

    );
}

export async function getServerSideProps() { 
    return { 
        props: { message: "Welcome to the About Page" }, 
    }; 
}

// export async function getServerSideProps() {
//     // Fetch data from an API or any other source
//     let result;

//     // Make a POST request to the login endpoint with email and password
//     const apiCall = await axios.get('/api/getfleetid').then((response) => {
//         const { status, data } = response;

//         if (status == 200) {
//             result = data;
//         }
//     })

   
  
//     // Pass the fetched data as a prop to the component
//     return {
//       props: {
//         result,
//       },
//     };
//   }

