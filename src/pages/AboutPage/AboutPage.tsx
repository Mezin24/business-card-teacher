import { PhotoProvider, PhotoView } from 'react-photo-view';
import { about1Images, classImages, familyImages } from './images';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='bg-[#c9c3c3] py-5 font-text pb-16'>
      <div className='container'>
        <Link to='/'>⬅️ Назад</Link>
        <PhotoProvider>
          <div className='flex justify-between items-center  gap-5'>
            {about1Images.map((item, index) => (
              <PhotoView key={index} src={`./img/11/${item}.jpg`}>
                <div>
                  <img src={`./img/11/${item}.jpg`} alt='' className='w-full' />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className='container-medium mt-5'>
          <p>
            Меня зовут <b>Соколова Татьяна Александровна</b>, в 2008 году
            окончила Навоийский Государственный педагогический институт по
            специальности «Педагог по физической культуре и физическому
            воспитанию»
          </p>
          <p>
            С детства занималась большим теннисом, всегда мечтала стать
            теннисисткой. Когда училась в институте начала тренировать детей и
            параллельно работала на Навоийском гидро-металлургическом заводе
            инструктором по спорту.
          </p>
          <p>Всегда любила спорт и всё, что с ним связанно.</p>
          <p>
            Поэтому, будучи педагогом дошкольного образования, стараюсь всегда и
            везде применять и развивать физические качества ребенка. Так как
            считаю, что <b>СПОРТ — это жизнь!</b>
          </p>
          <p>
            Воспитателем я захотела стать после рождения моего старшего сына.
            Моя педагогическая практика, как воспитателя в дошкольном учреждении
            началась с 2013 года.
          </p>
          <p>
            Первый мой опыт работы я получила, работая в МБДОУ «ЦРР — детский
            сад <b>«Россиянка»</b> г. Обнинск. Мне посчастливилось работать с
            прекраснейшими педагогами по системе Марии Мантессори.
          </p>
          <p>
            Из МБДОУ «ЦРР — детский сад <b>«Россиянка»</b> нас с моей коллегой
            пригласили в МБДОУ «Детский сад комбинированного вида № 19
            «Капелька» г. Обнинск, там в свою очередь я получила колоссальный
            опыт и приобрела хороших друзей.
          </p>
          <p className='mb-7'>
            На данный момент я работаю в МБДОУ «ЦРР — детский сад «Мозика»{' '}
            <a
              href='https://vk.com/sadikmozaika'
              className='text-white font-bold'
            >
              https://vk.com/sadikmozaika{' '}
            </a>{' '}
            где работает талантливая команда педагогов. Это новый, хорошо
            оснащенный детский сад с большими возможностями и интересными
            планами на будущее.
          </p>
        </div>
        <PhotoProvider>
          <div className='flex justify-between items-center  gap-5'>
            {classImages.map((item, index) => (
              <PhotoView key={index} src={`./img/12/${item}.jpeg`}>
                <div>
                  <img
                    src={`./img/12/${item}.jpeg`}
                    alt=''
                    className='w-full'
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className='container-medium mb-8'>
          <p className='mt-7'>
            Занимаюсь <b>благотворительностью</b> с 2016 года вместе с моими
            друзьями из <b>«Команды добра»</b> г. Обнинск{' '}
            <a
              href='https://vk.com/komandadobro'
              className='font-bold text-white'
            >
              https://vk.com/komandadobro
            </a>{' '}
            . Мы объездили всю Калужскую область. Вместе с ЭКО-проектом «История
            в розах» и проектом #коплюсчастье летом 2023 года в сквере им. С. А.
            Кудрявцевой посадили 130 <b>«Добрых роз» </b>и планируем продолжать.
          </p>
          <p>
            Совместно со спортивными клубами проводим благотворительные
            спортивные мероприятия
          </p>
        </div>
        <PhotoProvider>
          <div className='flex justify-between items-center  gap-5'>
            {familyImages.map((item, index) => (
              <PhotoView key={index} src={`./img/13/${item}.jpeg`}>
                <div>
                  <img
                    src={`./img/13/${item}.jpeg`}
                    alt=''
                    className='w-full'
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className='container-medium'>
          <p className='mt-8'>
            С сентября 2023 году с моей семьей участвуем во всероссийском
            конкурсе «Это у нас семейное»{' '}
            <a href='https://family.rsv.ru/' className='font-bold text-white'>
              https://family.rsv.ru/
            </a>{' '}
            на Президентской платформе #РоссияСтранаВозможностей. Мы выполнили
            все задания заочного этапа. Это для нашей семьи интересный опыт.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
