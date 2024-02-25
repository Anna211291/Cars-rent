import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

Modal.setAppElement('#root');

export const CarDetailsModal = ({ car, isModalOpen, closeModal }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      width="498"
    >
      <div>
        <div>
          <img src={img} alt={model} width={461} height={248} />
          <div>
            <div>
              <h2>
                {make} {model}, {year}
              </h2>
              <ul>
                <li>{address}</li>|<li>Id: {id}</li>|<li>Year: {year}</li>|
                <li>Type: {type}</li>
                <li>Fuel Consumption: {fuelConsumption}</li>|
                <li>Engine Size: {engineSize}</li>
              </ul>
              <h3>{description}</h3>
            </div>

            <div>
              <h3>Accessories and functionalities:</h3>
              <p>{accessories}</p>
              <p>{functionalities}</p>
            </div>

            <div>
              <h3>Rental Conditions: </h3>
              <p> {rentalConditions}</p>
              <p>Mileage: {mileage}</p>
              <p>Price: {rentalPrice}</p>
            </div>
          </div>
        </div>

        <button type="button">Rental car</button>
      </div>
    </Modal>
  );
};
