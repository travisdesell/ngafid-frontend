import { Grid, MenuItem, Select, TextField } from '@mui/material';
import _ from 'lodash';


export default function TextInput(props: any) {
    const {  label, setFunc, regex, errorMsg, type } = props;

    const handleChange = (e: any) => {
        let value = e.target.value.toLowerCase();
        let isValid = regex.test(value);
        if (isValid){
            setFunc(e.target.value);
        }
        else{

        }
        
    }

    const debouncedOnChange = _.debounce(handleChange, 500);

    return (

        <Grid container padding={"0.5rem"}>
            <Grid item sm={1} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                {label}
            </Grid>
            <Grid item sm={11} padding={"0.5rem"}>
                <TextField id={label+"outlined-basic"} fullWidth variant="outlined" type={type ? type : "text"} placeholder="Enter first name" onChange={debouncedOnChange} required />
            </Grid>
        </Grid>

    );



}