import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Code,
    Database,
    Terminal,
    Cpu,
    Globe,
    CheckCircle2,
    ExternalLink,
    Play
} from 'lucide-react';

const icons = {
    'Web Development': Globe,
    'DSA': Code,
    'System Design': Database,
    'AI / ML': Cpu,
    'default': Terminal
};

const SkillCard = ({ name, progress, modulesCompleted = 12, totalModules = 20 }) => {
    const Icon = icons[name] || icons.default;
    const navigate = useNavigate();

    const handleStart = () => {
        // Point: Navigate to roadmap of the course
        navigate('/student/learn');
    };

    return (
        <div className="card group">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-primary-50 text-gradient group-hover:scale-110 transition-transform shadow-sm ring-1 ring-primary-100">
                    <Icon size={24} className="text-primary-600" />
                </div>
                <button
                    onClick={() => alert(`Opening Syllabus for ${name}...`)}
                    className="p-2 text-text-secondary hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all border border-transparent hover:border-primary-100"
                >
                    <ExternalLink size={18} />
                </button>
            </div>

            <h3 className="text-xl font-extrabold text-text-primary mb-1 tracking-tight font-heading">{name}</h3>
            <p className="text-xs font-bold text-text-secondary mb-5 opacity-70 tracking-widest uppercase">{modulesCompleted}/{totalModules} Module Units</p>

            <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-text-secondary">Course Progress</span>
                    <span className="text-primary-600">{progress}%</span>
                </div>
                <div className="h-2.5 bg-gray-50 border border-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-primary-600 rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <button
                onClick={handleStart}
                className="mt-8 w-full py-3.5 bg-white hover:bg-primary-600 text-text-primary hover:text-white text-xs font-black rounded-2xl transition-all border-2 border-primary-50 hover:border-primary-600 flex items-center justify-center gap-3 group/btn shadow-sm active:scale-95 uppercase tracking-widest"
            >
                <div className="p-1 bg-primary-50 rounded-md group-hover/btn:bg-white/20 transition-colors">
                    <Play size={12} fill="currentColor" className="text-primary-600 group-hover/btn:text-white" />
                </div>
                Keep Learning
            </button>
        </div>
    );
};

export default SkillCard;
