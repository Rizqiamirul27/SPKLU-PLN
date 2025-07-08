import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Summary from './pages/Summary';
import Utilisasi from './pages/Utilisasi';
import Perencanaan from './pages/Perencanaan';
import Availability from './pages/Availability';
import DIL from './pages/DIL';
import MasterSPKLUR4 from './pages/MasterSPKLUR4';
import MonitoringSPKLUR4Availability from './pages/MonitoringSPKLUR4Availability';
import MonitoringSPKLUR4LogAvailability from './pages/MonitoringSPKLUR4LogAvailability';
import TransactionSPKLUR4 from './pages/TransactionSPKLUR4';
import ReportSPKLUR4DetailTransaksi from './pages/ReportSPKLUR4DetailTransaksi';
import SystemSettingUserManagement from './pages/SystemSettingUserManagement';
import SystemSettingMenuManagement from './pages/SystemSettingMenuManagement';
import SystemSettingRoleManagement from './pages/SystemSettingRoleManagement';
import SystemSettingUserRoleSetting from './pages/SystemSettingUserRoleSetting';
import SystemSettingPermissionSetting from './pages/SystemSettingPermissionSetting';
import MasterUnit from './pages/MasterUnit';
import MasterFasilitas from './pages/MasterFasilitas';
import MasterMitra from './pages/MasterMitra';
import MasterPemda from './pages/MasterPemda';
import MasterSPKLUR4Data from './pages/MasterSPKLUR4Data';
import MasterChargerBox from './pages/MasterChargerBox';
import MasterConnector from './pages/MasterConnector';
import MasterPKS from './pages/MasterPKS';
import IconPayV2 from './pages/IconPayV2';
import IconPayV3 from './pages/IconPayV3';
import LinkAja from './pages/LinkAja';
import PostPaid from './pages/PostPaid';
import IconCash from './pages/IconCash';
import './App.css';

const Placeholder = ({ title }) => <div style={{ padding: 32, fontSize: 24, color: '#888' }}>{title} (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f8ff' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1, padding: 24 }}>
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/utilisasi" element={<Utilisasi />} />
              <Route path="/perencanaan" element={<Perencanaan />} />
              <Route path="/availability" element={<Availability />} />
              <Route path="/dil" element={<DIL />} />
              <Route path="/master-spklu-r4" element={<MasterSPKLUR4 />} />
              <Route path="/master-spklu-r4/spklu-r4" element={<MasterSPKLUR4Data />} />
              <Route path="/master-spklu-r4/charger-box" element={<MasterChargerBox />} />
              <Route path="/master-spklu-r4/connector" element={<MasterConnector />} />
              <Route path="/master-spklu-r4/unit" element={<MasterUnit />} />
              <Route path="/master-spklu-r4/fasilitas" element={<MasterFasilitas />} />
              <Route path="/master-spklu-r4/mitra" element={<MasterMitra />} />
              <Route path="/master-spklu-r4/pemda" element={<MasterPemda />} />
              <Route path="/master-spklu-r4/pks" element={<MasterPKS />} />
              <Route path="/monitoring/spklu-r4/availability" element={<MonitoringSPKLUR4Availability />} />
              <Route path="/monitoring/spklu-r4/log-availability" element={<MonitoringSPKLUR4LogAvailability />} />
              <Route path="/transaction/spklu-r4" element={<TransactionSPKLUR4 />} />
              <Route path="/report/spklu-r4/detail-transaksi" element={<ReportSPKLUR4DetailTransaksi />} />
              <Route path="/system-setting/user-management" element={<SystemSettingUserManagement />} />
              <Route path="/system-setting/menu-management" element={<SystemSettingMenuManagement />} />
              <Route path="/system-setting/role-management" element={<SystemSettingRoleManagement />} />
              <Route path="/system-setting/permission-setting" element={<SystemSettingPermissionSetting />} />
              <Route path="/system-setting/user-role-setting" element={<SystemSettingUserRoleSetting />} />
              <Route path="/rekon-splitting/iconpay-v2" element={<IconPayV2 />} />
              <Route path="/rekon-splitting/iconpay-v3" element={<IconPayV3 />} />
              <Route path="/rekon-splitting/link-aja" element={<LinkAja />} />
              <Route path="/rekon-splitting/post-paid" element={<PostPaid />} />
              <Route path="/rekon-splitting/icon-cash" element={<IconCash />} />
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
