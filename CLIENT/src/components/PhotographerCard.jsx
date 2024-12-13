import { Link } from 'react-router-dom';

export default function PhotographerCard({ photographer }) {
  const { id, name, bio, avatar } = photographer;

  return (
    <div className="photographer-card">
      <img src={avatar} alt={name} className="photographer-avatar" />
      <div className="photographer-info">
        <h3>{name}</h3>
        <p>{bio}</p>
        <Link to={`/photographers/${id}`} className="view-profile">
          View Profile
        </Link>
      </div>
    </div>
  );
}