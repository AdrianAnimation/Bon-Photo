import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPhotos } from '../store/slices/photosSlice';
import SearchBar from './SearchBar';

export default function PhotoGrid() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: photos, status, error, searchQuery } = useSelector((state) => state.photos);

  useEffect(() => {
    if (status === 'idle' && !searchQuery) {
      dispatch(fetchPhotos());
    }
  }, [status, dispatch, searchQuery]);

  const handlePhotoClick = (username) => {
    navigate(`/photographers/${username}/catalog`);
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="photo-grid-container">
      <SearchBar />
      <div className="photo-grid">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="photo-card"
            onClick={() => handlePhotoClick(photo.user.username)}
            role="button"
            tabIndex={0}
          >
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              loading="lazy"
            />
            <div className="photo-info">
              <h3>{photo.user.name}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}