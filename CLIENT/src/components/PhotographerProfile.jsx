import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographerPhotos } from '../store/slices/photographersSlice';

export default function PhotographerProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photographer = useSelector((state) =>
    state.photographers.items.find((p) => p.id === parseInt(id))
  );
  const { status, error } = useSelector((state) => state.photographers);

  useEffect(() => {
    if (photographer && status === 'idle') {
      dispatch(fetchPhotographerPhotos(photographer.username));
    }
  }, [photographer, status, dispatch]);

  if (!photographer) return <div>Photographer not found</div>;
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="photographer-profile">
      <div className="profile-header">
        <img src={photographer.avatar} alt={photographer.name} className="profile-avatar" />
        <div className="profile-info">
          <h2>{photographer.name}</h2>
          <p>{photographer.bio}</p>
          <a href={photographer.portfolio} target="_blank" rel="noopener noreferrer" className="portfolio-link">
            View Portfolio
          </a>
        </div>
      </div>
      <div className="photo-grid">
        {photographer.photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.urls.regular} alt={photo.alt_description} loading="lazy" />
            <div className="photo-info">
              <p>{photo.description}</p>
              <div className="photo-stats">
                <span>❤️ {photo.likes}</span>
                <span>👁️ {photo.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}