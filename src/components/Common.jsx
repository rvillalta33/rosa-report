import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const ProgressBar = ({ backgroundColorLeft, backgroundColorRight, value }) => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 25,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: backgroundColorLeft,
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: backgroundColorRight,
        },
    }));

    return (
        <BorderLinearProgress variant="determinate" value={value} />
    );
}

const CircleNumber = ({ number, backgroundColor, variant }) => {

    return (
        <Typography
            variant={variant}
            style={{
                backgroundColor: backgroundColor,
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                width: '60px',
                height: '60px',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '10px',
                alignItems: 'center'
            }}
        >
            {number}
        </Typography>
    );
}






export  { ProgressBar, CircleNumber }