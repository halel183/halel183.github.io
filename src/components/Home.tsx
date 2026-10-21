import { Link, PageLayout } from '@primer/react';
import './Home.css';
import { Image, River, Heading, Text } from '@primer/react-brand'
import giverny from '../assets/giverny.jpeg';
import cat from '../assets/cat_window.jpeg';
import selfie from '../assets/selfie.jpeg';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
  document.title = 'Home';
  return (
    <PageLayout className="home-page">
      {NavBar()}
      <PageLayout.Content>
        <River>
          <River.Visual className="river-image" >
            <Image src={giverny} alt="Photo of Haleluya in Giverny" height={300} />
          </River.Visual>
          <River.Content>
            <Heading>hello, i'm haleluya (she/her)</Heading>
            <Text>a young tech professional who wants to contribute my skills towards the public good</Text>
          </River.Content>
        </River>
        <River align="end">
          <River.Visual className="river-image" >
            <Image src={cat} alt="Photo of cat by window" height={300} />
          </River.Visual>
          <River.Content>
            <Heading>this is my partner in crime, birtukan</Heading>
            <Text>birtukan means orange in Amharic. <br/>she's always looking out the window</Text>
          </River.Content>
        </River>
        <River align="center">
          <River.Visual className="river-image">
            <Image src={selfie} alt="Amazon rainforest" height={300} />
            {/* <Image src={selfie} alt="Selfie" height={300} /> */}
          </River.Visual>
          <River.Content>
            <Heading>welcome to my website!</Heading>
            <Text>
              here is a picture of me and my best friend exploring the outdoors
            </Text>
            <Link href="#">Call to action</Link>
          </River.Content>
        </River>
      </PageLayout.Content>
      {Footer()}
    </PageLayout>
  );
}
export default Home;