import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tabs, Tab, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info } from '@mui/icons-material';

const dataUnitInduk = [
  { id: 1, nama: 'Unit Induk Bekasi', satuan: '-', upi: '-' },
  { id: 2, nama: 'Unit Induk Bogor', satuan: '-', upi: '-' },
  { id: 3, nama: 'Unit Induk Karang Pilang', satuan: '-', upi: '-' },
  { id: 4, nama: 'Unit Induk Karang Pilang', satuan: '-', upi: '-' },
  { id: 5, nama: '-', satuan: '-', upi: '-' },
];
const dataUP3 = [
  { id: 1, nama: 'UP3 Bekasi', unitInduk: 'Unit Induk Bekasi', satuan: '-', up: '-' },
  { id: 2, nama: 'UP3 Bogor', unitInduk: 'Unit Induk Bogor', satuan: '-', up: '-' },
  { id: 3, nama: 'UP3 Karang Pilang', unitInduk: 'Unit Induk Karang Pilang', satuan: '-', up: '-' },
  { id: 4, nama: 'UP3 Karang Pilang', unitInduk: 'Unit Induk Karang Pilang', satuan: '-', up: '-' },
  { id: 5, nama: 'UP3 Karang Pilang', unitInduk: 'Unit Induk Karang Pilang', satuan: '-', up: '-' },
];
const dataULP = [
  { id: 1, nama: 'ULP Bekasi', unitInduk: '-', up3: 'UP3 Bekasi', satuan: '-', ui: '-' },
  { id: 2, nama: 'ULP Bogor', unitInduk: '-', up3: 'UP3 Bogor', satuan: '-', ui: '-' },
  { id: 3, nama: 'ULP Karang Pilang', unitInduk: '-', up3: 'UP3 Karang Pilang', satuan: '-', ui: '-' },
  { id: 4, nama: 'ULP Karang Pilang', unitInduk: '-', up3: 'UP3 Karang Pilang', satuan: '-', ui: '-' },
  { id: 5, nama: 'ULP Karang Pilang', unitInduk: '-', up3: 'UP3 Karang Pilang', satuan: '-', ui: '-' },
];

function MasterUnit() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');

  const handleTab = (e, v) => setTab(v);

  const columnsUnitInduk = [
    { field: 'nama', headerName: 'Nama Unit Induk', flex: 1 },
    { field: 'satuan', headerName: 'Satuan UPI', flex: 1 },
    { field: 'upi', headerName: 'Nama UPI', flex: 1 },
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
  const columnsUP3 = [
    { field: 'nama', headerName: 'Nama UP3', flex: 1 },
    { field: 'unitInduk', headerName: 'Nama Unit Induk', flex: 1 },
    { field: 'satuan', headerName: 'Satuan UP', flex: 1 },
    { field: 'up', headerName: 'Nama UP', flex: 1 },
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
  const columnsULP = [
    { field: 'nama', headerName: 'Nama ULP', flex: 1 },
    { field: 'unitInduk', headerName: 'Nama Unit Induk', flex: 1 },
    { field: 'up3', headerName: 'Nama UP3', flex: 1 },
    { field: 'satuan', headerName: 'Satuan UP', flex: 1 },
    { field: 'ui', headerName: 'Nama UI', flex: 1 },
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

  const getRows = () => {
    if (tab === 0) return dataUnitInduk.filter(r => r.nama.toLowerCase().includes(search.toLowerCase()));
    if (tab === 1) return dataUP3.filter(r => r.nama.toLowerCase().includes(search.toLowerCase()));
    if (tab === 2) return dataULP.filter(r => r.nama.toLowerCase().includes(search.toLowerCase()));
    return [];
  };
  const getColumns = () => {
    if (tab === 0) return columnsUnitInduk;
    if (tab === 1) return columnsUP3;
    if (tab === 2) return columnsULP;
    return [];
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Master Unit</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210' }}>
        <Tabs value={tab} onChange={handleTab} sx={{ mb: 2 }}>
          <Tab label="Unit Induk" />
          <Tab label="UP3" />
          <Tab label="ULP" />
        </Tabs>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} sx={{ borderRadius: 2 }}>Tambah</Button>
          </Box>
        </Box>
        <div style={{ width: '100%' }}>
          <DataGrid
            rows={getRows()}
            columns={getColumns()}
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

export default MasterUnit; 