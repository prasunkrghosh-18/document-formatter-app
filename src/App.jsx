import React, { useState } from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import Preview from './components/Preview';
import { enhanceWithGemini } from './services/gemini';
import { exportToPDF, exportToDOCX } from './services/export';

function App() {
  const [text, setText] = useState('');
  const [template, setTemplate] = useState('resume');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEnhance = async (action) => {
    if (!text.trim()) return;
    setIsProcessing(true);
    try {
      const enhancedText = await enhanceWithGemini(text, action, template);
      setText(enhancedText);
    } catch (error) {
      console.error("Enhancement failed:", error);
      alert("Failed to enhance text. Please check your API key and try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExportPDF = () => {
    exportToPDF('preview-document', `Document_${Date.now()}`);
  };

  const handleExportDOCX = () => {
    exportToDOCX('preview-document', `Document_${Date.now()}`);
  };

  return (
    <div className="app-container">
      <div className="left-panel fade-in">
        <div className="panel-header">
          <h1 className="panel-title">Formatter & Exporter</h1>
        </div>
        
        <Toolbar 
          template={template} 
          setTemplate={setTemplate} 
          onEnhance={handleEnhance}
          onExportPDF={handleExportPDF}
          onExportDOCX={handleExportDOCX}
          isProcessing={isProcessing}
        />
        
        <Editor text={text} setText={setText} />
      </div>

      <div className="right-panel fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="panel-header">
          <h2 className="panel-title">Live Preview</h2>
        </div>
        <Preview text={text} template={template} />
      </div>
    </div>
  );
}

export default App;
