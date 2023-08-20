import { Grid } from 'react-loader-spinner';

// const override = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// };
import './style.css'
function OffersSpinner():JSX.Element{
  return (
    <Grid
      height="80"
      width="80"
      color="#4481C3"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperClass='spinner-wrapper'
      visible
    />);
}
export default OffersSpinner;
