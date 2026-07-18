import React from 'react';

const ResumeTemplate = ({ text }) => {
  // Simple heuristic parsing: assume lines with ALL CAPS or ending in colons might be headers
  // For a more robust solution, we'd use Markdown or a proper parser
  
  const processText = (rawText) => {
    if (!rawText) return <p style={{ color: '#ccc' }}>Document content will appear here...</p>;
    
    const lines = rawText.split('\n');
    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={index} />;
      
      // Heuristic for headers (short lines, uppercase or ending with colon)
      if (trimmed.length < 50 && (trimmed === trimmed.toUpperCase() || trimmed.endsWith(':'))) {
        return <h2 key={index} style={styles.sectionHeader}>{trimmed}</h2>;
      }
      
      // Heuristic for bullet points
      if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
        return <li key={index} style={styles.listItem}>{trimmed.substring(2)}</li>;
      }
      
      return <p key={index} style={styles.paragraph}>{trimmed}</p>;
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Resume</h1>
      </div>
      <div style={styles.content}>
        {processText(text)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    padding: '40px 50px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
    lineHeight: '1.6',
    backgroundColor: 'white',
  },
  header: {
    borderBottom: '2px solid #333',
    paddingBottom: '20px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  content: {
    fontSize: '14px',
  },
  sectionHeader: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: '25px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px',
  },
  paragraph: {
    marginBottom: '10px',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: '20px',
    marginBottom: '5px',
    listStyleType: 'disc',
  }
};

export default ResumeTemplate;
