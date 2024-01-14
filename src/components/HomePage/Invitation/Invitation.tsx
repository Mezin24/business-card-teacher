import { Divider } from '@/components/UI';
import teacherImg from './img/teacher.jpeg';

const Invitation = () => {
  return (
    <div className='font-text py-8 container'>
      <div className=' flex flex-col lg:flex-row  font-text leading-7'>
        <div className='lg:w-1/2'>
          <img src={teacherImg} alt='teacher' />
        </div>
        <div className='lg:w-1/2 lg:pl-40  mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center text-lg'>
          <p>
            Меня зовут <b>Соколова Татьяна Александровна</b>, стаж дошкольной
            педагогической деятельности 10 лет.
          </p>
          <p>
            Работаю воспитателем в МБДОУ «Центр развития ребенка - детский сад
            «Мозаика» города Обнинска».
          </p>
          <p>
            <b>Мой профессиональный девиз:</b> "Уважать, поддерживать и слышать
            каждого ребёнка!"
          </p>
          <p>
            <b>Моё педагогическое кредо:</b> "Научить человека быть счастливым
            нельзя, но воспитать его так, чтобы он был счастливым можно"
          </p>
          <p>
            <b>Моя педагогическая философия:</b> "Дарите свет своего душевного
            тепла детям, ведь именно дети смогут сделать наш мир прекраснее и
            светлее".
          </p>
        </div>
      </div>
      <div className='text-center container-medium mt-14'>
        <h3 className='text-lg font-bold mb-2'>
          Приглашаю всех на свою страницу, где вы можете увидеть:
        </h3>
        <ul className='list-disc'>
          <li>чем живёт педагог дошкольного образования</li>
          <li>процесс образовательной деятельности в соответствии с ФГОС ДО</li>
          <li>как в детском саду чувствуют себя дети</li>
          <li>процесс взаимодействия с родителями</li>
          <p className='mt-4 mb-8'>
            <b>Очень жду ваших посещений!</b>
          </p>
        </ul>
        <Divider />
        <p className='font-bold italic mt-10'>
          Секрет хорошего преподавания в том, чтобы рассматривать интеллект
          ребёнка как плодородное поле, в котором могут быть посеяны семена
          чтобы вырасти в тепле пылающего воображения.
        </p>
        <p className='mb-8 italic'>
          (Мария Монтессори - итальянский врач, философ и педагог).
        </p>
      </div>
    </div>
  );
};
export default Invitation;
