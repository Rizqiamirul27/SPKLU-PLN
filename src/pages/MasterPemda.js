import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close } from '@mui/icons-material';

const rowsDummy = [
  { id: 1, nama: 'Pemda Bekasi', kab: '-', pemda: '-', prosen: '-', tarif: '-', uid: '-' },
  { id: 2, nama: 'Pemda Bogor', kab: '-', pemda: '-', prosen: '-', tarif: '-', uid: '-' },
  { id: 3, nama: 'Pemda Karang Pilang', kab: '-', pemda: '-', prosen: '-', tarif: '-', uid: '-' },
  { id: 4, nama: 'Pemda Karang Pilang', kab: '-', pemda: '-', prosen: '-', tarif: '-', uid: '-' },
  { id: 5, nama: 'Pemda Karang Pilang', kab: '-', pemda: '-', prosen: '-', tarif: '-', uid: '-' },
];

function MasterPemda() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({ nama: '', kab: '', pemda: '', prosen: '', tarif: '', uid: '' });
  const [formError, setFormError] = useState({});
  const [rows, setRows] = useState(rowsDummy);

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama Pemda', flex: 1 },
    { field: 'kab', headerName: 'KABMENDAGRI', flex: 1 },
    { field: 'pemda', headerName: 'Pemda', flex: 1 },
    { field: 'prosen', headerName: 'Prosen', flex: 1 },
    { field: 'tarif', headerName: 'Tarif', flex: 1 },
    { field: 'uid', headerName: 'UID', flex: 1 },
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
    setForm({ nama: '', kab: '', pemda: '', prosen: '', tarif: '', uid: '' });
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
    if (!form.nama) err.nama = 'Nama Pemda wajib diisi';
    if (!form.kab) err.kab = 'KABMENDAGRI wajib diisi';
    if (!form.pemda) err.pemda = 'Pemda wajib diisi';
    if (!form.prosen) err.prosen = 'Prosen wajib diisi';
    if (!form.tarif) err.tarif = 'Tarif wajib diisi';
    if (!form.uid) err.uid = 'UID wajib diisi';
    setFormError(err);
    if (Object.keys(err).length === 0) {
      setRows([
        ...rows,
        { id: rows.length + 1, ...form }
      ]);
      setOpenForm(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Master Pemda</Typography>
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
          <span>Tambah Master Pemda</span>
          <IconButton onClick={handleCloseForm}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Nama Pemda*" name="nama" value={form.nama} onChange={handleFormChange} error={!!formError.nama} helperText={formError.nama} fullWidth size="small" />
            <TextField label="KABMENDAGRI*" name="kab" value={form.kab} onChange={handleFormChange} error={!!formError.kab} helperText={formError.kab} fullWidth size="small" />
            <TextField label="Pemda*" name="pemda" value={form.pemda} onChange={handleFormChange} error={!!formError.pemda} helperText={formError.pemda} fullWidth size="small" />
            <TextField label="Prosen*" name="prosen" value={form.prosen} onChange={handleFormChange} error={!!formError.prosen} helperText={formError.prosen} fullWidth size="small" />
            <TextField label="Tarif*" name="tarif" value={form.tarif} onChange={handleFormChange} error={!!formError.tarif} helperText={formError.tarif} fullWidth size="small" />
            <TextField label="UID*" name="uid" value={form.uid} onChange={handleFormChange} error={!!formError.uid} helperText={formError.uid} fullWidth size="small" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained" onClick={handleFormSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MasterPemda; 