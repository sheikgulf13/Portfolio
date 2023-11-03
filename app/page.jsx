
import Hero from './hero';
import MyProject from './myProject';
import About from './about';
import Services from './services';
import Footer from './footer';
import Contact from './contact';

export default function Home() {
 
  
  return (
    <main className='main relative  scroll-smooth overflow-hidden sm:overflow-hidden md:overflow-hidden' id='section'>
      <Hero />
      <About />
      <Services />
      <MyProject />
      <Contact />
      <Footer />
    </main>
  )
}