import { FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';


export default function RadioInput(props: any) {
    const { label, data, setFunc, regex, errorMsg, value } = props;

    const handleChange = (e: any) => {
        console.log(e.target.value);
        setFunc(e.target.value);
    }

    return (

        <Grid container padding={"0.5rem"}>
            <Grid item sm={1} padding={"0.5rem"} textAlign={"left"} display={"flex"} alignSelf={"center"} justifyContent={"start"}>
                {label}
            </Grid>
            <Grid item sm={5} padding={"0.5rem"}>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {data.map((element: { value: string; name: string }) => {
                        return <FormControlLabel key={element.value+'-'+element.name} value={element.value} control={<Radio />} label={element.name} />
                    }
                    )
                    }
                    
                </RadioGroup>
            </Grid>
            <Grid item sm={5} padding={"0.5rem"}>
                    
            </Grid>

        </Grid>

    );



}