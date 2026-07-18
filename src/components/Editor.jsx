import React, { useRef } from 'react';

const Editor = ({ text, setText }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setText(event.target.result);
    };
    reader.readAsText(file);
    // Reset input so the same file can be uploaded again if needed
    e.target.value = null;
  };

  return (
    <div className="editor-container fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="file-upload-container">
        <input 
          type="file" 
          accept=".txt,.md" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          className="file-input" 
        />
        <button 
          className="btn btn-secondary" 
          onClick={() => fileInputRef.current.click()}
        >
          Upload .txt / .md
        </button>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Or paste your text below
        </span>
      </div>
      
      <textarea 
        className="text-area"
        placeholder="Enter your document content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Editor;
