import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, Grid, Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FilterList, FileDownload } from '@mui/icons-material';

const summary = [
  { label: 'Jumlah Transaksi', value: '12982', color: 'linear-gradient(135deg, #2196f3 60%, #6ec6ff 100%)' },
  { label: 'Akumulasi (kWh)', value: '321.910,02 kWh', color: 'linear-gradient(135deg, #2196f3 60%, #6ec6ff 100%)' },
  { label: 'Total (Rp)', value: 'Rp 831.817.750', color: 'linear-gradient(135deg, #2196f3 60%, #6ec6ff 100%)' },
];

const columns = [
  { field: 'periode', headerName: 'Periode', width: 100 },
  { field: 'tanggal', headerName: 'Tanggal', width: 160 },
  { field: 'trixid', headerName: 'TRIXID', width: 120 },
  { field: 'uiwuid', headerName: 'UIW/UID', width: 120 },
  { field: 'up3', headerName: 'UP3', width: 120 },
  { field: 'ulp', headerName: 'ULP', width: 120 },
  { field: 'prov', headerName: 'Prov', width: 120 },
  { field: 'kota', headerName: 'Kota/Kab', width: 160 },
  { field: 'idSpklu', headerName: 'ID SPKLU', width: 120 },
  { field: 'namaSpklu', headerName: 'Nama SPKLU', width: 180 },
  { field: 'namaChargerBox', headerName: 'Nama ChargerBox', width: 180 },
  { field: 'chargerBoxId', headerName: 'ChargerBox ID', width: 120 },
  { field: 'dayaChargerBox', headerName: 'Daya ChargerBox', width: 120 },
  { field: 'namaConnector', headerName: 'Nama Connector', width: 160 },
  { field: 'connectorId', headerName: 'Connector ID', width: 120 },
  { field: 'kwh', headerName: 'kWh', width: 100 },
  { field: 'rpKwh', headerName: 'RP kWh', width: 100 },
  { field: 'rpPpj', headerName: 'RP PPJ', width: 100 },
  { field: 'rpMat', headerName: 'RP MAT', width: 100 },
  { field: 'rpAdmin', headerName: 'RP Admin', width: 100 },
  { field: 'rpPakai', headerName: 'RP Pakai', width: 100 },
  { field: 'payment', headerName: 'Payment', width: 120 },
  { field: 'durasi', headerName: 'Durasi', width: 120 },
];

const rows = [
  { id: 1, periode: '202502', tanggal: '01/01/2025 00:05', trixid: '1077595', uiwuid: 'Jakarta Raya', up3: 'Menteng', ulp: 'Menteng', prov: 'DKI Jakarta', kota: 'Kota ADM. Jakarta Pusat', idSpklu: '00621', namaSpklu: 'SPKLU MENARA DANAREKSA', namaChargerBox: 'Teison 60 kW', chargerBoxId: 'ACMAX_POSK_NO_NAG', dayaChargerBox: '22 kW', namaConnector: 'AC TYPE 2 - 22 kW', connectorId: '1', kwh: '5.89', rpKwh: '14041', rpPpj: '642', rpMat: '0', rpAdmin: '0', rpPakai: '14884', payment: 'PLN MOBILE', durasi: '00:33:58' },
  // ... data lain sesuai kebutuhan ...
];

function ReportSPKLUR4DetailTransaksi() {
  const [search, setSearch] = useState('');
  const filteredRows = rows.filter(row => row.namaSpklu.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={{ background: '#eaf3ff', minHeight: '100vh', p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Report</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Detail Transaksi</Typography>
      <Box sx={{ width: '100%', left: 0, right: 0, zIndex: 2, mb: 2 }}>
        <Grid container spacing={2}>
          {summary.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.label}>
              <Paper sx={{
                p: 3,
                background: item.color,
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: '0 2px 8px #2196f320',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 120,
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 38, fontWeight: 900 }}>{item.value}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Paper sx={{ p: 2, background: '#f4f8ff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ mr: 1 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<FileDownload />}>Export Excel</Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <Box sx={{ minWidth: 2000 }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 100]}
              disableSelectionOnClick
              autoHeight
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ReportSPKLUR4DetailTransaksi; 