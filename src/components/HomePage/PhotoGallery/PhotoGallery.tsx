import { Divider } from '@/components/UI';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {
  cosmoImages,
  drawImages,
  ekoImages,
  helpImages,
  knowledgeDayImages,
  newYearImages,
  parkImages,
  partyImages,
  pirateImages,
  teamImages,
} from './images';

const PhotoGallery = () => {
  return (
    <div className='container text-center pb-10 font-text'>
      <Divider />
      <p className='container-medium my-10'>
        Экологическая неделя «Огород на грядке» во второй младшей группе
        «Паровозик» Мы с малыши посадили микрозелень, лук, цветы, украсили
        огород веточками вербы. Теперь дети наблюдают за посевами, воспитатели
        ведут дневник наблюдений, ухаживают за растениями, поливают и радуются
        первым всходам
      </p>
      <Divider classes='mb-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {ekoImages.map((item, index) => (
            <PhotoView key={index} src={`./img/1/${item}.jpg`}>
              <div>
                <img src={`./img/1/${item}.jpg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        12 апреля - День космонавтики! Отправились с ребятами в космическое
        путешествие на ракете.
      </p>
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {cosmoImages.map((item, index) => (
            <PhotoView key={index} src={`./img/2/${item}.jpeg`}>
              <div>
                <img src={`./img/2/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        1 июня - День защиты детей! <br /> Организовывали «Пиратский квест».
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {pirateImages.map((item, index) => (
            <PhotoView key={index} src={`./img/3/${item}.jpeg`}>
              <div>
                <img src={`./img/3/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        1 июля 2023 года на сквере им. С.А. Кудрявцевой наш детский сад
        совместно с «Командой добра» г. Обнинск и с проектом «История в розах»
        участвовали в ЭКО - проекте и сажали «Добрые розы».
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {teamImages.map((item, index) => (
            <PhotoView key={index} src={`./img/4/${item}.jpeg`}>
              <div>
                <img src={`./img/4/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        1 сентября-День знаний! <br /> Как мы встречали новый учебный год!
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {knowledgeDayImages.map((item, index) => (
            <PhotoView key={index} src={`./img/5/${item}.jpeg`}>
              <div>
                <img src={`./img/5/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        «Кленовый лист» <br />
        Рисование в технике «оттиск» в средней группе «Паровозик»
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {drawImages.map((item, index) => (
            <PhotoView key={index} src={`./img/6/${item}.jpeg`}>
              <div>
                <img src={`./img/6/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-lg'>
        Осенний праздник «Осень в гости к нам пришла» в средней группе
        «Паровозик».
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {partyImages.map((item, index) => (
            <PhotoView key={index} src={`./img/7/${item}.jpeg`}>
              <div>
                <img src={`./img/7/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-lg'>
        В один из погожих сентябрьских деньков с детьми средней группы
        «Паровозик» мы совершили увлекательную, занимательную и познавательную
        прогулку на тему «Экскурсия в осенний парк»
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {parkImages.map((item, index) => (
            <PhotoView key={index} src={`./img/8/${item}.jpeg`}>
              <div>
                <img src={`./img/8/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-lg'>
        Совместно с детьми и родителями участвовали в сборе «Корзина добра»
        деткам-инвалидам в г. Юхнов.
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {helpImages.map((item, index) => (
            <PhotoView key={index} src={`./img/9/${item}.jpeg`}>
              <div>
                <img src={`./img/9/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <Divider classes='my-10' />
      <p className='container-medium my-10 text-xl'>
        Как мы с ребятками встречали Новый год! <br />
        Мои маленькие снежинки и снеговики в ожидании Деда Мороза и Снегурочки.
      </p>
      <Divider classes='my-10' />
      <PhotoProvider>
        <div className='flex justify-between items-center  gap-5'>
          {newYearImages.map((item, index) => (
            <PhotoView key={index} src={`./img/10/${item}.jpeg`}>
              <div>
                <img src={`./img/10/${item}.jpeg`} alt='' className='w-full' />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};
export default PhotoGallery;
