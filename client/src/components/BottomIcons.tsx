import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const BottomIcons = () => {
  return (
    <div className="bottom_icons">
      <a
        href="https://github.com/amamenko/keanu-reeves-whoa-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="#fff" size="50" />
      </a>
      <a
        href="https://twitter.com/AviMamenko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle color="#fff" size="55" />{" "}
      </a>
    </div>
  );
};
