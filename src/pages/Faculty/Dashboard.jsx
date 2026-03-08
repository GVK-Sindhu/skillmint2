import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import FacultyHome from './FacultyHome';
import DoubtSolving from './DoubtSolving';
import TalentDiscovery from './TalentDiscovery';
import Rewards from './Rewards';

const FacultyDashboard = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<FacultyHome />} />
                <Route path="doubts" element={<DoubtSolving />} />
                <Route path="talent" element={<TalentDiscovery />} />
                <Route path="rewards" element={<Rewards />} />
            </Routes>
        </DashboardLayout>
    );
};

export default FacultyDashboard;
