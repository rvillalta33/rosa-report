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
            field: 'rep',
            headerName: 'Rep #'

        },
        {
            field: 'tmp',
            headerName: 'TMP'
        },
        {
            field: 'terminal',
            headerName: 'Terminal'
        },
        {
            field: 'container',
            headerName: 'Container'

        },
        {
            field: 'chassisNumber',
            headerName: 'Chassis Number'
        },
        {
            field: 'ref_2',
            headerName: 'Ref# 2'
        },
        {
            field: 'mbl',
            headerName: 'MBL #'

        },
        {
            field: 'size_type',
            headerName: 'Size and Type'
        },
        {
            field: 'eta',
            headerName: 'ETA'
        },
        {
            field: 'weight',
            headerName: 'Weight'

        },
        {
            field: 'Type',
            headerName: 'Type'
        },
        {
            field: 'empty_loaded',
            headerName: 'L/E'
        },
        {
            field: 'delivery_type',
            headerName: 'Del Type'

        },
        {
            field: 'live_unlaod_drop',
            headerName: 'Live Unload/Drop'
        },
        {
            field: 'date_available',
            headerName: 'Date Available'
        },
        {
            field: 'container_status',
            headerName: 'Container Status'

        },
        {
            field: 'ops_status',
            headerName: 'Ops Status'

        },
        {
            field: 'date_returned',
            headerName: 'Date Returned'

        },
        {
            field: 'date_outgate',
            headerName: 'Date Outgate'

        },
        {
            field: 'date_ingate',
            headerName: 'Date Ingate'
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
        // setTableOnTime(responseData.on_time_delivery_list)
        // setTableNotConsidered(responseData.tmp_not_considered)
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