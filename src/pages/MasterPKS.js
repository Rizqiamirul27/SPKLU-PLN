import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, InputLabel, FormControl, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, FilterList, Edit, Delete, Info, Close, OpenInNew } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const rowsDummy = [
  { id: 1, mitra1: 'PT. Bayu Buana Gemilang', mitra2: 'PT. Bayu Buana Gemilang', pks1: 'PT. Bayu Buana Gemilang', pks2: 'PT. Bayu Buana Gemilang', masa: '5 tahun' },
  { id: 2, mitra1: 'PT. Bayu Buana Gemilang', mitra2: 'PT. Bayu Buana Gemilang', pks1: 'PT. Bayu Buana Gemilang', pks2: 'PT. Bayu Buana Gemilang', masa: '5 tahun' },
  { id: 3, mitra1: 'PT. Bayu Buana Gemilang', mitra2: 'PT. Bayu Buana Gemilang', pks1: 'PT. Bayu Buana Gemilang', pks2: 'PT. Bayu Buana Gemilang', masa: '5 tahun' },
  { id: 4, mitra1: 'PT. Bayu Buana Gemilang', mitra2: 'PT. Bayu Buana Gemilang', pks1: 'PT. Bayu Buana Gemilang', pks2: 'PT. Bayu Buana Gemilang', masa: '5 tahun' },
  { id: 5, mitra1: 'PT. Bayu Buana Gemilang', mitra2: 'PT. Bayu Buana Gemilang', pks1: 'PT. Bayu Buana Gemilang', pks2: 'PT. Bayu Buana Gemilang', masa: '5 tahun' },
];

const detailDummy = [
  {
    id: 1,
    charger: 'A Charger',
    daya: '100 kWh',
    sumber: 'PT PLN (Persero)',
    platform: 'PT PLN (Persero)',
    chargerOwner: 'PT Gedung Bank Exim (Bank Mandiri)',
    lahan: 'PT Tri Energi Berkarya',
    tarif: 'L/T/R',
    connectors: [
      { nama: 'Simulasi Standar <7', persenPlatform: 2, persenCharger: 69, persenLahan: 30 },
      { nama: 'Simulasi Standar <7', persenPlatform: 2, persenCharger: 69, persenLahan: 30 },
    ],
  },
  // ...data lain
];

