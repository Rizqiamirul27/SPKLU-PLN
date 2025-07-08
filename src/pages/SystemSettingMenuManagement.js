import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, menu: 'Data SPLU', menuPayment: 'Master SPLU', active: true },
  { id: 2, menu: 'Data Jenis SPLU', menuPayment: 'Master SPLU', active: true },
  { id: 3, menu: 'Monitoring SPLU', menuPayment: 'Master SPLU', active: true },
  { id: 4, menu: 'Daftar Lokasi', menuPayment: 'Master SPLU', active: true },
  { id: 5, menu: 'User Management', menuPayment: 'bena@iconplus.co.id', active: true },
];

function SystemSettingMenuManagement() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'no', headerName: 'No.', width: 60, renderCell: (params) => (params.rowIndex + 1) },
    { field: 'menu', headerName: 'Menu', flex: 1 },
    { field: 'menuPayment', headerName: 'Menu Payment', flex: 1.5 },
    { field: 'active', headerName: 'Active', width: 100, renderCell: (params) => (
      <Switch checked={params.value} color="primary" />
    ) },
  ];

  const filteredRows = rows.filter(row => row.menu.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>System Setting</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Menu Management</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
        </Box>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 100]}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </Paper>
    </Box>
  );
}

export default SystemSettingMenuManagement; 