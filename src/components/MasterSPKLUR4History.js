import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography, TableContainer, Paper, Pagination } from '@mui/material';

const dummyHistory = [
  { waktu: '2025-05-19T13:45:00+07:00', pembuat: 'Admin A', entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
  { waktu: '2025-05-19T13:45:00+07:00', pembuat: 'Admin A', entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
  { waktu: '2025-05-19T13:45:00+07:00', pembuat: 'Admin A', entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
];

function MasterSPKLUR4History({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Riwayat</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Waktu Perubahan</TableCell>
                <TableCell>Pembuat</TableCell>
                <TableCell>Entitas</TableCell>
                <TableCell>Sebelum</TableCell>
                <TableCell>Sesudah</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyHistory.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.waktu}</TableCell>
                  <TableCell>{row.pembuat}</TableCell>
                  <TableCell>{row.entitas}</TableCell>
                  <TableCell>{row.sebelum}</TableCell>
                  <TableCell>{row.sesudah}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination count={7} sx={{ mt: 2, mb: 1 }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Kembali</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MasterSPKLUR4History; 