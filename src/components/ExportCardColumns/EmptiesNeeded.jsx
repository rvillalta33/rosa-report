import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Divider } from '@mui/material'
import { ProgressBar, CircleNumber } from '../Common'
const EmptiesNeeded = () => {

    return (
        <Grid container columns={20}>
            <Grid xs={20} display={'flex'} justifyContent={'center'} paddingBottom={'8%'}>
                <Typography variant='h5' fontWeight={700}>Empties Needed</Typography>
            </Grid>
            <Grid xs={9} display={'flex'} justifyContent={'center'} alignSelf={'center'}>
                <CircleNumber variant={'h4'} backgroundColor={'#6ec2d5'} number={20} />
            </Grid>
            <Grid xs={2} display={'flex'} justifyContent={'center'}>
                <Divider orientation="vertical" />
            </Grid>
            <Grid xs={9} display={'grid'} alignContent={'center'} >
                <Typography variant='h4' fontWeight={700} display={'flex'} justifyContent={'center'}>15</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'}>Possible ST</Typography>

            </Grid>
            <Grid xs={20} paddingBottom={'7%'} paddingTop={'7%'}>
                <Divider orientation="horizontal" />
            </Grid>
            <Grid xs={3} paddingRight={'3%'}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'end'} color={'#ea6560'}>15</Typography>
            </Grid>
            <Grid xs={14}>
                <ProgressBar backgroundColorLeft='#70cf6b' backgroundColorRight='#ea6560' value={75} />
            </Grid>
            <Grid xs={3} paddingLeft={'3%'}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'start'} color={'#70cf6b'}>5</Typography>
            </Grid>
            <Grid xs={10}>
                <Typography variant='caption' display={'flex'} justifyContent={'start'} fontWeight={700}>Appt. Pending</Typography>
            </Grid>
            <Grid xs={10}>
                <Typography variant='caption' display={'flex'} justifyContent={'end'} fontWeight={700}>Appt. Scheduled</Typography>
            </Grid>
        </Grid>
    )
}
export default EmptiesNeeded