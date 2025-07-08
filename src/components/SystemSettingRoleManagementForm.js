import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function SystemSettingRoleManagementForm({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Tambah Role Management</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Role</InputLabel>
              <Select label="Role" defaultValue={row?.role || ''}>
                <MenuItem value="">Pilih</MenuItem>
                {/* Tambah opsi role */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Keterangan" fullWidth multiline minRows={3} />
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

export default SystemSettingRoleManagementForm; 