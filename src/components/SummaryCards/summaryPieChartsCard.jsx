import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '../Cards/cards'
import { Height } from '@mui/icons-material'
import * as React from 'react'
import useCardsController from '../../controllers/cardsController'
const SummaryPieChartCard = () => {

    const { propertykpi1, propertykpi2, loading, dataTotalOrders,dataShipmentType,dataDeliveryType } = useCardsController();

    return (<>
        <Box sx={{ flexGrow: 1, paddingBottom: '3%' }} >
            <Grid container spacing={2} height='100%'>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <Card title={"Total Orders"} data={dataTotalOrders} idCard={1} loading={loading} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <Card title={"Shipment Type"} data={dataShipmentType} idCard={2} loading={loading} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <Card title={"Delivery Type"} data={dataDeliveryType} idCard={3} loading={loading} />
                </Grid>
            </Grid>
        </Box>
    </>)
}

export default SummaryPieChartCard