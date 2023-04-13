import Hero from './hero';
import Skills from './skills';
import MyProject from './myProject';

export default function Home() {
  return (
    <main className='main bg-slate-50'>
      <Hero />
      <Skills />
      <MyProject />
    </main>
  )
}