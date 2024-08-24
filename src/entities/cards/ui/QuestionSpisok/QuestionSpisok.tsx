import { FC, ComponentProps } from "react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { questions } from "./consts";
import { useAppSelector } from "@/app/store";
interface Props extends ComponentProps<"div"> {
  className?: string;
}

export const QuestionSpisok: FC<Props> = () => {
  const option = useAppSelector((elem) => elem.CardsSlice.selectedTheme);
  const filteredQuestions = questions.filter((elem) =>
    elem.tags.includes(option)
  );
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredQuestions.map((elem, index) => (
        <div
          className={`col-span-1 ${
            index % 2 === 0 ? "justify-self-start" : "justify-self-end"
          }`}
        >
          <QuestionCard
            chance={Math.round(elem.chance * 100)}
            title={elem.name}
            tags={elem.tags}
            answer={elem.answer!}
          />
        </div>
      ))}
    </div>
  );
};
