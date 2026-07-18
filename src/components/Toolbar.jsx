import React from 'react';

const Toolbar = ({ template, setTemplate, onEnhance, onExportPDF, onExportDOCX, isProcessing }) => {
  return (
    <div className="toolbar">
      <select 
        className="select-input" 
        value={template} 
        onChange={(e) => setTemplate(e.target.value)}
      >
        <option value="resume">Resume</option>
        <option value="letter">Business Letter</option>
        <option value="report">Project Report</option>
      </select>

      <button 
        className="btn btn-secondary" 
        onClick={() => onEnhance('grammar')}
        disabled={isProcessing}
      >
        {isProcessing ? <span className="loading-spinner"></span> : 
          <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"/><path d="M13 7 8.7 11.3a2.1 2.1 0 0 0 0 3l1.4 1.4a2.1 2.1 0 0 0 3 0L17 11"/><path d="m21 21-6-6"/></svg> Fix Grammar <span className="ai-badge">AI</span></>
        }
      </button>

      <button 
        className="btn btn-secondary" 
        onClick={() => onEnhance('rewrite')}
        disabled={isProcessing}
      >
        {isProcessing ? <span className="loading-spinner"></span> : 
          <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M9 18c0 1.66 1.34 3 3 3s3-1.34 3-3"/><path d="M21 12c0-1.66-4-3-9-3s-9 1.34-9 3"/><path d="M12 4v4"/></svg> Make Professional <span className="ai-badge">AI</span></>
        }
      </button>

      <button className="btn btn-primary" onClick={onExportPDF}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Export PDF
      </button>

      <button className="btn btn-primary" onClick={onExportDOCX}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Export DOCX
      </button>
    </div>
  );
};

export default Toolbar;
