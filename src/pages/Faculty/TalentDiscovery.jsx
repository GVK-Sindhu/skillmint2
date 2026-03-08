import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { Search, Sparkles, Github, Globe, UserPlus, Briefcase, Award, Filter } from 'lucide-react';

const TalentDiscovery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('All');

    const skills = ['All', 'React', 'JavaScript', 'Python', 'DSA', 'ML'];

    const filteredStudents = mockStudents.filter(s =>
        (selectedSkill === 'All' || s.skills.includes(selectedSkill)) &&
        (s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary flex items-center gap-3 tracking-tight font-heading">
                        <Sparkles className="text-success-500" size={32} />
                        Talent Discovery
                    </h1>
                    <p className="text-text-secondary mt-1 italic">Discover and shortlist top performing students for exclusive roles.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => alert("3 new hire requests from Recruiter Partners.")}
                        className="btn-success flex items-center gap-2 text-[11px] font-black uppercase tracking-widest"
                    >
                        Hire Requests (3)
                    </button>
                </div>
            </header>

            {/* Filters */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="relative w-full lg:w-96 group">
                        <Search className="absolute left-4 top-3.5 text-text-secondary group-focus-within:text-primary-600 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Find students by name or skill..."
                            className="input-field pl-12 h-12"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
                        {skills.map((skill) => (
                            <button
                                key={skill}
                                onClick={() => setSelectedSkill(skill)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border-2 ${selectedSkill === skill
                                    ? 'bg-primary-600 border-primary-500 text-white shadow-lg'
                                    : 'bg-white border-gray-100 text-text-secondary hover:text-primary-600 hover:border-primary-100'
                                    }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Talent Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredStudents.map((student) => (
                    <div key={student.id} className="card group overflow-hidden hover:border-success-500/20 shadow-sm hover:shadow-2xl">
                        <div className="p-2">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center text-2xl font-black text-success-500 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-600 transition-colors tracking-tight font-heading">{student.name}</h3>
                                        <p className="text-[10px] text-text-secondary font-black uppercase tracking-widest mt-1 opacity-70">Computer Science • Year 3</p>
                                    </div>
                                </div>
                                <span className="bg-success-50 text-success-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-success-100 ring-4 ring-success-100/10">
                                    Top 1%
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {student.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white text-text-secondary rounded-xl text-xs font-bold border border-gray-100 group-hover:border-primary-200 transition-colors shadow-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 group-hover:bg-white transition-all">
                                    <div className="flex items-center gap-2 text-text-secondary mb-2 opacity-60">
                                        <Briefcase size={14} />
                                        <span className="text-[10px] uppercase font-black tracking-widest">Projects</span>
                                    </div>
                                    <p className="text-sm font-bold text-text-primary">{student.projects.length} Major</p>
                                </div>
                                <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 group-hover:bg-white transition-all">
                                    <div className="flex items-center gap-2 text-text-secondary mb-2 opacity-60">
                                        <Award size={14} />
                                        <span className="text-[10px] uppercase font-black tracking-widest">Badges</span>
                                    </div>
                                    <p className="text-sm font-bold text-text-primary">{student.certificates.length} Verified</p>
                                </div>
                            </div>

                            <div className="flex gap-4 border-t border-gray-50 pt-8 mt-auto">
                                <button
                                    onClick={() => {
                                        alert(`Accessing Talent Analysis for ${student.name}... Navigating to Insight Hub.`);
                                        window.location.href = '/student/insights';
                                    }}
                                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 active:scale-95 group-hover:-translate-y-1"
                                >
                                    <UserPlus size={18} />
                                    Hire Student
                                </button>
                                <div className="flex gap-2">
                                    <button onClick={() => alert("Navigating to Student GitHub Profile...")} className="p-3.5 bg-gray-50 hover:bg-white text-text-secondary hover:text-primary-600 rounded-2xl transition-all border border-gray-100 hover:border-primary-200 shadow-sm active:scale-95">
                                        <Github size={20} />
                                    </button>
                                    <button onClick={() => alert("Navigating to Student Portfolio...")} className="p-3.5 bg-gray-50 hover:bg-white text-text-secondary hover:text-primary-600 rounded-2xl transition-all border border-gray-100 hover:border-primary-200 shadow-sm active:scale-95">
                                        <Globe size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TalentDiscovery;
