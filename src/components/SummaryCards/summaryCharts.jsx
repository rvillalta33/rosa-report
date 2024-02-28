import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import OrdersQuantityByConsultant from '../Charts/OrdersQuantityByConsultant'
const SummaryCharts = () => {


    return (<>

        <Grid container columns={20}>
            <Grid xs={16}>
                <Grid xs={6}>
                    <OrdersQuantityByConsultant />
                </Grid>
                <Grid xs={10}>

                </Grid>
            </Grid>
            <Grid xs={4}>
            </Grid>
        </Grid>

    </>)
}
export default SummaryCharts
