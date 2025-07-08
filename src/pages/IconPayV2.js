import React, { useState } from 'react';
import { Box, Paper, Tabs, Tab, TextField, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const dummyRows = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  iconPayId: '12345678',
  ap2t: '12345678',
  rpPesan: '4.071',
  rpPakai: '3500',
  rpRefund: '3500',
  tglPesan: '2025-05-19T13:45:00+07:00',
  tglPakai: '2025-05-19T13:45:00+07:00',
}));

function IconPayV2({ subtitle = 'IconPay v2' }) {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const filteredRows = dummyRows.filter(row => row.iconPayId.includes(search));

  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#232949' }}>Recon & Splitting</Typography>
        <Typography variant="subtitle2" sx={{ color: '#8a8fa7', mb: 2 }}>{subtitle}</Typography>
      </Box>
      <Box sx={{ mb: 2, borderBottom: '1px solid #ececec' }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          TabIndicatorProps={{ style: { background: '#5B3FFF', height: 3, borderRadius: 2 } }}
          sx={{
            minHeight: 40,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              color: '#8a8fa7',
              minHeight: 40,
              fontSize: 16,
              mr: 2
            },
            '& .Mui-selected': {
              color: '#232949',
            },
          }}
        >
          <Tab label="Summary" />
          <Tab label="Proses Rekon" />
        </Tabs>
      </Box>
      <Paper sx={{ p: 3, borderRadius: 4, boxShadow: '0 2px 12px #1976d210', background: '#fff' }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            size="small"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ width: 300, background: '#f7f8fa', borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#b0b5c3' }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Box>
        <Box sx={{ overflowX: 'auto', borderRadius: 3 }}>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow sx={{ background: '#f7f8fa' }}>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>No.</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>ID IconPay</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>No. Regsiter AP2T</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>Rp Pesan</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>Rp Pakai</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>Rp Refund</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>Tgl. Pesan</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#232949', border: 0 }}>Tgl. Pakai</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                <TableRow
                  key={row.id}
                  sx={{
                    transition: 'background 0.2s',
                    '&:hover': { background: '#f3f6ff' },
                    borderRadius: 2
                  }}
                >
                  <TableCell sx={{ border: 0 }}>{i + 1}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.iconPayId}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.ap2t}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.rpPesan}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.rpPakai}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.rpRefund}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.tglPesan}</TableCell>
                  <TableCell sx={{ border: 0 }}>{row.tglPakai}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={346}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={e => setRowsPerPage(parseInt(e.target.value, 10))}
          rowsPerPageOptions={[100]}
          sx={{
            mt: 2,
            '.MuiTablePagination-toolbar': { background: 'transparent', color: '#232949', borderRadius: 2 },
            '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': { color: '#8a8fa7' },
            '.MuiTablePagination-actions': { color: '#5B3FFF' },
            '.Mui-selected': { background: '#e3e6fd' },
          }}
        />
      </Paper>
    </Box>
  );
}

export default IconPayV2; 