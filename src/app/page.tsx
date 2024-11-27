"use client"
import Hero from '@/app/components/Hero';
import Contact from './contact/page';
import About from './about/page';
import Skills from './skills/page';
import Project from './projects/page';

const Home: React.FC = () => {
  return (
    <div>
        
      <Hero/>
       <About/>
       <Project/>
      <Skills/>
      <Contact/> 


    </div>
  );
};

export default Home;
