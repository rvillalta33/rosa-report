import Grid from '@mui/material/Unstable_Grid2'
import { Paper, Box, Divider } from '@mui/material'
import { Height } from '@mui/icons-material'
import * as React from 'react'
import useCardsController from '../../controllers/cardsController'
import './summaryCards.css'
import TotalExportColumn from '../ExportCardColumns/TotalExportColumn'
import EmptiesNeeded from '../ExportCardColumns/EmptiesNeeded'
import EmptiesInYard from '../ExportCardColumns/EmptiesInYard'
import SchedPickUps from '../ExportCardColumns/SchedPickUps'
import LoadsReady from '../ExportCardColumns/LoadsReady'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material'
const ExportCard = () => {

    

    return (<>

        <Box sx={{ flexGrow: 1, paddingBottom: '4%' }} >
            <Paper
                elevation={3}
                style={{ borderRadius: '20px' }}
            >
                <Grid container spacing={0} paddingTop={'2%'} paddingBottom={'2%'} columns={20} >
                    <Grid xs={1} display={'flex'}>
                        <Typography id='vertical-text' variant='h5' >EXPORT</Typography>
                    </Grid>
                    {/* Primer columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <TotalExportColumn />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Segunda columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <EmptiesNeeded />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Tercer columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <EmptiesInYard />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Cuarta columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container>
                        <SchedPickUps />
                    </Grid>
                    <Grid xs={1} display={'flex'} justifyContent={'center'}>
                        <Divider orientation="vertical" />
                    </Grid>
                    {/* Quinta columna-----------------------------------------------------------------------------------------  */}
                    <Grid xs={3} container paddingRight={'1%'}>
                        <LoadsReady />
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    </>)
}

export default ExportCard