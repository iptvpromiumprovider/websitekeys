import React, { useState } from 'react';
import { ARCHITECTURE_PHASES, PhaseDoc } from '../data/architectureDocs';
import { X, BookOpen, AlertTriangle, Layers, Code, CheckCircle, Copy } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPhase: PhaseDoc = ARCHITECTURE_PHASES[activePhaseIndex];

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl bg-[#16171f] text-slate-200 shadow-2xl border border-[#2b2d3d] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#242635] bg-[#121318] text-white">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-bold">Enterprise E-Commerce Architecture & SEO Blueprint</h2>
              <p className="text-xs text-slate-400">Phase-by-Phase Technical Specifications & WooCommerce Scalability Plan</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#222430] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs (Phases 1-7) */}
        <div className="flex border-b border-[#242635] bg-[#14151c] px-6 overflow-x-auto gap-2 py-2.5 no-scrollbar">
          {ARCHITECTURE_PHASES.map((phase, idx) => (
            <button
              key={phase.id}
              onClick={() => setActivePhaseIndex(idx)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                activePhaseIndex === idx
                  ? 'bg-amber-500 text-black shadow-xs font-bold'
                  : 'text-slate-400 hover:bg-[#20222e] hover:text-white'
              }`}
            >
              Phase {phase.phaseNumber}: {phase.title.split('—')[1] || phase.title}
            </button>
          ))}
        </div>

        {/* Phase Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242635] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Phase {currentPhase.phaseNumber} • Architectural Implementation
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {currentPhase.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => copyContent(currentPhase.content)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#303344] bg-[#1a1c26] px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-[#222532] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Copied Phase</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>
          </div>

          {/* Objective & Strategic Decision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#272938] bg-[#1a1c25] p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Core Objective
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPhase.objective}
              </p>
            </div>

            <div className="rounded-xl border border-[#272938] bg-[#1a1c25] p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Why This Architectural Decision Was Made
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPhase.whyDecisionMade}
              </p>
            </div>
          </div>

          {/* Pitfalls & Solutions */}
          {currentPhase.potentialPitfallsAndSolutions && currentPhase.potentialPitfallsAndSolutions.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <span>Identified Pitfalls & Mitigation Strategies</span>
              </h4>
              <div className="space-y-3">
                {currentPhase.potentialPitfallsAndSolutions.map((pitfall, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#272938] bg-[#1a1c25] p-4 text-xs space-y-1.5"
                  >
                    <div className="text-rose-400 font-semibold">
                      Risk: {pitfall.risk}
                    </div>
                    <div className="text-slate-400">
                      Impact: {pitfall.impact}
                    </div>
                    <div className="text-emerald-400 font-medium pt-1 border-t border-[#252735]">
                      Architectural Solution: {pitfall.architecturalSolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rendered Technical Documentation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Code className="h-4 w-4 text-amber-400" />
              <span>Technical Specification & Code Implementation</span>
            </h4>
            <div className="rounded-xl border border-[#272938] bg-[#121318] p-6 text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {currentPhase.content}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#242635] bg-[#14151c] px-6 py-3.5 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Phase {activePhaseIndex + 1} of {ARCHITECTURE_PHASES.length}
          </div>
          <div className="flex gap-2">
            <button
              disabled={activePhaseIndex === 0}
              onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
              className="rounded-lg border border-[#303344] bg-[#1a1c26] px-3 py-1.5 text-xs font-semibold text-slate-300 disabled:opacity-40 hover:bg-[#222532]"
            >
              Previous Phase
            </button>
            <button
              disabled={activePhaseIndex === ARCHITECTURE_PHASES.length - 1}
              onClick={() => setActivePhaseIndex((prev) => Math.min(ARCHITECTURE_PHASES.length - 1, prev + 1))}
              className="rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-black disabled:opacity-40 hover:bg-amber-400"
            >
              Next Phase
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
