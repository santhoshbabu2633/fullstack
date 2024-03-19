import propTypes from 'prop-types';
import { Suspense } from 'react';
import gify from '../assets/images/giphy.gif';
import '../assets/css/loader.css'; 

function LazySuspense({ component: Component, ...rest }) {
  return (
    <Suspense fallback={<img className='loader' src={gify} alt='Loader' />} >
      <Component {...rest} />
    </Suspense>
  );
}

LazySuspense.propTypes = {
  component: propTypes.element.isRequired
};

export default LazySuspense;
