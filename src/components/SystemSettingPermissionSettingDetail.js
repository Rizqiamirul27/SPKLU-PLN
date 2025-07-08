import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Switch, Box } from '@mui/material';

const rows = [
  { id: 1, menu: 'Data SPLU', parent: 'Data SPLU', access: true, read: true, add: true, edit: true, del: true },
  { id: 2, menu: 'Data Jenis SPLU', parent: 'Data Jenis SPLU', access: true, read: true, add: true, edit: true, del: true },
  { id: 3, menu: 'Monitoring Jenis SPLU', parent: 'Monitoring Jenis SPLU', access: true, read: true, add: true, edit: true, del: true },
  { id: 4, menu: 'Daftar Lokasi', parent: 'Daftar Lokasi', access: true, read: true, add: true, edit: true, del: true },
  { id: 5, menu: 'User Management', parent: 'User Management', access: true, read: true, add: true, edit: true, del: true },
];

function SystemSettingPermissionSettingDetail({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle>Permission Setting</DialogTitle>
      <DialogContent>
        <Box sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Menu</TableCell>
                <TableCell>Menu Parent</TableCell>
                <TableCell>Access</TableCell>
                <TableCell>Read</TableCell>
                <TableCell>Add</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={row.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row.menu}</TableCell>
                  <TableCell>{row.parent}</TableCell>
                  <TableCell><Switch checked={row.access} color="primary" /></TableCell>
                  <TableCell><Switch checked={row.read} color="primary" /></TableCell>
                  <TableCell><Switch checked={row.add} color="primary" /></TableCell>
                  <TableCell><Switch checked={row.edit} color="primary" /></TableCell>
                  <TableCell><Switch checked={row.del} color="primary" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Tutup</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SystemSettingPermissionSettingDetail; 