import Grid from '@mui/material/Unstable_Grid2'
import { Paper, Box, Divider } from '@mui/material'
import * as React from 'react'
import './summaryCards.css'
import TotalImports from '../ImportCard/TotalImport'
import PortReady from '../ImportCard/PortReady'
import LoadsInYard from '../ImportCard/LoadsInYard'
import SchedDeliveries from '../ImportCard/SchedDeliveries'
import Empties from '../ImportCard/Empties'
import { Typography } from '@mui/material'

const ImportCard = () => {


    return (<>

        <Box sx={{ flexGrow: 1, paddingBottom: '4%' }} >
            <Paper
                elevation={3}
                style={{ borderRadius: '20px' }}
            >
                <Grid container spacing={0} paddingTop={'2%'} paddingBottom={'2%'} columns={20} >
                    <Grid xs={1} display={'flex'}>
                        <Typography id='vertical-text' variant='h5' >IMPORT</Typography>
                    </Grid>
                    {/* Primer columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <TotalImports />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Segunda columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <PortReady />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Tercer columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <LoadsInYard />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Cuarta columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <SchedDeliveries />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Quinta columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container paddingRight={'1%'}>
                        <Empties />
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    </>)
}

export default ImportCard