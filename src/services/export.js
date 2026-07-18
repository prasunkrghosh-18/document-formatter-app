import html2pdf from 'html2pdf.js';

export const exportToPDF = (elementId, filename) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const opt = {
    margin:       [0.5, 0.5, 0.5, 0.5],
    filename:     `${filename}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
};

export const exportToDOCX = (elementId, filename) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // A very simple approach to export HTML to DOCX format 
  // that modern MS Word can open (saving as .doc or .docx containing HTML)
  const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  
  const footer = "</body></html>";
  const sourceHTML = header + element.innerHTML + footer;
  
  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = `${filename}.doc`;
  fileDownload.click();
  document.body.removeChild(fileDownload);
};
