import { forwardRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Footer } from "./Footer";
import { Endpoints } from "./Endpoints";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import { ExampleJSON } from "../interfaces/ExampleJSON.interface";

interface MainExampleProps {
  currentURL: string;
  exampleResponse: string;
  getExample: () => Promise<void>;
  exampleJSON: ExampleJSON | [];
}

type PlayerRef = ReactPlayer;

export const MainExample = forwardRef<PlayerRef, MainExampleProps>(
  (
    { currentURL, exampleResponse, getExample, exampleJSON },
    ReactPlayerRef
  ) => {
    const [videoPlaying, changeVideoPlaying] = useState(false);
    return (
      <div className="documentation_wrapper">
        <h2>Usage</h2>
        <h3>Random "Whoa"</h3>
        <p>Retrieve a random "whoa" in JSON format.</p>
        <pre>
          <code className="request get">
            <a href={`${currentURL}/whoas/random`}>{currentURL}/whoas/random</a>
          </code>
        </pre>
        <p>Example JSON response:</p>
        <pre>
          <code className="request">
            {exampleResponse ? (
              <div dangerouslySetInnerHTML={{ __html: exampleResponse }} />
            ) : (
              <ClipLoader
                color={"#fff"}
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
                className={"player-wrapper"}
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
            <ClipLoader color={"#fff"} loading={true} size={100} />
          </div>
        )}
        <div className="refresh-button-wrapper">
          <button className="whoa-button" type="button" onClick={getExample}>
            Refresh Whoa
          </button>
        </div>
        <Endpoints currentURL={currentURL} />
        <Footer />
      </div>
    );
  }
);
