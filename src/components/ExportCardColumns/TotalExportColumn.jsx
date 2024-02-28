import Grid from "@mui/material/Unstable_Grid2"
import { Typography, Divider } from "@mui/material"
import { GiFishingBoat } from "react-icons/gi"
import { CircleNumber } from "../Common"
const TotalExportColumn = () => {

    return (
        <Grid container columns={20}>
            <Grid xs={20} display={'flex'} justifyContent={'center'} paddingBottom={'3%'}>
                <Typography variant='h5' fontWeight={700}>Total Export</Typography>
            </Grid>
            <Grid xs={10} display={'flex'} justifyContent={'center'} alignSelf={'center'}>
                <GiFishingBoat style={{ scale: '4' }} />
            </Grid>
            <Grid xs={10} display={'flex'} justifyContent={'center'}>
                <CircleNumber variant={'h4'} backgroundColor={'#6ec2d5'} number={100} />
            </Grid>
            <Grid xs={20} paddingTop={'10%'}>
                <Divider orientation="horizontal" />
            </Grid>
            <Grid xs={9} paddingBottom={'5%'} paddingTop={'5%'}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'} color={'#56c9db'}>30</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Missing</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Cut offs</Typography>
            </Grid>
            <Grid xs={2} paddingBottom={'5%'} paddingTop={'5%'} display={'flex'} justifyContent={'center'}><Divider orientation="vertical" /></Grid>
            <Grid xs={9} paddingBottom={'5%'} paddingTop={'5%'}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'} color={'#ff6c6c'}>20</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Cut Off</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Missed</Typography>
            </Grid>
            <Grid xs={9}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'} color={'#ff8d2b'}>30</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Cut Off</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Approaching</Typography>
            </Grid>
            <Grid xs={2} display={'flex'} justifyContent={'center'}><Divider orientation="vertical" /></Grid>
            <Grid xs={9}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'} color={'#9ece62'}>20</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Cut Off</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={700}>Healthy</Typography>
            </Grid>
        </Grid>
    )

}
export default TotalExportColumn