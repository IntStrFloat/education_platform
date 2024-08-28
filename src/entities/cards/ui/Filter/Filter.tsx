import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useState } from "react";
import "./styles.css"; // Импортируйте файл CSS
import classNames from "classnames";
import { useAppDispatch } from "@/app/store";
import { changeTags } from "../../model/slice";

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const tags = ["Frontend", "Backend", "QA", "IOS", "Android", "Data Sciense"];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const dispach = useAppDispatch();
  const handleSelectTag = (elem: string) => {
    if (selectedTags.includes(elem)) {
      // Если элемент уже выбран, удаляем его
      setSelectedTags(selectedTags.filter((tag) => tag !== elem));
    } else {
      // Если элемент не выбран, добавляем его
      setSelectedTags([...selectedTags, elem]);
    }
  };

  const handleSubmit = () => {
    setOpen(false);
    dispach(changeTags(selectedTags));
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setOpen(!open)}
          className="mt-[15px] text-[var(--dark)] py-[5px] px-[21px] bg-[var(--white)] rounded-[500px] border-2 border-[var(--dark)]"
        >
          Фильтры
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        className={`w-80 bg-white z-10 rounded-xl p-[28px] flex flex-col items-center border-solid border-gray-950 border-[1px] ${
          open ? "popover-content-enter-active" : "popover-content-exit-active"
        }`}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
      >
        <div className="grid gap-4">
          <div className="space-y-2 flex flex-col items-center">
            <h4 className="leading-none text-[22px]">ШАНС</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="leading-none text-[22px]">Тема</h4>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {tags.map((elem) => (
                <div
                  key={elem}
                  className={classNames(
                    "text-[16px] font-[600] rounded-[500px] lowercase px-2 border-2 border-[rgba(0, 0, 0, 1)] text-[gray] cursor-pointer select-none",
                    {
                      ["activeTag"]: selectedTags.includes(elem),
                    }
                  )}
                  onClick={() => handleSelectTag(elem)}
                >
                  {elem}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSubmit()}
              className="text-[var(--white)] text-[16px] py-[4px] px-[16px] bg-[var(--dark)] rounded-[500px] border-2 border-[var(--dark)]"
            >
              Применить
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--dark)] text-[16px]  bg-[var(--white)] rounded-[500px]"
            >
              Сброс
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
