import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Chip, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const detailRows = [
  { id: 1, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00', tglStart: '2025-05-19T13:45:00+07:00', tglStop: '2025-05-19T13:45:00+07:00', durasi: '10 menit', dayaPesan: 1000, dayaPakai: 1000, status: 'Belum Dibayar', keterangan: 'Koneksi Terputus' },
  { id: 2, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00', tglStart: '2025-05-19T13:45:00+07:00', tglStop: '2025-05-19T13:45:00+07:00', durasi: '10 menit', dayaPesan: 1000, dayaPakai: 1000, status: 'Sudah Dibayar', keterangan: 'Waktu Transaksi Habis' },
  { id: 3, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00', tglStart: '2025-05-19T13:45:00+07:00', tglStop: '2025-05-19T13:45:00+07:00', durasi: '10 menit', dayaPesan: 1000, dayaPakai: 1000, status: 'Auto Pengisian', keterangan: 'Transaksi Belum Dibayar' },
  { id: 4, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00', tglStart: '2025-05-19T13:45:00+07:00', tglStop: '2025-05-19T13:45:00+07:00', durasi: '10 menit', dayaPesan: 1000, dayaPakai: 1000, status: 'Berhenti Pengisian', keterangan: 'Pengisian Berhenti (Colokan Dicabut)' },
  { id: 5, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00', tglStart: '2025-05-19T13:45:00+07:00', tglStop: '2025-05-19T13:45:00+07:00', durasi: '10 menit', dayaPesan: 1000, dayaPakai: 1000, status: 'Selesai/Refund', keterangan: 'Pengisian Berhenti (Belum Dicabut)' },
];

const statusColor = {
  'Belum Dibayar': 'error',
  'Sudah Dibayar': 'success',
  'Auto Pengisian': 'warning',
  'Berhenti Pengisian': 'info',
  'Selesai/Refund': 'primary',
};

function TransactionSPKLUR4Detail({ open, onClose, row }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle>Detail Transaction</DialogTitle>
      <DialogContent>
        <Box sx={{ overflowX: 'auto' }}>
          <Paper sx={{ minWidth: 1200 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>ID Transaksi</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>SPKLU R4</TableCell>
                  <TableCell>Konektor</TableCell>
                  <TableCell>Tanggal Catat</TableCell>
                  <TableCell>Tanggal Start</TableCell>
                  <TableCell>Tanggal Stop</TableCell>
                  <TableCell>Durasi Charging</TableCell>
                  <TableCell>Daya Pesan (kWh)</TableCell>
                  <TableCell>Daya Pakai (kWh)</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Keterangan</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detailRows.map((row, idx) => (
                  <TableRow key={row.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{row.idTransaksi}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.spklu}</TableCell>
                    <TableCell>{row.konektor}</TableCell>
                    <TableCell>{row.tanggal}</TableCell>
                    <TableCell>{row.tglStart}</TableCell>
                    <TableCell>{row.tglStop}</TableCell>
                    <TableCell>{row.durasi}</TableCell>
                    <TableCell>{row.dayaPesan}</TableCell>
                    <TableCell>{row.dayaPakai}</TableCell>
                    <TableCell><Chip label={row.status} color={statusColor[row.status]} /></TableCell>
                    <TableCell>{row.keterangan}</TableCell>
                    <TableCell>
                      <IconButton color="success"><Edit /></IconButton>
                      <IconButton color="error"><Delete /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Tutup</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TransactionSPKLUR4Detail; 