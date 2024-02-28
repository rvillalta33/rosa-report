import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Divider } from '@mui/material'
import { GiFishingBoat } from "react-icons/gi"
import { CircleNumber } from '../Common'
const SchedDeliveries = () => {
    return (
        <Grid container columns={20}>
            <Grid xs={20} display={'flex'} justifyContent={'center'} paddingBottom={'6%'}>
                <Typography variant='h5' fontWeight={700}>Sched. Deliveries</Typography>
            </Grid>
            <Grid xs={10} display={'flex'} justifyContent={'center'} alignSelf={'center'}>
                <GiFishingBoat style={{ scale: '4' }} />
            </Grid>
            <Grid xs={10} display={'flex'} justifyContent={'center'}>
            <CircleNumber variant={'h4'} backgroundColor={'#6ec2d5'} number={5} />

            </Grid>
            <Grid xs={20} paddingTop={'3%'} >
                <Divider orientation="horizontal" />
            </Grid>
            <Grid xs={6} >
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>3</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750}>Live</Typography>
            </Grid>
            <Grid xs={1} paddingBottom={'3%'}><Divider orientation="vertical" /></Grid>
            <Grid xs={6}>
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>2</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750}>Drop</Typography>
            </Grid>
            <Grid xs={1} paddingBottom={'3%'}><Divider orientation="vertical" /></Grid>
            <Grid xs={6}>
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>1</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750} >In Transit</Typography>
            </Grid>
            <Grid xs={20}>
                <Divider orientation="horizontal" />
            </Grid>
            <Grid xs={6}>
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>13</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750}>Normal</Typography>
            </Grid>
            <Grid xs={1}><Divider orientation="vertical" /></Grid>
            <Grid xs={6}>
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>5</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750} >Overweight</Typography>
            </Grid>
            <Grid xs={1}><Divider orientation="vertical" /></Grid>
            <Grid xs={6}>
                <Typography variant='h6' fontWeight={700} display={'flex'} justifyContent={'center'}>2</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750} >Hazmat</Typography>
            </Grid>

        </Grid>
    )
}
export default SchedDeliveries