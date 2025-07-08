import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Chip, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info } from '@mui/icons-material';
import MasterSPKLUR4Form from '../components/MasterSPKLUR4Form';
import MasterSPKLUR4History from '../components/MasterSPKLUR4History';

const statusColors = {
  'Available': 'success',
  'Maintenance': 'warning',
  'Unavailable': 'error',
};

const initialRows = [
  { id: 1, nama: 'SPKLU Roda 4 UP3 Bekasi', alamat: 'Bekasi', status: 'Available', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 2, nama: 'SPKLU Roda 4 UP3 Bogor', alamat: 'Bogor', status: 'Maintenance', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 3, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 4, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 5, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
];

function MasterSPKLUR4() {
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: 'nama', headerName: 'Nama SPKLU R4', flex: 1 },
    { field: 'alamat', headerName: 'Alamat', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1, renderCell: (params) => (
      <Chip label={params.value} color={statusColors[params.value]} size="small" />
    ) },
    { field: 'ip', headerName: 'IP', flex: 0.7 },
    { field: 'port', headerName: 'Port', flex: 0.7 },
    { field: 'url', headerName: 'URL Mulai', flex: 0.7 },
    {
      field: 'aksi',
      headerName: 'Aksi',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Detail Riwayat"><IconButton onClick={() => handleOpenHistory(params.row)}><Info color="primary" /></IconButton></Tooltip>
          <Tooltip title="Edit"><IconButton onClick={() => handleEdit(params.row)}><Edit color="primary" /></IconButton></Tooltip>
          <Tooltip title="Hapus"><IconButton onClick={() => handleDelete(params.row.id)}><Delete color="error" /></IconButton></Tooltip>
        </Box>
      ),
    },
  ];

  const handleAdd = () => {
    setSelectedRow(null);
    setOpenForm(true);
  };
  const handleEdit = (row) => {
    setSelectedRow(row);
    setOpenForm(true);
  };
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const handleOpenHistory = (row) => {
    setSelectedRow(row);
    setOpenHistory(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setSelectedRow(null);
  };
  const handleHistoryClose = () => {
    setOpenHistory(false);
    setSelectedRow(null);
  };

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>SPKLU R4</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ mr: 1 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} onClick={handleAdd}>Tambah</Button>
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
      <MasterSPKLUR4Form open={openForm} onClose={handleFormClose} row={selectedRow} />
      <MasterSPKLUR4History open={openHistory} onClose={handleHistoryClose} row={selectedRow} />
    </Box>
  );
}

export default MasterSPKLUR4; 