import { HomeLink } from '@/components/UI';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './AchievementsPage.module.css';
import cn from 'classnames';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { patentImages } from './images';

const AchievementsPage = () => {
  return (
    <div className='font-text bg-[#eee5e3]'>
      <div className={cn(styles.hero, 'grid place-content-center')}>
        <HomeLink classes='absolute top-5 left-5' />
        <a href='#patents'>
          <IoIosArrowDown
            className='absolute bottom-8 left-auto animate-bounce'
            size={'50px'}
          />
        </a>
        <h2 className='text-6xl '>Награды и дипломы</h2>
      </div>
      <div
        id='patents'
        className='container  pt-10 pb-8 flex items-center justify-between gap-4'
      >
        <PhotoProvider>
          <div className='flex justify-between items-center  gap-5'>
            {patentImages.map((item, index) => (
              <PhotoView key={index} src={`./img/14/${item}.jpeg`}>
                <div>
                  <img
                    src={`./img/14/${item}.jpeg`}
                    alt=''
                    className='w-full'
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};
export default AchievementsPage;
