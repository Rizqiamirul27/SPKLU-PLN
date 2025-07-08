import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function SystemSettingUserManagementForm({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Tambah User Management</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <TextField label="Email" fullWidth required defaultValue={row?.email || ''} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Unit/Divisi</InputLabel>
              <Select label="Unit/Divisi" defaultValue="">
                <MenuItem value="">Pilih</MenuItem>
                {/* Tambah opsi unit/divisi */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Full Name" fullWidth required defaultValue={row?.nama || ''} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Bidang</InputLabel>
              <Select label="Bidang" defaultValue="">
                <MenuItem value="">Pilih</MenuItem>
                {/* Tambah opsi bidang */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="NIP" fullWidth required />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Jabatan</InputLabel>
              <Select label="Jabatan" defaultValue="">
                <MenuItem value="">Pilih</MenuItem>
                {/* Tambah opsi jabatan */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="No. Hp" fullWidth required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Password" fullWidth required type="password" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Tipe User</InputLabel>
              <Select label="Tipe User" defaultValue="">
                <MenuItem value="">Pilih</MenuItem>
                {/* Tambah opsi tipe user */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Detail Konektor" fullWidth required />
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

export default SystemSettingUserManagementForm; 