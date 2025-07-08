import React from 'react';
import { Box, Grid, Paper, Typography, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const stats = [
  { label: 'Available Charger', value: '1963', color: '#4caf50', bg: 'linear-gradient(135deg, #4caf50 60%, #a5d6a7 100%)', textColor: '#fff' },
  { label: 'In Use Charger', value: '135', color: '#ffb300', bg: 'linear-gradient(135deg, #ffb300 60%, #ffe082 100%)', textColor: '#fff' },
  { label: 'Unavailable Charger', value: '117', color: '#f44336', bg: 'linear-gradient(135deg, #f44336 60%, #ffcdd2 100%)', textColor: '#fff' },
  { label: 'Charger SPKLU Non PLN', value: '1341', color: '#e0e3e8', bg: 'linear-gradient(135deg, #e0e3e8 60%, #f4f8ff 100%)', textColor: '#222' },
];

const rows = [
  { id: 1, nama: 'SPKLU PLN UID JAKARTA', charger: 10, connector: 2218, transaksi: 10, kategori: 'PLN', status: 'Inuse' },
  { id: 2, nama: 'SPKLU PLN UID JAKARTA', charger: 10, connector: 2218, transaksi: 10, kategori: 'PLN', status: 'Inuse' },
  { id: 3, nama: 'SPKLU PLN UID JAKARTA', charger: 10, connector: 2218, transaksi: 10, kategori: 'PLN', status: 'Inuse' },
  { id: 4, nama: 'SPKLU PLN UID JAKARTA', charger: 10, connector: 2218, transaksi: 10, kategori: 'PLN', status: 'Inuse' },
  { id: 5, nama: 'SPKLU PLN UID JAKARTA', charger: 10, connector: 2218, transaksi: 10, kategori: 'PLN', status: 'Inuse' },
];

function Availability() {
  return (
    <Box sx={{ background: '#f4f8ff', minHeight: '100vh', p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>Dashboard</Typography>
      <Typography variant="subtitle2" sx={{ color: '#7a7a7a', mb: 3 }}>Availability SPKLU R4</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210', mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2, mr: 1, minWidth: 90 }}>Hari Ini</Button>
          <Button variant="contained" color="info" startIcon={<FilterListIcon />} sx={{ borderRadius: 2 }}>Filter</Button>
        </Box>
        <Box sx={{ width: '100%', overflowX: 'auto', mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 3, minWidth: 1100 }}>
            {stats.map((s, i) => (
              <Paper key={s.label} sx={{
                p: 3,
                borderRadius: 3,
                background: s.bg,
                color: s.textColor,
                position: 'relative',
                overflow: 'hidden',
                minHeight: 130,
                minWidth: 260,
                width: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                boxShadow: '0 2px 12px #1976d210',
              }}>
                <Box sx={{ position: 'absolute', right: -30, top: -20, width: 120, height: 120, bgcolor: s.color, opacity: 0.18, borderRadius: '50%' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{s.label}</Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1 }}>{s.value}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, borderRadius: 3, mb: 3, minHeight: 320, position: 'relative' }}>
        {/* Map dummy */}
        <img src="https://leafletjs.com/examples/quick-start/leaflet-example.png" alt="Map" style={{ width: '100%', height: 260, borderRadius: 12, objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)', bgcolor: '#fff', borderRadius: 4, boxShadow: 2, p: 3, minWidth: 340, maxWidth: 420 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: '#888' }}>SPKLU</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>SPBKLU PLN ULP Tanah Grogot</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ color: '#888' }}>Jumlah Transaksi</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ textAlign: 'right' }}>1</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: '#888' }}>Jumlah Charger</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ textAlign: 'right' }}>1</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: '#888' }}>Kapasitas Charger</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ textAlign: 'right' }}>7,4 Kw</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ color: '#2196f3', textAlign: 'right', cursor: 'pointer', textDecoration: 'underline' }}>Cek Ketersediaan Plug</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Detail Transaksi</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField size="small" placeholder="Search" sx={{ background: '#fff', borderRadius: 2 }} />
            <Button variant="contained" color="info" startIcon={<FileDownloadIcon />} sx={{ borderRadius: 2 }}>Export Excel</Button>
          </Box>
        </Box>
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#f4f8ff' }}>
                <th style={{ padding: 10, textAlign: 'left', fontWeight: 600 }}>Nama SPKLU</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Jumlah Charger</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Jumlah Connector</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Jumlah Transaksi</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Kategori SPKLU</th>
                <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Status SPKLU</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: 10 }}>{row.nama}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.charger}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.connector}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.transaksi}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.kategori}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>
    </Box>
  );
}

export default Availability; 