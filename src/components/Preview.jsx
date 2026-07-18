import React from 'react';
import ResumeTemplate from '../templates/ResumeTemplate';
import BusinessLetterTemplate from '../templates/BusinessLetterTemplate';
import ProjectReportTemplate from '../templates/ProjectReportTemplate';

const Preview = ({ text, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'resume':
        return <ResumeTemplate text={text} />;
      case 'letter':
        return <BusinessLetterTemplate text={text} />;
      case 'report':
        return <ProjectReportTemplate text={text} />;
      default:
        return <ResumeTemplate text={text} />;
    }
  };

  return (
    <div className="preview-container">
      <div id="preview-document" className="document-preview">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
