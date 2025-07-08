import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FilterList, FileDownload } from '@mui/icons-material';

const rows = [
  { id: 1, unit: '11 - Aceh', lokasi: 'SPKLU PLN UP3 LHOKSEUMAWE', merek: 'TEISON', charger: '1Free Standing Dc Fast Charger - Hvt Up3 Lhokseumawe' },
  { id: 2, unit: '11 - Aceh', lokasi: 'SPKLU PLN UP3 LHOKSEUMAWE', merek: 'TEISON', charger: '1Free Standing Dc Fast Charger - Hvt Up3 Lhokseumawe' },
  { id: 3, unit: '11 - Aceh', lokasi: 'SPKLU PLN UP3 LHOKSEUMAWE', merek: 'TEISON', charger: '1Free Standing Dc Fast Charger - Hvt Up3 Lhokseumawe' },
  { id: 4, unit: '11 - Aceh', lokasi: 'SPKLU PLN UP3 LHOKSEUMAWE', merek: 'TEISON', charger: '1Free Standing Dc Fast Charger - Hvt Up3 Lhokseumawe' },
  { id: 5, unit: '11 - Aceh', lokasi: 'SPKLU PLN UP3 LHOKSEUMAWE', merek: 'TEISON', charger: '1Free Standing Dc Fast Charger - Hvt Up3 Lhokseumawe' },
];

const columns = [
  { field: 'no', headerName: 'No.', width: 70, renderCell: (params) => (params.rowIndex + 1 + '.') },
  { field: 'unit', headerName: 'Unit', flex: 1 },
  { field: 'lokasi', headerName: 'Lokasi SPKLU', flex: 2 },
  { field: 'merek', headerName: 'Merek', flex: 1 },
  { field: 'charger', headerName: 'Charger', flex: 2 },
];

function MonitoringSPKLUR4Availability() {
  const [search, setSearch] = useState('');
  const filteredRows = rows.filter(row => row.lokasi.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Monitoring</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Availability</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ mr: 1 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<FileDownload />}>Export Excel</Button>
          </Box>
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

export default MonitoringSPKLUR4Availability; 