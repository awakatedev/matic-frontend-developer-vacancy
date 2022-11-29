import Error from '../assets/images/404.png';
import useSeo from '../hooks/useSeo';

const NotFound = () => {
  useSeo({
    title: 'Error',
    description:
      'Jhoanthan Hartswing Saldarriaga Gallango. Web-Developer and crypto enthusiastic',
  });
  return (
    <main className="container Error">
      <img className="Error__img" src={Error} alt="" />
    </main>
  );
};

export default NotFound;
