import { Grid, MenuItem, Select } from '@mui/material';


export default function DropdownSelectInput(props: any) {
    const {data,value,label,setFunc,regex,errorMsg} = props;

    const handleChange = (e:any) =>{
        console.log(e.target.value);
        setFunc(e.target.value);
    }

    return (

        <Grid container padding={"0.5rem"}>
            <Grid item sm={1} padding={"0.5rem"} textAlign={"right"} display={"flex"} alignSelf={"center"} justifyContent={"end"}>
                {label}
            </Grid>
            <Grid item sm={11} padding={"0.5rem"}>
                <Select
                    labelId={label+'-select-label'}
                    id={label+'simple-select'}
                    value={value}
                    fullWidth
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange}
                >
                    {data.map((element: { value: string; name: string }) => {
                        return <MenuItem key={element.value+'-'+element.name} value={element.value}>{element.name}</MenuItem>
                    }
                    )
                    }

                </Select>
            </Grid>


        </Grid>
    );



}