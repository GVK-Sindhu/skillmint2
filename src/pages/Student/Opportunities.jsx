import React, { useState } from 'react';
import { mockOpportunities } from '../../data/mockData';
import OpportunityCard from '../../components/Dashboard/OpportunityCard';
import { Search, Filter, Briefcase, GraduationCap, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const Opportunities = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const types = ['All', 'Internship', 'Job', 'Competition'];

    const filteredItems = mockOpportunities.filter(o =>
        (filter === 'All' || o.type === filter) &&
        (o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.company.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-text-primary flex items-center gap-3 tracking-tight">
                            <Briefcase className="text-primary-600" size={32} />
                            Opportunities
                        </h1>
                        <p className="text-text-secondary mt-1 italic">Exclusive internships and roles tailored for SkillMint graduates.</p>
                    </div>

                    <div className="bg-primary-50 border border-primary-100 px-6 py-4 rounded-3xl flex items-center gap-4 shadow-sm group hover:border-primary-200 transition-all">
                        <div className="p-3 bg-primary-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest leading-none mb-1">Match Accuracy</p>
                            <p className="text-2xl font-black text-text-primary tracking-tight">92%</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full group">
                        <Search className="absolute left-4 top-3.5 text-text-secondary group-focus-within:text-primary-600 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Find your next career move..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-600/10 focus:bg-white transition-all shadow-inner"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
                        {types.map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border ${filter === type
                                    ? 'bg-primary-600 border-primary-500 text-white shadow-lg'
                                    : 'bg-white border-gray-100 text-text-secondary hover:text-primary-600 hover:border-primary-100'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((opp) => (
                        <OpportunityCard key={opp.id} {...opp} />
                    ))}
                </div>
            ) : (
                <div className="card flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="p-6 bg-gray-50 rounded-full border border-gray-100 text-text-secondary opacity-30">
                        <Search size={48} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-text-primary tracking-tight">No opportunities match your search</h3>
                        <p className="text-text-secondary mt-1">Try broadening your filters or different keywords.</p>
                    </div>
                </div>
            )}

            <footer className="bg-gradient-to-r from-secondary-50 to-white border border-secondary-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-text-primary mb-2 tracking-tight">Unlock Premium Placements</h3>
                    <p className="text-text-secondary max-w-xl italic leading-relaxed">"The best way to predict your future is to create it. Master another skill to unlock elite roles."</p>
                </div>
                <button className="flex items-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-2xl font-bold transition-all shadow-xl active:scale-95 group-hover:-translate-y-1">
                    <GraduationCap size={20} />
                    Level Up Skills
                    <ArrowRight size={18} />
                </button>
            </footer>
        </div>
    );
};

export default Opportunities;
