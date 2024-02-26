import { CarsList } from 'components/CarsList/CarsList';
import { CarSearchForm } from 'components/CarsSearchForm/CarSearchForm';

export default function Catalog() {
  
  return (
    <div>
      <CarSearchForm/>
      <CarsList />
      <button>Load more</button>
    </div>
  );
}
