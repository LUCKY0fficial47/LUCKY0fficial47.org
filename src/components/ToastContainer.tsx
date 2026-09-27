import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map(toast => {
        let Icon = CheckCircle2;
        let colorClass = 'border-emerald-500/30 text-emerald-400 bg-[#101915]';

        if (toast.type === 'info') {
          Icon = Info;
          colorClass = 'border-[#00BFFF]/30 text-[#00BFFF] bg-[#0E1720]';
        } else if (toast.type === 'error') {
          Icon = AlertTriangle;
          colorClass = 'border-rose-500/30 text-rose-400 bg-[#201015]';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-xl text-xs font-medium max-w-sm transition-all duration-300 animate-in fade-in slide-in-from-top-3 ${colorClass}`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-slate-200">{toast.text}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
