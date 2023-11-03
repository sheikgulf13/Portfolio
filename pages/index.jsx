
import Hero from '../sections/hero';
import MyProject from '../sections/myProject';
import About from '../sections/about';
import Services from '../sections/services';
import Footer from '../sections/footer';
import Contact from '../sections/contact';

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