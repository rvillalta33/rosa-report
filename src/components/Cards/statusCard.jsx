import * as React from 'react';
import { Typography, Button, Paper, Box, CircularProgress, Divider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import './card.css'
const StatusCard = (props) => {
    const { title, value, idCard, data, loading } = props;


    return (<>
        <Paper
            elevation={3}
            id={idCard}
            sx={{ borderRadius: '20px' }}
        >
            <Typography variant='h5' display={'flex'} style={{ justifyContent: 'center', paddingTop: '4%', fontWeight: '700' }}>{title}</Typography>
            <Grid container spacing={2} height='100%' paddingBottom={'2%'} columns={17}>
                <Grid xs={5}>
                    <Typography variant='h3' display={'flex'} style={{ justifyContent: 'center', paddingTop: '4%', fontWeight: '700', color: '#ea6863' }}>22</Typography>
                    {idCard != 3 ? <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#ea6863', color: 'white', textAlign: 'center', marginRight: '18%', marginLeft: '18%', borderRadius: '20px' }}>LFD Passed</Typography>
                        : <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#ea6863', color: 'white', textAlign: 'center', marginRight: '18%', marginLeft: '18%', borderRadius: '20px' }}>Missed</Typography>}
                </Grid>
                <Grid xs={1} display={'flex'} justifyContent={'center'}>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid xs={5}>
                    <Typography variant='h3' display={'flex'} style={{ justifyContent: 'center', paddingTop: '4%', fontWeight: '700', color: '#ff8d2b' }}>22</Typography>
                    {idCard != 3 ? <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#ff8d2b', color: 'white', textAlign: 'center', borderRadius: '20px' }}>LFD Approaching</Typography>
                        : <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#ff8d2b', color: 'white', textAlign: 'center', borderRadius: '20px' }}>Approaching</Typography>}
                </Grid>
                <Grid xs={1} display={'flex'} justifyContent={'center'}>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid xs={5}>
                    <Typography variant='h3' display={'flex'} style={{ justifyContent: 'center', paddingTop: '4%', fontWeight: '700', color: '#69b97b' }}>22</Typography>
                    {idCard != 3 ? <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#69b97b', color: 'white', textAlign: 'center', marginRight: '18%', marginLeft: '18%', borderRadius: '20px' }}>LFD Healthy</Typography>
                        : <Typography variant='subtitle2' style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#69b97b', color: 'white', textAlign: 'center', marginRight: '18%', marginLeft: '18%', borderRadius: '20px' }}>On Time</Typography>}

                </Grid>
            </Grid>
        </Paper >

    </>)

}

export default StatusCard