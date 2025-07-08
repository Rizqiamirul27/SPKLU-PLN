import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, IconButton, Tooltip, Switch, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete } from '@mui/icons-material';
import SystemSettingRoleManagementForm from '../components/SystemSettingRoleManagementForm';

const rows = [
  { id: 1, role: 'Technical Support', keterangan: '-', status: true },
  { id: 2, role: 'Helpdesk Support', keterangan: '-', status: true },
  { id: 3, role: 'Divisi PLN Kantor Pusat', keterangan: '-', status: true },
  { id: 4, role: 'Daftar Lokasi', keterangan: '-', status: true },
  { id: 5, role: 'User Management', keterangan: '-', status: true },
];

function SystemSettingRoleManagement() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: 'no', headerName: 'No.', width: 60, renderCell: (params) => (params.rowIndex + 1) },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'keterangan', headerName: 'Keterangan', flex: 1 },
    { field: 'status', headerName: 'Status', width: 100, renderCell: (params) => (
      <Switch checked={params.value} color="primary" />
    ) },
    {
      field: 'aksi',
      headerName: 'Aksi',
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit"><IconButton color="primary"><Edit /></IconButton></Tooltip>
          <Tooltip title="Hapus"><IconButton color="error"><Delete /></IconButton></Tooltip>
        </Box>
      ),
    },
  ];

  const filteredRows = rows.filter(row => row.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>System Setting</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Role Management</Typography>
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
      <SystemSettingRoleManagementForm open={openForm} onClose={() => setOpenForm(false)} row={selectedRow} />
    </Box>
  );
}

export default SystemSettingRoleManagement; 