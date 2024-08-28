import { useAppDispatch, useAppSelector } from "@/app/store";
import { FC, ComponentProps, useState } from "react";
import { changeTheme } from "../../model/slice";
import { Tag } from "../../model/types";

interface Props extends ComponentProps<"div"> {
  className?: string;
}

const categories = [
  "Frontend",
  "IOS",
  "Android",
  "Backend",
  "Data Sciense",
  "QA",
];
export const OptionBar: FC<Props> = () => {
  const option = useAppSelector((state) => state.CardsSlice.selectedTheme);
  const dispatch = useAppDispatch();

  const onChangeOption = (option: Tag) => {
    dispatch(changeTheme(option));
  };

  return (
    <div className="absolute top-[-20px] flex w-full justify-center">
      <div className=" flex gap-[60px]">
        {categories.map((elem) => (
          <div
            className="pt-3 pb-1 px-6 bg-[var(--dark)] text-[var(--white)] cursor-pointer"
            style={{
              borderRadius: "28px 28px 0px 0px",
              borderBottom: elem === option ? "2px solid var(--white)" : "none",
            }}
            onClick={() => onChangeOption(elem as Tag)}
          >
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
};
