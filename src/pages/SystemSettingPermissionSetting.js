import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, IconButton, Tooltip, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Edit } from '@mui/icons-material';
import SystemSettingPermissionSettingDetail from '../components/SystemSettingPermissionSettingDetail';

const rows = [
  { id: 1, role: 'Super Admin' },
  { id: 2, role: 'Super Admin' },
  { id: 3, role: 'Super Admin' },
  { id: 4, role: 'Super Admin' },
  { id: 5, role: 'Super Admin' },
];

function SystemSettingPermissionSetting() {
  const [search, setSearch] = useState('');
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: 'no', headerName: 'No.', width: 60, renderCell: (params) => (params.rowIndex + 1) },
    { field: 'role', headerName: 'Role', flex: 1, renderCell: (params) => <Chip label={params.value} color="default" /> },
    {
      field: 'aksi',
      headerName: 'Aksi',
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <Tooltip title="Edit"><IconButton color="primary" onClick={() => { setSelectedRow(params.row); setOpenDetail(true); }}><Edit /></IconButton></Tooltip>
      ),
    },
  ];

  const filteredRows = rows.filter(row => row.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>System Setting</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Permission Setting</Typography>
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
      <SystemSettingPermissionSettingDetail open={openDetail} onClose={() => setOpenDetail(false)} row={selectedRow} />
    </Box>
  );
}

export default SystemSettingPermissionSetting; 