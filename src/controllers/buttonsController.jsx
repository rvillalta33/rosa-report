import * as React from 'react';
import { StoreContext } from '../store/storeContext';
const useButtonsController = () => {

    const { fetchData } = React.useContext(StoreContext);

    const handleReloadData = () => {
        fetchData()
    }

    return {
        handleReloadData,
    };
};
export default useButtonsController;