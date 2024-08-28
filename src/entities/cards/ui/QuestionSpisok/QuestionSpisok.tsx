import { FC, ComponentProps } from "react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { questions } from "./consts";
import { useAppSelector } from "@/app/store";
import { selectSelectedTags } from "../../model/selectors";
interface Props extends ComponentProps<"div"> {
  className?: string;
}

export const QuestionSpisok: FC<Props> = () => {
  const option = useAppSelector((elem) => elem.CardsSlice.selectedTheme);
  const selectedTags = useAppSelector(selectSelectedTags);
  // Функция для проверки, что все элементы первого массива есть во втором
  const hasAllElements = (arr1: string[], arr2: string[]): boolean => {
    if (!arr1.length) {
      return true; // Пустой первый массив считается удовлетворяющим условию
    }
    if (!arr2.length) {
      return true; // Если второй массив пустой, он не может содержать элементы первого массива
    }
    return arr1.every((item) => arr2.includes(item));
  };

  // Фильтруем вопросы по выбранной теме и проверяем, что все теги вопроса есть в выбранных тегах
  const filteredQuestions = questions.filter(
    (elem) =>
      elem.tags.includes(option) && hasAllElements(selectedTags, elem.tags)
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredQuestions.map((elem, index) => (
        <div className={`col-span-1`}>
          (
          <QuestionCard
            chance={Math.round(elem.chance * 100)}
            title={elem.name}
            tags={elem.tags}
            answer={elem.answer!}
          />
          )
        </div>
      ))}
    </div>
  );
};
