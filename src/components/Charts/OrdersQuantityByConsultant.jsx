import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';

const OrdersQuantityByConsultant = () => {
    const chartSetting = {
        width: 500,
        height: 400,
    };

    const data = [
        { name: 'Araceli', value: 310 },
        { name: 'Luis', value: 220 },
        { name: 'Fernando', value: 340 },
        { name: 'Ricardo', value: 450 },
        { name: 'Abigail', value: 120 }
    ];

    const valueFormatter = (value) => `${value}`;
    const seriesSet = data.map((item) => ({
        label: item.name,
        dataKey: 'value', // Use 'value' directly as the dataKey
        valueFormatter
    }));

    return (
        <>
            <Paper elevation={3} style={{ borderRadius: '20px' }}>
                <BarChart
                    dataset={data}
                    series={seriesSet}
                    layout="horizontal"
                    {...chartSetting}
                />
            </Paper>
        </>
    );
};

export default OrdersQuantityByConsultant;
