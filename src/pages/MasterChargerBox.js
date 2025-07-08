import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Chip, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close } from '@mui/icons-material';

const statusColors = {
  'Available': 'success',
  'Maintenance': 'warning',
  'Unavailable': 'error',
};

const rowsDummy = [
  { id: 1, nama: 'SPKLU Roda 4 UP3 Bekasi', charger: 'Charger A', merk: 'Merk A', type: 'Type A', kode: 'ABCD1', status: 'Available' },
  { id: 2, nama: 'SPKLU Roda 4 UP3 Bogor', charger: 'Charger B', merk: 'Merk A', type: 'Type B', kode: 'ABCD2', status: 'Maintenance' },
  { id: 3, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger C', merk: 'Merk A', type: 'Type C', kode: 'ABCD3', status: 'Unavailable' },
  { id: 4, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger D', merk: 'Merk A', type: 'Type D', kode: 'ABCD4', status: 'Unavailable' },
  { id: 5, nama: 'SPKLU Roda 4 ULP Karang Pilang', charger: 'Charger E', merk: 'Merk A', type: 'Type E', kode: 'ABCD5', status: 'Unavailable' },
];

function MasterChargerBox() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({
    namaSpklu: '', delay: '', namaCharger: '', koneksi: '', merk: '', gsm: '', type: '', ip: '', kode: '', pelanggan: '', status: '', shelter: '', keterangan: '', tarif: ''
  });
  const [formError, setFormError] = useState({});
  const [rows] = useState(rowsDummy);

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama SPKLU R4', flex: 1 },
    { field: 'charger', headerName: 'Nama ChargerBox', flex: 1 },
    { field: 'merk', headerName: 'Merk', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'kode', headerName: 'Kode Pabrik', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1, renderCell: (params) => (
      <Chip label={params.value} color={statusColors[params.value]} size="small" />
    ) },
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
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Charger Box</Typography>
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
            <TextField label="Delay Charger Box*" name="delay" value={form.delay} onChange={e => setForm({ ...form, delay: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Nama Charger Box*" name="namaCharger" value={form.namaCharger} onChange={e => setForm({ ...form, namaCharger: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Koneksi*</InputLabel>
              <Select label="Koneksi*" name="koneksi" value={form.koneksi} onChange={e => setForm({ ...form, koneksi: e.target.value })} required>
                <MenuItem value="">Koneksi</MenuItem>
                <MenuItem value="Koneksi 1">Koneksi 1</MenuItem>
                <MenuItem value="Koneksi 2">Koneksi 2</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Merk*" name="merk" value={form.merk} onChange={e => setForm({ ...form, merk: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Nomor GSM*" name="gsm" value={form.gsm} onChange={e => setForm({ ...form, gsm: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Type*" name="type" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="IP*" name="ip" value={form.ip} onChange={e => setForm({ ...form, ip: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Kode Pabrik*" name="kode" value={form.kode} onChange={e => setForm({ ...form, kode: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="ID Pelanggan*" name="pelanggan" value={form.pelanggan} onChange={e => setForm({ ...form, pelanggan: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Status*</InputLabel>
              <Select label="Status*" name="status" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} required>
                <MenuItem value="">Status</MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Maintenance">Maintenance</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Shelter ID*" name="shelter" value={form.shelter} onChange={e => setForm({ ...form, shelter: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Keterangan*" name="keterangan" value={form.keterangan} onChange={e => setForm({ ...form, keterangan: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Tarif Dasar*" name="tarif" value={form.tarif} onChange={e => setForm({ ...form, tarif: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained">Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MasterChargerBox; 