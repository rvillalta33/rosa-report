import * as React from 'react';
import { StoreContext } from '../store/storeContext';
import useTableController from './tableController';

const useCardsController = () => {

    //LOCAL CONSTANTS   -----------------------------------------------------------------------------------------
    const { responseData, loading } = React.useContext(StoreContext);

    const { ApplyFilterTable } = useTableController();

    const [totalOrdersValues, setTotalOrdersValues] = React.useState({})
    const [shipmentTypeValues, setShipmentTypeValues] = React.useState({})
    const [deliveryTypeValues, setDeliveryTypeValues] = React.useState({})
    React.useEffect(() => {
        if (responseData.data) {
            setTotalOrdersValues(responseData.data.totalOrders)
            setShipmentTypeValues(responseData.data.shipmentType)
            setDeliveryTypeValues(responseData.data.deliveryType)
        }
    }, [responseData])


    const dataTotalOrders = [
        { label: 'Completed', value: totalOrdersValues.completed, color: '#6ec2d5' },
        { label: 'Working', value: totalOrdersValues.working, color: '#5375cf' },
        { label: 'Created', value: totalOrdersValues.created, color: '#69b97b' },
    ];

    const dataShipmentType = [
        { label: 'Import', value: shipmentTypeValues.import, color: '#6ec2d5' },
        { label: 'Export', value: shipmentTypeValues.export, color: '#34589e' },
        { label: 'One Way', value: shipmentTypeValues.oneWay, color: '#5375cf' },
        { label: 'National', value: shipmentTypeValues.national, color: '#69b97b' },
    ];

    const dataDeliveryType = [
        { label: 'Live', value: deliveryTypeValues.live, color: '#6fc1d5' },
        { label: 'Drop', value: deliveryTypeValues.drop, color: '#5375ce' }
    ];
    //USEEFFECT--------------------------------------------------------------------------------------




    return {

        ApplyFilterTable,
        dataTotalOrders,
        dataShipmentType,
        dataDeliveryType,
        loading,

    };
};

export default useCardsController;
