import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockStudents } from '../../data/mockData';
import {
    BarChart,
    TrendingUp,
    Target,
    Award,
    CheckCircle2,
    Zap,
    ExternalLink,
    Github,
    Code,
    Globe,
    Mail,
    MapPin,
    GraduationCap,
    Briefcase,
    ChevronRight
} from 'lucide-react';

const InsightHub = () => {
    const { user } = useAuth();

    // Find the current student from mockData based on email
    // Default to Sindhu GVK if for some reason the email doesn't match for demo
    const student = mockStudents.find(s => s.email === user?.email) || mockStudents[0];

    const stats = [
        { label: 'CGPA', value: student.cgpa || '9.8', icon: Award, color: 'text-primary-600' },
        { label: 'Grad Year', value: student.gradYear || '2027', icon: GraduationCap, color: 'text-secondary-500' },
        { label: 'Uni Rank', value: '#12', icon: TrendingUp, color: 'text-accent-500' },
        { label: 'Skill Score', value: '482', icon: Zap, color: 'text-emerald-600' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {/* 1. Profile Header Section */}
            <header className="relative bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary-600 to-indigo-700 opacity-90"></div>
                <div className="relative pt-16 px-10 pb-10 flex flex-col md:flex-row items-end gap-8">
                    <div className="relative">
                        <div className="w-40 h-40 rounded-3xl bg-white p-1.5 shadow-2xl border border-gray-50 flex items-center justify-center overflow-hidden">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                alt="avatar"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-white">
                            <CheckCircle2 size={18} />
                        </div>
                    </div>

                    <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-4">
                            <h1 className="text-4xl font-black text-text-primary tracking-tight">{student.name}</h1>
                            <span className="bg-primary-50 text-primary-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary-100 shadow-sm">
                                Student Insight Hub
                            </span>
                        </div>
                        <p className="text-lg font-bold text-text-secondary flex items-center gap-2">
                            <GraduationCap className="text-primary-600" size={20} />
                            {student.education}
                        </p>
                        <div className="flex flex-wrap gap-6 pt-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                                <MapPin size={14} className="text-accent" />
                                {student.university || 'SkillMint Academy'}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                                <Mail size={14} className="text-primary-600" />
                                {student.email}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                                <Globe size={14} className="text-emerald-500" />
                                {student.portfolio?.replace('https://', '')}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <a href={student.github} target="_blank" rel="noreferrer" className="p-3 bg-gray-50 hover:bg-white hover:shadow-lg rounded-2xl border border-gray-100 transition-all text-text-secondary hover:text-primary-600">
                            <Github size={20} />
                        </a>
                        <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-black text-sm rounded-2xl shadow-xl shadow-primary-600/20 active:scale-95 transition-all flex items-center gap-2">
                            Download Portfolio
                            <ExternalLink size={16} />
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. Key Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className={`p-2.5 rounded-xl bg-gray-50 ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 shadow-xs">EXCELLENT</span>
                        </div>
                        <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em] mb-1 relative z-10">{stat.label}</p>
                        <p className="text-4xl font-black text-text-primary relative z-10">{stat.value}</p>
                        <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${stat.color}`}>
                            <stat.icon size={100} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* 3. Career Objective & Skills Cloud */}
                <div className="xl:col-span-2 space-y-8">
                    <section className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Target size={120} className="text-primary-600" />
                        </div>
                        <h2 className="text-2xl font-black text-text-primary flex items-center gap-3 tracking-tighter mb-6 uppercase italic">
                            Career Objective
                        </h2>
                        <p className="text-lg text-text-primary leading-relaxed font-bold border-l-4 border-accent pl-6 py-2 bg-gray-50/50 rounded-r-2xl">
                            "{student.professionalGoal}"
                        </p>

                        <div className="mt-10">
                            <h3 className="text-xs font-black text-text-secondary uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Technical Proficiency Cloud</h3>
                            <div className="flex flex-wrap gap-3">
                                {student.skills.map((skill, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-sm font-black text-text-primary shadow-sm hover:border-primary-600 hover:text-primary-600 hover:shadow-lg transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                                <span className="px-5 py-2.5 bg-primary-600 text-white border border-primary-600 rounded-2xl text-sm font-black shadow-lg shadow-primary-600/20">
                                    +12 more
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 4. Experience Timeline */}
                    <section className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black text-text-primary flex items-center gap-3 tracking-tighter mb-10 uppercase italic">
                            Experience & Contributions
                        </h2>
                        <div className="space-y-10">
                            {student.experience?.map((exp, i) => (
                                <div key={i} className="flex gap-6 relative group">
                                    {i !== student.experience.length - 1 && (
                                        <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-gray-100"></div>
                                    )}
                                    <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 border border-primary-100 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                                        <Briefcase size={20} />
                                    </div>
                                    <div className="flex-1 bg-gray-50/30 p-6 rounded-2xl border border-gray-50 group-hover:bg-white group-hover:border-gray-100 group-hover:shadow-md transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-black text-text-primary tracking-tight">{exp.role}</h3>
                                            <span className="text-[10px] font-black uppercase bg-white px-3 py-1 rounded-full border border-gray-100 shadow-xs">{exp.duration}</span>
                                        </div>
                                        <p className="text-sm font-bold text-primary-600 mb-4">{exp.company}</p>
                                        <p className="text-sm text-text-secondary leading-relaxed font-medium italic">"{exp.description}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* 5. Sidebar: Certifications & Presence */}
                <div className="space-y-8">
                    {/* Certifications Card */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-black text-text-primary flex items-center gap-3 tracking-tighter mb-8 uppercase italic">
                            Certifications
                        </h2>
                        <div className="space-y-4">
                            {student.certificates?.map((cert, i) => (
                                <div key={i} className="p-4 bg-gray-50 border border-gray-50 rounded-2xl hover:bg-white hover:border-gray-100 hover:shadow-md transition-all group flex items-start gap-4 cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-secondary-500 shadow-sm group-hover:bg-secondary-500 group-hover:text-white transition-all">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black text-text-primary leading-tight mb-1">{cert.name}</p>
                                        <p className="text-[10px] font-bold text-text-secondary">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-text-secondary hover:text-primary-600 hover:border-primary-300 transition-all text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                            Add Credentials
                            <CheckCircle2 size={14} />
                        </button>
                    </section>

                    {/* Coding Profiles Icons (Custom Platform Links) */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-black text-text-primary flex items-center gap-3 tracking-tighter mb-8 uppercase italic">
                            Coding Presence
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {student.codingProfiles?.map((profile, i) => (
                                <a key={i} href={profile.link} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-5 bg-gray-50 border border-gray-50 rounded-2xl hover:bg-white hover:border-primary-600/30 hover:shadow-xl transition-all group gap-3">
                                    <div className="text-text-secondary group-hover:text-primary-600 group-hover:scale-110 transition-all">
                                        {profile.platform === 'LeetCode' && <Code size={24} />}
                                        {profile.platform === 'HackerRank' && <Award size={24} />}
                                        {profile.platform === 'Codeforces' && <BarChart size={24} />}
                                    </div>
                                    <span className="text-[11px] font-black uppercase text-text-secondary group-hover:text-text-primary">{profile.platform}</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Quick Stats Summary */}
                    <div className="bg-gradient-to-br from-indigo-700 to-primary-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <Zap className="mb-4 text-accent animate-pulse" size={32} />
                            <h3 className="text-xl font-black mb-2">Technical Insight</h3>
                            <p className="text-sm text-indigo-100 leading-relaxed font-bold italic opacity-90">
                                Top 1% in Vignan University for Backend Performance Optimization.
                            </p>
                        </div>
                        <CheckCircle2 className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-10 transform -rotate-12" />
                    </div>
                </div>
            </div>

            {/* 6. Live Codolio Portfolio Section (Iframe) */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-1 relative overflow-hidden ring-1 ring-black/5">
                <div className="bg-gray-50 rounded-[2.25rem] overflow-hidden border border-gray-200">
                    <div className="px-10 py-8 border-b border-gray-200 flex justify-between items-center bg-white">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-text-primary tracking-tighter uppercase italic">Live Codolio Portfolio</h2>
                                <p className="text-xs font-bold text-text-secondary">Syncing active coding metrics from professional networks.</p>
                            </div>
                        </div>
                        <a
                            href={student.codolioUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 font-black text-xs rounded-xl hover:bg-indigo-100 transition-all border border-indigo-100 shadow-sm"
                        >
                            Open in Fullscreen
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* The Iframe Wrapper */}
                    <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[3/1] bg-white min-h-[600px]">
                        <iframe
                            src={student.codolioUrl}
                            title="Codolio Portfolio"
                            className="absolute top-0 left-0 w-full h-full border-none"
                            style={{ filter: 'grayscale(0.1)' }}
                        />
                    </div>

                    <div className="p-6 bg-white border-t border-gray-100 flex justify-center">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary uppercase">
                                <Zap size={14} className="text-accent" />
                                Live Sync
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200"></div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary uppercase">
                                <CheckCircle2 size={14} className="text-emerald-500" />
                                Verified Profiles
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200"></div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-secondary uppercase">
                                <TrendingUp size={14} className="text-primary-600" />
                                Real-time Analysis
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightHub;
