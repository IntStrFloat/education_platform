import { FC, ComponentProps } from 'react';
import style from './QuestionBanner.module.scss';
import classNames from 'classnames';

interface Props extends ComponentProps<'div'> {
  text: string;
}

export const QuestionBanner: FC<Props> = ({ text, className }) => {
  return <div className={classNames(style.mainText, className)}>{text}</div>;
};
