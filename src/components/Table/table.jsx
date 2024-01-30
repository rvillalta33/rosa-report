import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import useTableController from '../../controllers/tableController';
import useButtonsController from '../../controllers/buttonsController';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './table.css';

const Table = () => {
    
    const { tableLocalData, columns, getRowId, loading, handleExportExcel } = useTableController();
    const { handleReloadData } = useButtonsController();


    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
            </GridToolbarContainer>
        );
    }


    return (
        <>
            <Button variant="contained" id="btn" onClick={() => handleReloadData()} margin={'1%'} >
                Reload Data
            </Button>


            <Button variant="contained" id="btn" onClick={() => handleExportExcel()}>
                Export to excel
            </Button>


            <Paper elevation={12}>
                <DataGrid
                    style={{ fontSize: '10px', textAlign: 'center', fontWeight: '600' }}
                    rows={tableLocalData || []}
                    columns={columns}
                    getRowId={getRowId}
                    autoHeight
                    density="compact"
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                                currentPage: 1,
                            },
                        },
                    }}
                    slots={{
                        toolbar: CustomToolbar,
                        loadingOverlay: LinearProgress,
                    }}
                    pageSizeOptions={[5, 10, 20, 50, 100]}
                    disableRowSelectionOnClick
                    loading={loading}
                />
            </Paper>
        </>
    );
};

export default Table;
