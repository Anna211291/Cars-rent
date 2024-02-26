import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors';

export const CarSearchForm = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
  
    useEffect(() => {
      dispatch(fetchCars());
    }, [dispatch]);
console.log(cars);
// const brand = cars.filtrer(carBrand => carBrand.make)
  return (
    <div>
      <Formik>
        <Form>
          <label>
            Car brand
            <Field as="select" name="carBrand" placeholder="lastName" >
            <option hidden  value="" label="Enter the text" />
              <option value={cars.make}>{cars.make}</option>
            </Field>
          </label>

          <label>
            Price/ 1 hour
            <Field as="select" name="color" placeholder='Enter the text'>
            <option hidden  value="" label="To &#36;" />
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </label>

          <label>
            Сar mileage / km
            <Field name="from" placeholder="From" />
            <Field name="to" placeholder="To" />
          </label>

          <button type="button">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
