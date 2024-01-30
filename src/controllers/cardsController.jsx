import * as React from 'react';
import { StoreContext } from '../store/storeContext';
import useTableController from './tableController';

const useCardsController = () => {

    //LOCAL CONSTANTS   -----------------------------------------------------------------------------------------
    const { responseData } = React.useContext(StoreContext);
    const [propertykpi1, setPropertykpi1] = React.useState(0)
    const [propertykpi2, setPropertykpi2] = React.useState(0)
    const { ApplyFilterTable } = useTableController();


    //USEEFFECT--------------------------------------------------------------------------------------

    React.useEffect(() => {
        if (responseData.length !== 0) {
            setPropertykpi1(responseData.on_time_delivery_list.length)
            setPropertykpi2(responseData.tmp_not_considered.length)
        }
    }, [responseData])




    return {
        propertykpi1,
        propertykpi2,
        ApplyFilterTable,
    };
};

export default useCardsController;
