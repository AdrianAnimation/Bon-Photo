import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographerPhotos } from '../store/slices/photographersSlice';

export default function PhotographerCatalog() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.photographers);
  const photos = useSelector((state) => 
    state.photographers.photographerPhotos[username] || []
  );

  useEffect(() => {
    dispatch(fetchPhotographerPhotos(username));
  }, [username, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  // Fallback to placeholder photos if API limit is reached
  const displayPhotos = photos.length > 0 ? photos : Array(12).fill({
    id: null,
    urls: { regular: 'https://via.placeholder.com/400x300' },
    description: 'Placeholder image',
  });

  return (
    <div className="photographer-catalog">
      <div className="catalog-grid">
        {displayPhotos.map((photo, index) => (
          <div key={photo.id || index} className="catalog-photo">
            <img
              src={photo.urls.regular}
              alt={photo.description}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}