import { FC, ComponentProps } from "react";
import style from "./QuestionList.module.scss";
import { QuestionSpisok } from "@/entities/cards";
import { OptionBar } from "@/entities/cards";
import { Filter } from "@/entities/cards/ui";

interface Props extends ComponentProps<"div"> {
  className?: string;
}

export const QuestionList: FC<Props> = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <OptionBar />
        <div className="flex items-center gap-4 pb-14">
          <span className={style.mainText}>Все вопросы</span>
          <Filter />
        </div>
        <QuestionSpisok />
      </div>
    </div>
  );
};
