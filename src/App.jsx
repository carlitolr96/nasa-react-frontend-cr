import ListGallery from './components/ListGallery';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div className='relative rounded-b-4xl shadow-xl/30 bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='relative z-10 pb-100 max-w-7xl w-full'>
          <Hero />
          <ListGallery />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
