import { PageLayout} from "@primer/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Card, Stack} from '@primer/react-brand'
import trafficStops from '../assets/trafficstops.jpg';
import './Projects.css';

function Projects() {
  document.title = 'Projects';
  return (
    <PageLayout className="home-page">
      {NavBar()}
      <PageLayout.Content>
        <Stack direction="horizontal">
            <Card className="project-card" href="https://colab.research.google.com/drive/101U_q7ewOawi7SiBD5TbvUjDCfiJVNc1?usp=sharing" variant="minimal" ctaVariant="none">
             <Card.Image src={trafficStops} alt="Bias in Boston Traffic Stops"/>
             <Card.Heading>Bias in Boston Traffic Stops</Card.Heading>
            </Card>
          </Stack>
      </PageLayout.Content>
      {Footer()}
    </PageLayout>

  );
}
export default Projects;