import { ThreeDots } from 'react-loader-spinner';
import './style.css';
type SubmitButtonProps = {
  loading: boolean;
}
function SubmitButton({ loading }: SubmitButtonProps): JSX.Element {

  return loading ?
    <div className='submit-spinner-wrapper '>
      <ThreeDots
        height="80"
        width="80"
        radius=""
        color="#4481C3"
        ariaLabel="three-dots-loading"
        visible
      />
    </div> : <button className="login__submit form__submit button" type="submit" >Sign in</button>;


}
export default SubmitButton;
