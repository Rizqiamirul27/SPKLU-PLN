import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close } from '@mui/icons-material';

const rowsDummy = [
  { id: 1, nama: 'SPKLU Roda 4 UP3 Bekasi', charger: 'Charger A', konektor: 'Merk A', tipe: 'Type A', kapasitas: '1234', statusDate: 'Status A', aksi: '' },
  { id: 2, nama: 'SPKLU Roda 4 UP3 Bogor', charger: 'Charger A', konektor: 'Merk A', tipe: 'Type A', kapasitas: '1234', statusDate: 'Status A', aksi: '' },
  { id: 3, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger A', konektor: 'Merk A', tipe: 'Type A', kapasitas: '1234', statusDate: 'Status A', aksi: '' },
  { id: 4, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger A', konektor: 'Merk A', tipe: 'Type A', kapasitas: '1234', statusDate: 'Status A', aksi: '' },
  { id: 5, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger A', konektor: 'Merk A', tipe: 'Type A', kapasitas: '1234', statusDate: 'Status A', aksi: '' },
];

function MasterConnector() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({
    namaSpklu: '', statusDate: '', namaCharger: '', status: '', namaKonektor: '', statusInfo: '', tipeKonektor: '', kategoriCharger: '', kapasitas: '', detailKonektor: ''
  });
  const [formError, setFormError] = useState({});
  const [rows] = useState(rowsDummy);

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama SPKLU', flex: 1 },
    { field: 'charger', headerName: 'Nama Charger Box', flex: 1 },
    { field: 'konektor', headerName: 'Nama Konektor', flex: 1 },
    { field: 'tipe', headerName: 'Tipe Konektor', flex: 1 },
    { field: 'kapasitas', headerName: 'Kapasitas', flex: 1 },
    { field: 'statusDate', headerName: 'Status Date', flex: 1 },
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
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Connector</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} sx={{ borderRadius: 2 }} onClick={() => setOpenForm(true)}>Tambah</Button>
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
      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Tambah Master ChargerBox</span>
          <IconButton onClick={() => setOpenForm(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <TextField label="Nama SPKLU*" name="namaSpklu" value={form.namaSpklu} onChange={e => setForm({ ...form, namaSpklu: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Status Date*</InputLabel>
              <Select label="Status Date*" name="statusDate" value={form.statusDate} onChange={e => setForm({ ...form, statusDate: e.target.value })} required>
                <MenuItem value="Status A">Status A</MenuItem>
                <MenuItem value="Status B">Status B</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Nama Charger Box*" name="namaCharger" value={form.namaCharger} onChange={e => setForm({ ...form, namaCharger: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Status*</InputLabel>
              <Select label="Status*" name="status" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} required>
                <MenuItem value="Status A">Status A</MenuItem>
                <MenuItem value="Status B">Status B</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Nama Konektor*" name="namaKonektor" value={form.namaKonektor} onChange={e => setForm({ ...form, namaKonektor: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Status Info*</InputLabel>
              <Select label="Status Info*" name="statusInfo" value={form.statusInfo} onChange={e => setForm({ ...form, statusInfo: e.target.value })} required>
                <MenuItem value="Info A">Info A</MenuItem>
                <MenuItem value="Info B">Info B</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Tipe Konektor*</InputLabel>
              <Select label="Tipe Konektor*" name="tipeKonektor" value={form.tipeKonektor} onChange={e => setForm({ ...form, tipeKonektor: e.target.value })} required>
                <MenuItem value="Type A">Type A</MenuItem>
                <MenuItem value="Type B">Type B</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Kategori Charger*</InputLabel>
              <Select label="Kategori Charger*" name="kategoriCharger" value={form.kategoriCharger} onChange={e => setForm({ ...form, kategoriCharger: e.target.value })} required>
                <MenuItem value="Kategori A">Kategori A</MenuItem>
                <MenuItem value="Kategori B">Kategori B</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Kapasitas*" name="kapasitas" value={form.kapasitas} onChange={e => setForm({ ...form, kapasitas: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Detail Konektor*" name="detailKonektor" value={form.detailKonektor} onChange={e => setForm({ ...form, detailKonektor: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained">Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MasterConnector; 