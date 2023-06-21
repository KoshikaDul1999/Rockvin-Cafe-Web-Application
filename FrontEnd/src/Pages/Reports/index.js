import { Typography } from "antd";
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

import { saveAs } from 'file-saver';
import { PDFViewer } from '@react-pdf/renderer';

const generateReport = () => {
    // Report generation logic
    // Use the report generation library of your choice
    // For example, using react-pdf and html2canvas:
  
    // Generate the PDF content
    const content = document.getElementById('report-content');
  
    // Create a canvas from the content
    html2canvas(content).then((canvas) => {
      // Convert the canvas to a base64-encoded PNG image
      const image = canvas.toDataURL('image/png');
  
      // Create a PDF document with the image
      const pdf = new jsPDF();
      pdf.addImage(image, 'PNG', 0, 0);
  
      // Save the PDF file
      pdf.save('report.pdf');
    });
  };
  

  function Reports() {
    return (
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
  
        <div>
          <Typography.Title level={4}>Reports</Typography.Title>
          <div id="report-content">
            {/* Your report content goes here */}
          </div>
          <button onClick={generateReport}>Generate Report</button>
        </div>
      </div>
    );
  }
  
export default Reports