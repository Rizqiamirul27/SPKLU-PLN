import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import SystemSettingUserManagementForm from '../components/SystemSettingUserManagementForm';

const rows = [
  { id: 1, nama: 'Benaaa', email: 'bena@iconplus.co.id', active: true },
  { id: 2, nama: 'Benaaa', email: 'bena@iconplus.co.id', active: true },
  { id: 3, nama: 'Benaaa', email: 'bena@iconplus.co.id', active: true },
  { id: 4, nama: 'Benaaa', email: 'bena@iconplus.co.id', active: true },
  { id: 5, nama: 'Benaaa', email: 'bena@iconplus.co.id', active: true },
];

function SystemSettingUserManagement() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: 'no', headerName: 'No.', width: 60, renderCell: (params) => (params.rowIndex + 1) },
    { field: 'nama', headerName: 'Nama', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'active', headerName: 'Active', width: 100, renderCell: (params) => (
      <Switch checked={params.value} color="primary" />
    ) },
    {
      field: 'aksi',
      headerName: 'Aksi',
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Lihat"><IconButton color="info"><Visibility /></IconButton></Tooltip>
          <Tooltip title="Edit"><IconButton color="primary"><Edit /></IconButton></Tooltip>
          <Tooltip title="Hapus"><IconButton color="error"><Delete /></IconButton></Tooltip>
        </Box>
      ),
    },
  ];

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>System Setting</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>User Management</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Button variant="contained" color="info" startIcon={<Add />} onClick={() => setOpenForm(true)}>Tambah</Button>
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
      <SystemSettingUserManagementForm open={openForm} onClose={() => setOpenForm(false)} row={selectedRow} />
    </Box>
  );
}

export default SystemSettingUserManagement; 