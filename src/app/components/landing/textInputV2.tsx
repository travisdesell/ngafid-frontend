import { FormHelperText, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';


export default function TextInputV2(props: any) {
    const { label, placeholder1,placeholder2, errorMsg1,errorMsg2,value1,matchErrMsg,setFunc1,setFunc2,regex, type,minLength } = props;

    const [err,setErr]=useState('');
    const [err2,setErr2]=useState('');
    const minLen = minLength ? minLength : 0;
    const handleChange = (e: any) => {
        let value = e.target.value.toLowerCase();
        let isValid = regex.test(value);
        console.log(value.length);
        if (isValid && value.length > minLen ){
            setErr('');
            setFunc1(e.target.value);
        }
        else{
            setErr(errorMsg1);
        }
    }
    const handleConfirmChange = (e: any) => {
        let value = e.target.value.toLowerCase();
        let isValid = regex.test(value);
        console.log(value.length);
        if (isValid && value.length > minLen){
            if (value1==value){
                setErr2('');
                setFunc2(value);
            }
            else{
                setErr2(matchErrMsg);
            }
        }
        else{
            setErr2(errorMsg2);
        }
    }

    return (

        <Grid container padding={"0.5rem"}>
            <Grid item sm={1} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                {label}
            </Grid>
            <Grid item sm={11}>
                <Grid container>
                    <Grid item sm={6} padding={"0.5rem"}>
                        <TextField 
                            id="outlined-basic" 
                            fullWidth 
                            type={type ? type : "text"} 
                            placeholder={placeholder1} 
                            error={err == "" ? false:true}
                            onChange={handleChange}
                            helperText={err}
                            required />
                           
                    </Grid>
                    <Grid item sm={6} padding={"0.5rem"}>
                        <TextField 
                            id="outlined-basic" 
                            fullWidth 
                            type={type ? type : "text"} 
                            placeholder={placeholder2} 
                            error={err2 == "" ? false:true}
                            helperText={err2}
                            onChange={handleConfirmChange}
                            required />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    );



}