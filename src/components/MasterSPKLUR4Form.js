import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const statusOptions = [
  { value: 'Available', label: 'Available' },
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'Unavailable', label: 'Unavailable' },
];

function MasterSPKLUR4Form({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{row ? 'Edit' : 'Tambah'} Master SPKLU R4</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}>
            <TextField label="Nama SPKLU" fullWidth required defaultValue={row?.nama || ''} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Operator" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Alamat" fullWidth required defaultValue={row?.alamat || ''} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="URL Start" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="URL Stop" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Latitude" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Longitude" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Tanggal Integrasi" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue={row?.status || ''}>
                {statusOptions.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Daya" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="UID" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="UP3" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="ULP" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Waktu Ketersediaan" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="IP" fullWidth required />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Port" fullWidth required />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button variant="contained" onClick={onClose}>Simpan</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MasterSPKLUR4Form; 