import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockStudents } from '../../data/mockData';
import SkillCard from '../../components/Dashboard/SkillCard';
import { TrendingUp, Users, Award, BookOpen, ArrowRight, Sparkles, Zap } from 'lucide-react';

const StudentHome = () => {
    const { user } = useAuth();
    const studentData = mockStudents.find(s => s.email === user.email) || mockStudents[0];

    const stats = [
        { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-primary-600', bg: 'bg-primary-50' },
        { label: 'Skill Points', value: '1,250', icon: TrendingUp, color: 'text-success-600', bg: 'bg-success-50' },
        { label: 'Mentors reached', value: '5', icon: Users, color: 'text-accent-600', bg: 'bg-accent-50' },
        { label: 'Certificates', value: studentData.certificates.length, icon: Award, color: 'text-primary-600', bg: 'bg-primary-50' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary tracking-tight font-heading">
                        Welcome, <span className="text-gradient-orange">{user?.name || 'Explorer'}</span>! 👋
                    </h1>
                    <p className="text-text-secondary mt-1 italic font-medium">Elevating your professional journey with precision-guided paths.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => alert("Redirecting to Intelligent Resume Builder...")}
                        className="btn-primary flex items-center gap-2 shadow-primary-600/30"
                    >
                        Build Smart Resume
                        <ArrowRight size={18} />
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="card p-6 flex items-center gap-6 group">
                        <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform shadow-sm ring-1 ring-black/5`}>
                            <stat.icon size={26} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] leading-none mb-2 opacity-60">{stat.label}</p>
                            <p className="text-2xl font-black text-text-primary tracking-tight">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-8">
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-black text-text-primary tracking-tight flex items-center gap-2">
                                <Zap className="text-accent-500" size={24} />
                                Active LearnTrack
                            </h2>
                            <button
                                onClick={() => alert("Opening Course Catalog...")}
                                className="text-primary-600 hover:text-primary-800 text-xs font-black uppercase tracking-widest transition-all border-b-2 border-primary-100 hover:border-primary-600 pb-1"
                            >
                                Browse All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(studentData.progress).map(([name, progress]) => (
                                <SkillCard key={name} name={name} progress={progress} />
                            ))}
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-[2.5rem] p-10 overflow-hidden relative group shadow-2xl">
                        <div className="relative z-10 text-white">
                            <h2 className="text-3xl font-black mb-3 tracking-tighter">SkillMint Winter Hackathon</h2>
                            <p className="text-primary-100 mb-8 max-w-lg font-medium leading-relaxed">Join 5,000+ top talents, build breakthrough solutions, and win exclusive recruiter interviews.</p>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <button
                                    onClick={() => alert("Successfully registered for Hackathon 2026!")}
                                    className="px-10 py-4 bg-white text-primary-600 rounded-2xl font-black hover:bg-primary-50 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest"
                                >
                                    Join The Hub
                                </button>
                                <span className="text-xs font-black text-primary-200 uppercase tracking-widest flex items-center gap-2">
                                    <Sparkles size={16} />
                                    12 Days Remaining
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none group-hover:scale-125 transition-transform duration-[2000ms]">
                            <TrendingUp size={320} />
                        </div>
                    </section>
                </div>

                <aside className="space-y-8">
                    <section className="card p-8 bg-white border-2 border-gray-50">
                        <h3 className="text-lg font-black text-text-primary mb-8 tracking-tight uppercase flex items-center gap-2">
                            <TrendingUp size={20} className="text-success-500" />
                            Hot Tech Skills
                        </h3>
                        <div className="space-y-5">
                            {['System Design', 'React Performance', 'Kubernetes', 'Go Language'].map((skill, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 shadow-xs">
                                    <span className="text-sm text-text-primary group-hover:text-primary-600 transition-colors font-bold">{skill}</span>
                                    <span className="px-3 py-1 bg-success-50 rounded-lg text-[9px] font-black text-success-600 uppercase tracking-widest border border-success-100 shadow-sm">
                                        Surging
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-success-50 border border-success-100 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
                        <div className="relative z-10">
                            <h3 className="text-[10px] font-black text-success-600 mb-3 uppercase tracking-[0.2em]">Verified Excellence</h3>
                            <p className="text-sm text-text-primary mb-6 font-medium italic opacity-90 leading-relaxed max-w-[200px]">"The curriculum on SkillMint is directly aligned with what we look for in engineers."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl border border-success-200 overflow-hidden flex items-center justify-center text-success-600 font-black shadow-md ring-2 ring-success-100">
                                    SS
                                </div>
                                <div>
                                    <p className="text-sm font-black text-text-primary tracking-tight">Sarah Smith</p>
                                    <p className="text-[9px] font-black text-text-secondary uppercase tracking-tighter opacity-70">Sr. Tech Recruiter @ Meta</p>
                                </div>
                            </div>
                        </div>
                        <Award className="absolute -bottom-6 -right-6 text-success-600/10 w-32 h-32 transform rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default StudentHome;
