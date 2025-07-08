import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close } from '@mui/icons-material';

const rowsDummy = [
  { id: 1, nama: 'SPKLU Roda 2 UP3 Bekasi', iconcash: 'Jawa Barat', createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' },
  { id: 2, nama: 'SPKLU Roda 2 UP3 Bekasi', iconcash: 'Jawa Barat', createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' },
  { id: 3, nama: 'SPKLU Roda 2 UP3 Bekasi', iconcash: 'Jawa Barat', createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' },
  { id: 4, nama: 'SPKLU Roda 2 UP3 Bekasi', iconcash: 'Jawa Barat', createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' },
  { id: 5, nama: 'SPKLU Roda 2 UP3 Bekasi', iconcash: 'Jawa Barat', createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' },
];

function MasterMitra() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({ nama: '', iconcash: '' });
  const [formError, setFormError] = useState({});
  const [rows, setRows] = useState(rowsDummy);

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama Mitra', flex: 1 },
    { field: 'iconcash', headerName: 'Nomor IconCash', flex: 1 },
    { field: 'createdBy', headerName: 'Created By', flex: 1 },
    { field: 'createdDate', headerName: 'Created Date', flex: 1 },
    { field: 'createdUpi', headerName: 'Created Upi', flex: 1 },
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

  const handleOpenForm = () => {
    setForm({ nama: '', iconcash: '' });
    setFormError({});
    setOpenForm(true);
  };
  const handleCloseForm = () => setOpenForm(false);
  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: '' });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    let err = {};
    if (!form.nama) err.nama = 'Nama Mitra wajib diisi';
    if (!form.iconcash) err.iconcash = 'Nomor IconCash wajib diisi';
    setFormError(err);
    if (Object.keys(err).length === 0) {
      setRows([
        ...rows,
        { id: rows.length + 1, nama: form.nama, iconcash: form.iconcash, createdBy: 'Rose', createdDate: '2024-01-01 00.00.00', createdUpi: '-' }
      ]);
      setOpenForm(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Master Mitra</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} sx={{ borderRadius: 2 }} onClick={handleOpenForm}>Tambah</Button>
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
      <Dialog open={openForm} onClose={handleCloseForm} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Tambah Master Mitra</span>
          <IconButton onClick={handleCloseForm}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Nama Mitra*"
              name="nama"
              value={form.nama}
              onChange={handleFormChange}
              error={!!formError.nama}
              helperText={formError.nama}
              fullWidth
              size="small"
            />
            <TextField
              label="Nomor IconCash*"
              name="iconcash"
              value={form.iconcash}
              onChange={handleFormChange}
              error={!!formError.iconcash}
              helperText={formError.iconcash}
              fullWidth
              size="small"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained" onClick={handleFormSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MasterMitra; 