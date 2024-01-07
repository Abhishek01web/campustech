import './App.scss';

// Componentes
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Secondsec from './components/secondSection/secondsec';
import Tsec from './components/thirdSection/tsec';
import Fosec from './components/fourthsection/fosec';
import Fsec from './components/fifthsection/fsec';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <section className='home'>
        <Header />
        <Hero />
        <Secondsec />
        <Tsec />
        <Fosec />
        <Fsec />
        <Footer />
      </section>
    </>
  );
}

export default App;
