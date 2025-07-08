import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function SystemSettingUserRoleSettingForm({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Tambah Role Setting</DialogTitle>
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button variant="contained" onClick={onClose}>Simpan</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SystemSettingUserRoleSettingForm; 