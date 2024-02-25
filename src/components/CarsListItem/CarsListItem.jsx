import { CarDetailsModal } from 'components/CarDetailsModal/CarDetailsModal';
import { CarItemStyle } from './CarsListItem.styled';
import { useState } from 'react';

export const CarsListItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <CarItemStyle>
      <div>
        <img src={img} alt={model} width={274} height={268} />
        <div>
          <ul>
            <li>
              <p>{make}</p>
              <p>{model}</p>
              <p>{year}</p>
            </li>

            <li>{rentalPrice}</li>
          </ul>
          <ul>
            <li>{address}</li>
            <li>{rentalCompany}</li>
            <li>{}</li>
            <li>{type}</li>
            <li>{model}</li>
            <li>{id}</li>
            <li>{accessories}</li>
          </ul>
        </div>
      </div>

      <button type="button" onClick={openModal}>
        Learn more
      </button>
      <CarDetailsModal
        car={car}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </CarItemStyle>
  );
};
