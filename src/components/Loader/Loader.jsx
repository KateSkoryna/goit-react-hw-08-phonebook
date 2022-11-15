import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="rgb(158, 63, 176)"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
