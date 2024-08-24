import { FC, ComponentProps, useState } from 'react';
import HeaderLogo from '@/assets/headerLogo.svg';
import style from './Header.module.scss';
import classNames from 'classnames';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

type Options = 'Вопросы' | 'Практика';

export const Header: FC<Props> = () => {
  const [option, setOption] = useState<Options>('Вопросы');
  return (
    <header className="flex justify-center">
      <div className={style.header}>
        <div className={style.container}>
          <div>
            <img src={HeaderLogo} />
          </div>
          <div className={style.optionButtons}>
            <div
              onClick={() => setOption('Вопросы')}
              className={classNames(style.optionButton, { [style.active]: option === 'Вопросы' })}
            >
              Вопросы
            </div>
            <div
              onClick={() => setOption('Практика')}
              className={classNames(style.optionButton, { [style.active]: option === 'Практика' })}
            >
              Практика
            </div>
          </div>
        </div>
        <a href='https://t.me/strfrontend' target="_blank" className={style.links}>telegram</a>
      </div> 
    </header>
  );
};
