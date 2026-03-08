import React, { useState } from 'react';
import { mockDoubts } from '../../data/mockData';
import { MessageSquare, Send, CheckCircle, Clock, Search, Zap } from 'lucide-react';

const DoubtSolving = () => {
    const [selectedDoubt, setSelectedDoubt] = useState(mockDoubts[0]);
    const [answer, setAnswer] = useState('');

    const handleAnswer = () => {
        if (!answer.trim()) return;
        // Point 3: Feedback alert
        alert(`Message Sent to ${selectedDoubt.studentName}! Resolution recorded.`);
        setAnswer('');
    };

    return (
        <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary flex items-center gap-3 tracking-tight font-heading">
                        <MessageSquare className="text-primary-600" size={32} />
                        Mentor Resolution Center
                    </h1>
                    <p className="text-text-secondary mt-1 italic leading-relaxed">Provide guidance and resolve student questions to earn reward points.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px]">
                {/* Doubts List */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl flex flex-col overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/20">
                        <div className="relative group">
                            <Search size={16} className="absolute left-3 top-3 text-text-secondary group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Filter doubts..."
                                className="input-field py-2 pr-4 h-10 text-xs"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-50 no-scrollbar">
                        {mockDoubts.map((doubt) => (
                            <button
                                key={doubt.id}
                                onClick={() => setSelectedDoubt(doubt)}
                                className={`w-full text-left p-6 transition-all border-l-4 ${selectedDoubt?.id === doubt.id
                                    ? 'bg-primary-50/50 border-primary-600'
                                    : 'border-transparent hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-black text-text-secondary uppercase tracking-widest">{doubt.studentName}</span>
                                    <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase font-black tracking-wider border ${doubt.status === 'open' ? 'bg-accent-50 text-accent-600 border-accent-100' : 'bg-success-50 text-success-600 border-success-100'}`}>
                                        {doubt.status}
                                    </span>
                                </div>
                                <p className={`text-sm line-clamp-2 transition-colors ${selectedDoubt?.id === doubt.id ? 'text-text-primary font-bold' : 'text-text-secondary'}`}>
                                    {doubt.question}
                                </p>
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-text-secondary font-black uppercase tracking-tighter">
                                    <Clock size={12} className="text-primary-500" />
                                    {new Date(doubt.createdAt).toLocaleDateString()}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conversation View */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl flex flex-col overflow-hidden shadow-xl">
                    {selectedDoubt ? (
                        <>
                            <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-primary-600/20">
                                        {selectedDoubt.studentName.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-primary tracking-tight">{selectedDoubt.studentName}</h3>
                                        <p className="text-[10px] text-success-600 font-black uppercase tracking-widest flex items-center gap-1">
                                            <CheckCircle size={12} />
                                            Verified Student
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => alert("Marked as resolved")}
                                        className="p-2.5 bg-gray-50 text-text-secondary hover:text-success-600 hover:bg-success-50 border border-gray-100 rounded-xl transition-all shadow-sm"
                                    >
                                        <CheckCircle size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 p-8 overflow-y-auto space-y-8 no-scrollbar bg-gray-50/50">
                                {/* Placeholder for Thread */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-black text-text-secondary shadow-sm">
                                        S
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl rounded-tl-none border border-gray-100 max-w-2xl shadow-sm ring-1 ring-black/5">
                                        <p className="text-text-primary leading-relaxed font-semibold italic">"{selectedDoubt.question}"</p>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-[9px] font-black text-text-secondary uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded-md">Yesterday, 10:24 AM</span>
                                            <span className="text-[9px] font-black text-text-secondary uppercase tracking-widest opacity-40">Student Query</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row-reverse gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-primary-600 flex-shrink-0 flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary-600/20">
                                        F
                                    </div>
                                    <div className="bg-primary-600 p-6 rounded-3xl rounded-tr-none max-w-2xl shadow-xl ring-1 ring-primary-500">
                                        <p className="text-white leading-relaxed font-bold">"Greeting! I noticed you were asking about recursive functions. Let's break it down."</p>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-[9px] font-black text-primary-200 uppercase tracking-widest">Just now</span>
                                            <div className="flex items-center gap-1 text-[9px] font-black text-white uppercase tracking-widest">
                                                <Zap size={10} fill="currentColor" />
                                                Expert Guidance
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50/30 border-t border-gray-100 shadow-inner">
                                <div className="relative group">
                                    <textarea
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-4 pr-16 text-sm text-text-primary focus:outline-none focus:ring-4 focus:ring-primary-600/5 focus:border-primary-600 transition-all resize-none min-h-[120px] shadow-sm"
                                        placeholder="Type your answer or guidance here..."
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                    ></textarea>
                                    <button
                                        onClick={handleAnswer}
                                        className="absolute bottom-4 right-4 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl shadow-xl shadow-primary-600/30 transition-all active:scale-95 group-hover:-translate-y-1"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-text-secondary italic font-bold">
                            Select a doubt to start guiding.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoubtSolving;
