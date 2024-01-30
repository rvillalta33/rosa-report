import * as React from 'react';
import { StoreContext } from '../store/storeContext';
import { exportExcel } from '../utils/exportExcel';
import { fetchTemplatesData } from '../services/services';

const useTableController = () => {
    const { tableLocalData, loading, setTableLocalData, responseData } = React.useContext(StoreContext);

    //LOCAL CONSTANTS   -----------------------------------------------------------------------------------------
    const [tableOnTime, setTableOnTime] = React.useState([])
    const [tableNotConsidered, setTableNotConsidered] = React.useState([])
    const columns = [
        {
            field: 'tmp',
            headerName: 'TMP'

        },
        {
            field: 'division',
            headerName: 'Division'
        },
        {
            field: 'customer',
            headerName: 'Customer'
        }
        // {
        //     field: 'created',
        //     headerName: 'Created',
        //     valueFormatter: (params) => params.value || 'N/A',
        //     flex: 1,

        // },
        // {
        //     field: 'total_bill',
        //     headerName: 'Amount',
        //     flex: 1,
        //     valueFormatter: (params) => params.value ? currencyFormatter.format(params.value) : 'N/A',
        //     minwidth: 100,
        // }
    ]

    //USEEFFECT--------------------------------------------------------------------------------------

    React.useEffect(() => {
        setTableOnTime(responseData.on_time_delivery_list)
        setTableNotConsidered(responseData.tmp_not_considered)
    }, [responseData])


    //FUNCTIONS OR METHODS-----------------------------------------------------------------------------------------

    const handleExportExcel = () => {
        exportExcel(tableLocalData, 'Templates');
    }
    
    const getRowId = (row) => row.tmp;

    const ApplyFilterTable = (id) => {
        if (id === 1) {
            setTableLocalData(tableOnTime)
        }
        else if (id === 2) {
            setTableLocalData(tableNotConsidered)
        }
    }





    //-------------------------------------------------------------------------------------------
    //This works to apply stlyes to rows, depending of conditionals

    // const getRowClassName = (params) => {
    //     const expiredClass = params.row.tmps_with_expired_template ? 'expired-row' : '';
    //     const perfectClass = params.row.other ? 'perfect-row' : '';

    //     return `${expiredClass} ${perfectClass}`;
    // };



    return {
        tableLocalData,
        columns,
        getRowId,
        handleExportExcel,
        ApplyFilterTable,
        loading,
    }

}
export default useTableController;