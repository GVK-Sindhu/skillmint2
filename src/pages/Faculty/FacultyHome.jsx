import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockDoubts, mockStudents } from '../../data/mockData';
import { MessageSquare, Users, Sparkles, Award, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

const FacultyHome = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Pending Doubts', value: '8', icon: MessageSquare, color: 'text-accent-500', bg: 'bg-accent-50' },
        { label: 'Students Guided', value: '42', icon: Users, color: 'text-primary-600', bg: 'bg-primary-50' },
        { label: 'Talent Matches', value: '15', icon: Sparkles, color: 'text-success-500', bg: 'bg-success-50' },
        { label: 'Reward Points', value: '850', icon: Award, color: 'text-primary-600', bg: 'bg-primary-50' },
    ];

    return (
        <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary tracking-tight font-heading">Faculty & Recruitment Center</h1>
                    <p className="text-text-secondary mt-1 italic font-medium">Empowering the next generation of tech talent through mentorship.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => alert("Launching Multi-Channel Recruitment Campaign...")}
                        className="btn-accent flex items-center gap-2 text-[11px] uppercase tracking-widest shadow-accent-600/30"
                    >
                        New Campaign
                        <Zap size={18} />
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="card p-6 flex flex-col justify-between group overflow-hidden relative">
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform shadow-sm ring-1 ring-black/5`}>
                                <stat.icon size={26} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] leading-none mb-2 opacity-60">{stat.label}</p>
                                <p className="text-2xl font-black text-text-primary tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                        <stat.icon size={80} className={`absolute -right-4 -bottom-4 ${stat.color} opacity-[0.03] group-hover:scale-110 transition-transform duration-700`} />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-8">
                    {/* Active Doubts section */}
                    <section className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                            <h2 className="text-xl font-black text-text-primary flex items-center gap-3 tracking-tight font-heading">
                                <MessageSquare className="text-primary-600" size={24} />
                                Pending Resolutions
                            </h2>
                            <button
                                onClick={() => alert("Resolving all pending doubts in high-priority order...")}
                                className="text-xs font-black text-primary-600 hover:text-primary-800 transition-all bg-primary-50 px-5 py-2.5 rounded-full border border-primary-100 shadow-xs uppercase tracking-widest"
                            >
                                Batch Resolve
                            </button>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {mockDoubts.map((doubt) => (
                                <div key={doubt.id} className="p-6 hover:bg-gray-50/50 transition-all group">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-black text-primary-600 group-hover:border-primary-200 transition-colors shadow-sm text-lg">
                                                {doubt.studentName.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-text-primary tracking-tight">{doubt.studentName}</p>
                                                <p className="text-text-secondary mt-1 text-sm leading-relaxed max-w-lg">{doubt.question}</p>
                                                <div className="flex items-center gap-3 mt-4">
                                                    <span className="text-[10px] text-text-secondary font-black uppercase tracking-widest opacity-40">{new Date(doubt.createdAt).toLocaleDateString()}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span className="text-[10px] text-accent-600 font-bold uppercase tracking-widest">Urgent</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => alert(`Starting resolution for ${doubt.studentName}...`)}
                                            className="px-6 py-3 bg-white hover:bg-primary-600 rounded-xl text-[11px] font-black transition-all border border-gray-200 hover:text-white hover:shadow-xl hover:shadow-primary-600/20 active:scale-95 shadow-xs uppercase tracking-widest"
                                        >
                                            Guide Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Talent Feed */}
                    <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <h2 className="text-xl font-black text-text-primary flex items-center gap-3 tracking-tight font-heading">
                                <Sparkles className="text-secondary-500" size={24} />
                                High Potential Talent
                            </h2>
                            <button
                                onClick={() => alert("Browsing Global Talent Pool...")}
                                className="text-xs font-black text-primary-600 hover:text-primary-800 transition-all border-b-2 border-primary-50 hover:border-primary-600 pb-1 uppercase tracking-widest"
                            >
                                Open Talent Pool
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            {mockStudents.slice(0, 2).map((s) => (
                                <div key={s.id} className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 group hover:border-secondary-500/30 transition-all hover:bg-white shadow-xs">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-2xl font-black text-secondary-500 border border-gray-100 group-hover:scale-105 transition-transform shadow-sm">
                                            {s.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-text-primary group-hover:text-primary-600 transition-colors uppercase tracking-tight text-lg">{s.name}</h4>
                                            <div className="flex gap-2 mt-1">
                                                <span className="text-[10px] font-black text-success-600 uppercase tracking-widest bg-success-50 px-2 rounded-md">Top 1%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                        <span className="text-text-secondary opacity-60">Verified Skills</span>
                                        <button
                                            onClick={() => alert(`Reviewing ${s.name}'s professional portfolio...`)}
                                            className="text-primary-600 flex items-center gap-2 hover:gap-3 transition-all"
                                        >
                                            View Profile <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="space-y-8">
                    <section className="bg-primary-600 border border-primary-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group transition-all hover:shadow-primary-600/30 hover:-translate-y-1">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-4 tracking-tighter">Elite Recruiter</h3>
                            <p className="text-primary-100 mb-8 text-sm font-medium leading-relaxed opacity-90">Unlock direct contact access and unlimited shortlist capacity for your hiring team.</p>
                            <button
                                onClick={() => alert("Upgrading to Enterprise Recruiter account...")}
                                className="w-full py-4 bg-white text-primary-600 rounded-2xl font-black hover:bg-primary-50 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]"
                            >
                                Upgrade Now
                            </button>
                        </div>
                        <Award className="absolute -bottom-6 -right-6 text-white/10 w-40 h-40 transform rotate-12 group-hover:scale-125 transition-transform duration-1000" />
                    </section>

                    <section className="card p-8 border-2 border-gray-50">
                        <h3 className="text-lg font-black text-text-primary mb-8 tracking-tight uppercase flex items-center gap-2">
                            <CheckCircle2 size={24} className="text-success-500" />
                            System Updates
                        </h3>
                        <div className="space-y-8">
                            {[
                                { text: 'Verified "Data Structures" module', date: '1h ago', icon: 'check' },
                                { text: 'Jane Doe added to Shortlist', date: '3h ago', icon: 'user' },
                                { text: 'New Doubt: async/await usage', date: 'Yesterday', icon: 'msg' }
                            ].map((act, i) => (
                                <div key={i} className="flex gap-5 group items-start">
                                    <div className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-success-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform"></div>
                                    <div>
                                        <p className="text-sm font-bold text-text-primary group-hover:text-primary-600 transition-colors leading-relaxed">{act.text}</p>
                                        <p className="text-[10px] text-text-secondary mt-1.5 font-black uppercase tracking-widest opacity-40">{act.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default FacultyHome;
