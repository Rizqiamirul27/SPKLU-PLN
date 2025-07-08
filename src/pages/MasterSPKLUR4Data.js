import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableHead, TableRow, TableCell, TableBody, Collapse, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close, ExpandMore, ExpandLess } from '@mui/icons-material';

const statusColors = {
  'Available': 'success',
  'Maintenance': 'warning',
  'Unavailable': 'error',
};

const rowsDummy = [
  { id: 1, nama: 'SPKLU Roda 4 UP3 Bekasi', alamat: 'Bekasi', status: 'Available', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 2, nama: 'SPKLU Roda 4 UP3 Bogor', alamat: 'Bogor', status: 'Maintenance', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 3, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 4, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
  { id: 5, nama: 'SPKLU Roda 4 ULP Karang Pilang', alamat: 'Surabaya', status: 'Unavailable', ip: '1234', port: 'Port 1234', url: 'Fisik' },
];

const riwayatDummy = [
  {
    id: 1,
    waktu: '2025-05-19T13:45:00+07:00',
    pembuat: 'Admin A',
    detail: [
      { entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
    ],
  },
  {
    id: 2,
    waktu: '2025-05-19T13:45:00+07:00',
    pembuat: 'Admin A',
    detail: [
      { entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
    ],
  },
  {
    id: 3,
    waktu: '2025-05-19T13:45:00+07:00',
    pembuat: 'Admin A',
    detail: [
      { entitas: 'Nama SPKLU', sebelum: 'SPKLU Roda 4 Bekasi', sesudah: 'SPKLU Roda 4 UP3 Bekasi' },
    ],
  },
];

function MasterSPKLUR4Data() {
  const [search, setSearch] = useState('');
  const [openHistory, setOpenHistory] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [rows] = useState(rowsDummy);
  const [form, setForm] = useState({
    nama: '', operator: '', alamat: '', urlStart: '', urlStop: '', latitude: '', longitude: '', status: '', daya: '', tanggalIntegrasi: '', uid: '', up3: '', ulp: '', waktu: '', dariHari: '', dariJam: '', sampaiHari: '', sampaiJam: ''
  });
  const [formError, setFormError] = useState({});

  const filteredRows = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'nama', headerName: 'Nama SPKLU R4', flex: 1 },
    { field: 'alamat', headerName: 'Alamat', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1, renderCell: (params) => (
      <Chip label={params.value} color={statusColors[params.value]} size="small" />
    ) },
    { field: 'ip', headerName: 'IP', flex: 0.7 },
    { field: 'port', headerName: 'Port', flex: 0.7 },
    { field: 'url', headerName: 'URL Mulai', flex: 0.7 },
    {
      field: 'aksi', headerName: 'Aksi', width: 140, sortable: false, renderCell: () => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ background: '#e3f0fd', color: '#1976d2', borderRadius: 1, p: 0.5, '&:hover': { background: '#bbdefb' } }}><Info /></IconButton>
          <IconButton sx={{ background: '#e6f4ea', color: '#43a047', borderRadius: 1, p: 0.5, '&:hover': { background: '#b9f6ca' } }}><Edit /></IconButton>
          <IconButton sx={{ background: '#fdeaea', color: '#e53935', borderRadius: 1, p: 0.5, '&:hover': { background: '#ffcdd2' } }}><Delete /></IconButton>
        </Box>
      )
    },
  ];

  // Riwayat dialog
  const handleExpand = (id) => setExpanded(exp => ({ ...exp, [id]: !exp[id] }));

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>SPKLU R4</Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px #1976d210' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} sx={{ width: 250 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="info" startIcon={<FilterList />} sx={{ borderRadius: 2 }}>Filter</Button>
            <Button variant="contained" color="success" startIcon={<Add />} sx={{ borderRadius: 2 }} onClick={() => setOpenForm(true)}>Tambah</Button>
          </Box>
        </Box>
        <div style={{ width: '100%' }}>
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
      <Dialog open={openHistory} onClose={() => setOpenHistory(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Riwayat</span>
          <IconButton onClick={() => setOpenHistory(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Waktu Perubahan</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Pembuat</TableCell>
                <TableCell sx={{ fontWeight: 600 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {riwayatDummy.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell>{row.waktu}</TableCell>
                    <TableCell>{row.pembuat}</TableCell>
                    <TableCell>
                      <IconButton size="small" onClick={() => handleExpand(row.id)}>
                        {expanded[row.id] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} sx={{ p: 0, border: 0 }}>
                      <Collapse in={expanded[row.id]} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2, background: '#fafbfc', borderRadius: 2, mb: 1 }}>
                          <Table size="small">
                            <TableHead>
                              <TableRow sx={{ background: '#f6f7fa' }}>
                                <TableCell sx={{ fontWeight: 600 }}>Entitas</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Sebelum</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Sesudah</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.detail.map((d, i) => (
                                <TableRow key={i}>
                                  <TableCell>{d.entitas}</TableCell>
                                  <TableCell>{d.sebelum}</TableCell>
                                  <TableCell>{d.sesudah}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
          {/* Pagination dummy */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button size="small" sx={{ minWidth: 32 }}>1</Button>
            <Button size="small" sx={{ minWidth: 32 }}>2</Button>
            <Button size="small" sx={{ minWidth: 32 }}>3</Button>
            <Button size="small" sx={{ minWidth: 32 }}>...</Button>
            <Button size="small" sx={{ minWidth: 32 }}>7</Button>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="contained" onClick={() => setOpenHistory(false)}>Kembali</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Tambah Master SPKLU R4</span>
          <IconButton onClick={() => setOpenForm(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Nama SPKLU*</InputLabel>
              <Select label="Nama SPKLU*" name="nama" value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })} required>
                <MenuItem value="">Nama SPKLU</MenuItem>
                <MenuItem value="SPKLU 1">SPKLU 1</MenuItem>
                <MenuItem value="SPKLU 2">SPKLU 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Operator*</InputLabel>
              <Select label="Operator*" name="operator" value={form.operator} onChange={e => setForm({ ...form, operator: e.target.value })} required>
                <MenuItem value="">Operator</MenuItem>
                <MenuItem value="Operator 1">Operator 1</MenuItem>
                <MenuItem value="Operator 2">Operator 2</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Alamat*" name="alamat" value={form.alamat} onChange={e => setForm({ ...form, alamat: e.target.value })} required fullWidth multiline minRows={3} sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>URL Start*</InputLabel>
              <Select label="URL Start*" name="urlStart" value={form.urlStart} onChange={e => setForm({ ...form, urlStart: e.target.value })} required>
                <MenuItem value="">URL Start</MenuItem>
                <MenuItem value="URL 1">URL 1</MenuItem>
                <MenuItem value="URL 2">URL 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>URL Stop*</InputLabel>
              <Select label="URL Stop*" name="urlStop" value={form.urlStop} onChange={e => setForm({ ...form, urlStop: e.target.value })} required>
                <MenuItem value="">URL Stop</MenuItem>
                <MenuItem value="URL 1">URL 1</MenuItem>
                <MenuItem value="URL 2">URL 2</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Latitude*" name="latitude" value={form.latitude} onChange={e => setForm({ ...form, latitude: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Longitude*" name="longitude" value={form.longitude} onChange={e => setForm({ ...form, longitude: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Status*</InputLabel>
              <Select label="Status*" name="status" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} required>
                <MenuItem value="">Status</MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Maintenance">Maintenance</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Daya*" name="daya" value={form.daya} onChange={e => setForm({ ...form, daya: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Tanggal Integrasi*" name="tanggalIntegrasi" type="date" value={form.tanggalIntegrasi} onChange={e => setForm({ ...form, tanggalIntegrasi: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" InputLabelProps={{ shrink: true }} />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>UID*</InputLabel>
              <Select label="UID*" name="uid" value={form.uid} onChange={e => setForm({ ...form, uid: e.target.value })} required>
                <MenuItem value="">UID</MenuItem>
                <MenuItem value="UID 1">UID 1</MenuItem>
                <MenuItem value="UID 2">UID 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>UP3*</InputLabel>
              <Select label="UP3*" name="up3" value={form.up3} onChange={e => setForm({ ...form, up3: e.target.value })} required>
                <MenuItem value="">UP3</MenuItem>
                <MenuItem value="UP3 1">UP3 1</MenuItem>
                <MenuItem value="UP3 2">UP3 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>ULP*</InputLabel>
              <Select label="ULP*" name="ulp" value={form.ulp} onChange={e => setForm({ ...form, ulp: e.target.value })} required>
                <MenuItem value="">ULP</MenuItem>
                <MenuItem value="ULP 1">ULP 1</MenuItem>
                <MenuItem value="ULP 2">ULP 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Waktu Ketersediaan*</InputLabel>
              <Select label="Waktu Ketersediaan*" name="waktu" value={form.waktu} onChange={e => setForm({ ...form, waktu: e.target.value })} required>
                <MenuItem value="">Tidak 24/7</MenuItem>
                <MenuItem value="24/7">24/7</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 120px' }} size="small">
              <InputLabel>Dari</InputLabel>
              <Select label="Dari" name="dariHari" value={form.dariHari} onChange={e => setForm({ ...form, dariHari: e.target.value })}>
                <MenuItem value="Senin">Senin</MenuItem>
                <MenuItem value="Selasa">Selasa</MenuItem>
                <MenuItem value="Rabu">Rabu</MenuItem>
                <MenuItem value="Kamis">Kamis</MenuItem>
                <MenuItem value="Jumat">Jumat</MenuItem>
                <MenuItem value="Sabtu">Sabtu</MenuItem>
                <MenuItem value="Minggu">Minggu</MenuItem>
              </Select>
            </FormControl>
            <TextField label="" name="dariJam" value={form.dariJam} onChange={e => setForm({ ...form, dariJam: e.target.value })} placeholder="00.00" fullWidth sx={{ flex: '1 1 80px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 120px' }} size="small">
              <InputLabel>Sampai</InputLabel>
              <Select label="Sampai" name="sampaiHari" value={form.sampaiHari} onChange={e => setForm({ ...form, sampaiHari: e.target.value })}>
                <MenuItem value="Senin">Senin</MenuItem>
                <MenuItem value="Selasa">Selasa</MenuItem>
                <MenuItem value="Rabu">Rabu</MenuItem>
                <MenuItem value="Kamis">Kamis</MenuItem>
                <MenuItem value="Jumat">Jumat</MenuItem>
                <MenuItem value="Sabtu">Sabtu</MenuItem>
                <MenuItem value="Minggu">Minggu</MenuItem>
              </Select>
            </FormControl>
            <TextField label="" name="sampaiJam" value={form.sampaiJam} onChange={e => setForm({ ...form, sampaiJam: e.target.value })} placeholder="23.59" fullWidth sx={{ flex: '1 1 80px' }} size="small" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained">Simpan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MasterSPKLUR4Data; 