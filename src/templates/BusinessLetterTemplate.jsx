import React from 'react';

const BusinessLetterTemplate = ({ text }) => {
  const processText = (rawText) => {
    if (!rawText) return <p style={{ color: '#ccc' }}>Document content will appear here...</p>;
    
    const lines = rawText.split('\n');
    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={index} />;
      return <p key={index} style={styles.paragraph}>{trimmed}</p>;
    });
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div style={styles.container}>
      <div style={styles.dateInfo}>
        <p>{currentDate}</p>
      </div>
      <div style={styles.content}>
        {processText(text)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Times New Roman", Times, serif',
    padding: '60px 80px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#000',
    lineHeight: '1.5',
    backgroundColor: 'white',
  },
  dateInfo: {
    marginBottom: '40px',
    textAlign: 'right',
  },
  content: {
    fontSize: '12pt',
  },
  paragraph: {
    marginBottom: '15px',
    textAlign: 'left',
  }
};

export default BusinessLetterTemplate;
