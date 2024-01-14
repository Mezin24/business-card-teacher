import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer' className='py-7  bg-black text-white '>
      <div className='container flex flex-col lg:flex-row font-text lg:items-center'>
        <div className='lg:flex-1'>
          <p>
            Телефон: <a href='tel:+79158969204'>+7 (915) 896 92-04</a>
          </p>
          <p>
            E-mail:{' '}
            <a href='mailto:tanya-sokolova@yandex.ru'>
              tanya-sokolova@yandex.ru
            </a>
          </p>
          <p>
            МБДОУ «Центр развития ребенка - детский сад «Мозаика» города
            Обнинска»
          </p>
        </div>
        <div className='mt-5 lg:mt-0'>
          <a
            href='https://vk.com/sadikmozaika'
            target='_blank'
            className='p-2 bg-white inline-block rounded-full mr-2'
          >
            <SlSocialVkontakte color='black' />
          </a>
          <a
            href='https://t.me/sokolpedagog'
            className='p-2 bg-white inline-block rounded-full'
            target='_blank'
          >
            <FaTelegramPlane color='black' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
