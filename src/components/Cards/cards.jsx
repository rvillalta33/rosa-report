import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Button, Paper } from '@mui/material'
import './card.css'
import useCardsController from '../../controllers/cardsController'
const Card = (props) => {
    const { title, value, idCard } = props;
    const { ApplyFilterTable } = useCardsController();

   
    return (<>
        <Paper
            elevation={24}
            id={idCard}
    
          
        >
            <Grid container spacing={2} height={'150px'} >
                <Grid xs={8} paddingLeft={'7%'} alignSelf={'center'}>
                    <Typography variant="h5" id="tittleTemplate">{title}</Typography>
                    <Typography variant="h5" id="quantityTempaltes">{value} Templates</Typography>
                </Grid>
                <Grid xs={3} id="gridButton">
                    <Button variant="contained" id="btn" onClick={(e) => ApplyFilterTable(idCard)}>Filter</Button>
                </Grid>
            </Grid>
        </Paper>

    </>)

}

export default Card