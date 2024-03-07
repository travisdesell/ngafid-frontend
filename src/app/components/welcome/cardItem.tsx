import { Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import _ from 'lodash';


export default function CardItem(props: any) {
    const {  title, subTitle } = props;

    return (
        <>
        <Typography component={"h3"} sx={{"marginBottom":"0.5rem","fontFamily":"inherit","fontWeight":"500","lineHeight":"1.2","color":"inherit","fontSize":"1.75rem","marginTop":"0"}}>
                          {title}
                        </Typography>
                        {subTitle}
                        </>
    );



}