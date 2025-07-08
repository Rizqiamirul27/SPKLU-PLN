import React from 'react';
import { Box, Grid, Paper, Typography, Button, TextField, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const rows = [
  { id: 1, nama: 'SPKLU Roda 2 UP3 Bekasi', unit: 4, status: 10, daya: 357 },
  { id: 2, nama: 'SPKLU Roda 2 UP3 Bogor', unit: 2, status: 3500, daya: 261 },
  { id: 3, nama: 'SPKLU Roda 2 ULP Karang Pilang', unit: 3, status: 3500, daya: 230 },
  { id: 4, nama: 'SPKLU Roda 2 ULP Karang Pilang', unit: 3, status: 3500, daya: 230 },
  { id: 5, nama: 'SPKLU Roda 2 ULP Karang Pilang', unit: 3, status: 3500, daya: 230 },
];

function Perencanaan() {
  return (
    <Box sx={{ background: '#f4f8ff', minHeight: '100vh', p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>Dashboard</Typography>
      <Typography variant="subtitle2" sx={{ color: '#7a7a7a', mb: 3 }}>Perencanaan SPKLU R4</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210', mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2, mr: 1, minWidth: 90 }}>Hari Ini</Button>
          <Button variant="contained" color="info" startIcon={<FilterListIcon />} sx={{ borderRadius: 2 }}>Filter</Button>
        </Box>
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
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Detail</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField size="small" placeholder="Search" sx={{ background: '#fff', borderRadius: 2 }} />
            </Box>
          </Box>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#f4f8ff' }}>
                  <th style={{ padding: 10, textAlign: 'left', fontWeight: 600 }}>Nama SPKLU R2</th>
                  <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Unit/UPI</th>
                  <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Status</th>
                  <th style={{ padding: 10, textAlign: 'center', fontWeight: 600 }}>Daya</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: 10 }}>{row.nama}</td>
                    <td style={{ padding: 10, textAlign: 'center' }}>{row.unit}</td>
                    <td style={{ padding: 10, textAlign: 'center' }}>{row.status}</td>
                    <td style={{ padding: 10, textAlign: 'center' }}>{row.daya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}

export default Perencanaan; 