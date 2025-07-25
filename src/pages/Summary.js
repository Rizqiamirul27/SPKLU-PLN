import React from 'react';
import { Box, Grid, Paper, Typography, Button, IconButton, Chip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const stats = [
  {
    label: 'Total Transaksi (Order)',
    value: '719',
    color: '#e0e3e8',
    textColor: '#222',
    bg: 'linear-gradient(135deg, #e0e3e8 60%, #f4f8ff 100%)',
  },
  {
    label: 'Total kWh Terjual (kWh)',
    value: '17.551,75',
    color: '#4caf50',
    textColor: '#fff',
    bg: 'linear-gradient(135deg, #4caf50 60%, #a5d6a7 100%)',
  },
  {
    label: 'Total Pendapatan (Rp)',
    value: '45.067.841,00',
    color: '#ffb300',
    textColor: '#fff',
    bg: 'linear-gradient(135deg, #ffb300 60%, #ffe082 100%)',
  },
];

const transaksi = [
  { label: 'Pendapatan Harian', value: 'Rp 45.018.579,59', change: '-64,76%', color: 'error', prev: 'Rp 127.748.862,61' },
  { label: 'Pendapatan Mingguan', value: 'Rp 840.115.287,92', change: '-21,14%', color: 'error', prev: 'Rp 127.748.862,61' },
  { label: 'Pendapatan Bulanan', value: 'Rp 4.171.170.358,71', change: '-6,26%', color: 'error', prev: 'Rp 4.449.527.338,10' },
  { label: 'Pendapatan Tahunan', value: 'Rp 33.404.470.270,55', change: '+372,37%', color: 'success', prev: 'Rp 7.071.629.125,03' },
];

const status = [
  { label: 'Aktif', spklu: 1545, charger: 2220, connector: 2833, color: '#e3f7f0' },
  { label: 'Non Aktif', spklu: 82, charger: 764, connector: 1028, color: '#ffeaea' },
  { label: 'SPKLU Non PLN', spklu: 884, charger: 1344, connector: 1440, color: '#f4f8ff' },
];

function Summary() {
  return (
    <Box sx={{ background: '#f4f8ff', minHeight: '100vh', p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>Dashboard</Typography>
      <Typography variant="subtitle2" sx={{ color: '#7a7a7a', mb: 3 }}>Summary</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210', mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2, mr: 1, minWidth: 90 }}>Hari Ini</Button>
          <Button variant="contained" color="info" startIcon={<FilterListIcon />} sx={{ borderRadius: 2 }}>Filter</Button>
        </Box>
        <Box sx={{ width: '100%', overflowX: 'auto', mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, minWidth: 800 }}>
            {stats.map((s, i) => (
              <Paper key={s.label} sx={{
                p: 2,
                borderRadius: 3,
                background: s.bg,
                color: s.textColor,
                position: 'relative',
                overflow: 'hidden',
                minHeight: 90,
                minWidth: 220,
                width: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #1976d210',
              }}>
                <Box sx={{ position: 'absolute', right: -20, top: -10, width: 70, height: 70, bgcolor: s.color, opacity: 0.13, borderRadius: '50%' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: 16 }}>{s.label}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1, fontSize: 32 }}>{s.value}</Typography>
              </Paper>
            ))}
          </Box>

        </Box>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Transaksi Hari Ini</Typography>
            <Typography variant="caption" sx={{ color: '#7a7a7a' }}>Data Keseluruhan</Typography>
            <Box sx={{ height: 220, minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bdbdbd' }}>
              <img src="https://stackabuse.s3.amazonaws.com/media/matplotlib-line-plot-tutorial-and-examples-2.png" alt="Chart Transaksi Hari Ini" style={{ maxHeight: 200, minHeight: 160, width: '100%', objectFit: 'contain' }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>kWh Terjual Hari Ini</Typography>
            <Typography variant="caption" sx={{ color: '#7a7a7a' }}>Data Keseluruhan</Typography>
            <Box sx={{ height: 220, minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bdbdbd' }}>
              <img src="https://stackabuse.s3.amazonaws.com/media/matplotlib-line-plot-tutorial-and-examples-2.png" alt="Chart kWh Terjual Hari Ini" style={{ maxHeight: 200, minHeight: 160, width: '100%', objectFit: 'contain' }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Transaksi Hari Ini</Typography>
            {transaksi.map((t, i) => (
              <Box key={t.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>{t.value}</Typography>
                  <Typography variant="caption" sx={{ color: '#7a7a7a' }}>{t.label}</Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" color={t.color} sx={{ fontWeight: 600 }}>{t.change}</Typography>
                  <Typography variant="caption" sx={{ color: '#7a7a7a' }}>Hari Sebelumnya {t.prev}</Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
            {status.map((s, i) => (
              <Paper key={s.label} sx={{ p: 2, borderRadius: 2, background: s.color, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 22, mb: 1 }}>{s.label}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: 1 }}>
                  <Typography variant="body1" sx={{ color: '#7a7a7a', mr: 1 }}>SPKLU</Typography>
                  <Typography variant="body1" sx={{ color: '#7a7a7a', mr: 1 }}>Charger</Typography>
                  <Typography variant="body1" sx={{ color: '#7a7a7a' }}>Connector</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 2 }}>{s.spklu}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 2 }}>{s.charger}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{s.connector}</Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Summary; 