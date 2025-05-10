import { useEffect, useState } from 'react';
import Gallery from './Gallery';

function ListGallery() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const photosPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const Nasa_Api_Key = '5m1VlDxWMBVmlUxp1baKYPOZkwgl0Zm15fqwpEu2';
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${Nasa_Api_Key}`);
      const data = await response.json();
      setPhotos(data.photos);
      setLoading(false);
    };

    fetchData();
  }, []);

  const startIndex = 0;
  const endIndex = currentPage * photosPerPage;
  const paginatedPhotos = photos.slice(startIndex, endIndex);
  const hasMore = endIndex < photos.length;

  const handleDelete = (id) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 sm:h-96">
        <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedPhotos.map(photo => (
          <Gallery key={photo.id} photo={photo} onDelete={handleDelete} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="border cursor-pointer border-white text-white px-5 py-2 text-sm sm:text-base rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Más Imágenes
          </button>
        </div>
      )}
    </div>
  );
}

export default ListGallery;
