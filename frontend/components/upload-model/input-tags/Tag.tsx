import { IconCloseTag } from "@/icons/Icons";
import style from "./tag.module.css";

interface Props {
  title: string;
  tags: string[];
  setTags: (tags: string[]) => void;
}

const Tag = ({ title, setTags, tags }: Props) => {
  const removeElement = () => {
    const newTags = tags.filter((elem) => elem != title);
    setTags(newTags);
  };

  return (
    <div className={style.Tag}>
      <span>{title}</span>
      <div className={style.ContainerIcon} onClick={removeElement}>
        <IconCloseTag />
      </div>
    </div>
  );
};

export default Tag;
