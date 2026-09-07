import Hero from '../components/Hero';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import LatestBlogs from '../components/LatestBlogs';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <FeaturedProjects />
      <div className="section-divider" />
      <LatestBlogs />
      <Footer />
    </>
  );
};

export default Home;
