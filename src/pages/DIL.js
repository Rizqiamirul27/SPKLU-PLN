import React from 'react';
import { Box, Paper, Typography, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const rekapRows = [
  { id: 1, upi: 11, uid: 'Aceh', akumulasi: 33, tambah2025: 0, tambah2026: 1 },
  { id: 2, upi: 11, uid: 'Aceh', akumulasi: 33, tambah2025: 0, tambah2026: 1 },
  { id: 3, upi: 11, uid: 'Aceh', akumulasi: 33, tambah2025: 0, tambah2026: 1 },
  { id: 4, upi: 11, uid: 'Aceh', akumulasi: 33, tambah2025: 0, tambah2026: 1 },
  { id: 5, upi: 11, uid: 'Aceh', akumulasi: 33, tambah2025: 0, tambah2026: 1 },
];

const detailRows = [
  { id: 1, idSpklu: '00160', nama: 'Rest Area KM 10.6 Tol Jagorawi', alamat: 'Rest Area Tol Jagorawi KM 10.6, Cipayung, Jakarta Timur', daya: '60 kW' },
  { id: 2, idSpklu: '00160', nama: 'Rest Area KM 10.6 Tol Jagorawi', alamat: 'Rest Area Tol Jagorawi KM 10.6, Cipayung, Jakarta Timur', daya: '60 kW' },
  { id: 3, idSpklu: '00160', nama: 'Rest Area KM 10.6 Tol Jagorawi', alamat: 'Rest Area Tol Jagorawi KM 10.6, Cipayung, Jakarta Timur', daya: '60 kW' },
  { id: 4, idSpklu: '00160', nama: 'Rest Area KM 10.6 Tol Jagorawi', alamat: 'Rest Area Tol Jagorawi KM 10.6, Cipayung, Jakarta Timur', daya: '60 kW' },
  { id: 5, idSpklu: '00160', nama: 'Rest Area KM 10.6 Tol Jagorawi', alamat: 'Rest Area Tol Jagorawi KM 10.6, Cipayung, Jakarta Timur', daya: '60 kW' },
];

function DIL() {
  return (
    <Box sx={{ background: '#f4f8ff', minHeight: '100vh', p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>Dashboard</Typography>
      <Typography variant="subtitle2" sx={{ color: '#7a7a7a', mb: 3 }}>DIL SPKLU R4</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210', mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2, minWidth: 90 }}>Hari Ini</Button>
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Rekap Integrasi SPKLU</Typography>
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#f4f8ff' }}>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Unit UPI</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>UID/UIW</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Akumulasi Saat Ini</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Penambahan Tahun 2025</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Penambahan Tahun 2025</th>
              </tr>
            </thead>
            <tbody>
              {rekapRows.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.upi}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.uid}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.akumulasi}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.tambah2025}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.tambah2026}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        {/* Pagination dummy */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" sx={{ color: '#888' }}>Item Per Page <b>100</b> of <b>345</b></Typography>
          <Box>
            <Button size="small" sx={{ minWidth: 32 }}>1</Button>
            <Button size="small" sx={{ minWidth: 32 }}>2</Button>
            <Button size="small" sx={{ minWidth: 32 }}>3</Button>
            <Button size="small" sx={{ minWidth: 32 }}>...</Button>
            <Button size="small" sx={{ minWidth: 32 }}>7</Button>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210', mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Detail Integrasi SPKLU</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField size="small" placeholder="Search" sx={{ background: '#fff', borderRadius: 2 }} />
            <Button variant="contained" color="info" startIcon={<FilterListIcon />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="info" startIcon={<FileDownloadIcon />} sx={{ borderRadius: 2 }}>Export Excel</Button>
          </Box>
        </Box>
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#f4f8ff' }}>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>ID SPKLU</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Nama SPKLU</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Alamat SPKLU</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Daya SPKLU</th>
              </tr>
            </thead>
            <tbody>
              {detailRows.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.idSpklu}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.nama}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.alamat}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.daya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        {/* Pagination dummy */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" sx={{ color: '#888' }}>Item Per Page <b>100</b> of <b>345</b></Typography>
          <Box>
            <Button size="small" sx={{ minWidth: 32 }}>1</Button>
            <Button size="small" sx={{ minWidth: 32 }}>2</Button>
            <Button size="small" sx={{ minWidth: 32 }}>3</Button>
            <Button size="small" sx={{ minWidth: 32 }}>...</Button>
            <Button size="small" sx={{ minWidth: 32 }}>7</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default DIL; 