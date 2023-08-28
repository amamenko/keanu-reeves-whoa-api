import { MoreInfo } from "./MoreInfo";

interface IntroExplanationProps {
  currentURL: string;
  toggleMore: () => void;
  showMore: boolean;
}

export const IntroExplanation = ({
  currentURL,
  toggleMore,
  showMore,
}: IntroExplanationProps) => {
  return (
    <div className="explanation_paragraphs">
      <p>
        <b>
          <a href={currentURL} rel="noreferrer noopener">
            {window.location.host}
          </a>
        </b>{" "}
        is a free JSON API for every "whoa" said by actor Keanu Reeves in his
        movies.
        <br />
        <br />
        <a
          href="https://whoa.readme.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          View the full API docs
        </a>{" "}
        (powered by{" "}
        <a href="https://readme.com" target="_blank" rel="noreferrer noopener">
          ReadMe 🦉
        </a>
        )
        <br />
        <br />
        <u className="read_more" onClick={toggleMore}>
          Read more
        </u>
      </p>
      <MoreInfo showMore={showMore} />
    </div>
  );
};
