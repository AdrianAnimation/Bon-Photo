import { useSelector } from 'react-redux';
import PhotographerCard from './PhotographerCard';

export default function PhotographersList() {
  const { items: photographers } = useSelector((state) => state.photographers);

  return (
    <div className="photographers-list">
      {photographers.map((photographer) => (
        <PhotographerCard key={photographer.id} photographer={photographer} />
      ))}
    </div>
  );
}