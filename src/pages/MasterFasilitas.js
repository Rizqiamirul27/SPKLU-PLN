import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info } from '@mui/icons-material';

const statusColors = {
  'Available': 'success',
  'Maintenance': 'warning',
  'Unavailable': 'error',
};

const rows = [
  { id: 1, nama: 'SPKLU Roda 4 UP3 Bekasi', merk: 'Merk A', type: 'Type A', kode: 'ABCD1', status: 'Available', ket: '-' },
  { id: 2, nama: 'SPKLU Roda 4 UP3 Bogor', merk: 'Merk A', type: 'Type B', kode: 'ABCD2', status: 'Maintenance', ket: '-' },
  { id: 3, nama: 'SPKLU Roda 4 ULP Karang Pilang', merk: 'Merk A', type: 'Type C', kode: 'ABCD3', status: 'Unavailable', ket: '-' },
  { id: 4, nama: 'SPKLU Roda 4 ULP Karang Pilang', merk: 'Merk A', type: 'Type D', kode: 'ABCD4', status: 'Unavailable', ket: '-' },
  { id: 5, nama: 'SPKLU Roda 4 ULP Karang Pilang', merk: 'Merk A', type: 'Type E', kode: 'ABCD5', status: 'Unavailable', ket: '-' },
];

function MasterFasilitas() {
  const [search, setSearch] = useState('');
  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama SPKLU R4', flex: 1 },
    { field: 'merk', headerName: 'Merk', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'kode', headerName: 'Kode Pabrik', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1, renderCell: (params) => (
      <Chip label={params.value} color={statusColors[params.value]} size="small" />
    ) },
    { field: 'ket', headerName: 'Ket', flex: 1 },
    {
      field: 'aksi', headerName: 'Aksi', width: 140, sortable: false, renderCell: () => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ background: '#e3f0fd', color: '#1976d2', borderRadius: 1, p: 0.5, '&:hover': { background: '#bbdefb' } }}><Info /></IconButton>
          <IconButton sx={{ background: '#e6f4ea', color: '#43a047', borderRadius: 1, p: 0.5, '&:hover': { background: '#b9f6ca' } }}><Edit /></IconButton>
          <IconButton sx={{ background: '#fdeaea', color: '#e53935', borderRadius: 1, p: 0.5, '&:hover': { background: '#ffcdd2' } }}><Delete /></IconButton>
        </Box>
      )
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Master Fasilitas</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} sx={{ borderRadius: 2 }}>Tambah</Button>
          </Box>
        </Box>
        <div style={{ width: '100%' }}>
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

export default MasterFasilitas; 