function MasterPKS() {
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({
    pksPln: '', tglAkhir: '', pksMitra1: '', mitra1: '', pksMitra2: '', mitra2: '', masa: '', skemaPKS: '', skemaBisnis: '', jenisLahan: '', tglTerbit: ''
  });
  const [formError, setFormError] = useState({});
  const [rows] = useState(rowsDummy);
  const [openInfo, setOpenInfo] = useState(false);

  const filteredRows = rows.filter(row => row.mitra1.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { field: 'mitra1', headerName: 'Mitra 1', flex: 1 },
    { field: 'mitra2', headerName: 'Mitra 2', flex: 1 },
    { field: 'pks1', headerName: 'PKS Mitra 1', flex: 1 },
    { field: 'pks2', headerName: 'PKS Mitra 2', flex: 1 },
    { field: 'masa', headerName: 'Masa Kontrak', flex: 1 },
    {
      field: 'aksi', headerName: 'Aksi', width: 180, sortable: false, renderCell: () => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ background: '#e3f0fd', color: '#1976d2', borderRadius: 1, p: 0.5, '&:hover': { background: '#bbdefb' } }}><OpenInNew /></IconButton>
          <IconButton sx={{ background: '#e3f0fd', color: '#1976d2', borderRadius: 1, p: 0.5, '&:hover': { background: '#bbdefb' } }} onClick={() => setOpenInfo(true)}><Info /></IconButton>
          <IconButton sx={{ background: '#e6f4ea', color: '#43a047', borderRadius: 1, p: 0.5, '&:hover': { background: '#b9f6ca' } }}><Edit /></IconButton>
          <IconButton sx={{ background: '#fdeaea', color: '#e53935', borderRadius: 1, p: 0.5, '&:hover': { background: '#ffcdd2' } }}><Delete /></IconButton>
        </Box>
      )
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Master Data</Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>Master PKS</Typography>
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
      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Tambah Master PKS</span>
          <IconButton onClick={() => setOpenForm(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <TextField label="PKS PLN*" name="pksPln" value={form.pksPln} onChange={e => setForm({ ...form, pksPln: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="Tanggal Akhir PKS*" name="tglAkhir" value={form.tglAkhir} onChange={e => setForm({ ...form, tglAkhir: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <TextField label="PKS Mitra 1*" name="pksMitra1" value={form.pksMitra1} onChange={e => setForm({ ...form, pksMitra1: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Mitra 1*</InputLabel>
              <Select label="Mitra 1*" name="mitra1" value={form.mitra1} onChange={e => setForm({ ...form, mitra1: e.target.value })} required>
                <MenuItem value="Pilih">Pilih</MenuItem>
                <MenuItem value="Mitra A">Mitra A</MenuItem>
                <MenuItem value="Mitra B">Mitra B</MenuItem>
              </Select>
            </FormControl>
            <TextField label="PKS Mitra 2*" name="pksMitra2" value={form.pksMitra2} onChange={e => setForm({ ...form, pksMitra2: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Mitra 2*</InputLabel>
              <Select label="Mitra 2*" name="mitra2" value={form.mitra2} onChange={e => setForm({ ...form, mitra2: e.target.value })} required>
                <MenuItem value="Pilih">Pilih</MenuItem>
                <MenuItem value="Mitra A">Mitra A</MenuItem>
                <MenuItem value="Mitra B">Mitra B</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Masa Kontrak*" name="masa" value={form.masa} onChange={e => setForm({ ...form, masa: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Skema PKS*</InputLabel>
              <Select label="Skema PKS*" name="skemaPKS" value={form.skemaPKS} onChange={e => setForm({ ...form, skemaPKS: e.target.value })} required>
                <MenuItem value="Pilih">Pilih</MenuItem>
                <MenuItem value="Skema 1">Skema 1</MenuItem>
                <MenuItem value="Skema 2">Skema 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Skema Bisnis*</InputLabel>
              <Select label="Skema Bisnis*" name="skemaBisnis" value={form.skemaBisnis} onChange={e => setForm({ ...form, skemaBisnis: e.target.value })} required>
                <MenuItem value="Pilih">Pilih</MenuItem>
                <MenuItem value="Bisnis 1">Bisnis 1</MenuItem>
                <MenuItem value="Bisnis 2">Bisnis 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ flex: '1 1 220px' }} size="small">
              <InputLabel>Jenis Lahan*</InputLabel>
              <Select label="Jenis Lahan*" name="jenisLahan" value={form.jenisLahan} onChange={e => setForm({ ...form, jenisLahan: e.target.value })} required>
                <MenuItem value="Pilih">Pilih</MenuItem>
                <MenuItem value="Lahan 1">Lahan 1</MenuItem>
                <MenuItem value="Lahan 2">Lahan 2</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Tanggal Terbit PKS*" name="tglTerbit" value={form.tglTerbit} onChange={e => setForm({ ...form, tglTerbit: e.target.value })} required fullWidth sx={{ flex: '1 1 220px' }} size="small" />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button type="submit" variant="contained">Simpan</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openInfo} onClose={() => setOpenInfo(false)} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <span>Detail Integrasi SPKLU</span>
          <IconButton onClick={() => setOpenInfo(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ background: '#f7faff' }}>
          {detailDummy.map((row, idx) => (
            <Accordion key={row.id} defaultExpanded={idx === 0} sx={{ mb: 2, background: '#f7faff', boxShadow: 'none', borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 600, background: '#f0f4fa', borderRadius: 2 }}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Nama Charger Box</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.charger}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Daya Charger</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.daya}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Sumber Instalasi Listrik</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.sumber}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Platform</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.platform}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Charger</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.chargerOwner}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Lahan</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.lahan}</TableCell>
                      <TableCell sx={{ fontWeight: 600, border: 0 }}>Tarif</TableCell>
                      <TableCell sx={{ border: 0 }}>{row.tarif}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionSummary>
              <AccordionDetails sx={{ background: '#f7faff', p: 0 }}>
                <Table size="small" sx={{ background: '#f7faff' }}>
                  <TableHead>
                    <TableRow sx={{ background: '#eaf3ff' }}>
                      <TableCell sx={{ fontWeight: 600 }}>Nama Connector</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Persen Platform</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Persen Charger&OM</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Persen Lahan</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.connectors.map((c, i) => (
                      <TableRow key={i}>
                        <TableCell>{c.nama}</TableCell>
                        <TableCell>{c.persenPlatform}</TableCell>
                        <TableCell>{c.persenCharger}</TableCell>
                        <TableCell>{c.persenLahan}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* Pagination dummy */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button size="small" sx={{ minWidth: 32 }}>1</Button>
            <Button size="small" sx={{ minWidth: 32 }}>2</Button>
            <Button size="small" sx={{ minWidth: 32 }}>3</Button>
            <Button size="small" sx={{ minWidth: 32 }}>...</Button>
            <Button size="small" sx={{ minWidth: 32 }}>7</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default MasterPKS; 