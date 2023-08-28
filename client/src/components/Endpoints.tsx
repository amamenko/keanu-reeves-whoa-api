interface EndpointsProps {
  currentURL: string;
}

export const Endpoints = ({ currentURL }: EndpointsProps) => {
  return (
    <>
      <h4>Multiple results</h4>
      <p>Retrieve a specific number of random "whoa" results.</p>
      <pre>
        <code className="request get">
          <a href={`${currentURL}/whoas/random?results=5`}>
            {currentURL}/whoas/random?results=5
          </a>
        </code>
      </pre>
      <h4>Specify grouping behavior</h4>
      <p>
        Retrieve a random "whoa" and explicitly set its grouping behavior, if
        applicable.
      </p>
      <p>
        By default, "whoa" instances that are part of a distinct consecutive
        group include the entire grouped "whoa" clip in their video and audio
        response fields.
      </p>
      <p>
        The individual "whoa" clip from the grouping can be fetched, instead.
      </p>
      <pre>
        <code className="request get">
          <a href={`${currentURL}/whoas/random?group_whoa_assets=false`}>
            {currentURL}/whoas/random?group_whoa_assets=false
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
      <p>Retrieve a random "whoa" by the name of the movie it appears in.</p>
      <pre>
        <code className="request get">
          <a href={`${currentURL}/whoas/random?movie=the%20matrix`}>
            {currentURL}/whoas/random?movie=the%20matrix
          </a>
        </code>
      </pre>
      <h4>Specify director</h4>
      <p>Retrieve a random "whoa" from a movie with a particular director.</p>
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
        Retrieve a specific "whoa" by its index in the chronological order of
        all results.
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
        Retrieve all "whoa" results between a first index and a second index,
        inclusive, in the chronological order of all results.
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
          <a href={`${currentURL}/whoas/movies`}>{currentURL}/whoas/movies</a>
        </code>
      </pre>
      <h3>All Directors</h3>
      <p>Retrieve all directors of movies in which Keanu Reeves says "whoa."</p>
      <pre>
        <code className="request get">
          <a href={`${currentURL}/whoas/directors`}>
            {currentURL}/whoas/directors
          </a>
        </code>
      </pre>
    </>
  );
};
