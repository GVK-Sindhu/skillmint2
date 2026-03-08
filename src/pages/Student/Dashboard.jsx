import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import StudentHome from './StudentHome';
import LearnTrack from './LearnTrack';
import Opportunities from './Opportunities';
import InsightHub from './InsightHub';

const StudentDashboard = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<StudentHome />} />
                <Route path="learn" element={<LearnTrack />} />
                <Route path="opportunities" element={<Opportunities />} />
                <Route path="insights" element={<InsightHub />} />
            </Routes>
        </DashboardLayout>
    );
};

export default StudentDashboard;
