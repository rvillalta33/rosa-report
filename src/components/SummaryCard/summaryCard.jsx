import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '../Cards/cards'
import { Height } from '@mui/icons-material'
import * as React from 'react'
import useCardsController from '../../controllers/cardsController'
const SummaryCard = () => {

    const { propertykpi1, propertykpi2 } = useCardsController();

    return (<>
        <Box sx={{ flexGrow: 1, paddingBottom: '3%' }} >
            <Grid container spacing={2} height='100%'>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card title={"Tempalte KPI 1"} value={propertykpi1} idCard={1} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card title={"Tempalte KPI 2"} value={propertykpi2} idCard={2} />
                </Grid>
            </Grid>
        </Box>
    </>)
}

export default SummaryCard