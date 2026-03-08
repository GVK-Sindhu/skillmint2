import React from 'react';
import { mockFacultyRewards } from '../../data/mockData';
import { Award, ExternalLink, Star, ShieldCheck, Zap, Library, Trophy } from 'lucide-react';

const Rewards = () => {
    return (
        <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary flex items-center gap-3 tracking-tight font-heading">
                        <Award className="text-accent-500" size={32} />
                        Faculty Rewards
                    </h1>
                    <p className="text-text-secondary mt-1 italic">Exclusive premium perks and courses for your contributions to the community.</p>
                </div>
                <div className="bg-accent-50 border border-accent-100 px-6 py-4 rounded-3xl flex items-center gap-4 shadow-sm group hover:border-accent-200 transition-all">
                    <div className="p-3 bg-accent-500 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Zap size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-black text-accent-600 uppercase tracking-widest leading-none mb-1">XP Points</p>
                        <p className="text-2xl font-black text-text-primary tracking-tight">850 / 1000</p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mockFacultyRewards.map((reward) => (
                            <div key={reward.id} className="card group overflow-hidden relative flex flex-col border-2 border-gray-50 hover:border-accent-500/20">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                                    <Library size={120} className="text-primary-600" />
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-2 text-accent-600 mb-6 bg-accent-50 w-fit px-3 py-1 rounded-full border border-accent-100">
                                        <Star size={14} fill="currentColor" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{reward.rating} Rating</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-primary-600 transition-colors tracking-tighter leading-tight font-heading">{reward.courseName}</h3>
                                    <p className="text-text-secondary font-bold mb-8 flex items-center gap-2 text-sm italic">
                                        via <span className="text-primary-600 bg-primary-50 px-2 py-0.5 rounded-lg not-italic">{reward.platform}</span>
                                    </p>

                                    <div className="flex-1 min-h-[40px]"></div>

                                    <button
                                        onClick={() => alert(`Enrolling in ${reward.courseName}... Redirecting to ${reward.platform}.`)}
                                        className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] active:scale-95 group-hover:-translate-y-1"
                                    >
                                        Claim Reward
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="bg-gray-50/50 border-4 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center group transition-all hover:border-primary-200 hover:bg-white">
                            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-6 group-hover:text-primary-500 transition-colors group-hover:scale-110 duration-500">
                                <Zap size={40} />
                            </div>
                            <h4 className="text-lg font-black text-gray-400 group-hover:text-text-primary transition-colors uppercase tracking-tight">Stay Tuned</h4>
                            <p className="text-text-secondary text-sm italic font-medium px-4">New rewards populate based on student feedback scores.</p>
                        </div>
                    </div>
                </div>

                <aside className="space-y-8">
                    <div className="card p-8 border-2 border-primary-50">
                        <h3 className="text-lg font-black text-text-primary mb-8 uppercase tracking-widest flex items-center gap-2">
                            <Trophy size={20} className="text-accent-500" />
                            Milestones
                        </h3>
                        <div className="space-y-10">
                            {[
                                { label: 'Doubt Solver Gold', progress: 85, color: 'bg-accent-500' },
                                { label: 'Top Recruiter', progress: 42, color: 'bg-success-500' },
                                { label: 'Engagement King', progress: 68, color: 'bg-primary-500' }
                            ].map((p, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-text-secondary">{p.label}</span>
                                        <span className="text-text-primary">{p.progress}%</span>
                                    </div>
                                    <div className="h-2.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100 shadow-inner">
                                        <div className={`h-full ${p.color} rounded-full transition-all duration-1000 shadow-sm`} style={{ width: `${p.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-success-50 border border-success-100 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-success-600 mb-4 font-black text-[10px] uppercase tracking-widest">
                                <ShieldCheck size={18} />
                                Premium Status Unlocked
                            </div>
                            <p className="text-sm font-bold text-text-secondary leading-relaxed mb-6 italic">"Your mentorship has directly helped 5 students get hired this month!"</p>
                            <button
                                onClick={() => alert("Downloading your Mentorship Merit Certificate...")}
                                className="w-full py-4 bg-success-600 hover:bg-success-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-success-600/20 active:scale-95 text-[11px] uppercase tracking-widest"
                            >
                                Get Certificate
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Rewards;
