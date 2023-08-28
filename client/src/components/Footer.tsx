import { BottomIcons } from "./BottomIcons";
import KofiButton from "kofi-button";
import { SimilarProjects } from "./SimilarProjects";

export const Footer = () => {
  return (
    <>
      <div className="contact">
        <p>
          <b>Contact:</b> If you have a correction or a suggestion for the API,
          feel free to open up an{" "}
          <a
            href="https://github.com/amamenko/keanu-reeves-whoa-api/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            issue
          </a>{" "}
          on its{" "}
          <a
            href="https://github.com/amamenko/keanu-reeves-whoa-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
          . If you have a comment or a question about the API, you may reach out
          to its creator on Twitter{" "}
          <a
            href="https://twitter.com/AviMamenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            @AviMamenko
          </a>{" "}
          or by filling out the contact form on{" "}
          <a
            href="https://amamenko.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            his website
          </a>
          .
        </p>
      </div>
      <div className="disclaimer">
        <p>
          <b>Disclaimer:</b> The Keanu Reeves Whoa API is not affiliated,
          associated, authorized, endorsed by, or in any way officially
          connected with Keanu Reeves, or any of his subsidiaries or affiliates.
          All motion pictures, products, and brands mentioned on this website
          are the respective trademarks and copyrights of their owners.
        </p>
      </div>
      <p>
        The Keanu Reeves Whoa API was created in 2023 by{" "}
        <a
          href="https://amamenko.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avi Mamenko
        </a>
        .
      </p>
      <div className="support_container">
        <p>Loving the Keanu Reeves Whoa API?</p>
        <KofiButton
          color="#1068b3"
          title="Support Avi on Ko-fi"
          kofiID="E1E3CFTNF"
        />
      </div>
      <SimilarProjects />
      <BottomIcons />
    </>
  );
};
