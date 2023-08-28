import Logo from "./assets/images/Logo.png";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import prettyHtml from "json-pretty-html";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import KofiButton from "kofi-button";
import { ExampleJSON } from "./interfaces/ExampleJSON.interface";
import { matrixRain } from "./functions/MatrixRain";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "./App.css";

const App = () => {
  const ReactPlayerRef = useRef<ReactPlayer>(null);
  const currentURL =
    process.env.REACT_APP_NODE_ENV === "production"
      ? window.location.origin
      : "http://localhost:4000";
  const [showMore, changeShowMore] = useState(false);
  const [videoPlaying, changeVideoPlaying] = useState(false);
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
        <div className="main_container">
          <img className="api_logo" src={Logo} alt="API Logo" />
          <ReactP5Wrapper sketch={matrixRain} />
        </div>
        <div className="documentation_wrapper">
          <div className="explanation_paragraphs">
            <p>
              <b>
                <a href={currentURL} rel="noreferrer noopener">
                  {window.location.host}
                </a>
              </b>{" "}
              is a free JSON API for every "whoa" said by actor Keanu Reeves in
              his movies.
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
              <a
                href="https://readme.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                ReadMe 🦉
              </a>
              )
              <br />
              <br />
              <u className="read_more" onClick={toggleMore}>
                Read more
              </u>
            </p>
            <p className={`paragraph ${showMore ? "" : "hidden"}`}>
              Keanu Reeve's "whoa" is a meme referring to jokes about Keanu
              Reeve's frequent - often deadpan - use of the word "whoa."
            </p>
            <p className={`paragraph ${showMore ? "" : "hidden"}`}>
              In 2018, YouTuber Owenergy uploaded a{" "}
              <a
                href="https://www.youtube.com/watch?v=Odo5hwu9-wM"
                target="_blank"
                rel="noreferrer noopener"
              >
                video
              </a>{" "}
              showing a supercut of movies (in chronological order) in which
              Keanu Reeves says the word "whoa." This video claimed that Keanu
              Reeves has said the word "whoa" a total of 112 times (spanning the
              years 1986-2016) over the course of his film career.
            </p>
            <p className={`paragraph ${showMore ? "" : "hidden"}`}>
              However, some of the "whoa" scenes in Owenergy's YouTube video
              either appear out of order or are miscounted - these mistakes are
              corrected in this API. Keanu Reeves has also said additional
              "whoas" in movies released after 2016, which are also included in
              this API.
            </p>
            <p className={`paragraph ${showMore ? "" : "hidden"}`}>
              Additionally, in 2019, Screen Rant, an entertainment website,{" "}
              <a
                href="https://screenrant.com/keanu-reeves-whoa-movies/"
                target="_blank"
                rel="noreferrer noopener"
              >
                released an article
              </a>{" "}
              detailing the 118 times Keanu Reeves has supposedly said "whoa" in
              films.
            </p>
            <p className={`paragraph ${showMore ? "" : "hidden"}`}>
              The total "whoa" count of the Keanu Reeves Whoa API stands at 113
              as of {new Date().getFullYear()}.
            </p>
          </div>
          <h2>Usage</h2>
          <h3>Random "Whoa"</h3>
          <p>Retrieve a random "whoa" in JSON format.</p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random`}>
                {currentURL}/whoas/random
              </a>
            </code>
          </pre>
          <p>Example JSON response:</p>
          <pre>
            <code className="request">
              {exampleResponse ? (
                <div dangerouslySetInnerHTML={{ __html: exampleResponse }} />
              ) : (
                <ClipLoader
                  color={"#000"}
                  loading={exampleResponse ? false : true}
                  size={15}
                />
              )}
            </code>
          </pre>
          <p>Rendered JSON response poster and video:</p>
          {exampleJSON &&
          !Array.isArray(exampleJSON) &&
          typeof exampleJSON == "object" &&
          exampleJSON?.video &&
          exampleJSON?.poster ? (
            <div className="example_wrapper">
              <div className="interactive_wrapper">
                <div
                  className="player-wrapper"
                  style={{
                    backgroundImage: "url(" + exampleJSON.poster + ")",
                  }}
                >
                  <div className="blur">
                    <ReactPlayer
                      ref={ReactPlayerRef}
                      playing={videoPlaying}
                      onClickPreview={() => changeVideoPlaying(true)}
                      onEnded={() => changeVideoPlaying(false)}
                      url={exampleJSON.video["360p"]}
                      controls={true}
                      light={exampleJSON.poster}
                      style={{ maxWidth: "600px", overflow: "hidden" }}
                    />
                  </div>
                </div>
                <p>Rendered JSON response audio:</p>
                <ReactAudioPlayer
                  src={exampleJSON.audio}
                  controls
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ) : (
            <div className="example_wrapper">
              <ClipLoader color={"#000"} loading={true} size={100} />
            </div>
          )}
          <div className="refresh-button-wrapper">
            <button className="whoa-button" type="button" onClick={getExample}>
              Refresh Whoa
            </button>
          </div>
          <h4>Multiple Results</h4>
          <p>Retrieve a specific number of random "whoa" results.</p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random?results=5`}>
                {currentURL}/whoas/random?results=5
              </a>
            </code>
          </pre>
          <h4>Specify year</h4>
          <p>Retrieve a random "whoa" from a specific year.</p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random?year=2011`}>
                {currentURL}/whoas/random?year=2011
              </a>
            </code>
          </pre>
          <h4>Specify movie</h4>
          <p>
            Retrieve a random "whoa" by the name of the movie it appears in.
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random?movie=the%20matrix`}>
                {currentURL}/whoas/random?movie=the%20matrix
              </a>
            </code>
          </pre>
          <h4>Specify director</h4>
          <p>
            Retrieve a random "whoa" from a movie with a particular director.
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random?director=eli%20roth`}>
                {currentURL}/whoas/random?director=eli%20roth
              </a>
            </code>
          </pre>
          <h4>Specify movie occurrence number</h4>
          <p>
            Retrieve a random "whoa" by the number of its occurrence in a movie.
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/random?whoa_in_movie=2`}>
                {currentURL}/whoas/random?whoa_in_movie=2
              </a>
            </code>
          </pre>
          <h4>Sort multiple results</h4>
          <p>
            Sort multiple random results by either movie, release_date, year,
            director, or number_current_whoa. Sort direction can be either asc
            (ascending) or desc (descending).
          </p>
          <pre>
            <code className="request get">
              <a
                href={`${currentURL}/whoas/random?results=10&sort=movie&direction=desc`}
              >
                {currentURL}/whoas/random?results=10&sort=movie&direction=desc
              </a>
            </code>
          </pre>
          <h3>Ordered "Whoa"</h3>
          <p>
            Retrieve a specific "whoa" by its index in the chronological order
            of all results.
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/ordered/0`}>
                {currentURL}/whoas/ordered/0
              </a>
            </code>
          </pre>
          <h4>Multiple Ordered "Whoa" Results</h4>
          <p>
            Retrieve all "whoa" results between a first index and a second
            index, inclusive, in the chronological order of all results.
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/ordered/3-7`}>
                {currentURL}/whoas/ordered/3-7
              </a>
            </code>
          </pre>
          <h3>All Movies</h3>
          <p>Retrieve all names of movies in which Keanu Reeves says "whoa."</p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/movies`}>
                {currentURL}/whoas/movies
              </a>
            </code>
          </pre>
          <h3>All Directors</h3>
          <p>
            Retrieve all directors of movies in which Keanu Reeves says "whoa."
          </p>
          <pre>
            <code className="request get">
              <a href={`${currentURL}/whoas/directors`}>
                {currentURL}/whoas/directors
              </a>
            </code>
          </pre>
          <div className="contact">
            <p>
              <b>Contact:</b> If you have a correction or a suggestion for the
              API, feel free to open up an{" "}
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
              . If you have a comment or a question about the API, you may reach
              out to its creator on Twitter{" "}
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
              connected with Keanu Reeves, or any of his subsidiaries or
              affiliates. All motion pictures, products, and brands mentioned on
              this website are the respective trademarks and copyrights of their
              owners.
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
        </div>
      </div>
    </div>
  );
};

export default App;
