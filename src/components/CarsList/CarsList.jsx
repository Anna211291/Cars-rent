import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations';
import { CarListStyle } from './CarsList.styled';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <CarListStyle>
      {cars.map(car => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </CarListStyle>
  );
};
