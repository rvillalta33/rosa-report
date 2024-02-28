import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import StatusCard from '../Cards/statusCard'
import { Height } from '@mui/icons-material'
import * as React from 'react'
import useCardsController from '../../controllers/cardsController'
const StatusSummaryCard = () => {

    const { loading, dataTotalOrders, dataShipmentType, dataDeliveryType } = useCardsController();

    return (<>
        <Box sx={{ flexGrow: 1, paddingBottom: '3%' }} >
            <Grid container spacing={2} height='100%'>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <StatusCard title={"Demurrage Status"} data={dataTotalOrders} idCard={1} loading={loading} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <StatusCard title={"Per Diem Status"} data={dataTotalOrders} idCard={2} loading={loading} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <StatusCard title={"Appt. Status"} data={dataTotalOrders} idCard={3} loading={loading} />
                </Grid>
            </Grid>
        </Box>
    </>)
}

export default StatusSummaryCard