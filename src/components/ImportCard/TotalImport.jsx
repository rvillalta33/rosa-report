import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Divider } from '@mui/material'
import { GiFishingBoat } from "react-icons/gi"
import { CircleNumber } from '../Common'
const TotalImports = () => {

    return (
        <Grid container columns={20}>
            <Grid xs={20} display={'flex'} justifyContent={'center'} paddingBottom={'3%'}>
                <Typography variant='h5' fontWeight={700}>Total Imports</Typography>
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
            <Grid xs={20} display={'flex'} justifyContent={'center'} paddingTop={'3%'} paddingBottom={'10%'}>
                <Typography variant='h5' fontWeight={700}>Port - Not Ready</Typography>
            </Grid>
            <Grid xs={9}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'}>30</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750} >On Vessel</Typography>
            </Grid>
            <Grid xs={2}><Divider orientation="vertical" /></Grid>
            <Grid xs={9}>
                <Typography variant='h5' fontWeight={700} display={'flex'} justifyContent={'center'}>20</Typography>
                <Typography variant='caption' display={'flex'} justifyContent={'center'} fontWeight={750} >On Hold</Typography>
            </Grid>
        </Grid>
    )
}
export default TotalImports