import { useState } from "react";
import { KeyboardEvent } from "react";
import styles from "./input-tags.module.css";
import Tag from "./Tag";

const InputTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.length !== 0) {
      setTags([...tags, event.currentTarget.value]);
      event.currentTarget.value = "";
    }
  };

  return (
    <div className={styles.InputContainer}>
      {tags.length === 0 || (
        <ul className={styles.WrapperTags}>
          {tags.map((elem, index) => (
            <Tag key={index} title={elem} tags={tags} setTags={setTags} />
          ))}
        </ul>
      )}

      <input
        type="text"
        className={styles.Input}
        placeholder="Presiona enter añadir una palabra clave"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default InputTags;
