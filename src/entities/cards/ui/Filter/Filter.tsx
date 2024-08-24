import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

export const Filter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="mt-[15px] text-[var(--dark)] py-[5px] px-[21px] bg-[var(--white)] rounded-[500px] border-2 border-[var(--dark)]">
          Фильтры
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white z-10 rounded-xl p-[28px] flex flex-col items-center border-solid border-gray-950 border-[1px]">
        <div className="grid gap-4">
          <div className="space-y-2 flex flex-col items-center">
            <h4 className="leading-none text-[22px]">ШАНС</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="leading-none text-[22px]">Тема</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
