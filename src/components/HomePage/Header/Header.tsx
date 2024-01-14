import { Link } from 'react-router-dom';
import { headerLinks } from './headerLinks';

const Header = () => {
  return (
    <header className='bg-black text-white py-5 lg:h-20  lg:bg-gradient-to-t lg:from-red-700 lg:to-yellow-700  absolute top-0 left-0 right-0 '>
      <nav>
        <ul className='flex flex-col items-center lg:flex-row lg:justify-center'>
          {headerLinks.map(({ title, to }) => {
            return to === '#footer' ? (
              <Link
                key={title}
                to={to}
                className='relative text-white font-semibold py-2 lg:px-5'
              >
                {title}
              </Link>
            ) : (
              <a
                href={to}
                key={title}
                className='relative text-white font-semibold py-2 lg:px-5'
              >
                {title}
              </a>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
