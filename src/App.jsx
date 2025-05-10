import ListGallery from './components/ListGallery';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <main className='relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <Hero />
        <ListGallery />
        <Footer />
      </div>
    </main>
  );
}

export default App;
