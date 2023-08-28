interface MoreInfoProps {
  showMore: boolean;
}

export const MoreInfo = ({ showMore }: MoreInfoProps) => {
  return (
    <>
      <p className={`paragraph ${showMore ? "" : "hidden"}`}>
        Keanu Reeve's "whoa" is a meme referring to jokes about Keanu Reeve's
        frequent - often deadpan - use of the word "whoa."
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
        showing a supercut of movies (in chronological order) in which Keanu
        Reeves says the word "whoa." This video claimed that Keanu Reeves has
        said the word "whoa" a total of 112 times (spanning the years 1986-2016)
        over the course of his film career.
      </p>
      <p className={`paragraph ${showMore ? "" : "hidden"}`}>
        However, some of the "whoa" scenes in Owenergy's YouTube video either
        appear out of order or are miscounted - these mistakes are corrected in
        this API. Keanu Reeves has also said additional "whoas" in movies
        released after 2016, which are also included in this API.
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
        detailing the 113 times Keanu Reeves has supposedly said "whoa" in
        films.
      </p>
      <p className={`paragraph ${showMore ? "" : "hidden"}`}>
        The total "whoa" count of the Keanu Reeves Whoa API stands at 118 as of{" "}
        {new Date().getFullYear()}.
      </p>
    </>
  );
};
