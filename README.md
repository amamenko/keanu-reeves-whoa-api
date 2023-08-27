[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/amamenko/owen-wilson-wow-api">
    <img src="./client/src/assets/images/Keanu.png" width="150" />
  </a>

  <h3 align="center">The Keanu Reeves Whoa API</h3>

  <p align="center">
    A free JSON API for every 'whoa' said by
    <br />
    actor Keanu Reeves in his movies.
    <br />
  </p>
   <p align="center">API Link: <a href="https://whoa.onrender.com/">https://whoa.onrender.com</a></p>
   <p align="center">API Documentation: <a href="https://whoa.readme.io">https://whoa.readme.io</a></p>
</p>

# Usage

## Random "Whoa"

Retrieve a random "whoa" in JSON format - [https://whoa.onrender.com/whoas/random](https://whoa.onrender.com/whoas/random)

<b>Example Response:</b>

```jsonc
[
  {
    "movie": "The Matrix",
    "year": 1999,
    "release_date": "1999-03-31",
    "director": "Lana Wachowski and Lilly Wachowski",
    "character": "Thomas A. Anderson / Neo",
    "movie_duration": "02:16:17",
    "timestamp": "01:18:49",
    "full_line": "Whoa. Déjà vu.",
    "current_whoa_in_movie": 6,
    "total_whoas_in_movie": 6,
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/1Uto5Nrfn8wkYYdyaoOOs4/128bbaecf198ac68bc0f955863a9d255/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/5NTBHy9NCGaXsIlVMrvLpw/8fc17c4f5fc37044ca2655b68adb1a18/The_Matrix_6__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/7iyJdpy6xiUHuZLBquUma/7cf998052c59bbff2aaada9b61328821/The_Matrix_6__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/7qxWqdneipvA3fS3rpsVP6/5daeecb78395f8ce10281e9182a960c5/The_Matrix_6__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/66GcBrYITZmBiauJ4QVxrv/f248b237805fef8a3952176e1cfef828/The_Matrix_6__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/47wxI3JoI470cvVGQDqbp8/a0205796eab42e57b7da806d4d92177c/The_Matrix_6.mp3"
  }
]
```

### Multiple Results

Retrieve a specific number of random "whoa" results - [https://whoa.onrender.com/whoas/random?results=5](https://whoa.onrender.com/whoas/random?results=2)

<b>Example Response:</b>

```jsonc
[
  {
    "movie": "Bill & Ted's Excellent Adventure",
    "year": 1989,
    "release_date": "1989-02-17",
    "director": "Stephen Herek",
    "character": "Ted Logan",
    "movie_duration": "01:29:51",
    "timestamp": "00:16:44",
    "full_line": "Whoa. Excellent!",
    "current_whoa_in_movie": 4,
    "total_whoas_in_movie": 26,
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/7gUOeuWUZfWY7VBoqNPW3A/49771a6b578e7e53409f2258f736d9d9/tV25lGWGWGEqUe3U0xjQTBgilSx.jpeg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/2FDAjLGTeVb0hDkEHBguqp/8c012e22a6f72edfc3f64ffd24c881e2/Bill___Ted-s_Excellent_Adventure_4__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/2c2rwi9fsVuVcLqYXuBj0k/05c4c2589faa580a638b664550931a70/Bill___Ted-s_Excellent_Adventure_4__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/5A4vqjxKdovZFGx06L7voF/11a093f676f2d68df77e356d34fd244b/Bill___Ted-s_Excellent_Adventure_4__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/2Ulvq0iXBjNu7rGsXEmgXi/4812b65c5c4384fd73dae69bf0cedc1b/Bill___Ted-s_Excellent_Adventure_4__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/1f4CFzBlMrPdIcSAN3A5UW/5d0dbfd884acc151b3aab54d985c9662/Bill___Ted-s_Excellent_Adventure_4.mp3"
  },
  {
    "movie": "Bill & Ted's Bogus Journey",
    "year": 1991,
    "release_date": "1991-07-19",
    "director": "Pete Hewitt",
    "character": "Ted Logan / Evil Ted",
    "movie_duration": "01:33:52",
    "timestamp": "00:40:03",
    "full_line": "Whoa. Where are we?",
    "current_whoa_in_movie": 16,
    "total_whoas_in_movie": 28,
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/cJP2uvQABzZsgWj770K9y/0a2dba19352272363051b34b17fe2ebd/tldtDfLnPFOtTWp758EmIP2Hbz5.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/5cChn7KvUVDHHlVbl8KMao/f8651ddb7d706afbe1a3ac1311a0e868/Bill___Ted-s_Bogus_Journey_16__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/3Dnn9TiaQgm7sRJ687ASro/14ab59707fa475a10b7ce33d5cec2768/Bill___Ted-s_Bogus_Journey_16__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/64mOC3oALd5LvxaaCjHJGg/e6ae03f72ce09d28727211fb59322197/Bill___Ted-s_Bogus_Journey_16__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/3uBLxVwzSonPgKI7fwp36t/5e65fae5a94ac40f9e8ca4f90015e2c6/Bill___Ted-s_Bogus_Journey_16__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/1aLk3arCi8F4DH6JzY3oBY/73bca1ecaa69274645b2c8968a55f975/Bill___Ted-s_Bogus_Journey_16.mp3"
  }
]
```

### Specify year

Retrieve a random "whoa" from a specific year - [https://whoa.onrender.com/whoas/random?year=2011](https://whoa.onrender.com/whoas/random?year=2011)

### Specify movie

Retrieve a random "whoa" by the name of the movie it appears in - [https://whoa.onrender.com/whoas/random?movie=zoolander](https://whoa.onrender.com/whoas/random?movie=zoolander)

### Specify director

Retrieve a random "whoa" from a movie with a particular director - [https://whoa.onrender.com/whoas/random?director=wes%20anderson](https://whoa.onrender.com/whoas/random?director=wes%20anderson)

### Specify movie occurrence number

Retrieve a random "whoa" by the number of its occurrence in a movie - [https://whoa.onrender.com/whoas/random?whoa_in_movie=2](https://whoa.onrender.com/whoas/random?whoa_in_movie=2)

### Sort multiple results

Sort multiple random results by either `movie`, `release_date`, `year`, `director`, or `number_current_whoa`. Sort direction can be either `asc` (ascending) or `desc` (descending) - [https://whoa.onrender.com/whoas/random?results=10&year=2017&sort=movie&direction=desc](https://whoa.onrender.com/whoas/random?results=10&year=2017&sort=movie&direction=desc)

## Ordered "Whoa"

Retrieve a specific "whoa" by its index in the chronological order of all results - [https://whoa.onrender.com/whoas/ordered/0](https://whoa.onrender.com/whoas/ordered/0)

### Multiple Ordered "Whoa" Results

Retrieve all "whoa" results between a first index and a second index, inclusive, in the chronological order of all results - [https://whoa.onrender.com/whoas/ordered/3-7](https://whoa.onrender.com/whoas/ordered/3-7)

## All Movies

Retrieve all names of movies in which Keanu Reeves says "whoa" - https://whoa.onrender.com/whoas/movies

## All Directors

Retrieve all directors of movies in which Keanu Reeves says "whoa" - [https://whoa.onrender.com/whoas/directors](https://whoa.onrender.com/whoas/directors)

<!-- LICENSE -->

# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

# Contact

Keanu Reeves Whoa API - keanureeveswhoaapi@gmail.com

Avraham (Avi) Mamenko - avimamenko@gmail.com

API Link: [https://whoa.onrender.com/](https://whoa.onrender.com/)

API Documentation: [https://whoa.readme.io](https://whoa.readme.io)

# Disclaimer

The Keanu Reeves Whoa API is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Keanu Reeves, or any of his subsidiaries or affiliates. All motion pictures, products, and brands mentioned on this website are the respective trademarks and copyrights of their owners.

<!-- ACKNOWLEDGEMENTS -->

# Acknowledgements

- [Keanu Reeves](https://en.wikipedia.org/wiki/Keanu_Reeves)
- [Owenergy YouTube Channel](https://www.youtube.com/watch?v=Odo5hwu9-wM)
- [Screenrant.com](https://screenrant.com/keanu-reeves-whoa-movies/)
- [TMDB](https://www.themoviedb.org/)
- [Contentful](https://www.contentful.com/)
- Homepage design inspired by [chucknorris.io](https://api.chucknorris.io/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [ReadMe](https://readme.com)
- [@timiscoding](https://github.com/timiscoding) for original digital rain code

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/amamenko/keanu-reeves-whoa-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/avrahammamenko
