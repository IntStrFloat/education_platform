import { ComponentProps, FC, MouseEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./QuestionCard.scss";
import { useAppSelector } from "@/app/store";
import { selectSelectedTags } from "../../model/selectors";
interface CardProps extends ComponentProps<"div"> {
  chance: number;
  title: string;
  tags: string[];
  answer: string;
}

export const QuestionCard: FC<CardProps> = ({
  chance,
  tags,
  title,
  answer,
}) => {
  const selectedTags = useAppSelector(selectSelectedTags);
  const onClick = (event: MouseEvent<HTMLDivElement>) => {};
  console.log(tags);
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div
            onClick={onClick}
            className="relative p-2 bg-white text-black rounded-xl w-[370px] h-[180px] flex items-center cursor-pointer"
          >
            <div className="absolute top-3 left-2 text-xs flex gap-1">
              {tags.map((tag) => (
                <span className="px-[4px] py-[1px] rounded-[4px] border-[1px] border-slate-400 text-[9px] font-bold text-black opacity-50">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
            <h3 className="font-extrabold text-2xl">{title}</h3>
            <span className="absolute right-2 bottom-2 text-[9px] font-bold text-black py-[8px] px-[5px] rounded-[4px] border-[0.5px] border-black ">
              {chance}% шанс
            </span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white max-w-[1440px] max-h-[90vh] custom-scrollbar overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="relative text-[45px]">
              {title}
              <AlertDialogCancel className="border-none absolute top-[-10px] right-0 p-0">
                <X color="red" width="30px" height="30px" />
              </AlertDialogCancel>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[23px] max-h-[100%]">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {answer}
              </ReactMarkdown>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
