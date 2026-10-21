import { PageLayout, Stack } from '@primer/react';
import './Resume.css';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {ArrowDownIcon} from '@primer/octicons-react'
import { Text, Heading, Button } from '@primer/react-brand';
import NavBar from './NavBar';
import Footer from './Footer';
import resume from '../assets/AsfawHResume2026.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function handleDownload(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'AsfawHResume2026.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Resume() {
  document.title = 'Resume';
  return (
    <PageLayout className="home-page">
      {NavBar()}
      <PageLayout.Content>
        <Stack className="resume-content" >
          <Button onClick={handleDownload}><ArrowDownIcon size={18}/> Download</Button>
          <Document file={resume}>
            <Page pageNumber={1} width={1000} />
          </Document>        </Stack>
      </PageLayout.Content>
      {Footer()}
    </PageLayout>

  );
}
export default Resume;