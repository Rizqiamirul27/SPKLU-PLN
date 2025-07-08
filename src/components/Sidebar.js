import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography, Box, Avatar } from '@mui/material';
import { Dashboard, Settings, ExpandLess, ExpandMore, TableChart, Map, BarChart, Storage, Build, Report, Monitor, AccountTree, Layers, ListAlt, EvStation, ElectricalServices, Business, People, Description, BuildCircle, StorageOutlined, CreditCard, LocalGasStation } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import PLNLogo from './PLNLogo';
import { FaUsers, FaUser, FaList, FaBars, FaRectangleList, FaUserShield, FaUserCog, FaKey, FaLock, FaFileInvoice, FaReceipt, FaPlug, FaBolt, FaSignal, FaChargingStation, FaCar, FaMotorcycle, FaFileContract, FaCheckCircle, FaClipboardCheck, FaCodeBranch, FaProjectDiagram, FaCreditCard, FaMoneyCheckAlt, FaFileAlt, FaBatteryFull, FaBuilding, FaHandshake, FaIndustry, FaSitemap, FaBoxOpen, FaCogs, FaNetworkWired } from 'react-icons/fa';

const menu = [
  { label: 'Dashboard', icon: <Dashboard />, path: '/', children: [
    { label: 'SPKLU R4', icon: <FaCar />, children: [
      { label: 'Summary', icon: <FaList />, path: '/' },
      { label: 'Utilisasi SPKLU R4', icon: <FaPlug />, path: '/utilisasi' },
      { label: 'Perencanaan SPKLU R4', icon: <FaClipboardCheck />, path: '/perencanaan' },
      { label: 'Availability SPKLU R4', icon: <FaBolt />, path: '/availability' },
      { label: 'DIL SPKLU R4', icon: <FaFileAlt />, path: '/dil' },
    ]},
    { label: 'SPKLU R2', icon: <FaMotorcycle />, children: [
      { label: 'Summary', icon: <FaList />, path: '/spklu-r2/summary' },
      { label: 'Utilisasi', icon: <FaPlug />, path: '/spklu-r2/utilisasi' },
      { label: 'Perencanaan', icon: <FaClipboardCheck />, path: '/spklu-r2/perencanaan' },
      { label: 'Availability', icon: <FaBolt />, path: '/spklu-r2/availability' },
      { label: 'DIL', icon: <FaFileAlt />, path: '/spklu-r2/dil' },
    ] },
    { label: 'SPKLU', icon: <FaChargingStation />, children: [
      { label: 'Summary', icon: <FaList />, path: '/spklu/summary' },
      { label: 'Utilisasi', icon: <FaPlug />, path: '/spklu/utilisasi' },
      { label: 'Perencanaan', icon: <FaClipboardCheck />, path: '/spklu/perencanaan' },
      { label: 'Availability', icon: <FaBolt />, path: '/spklu/availability' },
      { label: 'DIL', icon: <FaFileAlt />, path: '/spklu/dil' },
    ] },
  ] },
  {
    label: 'Master Data', icon: <TableChart />, children: [
      {
        label: 'Master SPKLU R4', icon: <FaCar />, children: [
          {
            label: 'Master SPKLU R4', icon: <FaChargingStation />, children: [
              { label: 'SPKLU R4', icon: <FaChargingStation />, path: '/master-spklu-r4/spklu-r4' },
              { label: 'Charger Box', icon: <FaBoxOpen />, path: '/master-spklu-r4/charger-box' },
              { label: 'Connector', icon: <FaPlug />, path: '/master-spklu-r4/connector' },
            ]
          },
          { label: 'Master Unit', icon: <FaSitemap />, path: '/master-spklu-r4/unit' },
          { label: 'Master Pemda', icon: <FaBuilding />, path: '/master-spklu-r4/pemda' },
          { label: 'Master Mitra', icon: <FaHandshake />, path: '/master-spklu-r4/mitra' },
          { label: 'Master PKS', icon: <FaFileContract />, path: '/master-spklu-r4/pks' },
          { label: 'Master Fasilitas', icon: <FaCogs />, path: '/master-spklu-r4/fasilitas' },
        ]
      },
      { label: 'Master SPKLU R2', icon: <FaMotorcycle />, children: [] },
      { label: 'Master SPBKLU', icon: <FaBatteryFull />, children: [] },
    ]
  },
  { label: 'Monitoring', icon: <Monitor />, children: [
    { label: 'SPKLU R4', icon: <FaCar />, children: [
      { label: 'Availability', icon: <FaPlug />, path: '/monitoring/spklu-r4/availability' },
      { label: 'Log Availability', icon: <FaClipboardCheck />, path: '/monitoring/spklu-r4/log-availability' },
    ] },
    { label: 'SPKLU R2', icon: <FaMotorcycle />, children: [] },
    { label: 'SPBKLU', icon: <FaBatteryFull />, children: [] },
  ] },
  { label: 'Transaction', icon: <BarChart />, children: [
    { label: 'SPKLU R4', icon: <FaCar />, path: '/transaction/spklu-r4' },
    { label: 'SPKLU R2', icon: <FaMotorcycle />, path: '/transaction/spklu-r2' },
    { label: 'SPBKLU', icon: <FaBatteryFull />, path: '/transaction/spbklu' },
  ] },
  {
    label: 'Rekon & Splitting',
    icon: <ListAlt />,
    children: [
      {
        label: 'SPKLU R4',
        icon: <FaCar />,
        children: [
          {
            label: 'Rekon',
            icon: <FaFileContract />,
            children: [
              { label: 'IconPay v2', path: '/rekon-splitting/iconpay-v2', children: [] },
              { label: 'IconPay v3', path: '/rekon-splitting/iconpay-v3', children: [] },
              { label: 'Link Aja', path: '/rekon-splitting/link-aja', children: [] },
              { label: 'Post Paid', path: '/rekon-splitting/post-paid', children: [] },
              { label: 'Icon Cash', path: '/rekon-splitting/icon-cash', children: [] },
            ]
          },
          {
            label: 'Splitting',
            icon: <FaCodeBranch />,
            children: [
              { label: 'PLN', children: [] },
              { label: 'IO2', children: [] },
              { label: 'SEM', children: [] },
              { label: 'Kemitraan', children: [] },
            ]
          },
          { label: 'Payment', icon: <FaCreditCard />, children: [] },
          { label: 'Transaksi', icon: <FaReceipt />, children: [] },
        ]
      },
      {
        label: 'SPKLU R2',
        icon: <FaMotorcycle />,
        children: [
          {
            label: 'Rekon',
            icon: <FaFileContract />,
            children: [
              { label: 'IconPay v2', children: [] },
              { label: 'IconPay v3', children: [] },
              { label: 'Link Aja', children: [] },
              { label: 'Post Paid', children: [] },
              { label: 'Icon Cash', children: [] },
            ]
          },
          {
            label: 'Splitting',
            icon: <FaCodeBranch />,
            children: [
              { label: 'PLN', children: [] },
              { label: 'IO2', children: [] },
              { label: 'SEM', children: [] },
              { label: 'Kemitraan', children: [] },
            ]
          },
          { label: 'Payment', icon: <FaCreditCard />, children: [] },
          { label: 'Transaksi', icon: <FaReceipt />, children: [] },
        ]
      },
      { label: 'SPBKLU', icon: <FaBatteryFull />, children: [] },
    ]
  },
  { label: 'Report', icon: <Report />, children: [
    { label: 'SPKLU R4', children: [
      { label: 'Detail Transaksi', icon: <FaFileInvoice />, path: '/report/spklu-r4/detail-transaksi' },
      { label: 'Status SPKLU R4', icon: <FaBolt />, path: '/report/spklu-r4/status-spklu-r4' },
    ] },
  ] },
  { label: 'System Setting', icon: <Settings />, children: [
    { label: 'User Management', icon: <FaUsers />, path: '/system-setting/user-management' },
    { label: 'Menu Management', icon: <FaList />, path: '/system-setting/menu-management' },
    { label: 'Role Management', icon: <FaUserShield />, path: '/system-setting/role-management' },
    { label: 'User Role Setting', icon: <FaUserCog />, path: '/system-setting/user-role-setting' },
    { label: 'Permission Setting', icon: <FaKey />, path: '/system-setting/permission-setting' },
  ] },
  { label: 'Maintenance', icon: <Build /> },
];

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = React.useState({ 'root-SPKLU R4': true });

  const handleClick = (label, parent = 'root') => {
    const key = `${parent}-${label}`;
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderMenu = (items, parent = 'root', level = 0) => (
    items.map((item) => {
      const key = `${parent}-${item.label}`;
      const isActive = item.path && location.pathname === item.path;
      const isParentActive = item.children && Object.keys(open).some(k => k.startsWith(key) && open[k]) || isActive;
      if (item.children && item.children.length > 0) {
        return (
          <React.Fragment key={key}>
            <ListItem button onClick={() => handleClick(item.label, parent)} sx={{ pl: 2 + level * 2, color: isParentActive ? '#1976d2' : '#222', fontWeight: isParentActive ? 'bold' : undefined, borderLeft: isParentActive ? '4px solid #1976d2' : '4px solid transparent', bgcolor: isParentActive ? '#e3f0fd' : 'inherit', transition: 'background 0.2s, color 0.2s', '&:hover': { bgcolor: '#e3f0fd', color: '#1565c0' } }}>
              {item.icon && <ListItemIcon sx={{ color: isParentActive ? '#1976d2' : '#222' }}>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} sx={{ color: isParentActive ? '#1976d2' : '#222', fontWeight: isParentActive ? 'bold' : undefined }} />
              {open[key] ? <ExpandLess sx={{ color: isParentActive ? '#1976d2' : '#222' }} /> : <ExpandMore sx={{ color: isParentActive ? '#1976d2' : '#222' }} />}
            </ListItem>
            <Collapse in={open[key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenu(item.children, key, level + 1)}
              </List>
            </Collapse>
          </React.Fragment>
        );
      } else if (item.path) {
        return (
          <ListItem
            button
            key={key}
            component={Link}
            to={item.path}
            selected={isActive}
            sx={{ pl: 2 + level * 2, color: isActive ? '#1976d2' : '#222', fontWeight: isActive ? 'bold' : undefined, borderLeft: isActive ? '4px solid #1976d2' : '4px solid transparent', bgcolor: isActive ? '#e3f0fd' : 'inherit', transition: 'background 0.2s, color 0.2s', '&:hover': { bgcolor: '#e3f0fd', color: '#1565c0' } }}
          >
            {item.icon && <ListItemIcon sx={{ color: isActive ? '#1976d2' : '#222' }}>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.label} sx={{ color: isActive ? '#1976d2' : '#222', fontWeight: isActive ? 'bold' : undefined }} />
          </ListItem>
        );
      } else {
        return (
          <ListItem
            button
            key={key}
            sx={{ pl: 2 + level * 2 }}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.label} />
          </ListItem>
        );
      }
    })
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 260, boxSizing: 'border-box', background: '#eaf3ff', border: 'none' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2 }}>
        <PLNLogo size={48} />
      </Box>
      <List>
        {renderMenu(menu)}
      </List>
    </Drawer>
  );
}

export default Sidebar; 