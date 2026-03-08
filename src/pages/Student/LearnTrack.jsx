import React, { useState } from 'react';
import { Search, Filter, BookOpen, Video, Github, FileText, ChevronRight, PlayCircle, CheckCircle2, Zap } from 'lucide-react';

const roadmap = [
    {
        id: 1,
        title: 'Frontend Development',
        status: 'in-progress',
        progress: 85,
        modules: [
            { name: 'HTML5 & Semantic Web', completed: true, resources: [{ type: 'video', label: 'Basics', link: '#' }] },
            { name: 'CSS3 Grid & Flexbox', completed: true, resources: [{ type: 'article', label: 'Guide', link: '#' }] },
            { name: 'React Foundations', completed: true, resources: [{ type: 'github', label: 'Starter Kit', link: '#' }] },
            { name: 'State Management (Redux/Context)', completed: false, resources: [{ type: 'video', label: 'Auth Tutorial', link: '#' }] },
        ]
    },
    {
        id: 2,
        title: 'Data Structures & Algorithms',
        status: 'planned',
        progress: 30,
        modules: [
            { name: 'Big O Notation', completed: true },
            { name: 'LinkedLists & Stacks', completed: false },
            { name: 'Dynamic Programming', completed: false },
        ]
    }
];

const LearnTrack = () => {
    const [activeRoadmap, setActiveRoadmap] = useState(roadmap[0]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">LearnTrack Roadmap</h1>
                    <p className="text-text-secondary mt-1 italic">Structured learning paths designed for modern industry roles.</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-primary flex items-center gap-2">
                        <PlayCircle size={18} />
                        Resume Last Session
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Roadmaps List */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-text-secondary uppercase tracking-widest px-2 mb-2">
                        <Zap size={14} className="text-accent-500" />
                        Active Paths
                    </div>
                    {roadmap.map((path) => (
                        <button
                            key={path.id}
                            onClick={() => setActiveRoadmap(path)}
                            className={`w-full text-left p-6 rounded-3xl border transition-all relative overflow-hidden group ${activeRoadmap.id === path.id
                                ? 'bg-white border-primary-100 shadow-xl'
                                : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h3 className={`font-extrabold text-lg leading-tight tracking-tight ${activeRoadmap.id === path.id ? 'text-primary-600' : 'text-text-primary group-hover:text-primary-600 transition-colors'}`}>{path.title}</h3>
                                <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase font-black tracking-wider border whitespace-nowrap ${path.status === 'in-progress' ? 'bg-primary-50 border-primary-100 text-primary-600' : 'bg-gray-50 border-gray-100 text-text-secondary'}`}>
                                    {path.status}
                                </span>
                            </div>
                            <div className="space-y-2 relative z-10">
                                <div className="flex justify-between items-center text-[11px] font-bold">
                                    <span className="text-text-secondary uppercase">Progress</span>
                                    <span className="text-primary-600 font-black">{path.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="h-full bg-primary-600 transition-all duration-1000"
                                        style={{ width: `${path.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                            {activeRoadmap.id === path.id && (
                                <div className="absolute top-0 right-0 p-1 opacity-5">
                                    <BookOpen size={80} className="text-primary-600" />
                                </div>
                            )}
                        </button>
                    ))}

                    <button className="w-full flex items-center justify-center gap-3 py-5 border-2 border-dashed border-gray-200 rounded-3xl text-text-secondary hover:text-primary-600 hover:border-primary-300 transition-all font-bold bg-white/50 hover:bg-white shadow-xs">
                        <Filter size={18} />
                        Browse Catalog
                    </button>
                </div>

                {/* Path Details */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                            <h2 className="text-xl font-black text-text-primary flex items-center gap-3 tracking-tight">
                                <BookOpen className="text-primary-600" size={24} />
                                Master Schedule
                            </h2>
                            <span className="text-xs font-bold text-text-secondary border border-gray-100 bg-white px-3 py-1.5 rounded-xl shadow-xs">
                                {activeRoadmap.modules.filter(m => m.completed).length} / {activeRoadmap.modules.length} Completed
                            </span>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {activeRoadmap.modules.map((module, i) => (
                                <div key={i} className="p-6 hover:bg-gray-50/50 transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-start gap-5">
                                            <div className={`mt-1 h-6 w-6 rounded-xl border-2 flex items-center justify-center transition-all ${module.completed ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'border-gray-200 group-hover:border-primary-300'}`}>
                                                {module.completed && <CheckCircle2 size={14} className="text-white" />}
                                            </div>
                                            <div>
                                                <h4 className={`font-bold text-base tracking-tight ${module.completed ? 'text-primary-600' : 'text-text-primary group-hover:text-primary-600 transition-colors'}`}>{module.name}</h4>
                                                <div className="flex flex-wrap gap-4 mt-3">
                                                    {module.resources?.map((res, j) => (
                                                        <a key={j} href={res.link} className="flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-primary-600 transition-colors">
                                                            {res.type === 'video' && <PlayCircle size={14} />}
                                                            {res.type === 'article' && <FileText size={14} />}
                                                            {res.type === 'github' && <Github size={14} />}
                                                            {res.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {!module.completed ? (
                                                <button className="px-5 py-2.5 bg-white hover:bg-primary-600 rounded-xl text-xs font-black text-text-primary hover:text-white transition-all border border-gray-100 hover:border-primary-500 hover:shadow-lg active:scale-95 whitespace-nowrap shadow-xs uppercase tracking-widest">
                                                    Start
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                                                    <CheckCircle2 size={14} />
                                                    Verified
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl p-10 relative overflow-hidden shadow-2xl group">
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">Live Mentorship</h3>
                                <p className="text-primary-50 font-medium leading-relaxed max-w-sm opacity-90">Having trouble with {activeRoadmap.title}? Connect with industry experts now.</p>
                            </div>
                            <button className="px-10 py-4 bg-white text-primary-600 font-black rounded-2xl hover:bg-primary-50 transition-all shadow-xl whitespace-nowrap active:scale-95 hover:-translate-y-1">
                                Book 1:1 Session
                            </button>
                        </div>
                        <PlayCircle className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 transform rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnTrack;
