import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import prettyHtml from "json-pretty-html";
import ReactPlayer from "react-player";
import { ExampleJSON } from "./interfaces/ExampleJSON.interface";
import { HeaderLogo } from "./components/HeaderLogo";
import { IntroExplanation } from "./components/IntroExplanation";
import { MainExample } from "./components/MainExample";
import "./App.css";

const App = () => {
  const ReactPlayerRef = useRef<ReactPlayer>(null);
  const currentURL =
    process.env.REACT_APP_NODE_ENV === "production"
      ? window.location.origin
      : "http://localhost:4000";
  const [showMore, changeShowMore] = useState(false);
  const [exampleResponse, changeExampleResponse] = useState("");
  const [exampleJSON, changeExampleJSON] = useState<ExampleJSON | []>([]);

  const toggleMore = () => {
    changeShowMore(!showMore);
  };

  const getExample = useCallback(async () => {
    await axios
      .get(
        process.env.REACT_APP_NODE_ENV === "production"
          ? `${currentURL}/whoas/random`
          : "http://localhost:4000/whoas/random"
      )
      .then((res) => res.data)
      .then((data) => {
        ReactPlayerRef?.current?.showPreview();
        changeExampleResponse(prettyHtml(data));
        changeExampleJSON(data[0]);

        const previewEl = document.getElementsByClassName(
          "react-player__preview"
        ) as unknown as HTMLElement[];

        if (previewEl[0]) {
          previewEl[0].style.backgroundImage = `url(${data[0].poster}), url(${data[0].poster}) !important;`;
        }
      })
      .catch((e) => console.error(e));
  }, [currentURL]);

  useEffect(() => {
    getExample();
  }, [getExample]);

  return (
    <div className="app_wrapper">
      <div className="main_wrapper">
        <HeaderLogo />
        <IntroExplanation
          currentURL={currentURL}
          toggleMore={toggleMore}
          showMore={showMore}
        />
        <MainExample
          ref={ReactPlayerRef}
          currentURL={currentURL}
          exampleResponse={exampleResponse}
          getExample={getExample}
          exampleJSON={exampleJSON}
        />
      </div>
    </div>
  );
};

export default App;
