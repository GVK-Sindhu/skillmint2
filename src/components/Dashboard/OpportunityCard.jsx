import React from 'react';
import { Calendar, Building2, ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react';

const OpportunityCard = ({ title, company, description, deadline, type }) => {
    const getTypeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'internship': return 'text-primary-600 bg-primary-50 border-primary-100';
            case 'job': return 'text-success-600 bg-success-50 border-success-100';
            case 'competition': return 'text-accent-600 bg-accent-50 border-accent-100';
            default: return 'text-text-secondary bg-gray-50 border-gray-100';
        }
    };

    const handleApply = () => {
        // Point 4: Navigation/Message for Apply Now
        const msg = `Navigating to ${company}'s official application portal for ${title}... (Simulated LinkedIn/Indeed redirect)`;
        alert(msg);
        window.open('https://www.linkedin.com/jobs', '_blank');
    };

    return (
        <div className="card group flex flex-col h-full border-2 border-gray-50 hover:border-primary-100">
            <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border shadow-sm ${getTypeColor(type)}`}>
                    {type}
                </span>
                <button
                    onClick={() => alert(`Saving ${title} to your wishlist...`)}
                    className="p-2.5 bg-gray-50 text-text-secondary hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all group-hover:rotate-12 border border-gray-100 hover:border-primary-100 shadow-xs"
                >
                    <ArrowUpRight size={18} />
                </button>
            </div>

            <h3 className="text-xl font-extrabold text-text-primary mb-2 group-hover:text-primary-600 transition-colors tracking-tight leading-tight font-heading">{title}</h3>

            <div className="flex items-center gap-2 text-text-secondary text-sm mb-4 font-bold italic opacity-80">
                <Building2 size={16} className="text-primary-400" />
                {company}
            </div>

            <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed opacity-70">
                {description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-tighter">
                    <Calendar size={14} className="text-accent-500" />
                    <span>DL: {new Date(deadline).toLocaleDateString()}</span>
                </div>
                <button
                    onClick={handleApply}
                    className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-[11px] font-black rounded-xl transition-all shadow-xl shadow-primary-600/20 active:scale-95 flex items-center gap-2 uppercase tracking-widest"
                >
                    Apply Now
                    <ExternalLink size={14} />
                </button>
            </div>
        </div>
    );
};

export default OpportunityCard;
