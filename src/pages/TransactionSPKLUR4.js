import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FilterList, FileDownload, Edit, Delete, Visibility } from '@mui/icons-material';
import TransactionSPKLUR4Detail from '../components/TransactionSPKLUR4Detail';

const rows = [
  { id: 1, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00' },
  { id: 2, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00' },
  { id: 3, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00' },
  { id: 4, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00' },
  { id: 5, idTransaksi: '1234567', email: 'a@dev.com', user: 'User A', spklu: 'SPKLU A', konektor: 'Konektor A', tanggal: '2025-05-19T13:45:00+07:00' },
];

function TransactionSPKLUR4() {
  const [search, setSearch] = useState('');
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: 'no', headerName: 'No.', width: 60, renderCell: (params) => (params.rowIndex + 1) },
    { field: 'idTransaksi', headerName: 'ID Transaksi', width: 120 },
    { field: 'email', headerName: 'Email', width: 160 },
    { field: 'user', headerName: 'User', width: 120 },
    { field: 'spklu', headerName: 'SPKLU R4', width: 120 },
    { field: 'konektor', headerName: 'Konektor', width: 120 },
    { field: 'tanggal', headerName: 'Tanggal Catat', width: 200 },
    {
      field: 'aksi',
      headerName: 'Aksi',
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Detail"><IconButton color="info" onClick={() => { setSelectedRow(params.row); setOpenDetail(true); }}><Visibility /></IconButton></Tooltip>
          <Tooltip title="Edit"><IconButton color="success"><Edit /></IconButton></Tooltip>
          <Tooltip title="Hapus"><IconButton color="error"><Delete /></IconButton></Tooltip>
        </Box>
      ),
    },
  ];

  const filteredRows = rows.filter(row => row.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Transaction</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>SPKLU R4</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ mr: 1 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<FileDownload />}>Export Excel</Button>
          </Box>
        </Box>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 100]}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </Paper>
      <TransactionSPKLUR4Detail open={openDetail} onClose={() => setOpenDetail(false)} row={selectedRow} />
    </Box>
  );
}

export default TransactionSPKLUR4; 