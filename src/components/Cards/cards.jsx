import * as React from 'react';
import { Typography, Button, Paper, Box, CircularProgress } from '@mui/material'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import './card.css'
import useCardsController from '../../controllers/cardsController'
const Card = (props) => {
    const { title, value, idCard, data, loading } = props;
    const { ApplyFilterTable } = useCardsController();
    const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
    };

    const getArcLabel = (params) => {
        const percent = params.value
        return `${(percent).toFixed(0)}%`;
    };

    return (<>
        <Paper
            elevation={3}
            id={idCard}
            sx={{ borderRadius: '20px' }}

        >
            <Typography variant='h6' display={'flex'} style={{ justifyContent: 'center', paddingTop: '4%' }}>{title}</Typography>
            <Box display={'flex'} style={{ padding: '3%' }}>
                {loading ?
                    <section style={{ display: 'flex', width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}>
                        <CircularProgress style={{ scale: '3' }} />
                    </section>
                    : <PieChart
                        series={[
                            {
                                innerRadius: 30,
                                outerRadius: 100,
                                cornerRadius: 10,
                                paddingAngle: 5,
                                data,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                arcLabel: getArcLabel,
                            },
                        ]}
                        slotProps={{
                            legend: {
                                direction: 'column',
                                position: { vertical: 'middle', horizontal: 'right' },
                                padding: -130,
                            },
                        }}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontSize: 14,
                            },
                        }}
                        {...sizing}
                    />
                }

            </Box>
        </Paper >

    </>)

}

export default Card