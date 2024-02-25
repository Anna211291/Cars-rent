import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import car from '../img/car.png'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column', 
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: '#0b44cd',
  },
};

const Link = styled(NavLink)`
  font-size: 30px;
  color: #3470ff;
  text-decoration: none;
  &.active {
    color: #0b44cd;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <div style={styles.container}>
     <img src={car} alt='Car' width={274} height={268} />
      <h1 style={styles.title}>Welcome to car rental</h1>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}
