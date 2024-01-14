import cn from 'classnames';
import styles from './Hero.module.css';
import { Divider } from '../../UI';

const Hero: React.FC = () => {
  return (
    <div className={cn(styles.hero)}>
      <div className={cn(styles.text, 'max-w-2xl mx-auto px-4')}>
        <h1 className='text-4xl mt-32 lg:mt-0 lg:text-6xl font-text lg:leading-[80px] font-semibold italic '>
          Современный педагог - это призвание!
        </h1>
        <Divider color='white' classes='mt-10' />
        <p className='mt-12 font-text'>
          Педагог - это инженер человеческих душ. (М. И. Калинин)
        </p>
      </div>
    </div>
  );
};

export default Hero;
