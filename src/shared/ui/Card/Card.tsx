import { ComponentProps, FC } from 'react';

interface CardProps extends ComponentProps<'div'> {
  chance: number;
  title: string;
  tags: string[];
}

export const Card: FC<CardProps> = ({ chance, tags, title }) => {
  return (
    <div className="relative p-2 bg-white text-black rounded-xl w-[370px] h-[150px] flex items-center ">
      <div className="absolute top-3 left-2 text-xs flex gap-1">
        {tags.map((tag) => (
          <span className="px-[4px] py-[1px] rounded-[4px] border-[1px] border-slate-400 text-[9px] font-bold text-black opacity-50">
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      <h3 className="font-extrabold text-2xl">{title}</h3>
      <span className="absolute right-2 bottom-2 text-[9px] font-bold text-black py-[8px] px-[5px] rounded-[4px] border-[0.5px] border-black">
        {chance}% шанс
      </span>
    </div>
  );
};
