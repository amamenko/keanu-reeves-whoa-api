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
    "timestamp": "00:54:44",
    "full_line": "Whoa! Whoa! Whoa!",
    "current_whoa_in_movie": 4,
    "total_whoas_in_movie": 6,
    "whoa_grouping": {
      "movie_whoa_group_index": 0,
      "current_whoa_in_group": 2,
      "total_whoas_in_group": 3
    },
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/1Uto5Nrfn8wkYYdyaoOOs4/128bbaecf198ac68bc0f955863a9d255/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/5YPixGFJf5ytvzXW6W4Gxt/575da63146cf9acf2d3e745b75520d0e/The_Matrix__1999__Grouping_0__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/42t7GmqpQVHg9VYrzzSqqM/e2b94d8718b3dda1f2f020b8091dc567/The_Matrix__1999__Grouping_0__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/11qCqXlLgT64p9kQiYn9x6/b8c027358ee404d266d3aaea387368d3/The_Matrix__1999__Grouping_0__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/3qoKdr7TCNWx6JsI9l8NN/d64ee14c8f6b7377c19dd459e4049bc7/The_Matrix__1999__Grouping_0__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/1H4vuNlYSOTQm62pt8XgV7/d3312512abc642b37f0ba11d30b8505a/The_Matrix__1999__Grouping_0.mp3"
  }
]
```

### Multiple Results

Retrieve a specific number of random "whoa" results - [https://whoa.onrender.com/whoas/random?results=2](https://whoa.onrender.com/whoas/random?results=2)

<b>Example Response:</b>

```jsonc
[
  {
    "movie": "Bill & Ted Face the Music",
    "year": 2020,
    "release_date": "2020-08-28",
    "director": "Dean Parisot",
    "character": "Ted Logan",
    "movie_duration": "01:31:53",
    "timestamp": "01:12:22",
    "full_line": "Whoa.",
    "current_whoa_in_movie": 5,
    "total_whoas_in_movie": 5,
    "whoa_grouping": null,
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/7uQk4GkGE6pklfiuTZ7KSt/843731f596de16ae363cdfaf636952d0/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/5fBSExQbxgYnbVpcVFVaQy/170cc05cfc1176fc3dd173362da2b250/Bill___Ted_Face_the_Music_5__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/5RnOwT7nKzqSopAaKlirbO/4e8d9a745c28b59b204ba7cd91bacca9/Bill___Ted_Face_the_Music_5__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/RAcSmnzGt0UGGjsdHnMuY/5f945c8b3ce7bee352c77ee9c640d77d/Bill___Ted_Face_the_Music_5__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/6AYk7KBCUf85bL5K06ZClX/597212884fd6624ede4a582a747add54/Bill___Ted_Face_the_Music_5__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/6nsofsskPC8eCP9vDhfB6h/4b728ac8cd818082b195b47db7fc2f9e/Bill___Ted_Face_the_Music_5.mp3"
  },
  {
    "movie": "Bill & Ted's Excellent Adventure",
    "year": 1989,
    "release_date": "1989-02-17",
    "director": "Stephen Herek",
    "character": "Ted Logan",
    "movie_duration": "01:29:51",
    "timestamp": "00:14:20",
    "full_line": "Whoa!",
    "current_whoa_in_movie": 2,
    "total_whoas_in_movie": 26,
    "whoa_grouping": null,
    "poster": "https://images.ctfassets.net/a6ek464hq2lg/7gUOeuWUZfWY7VBoqNPW3A/49771a6b578e7e53409f2258f736d9d9/tV25lGWGWGEqUe3U0xjQTBgilSx.jpeg",
    "video": {
      "1080p": "https://videos.ctfassets.net/a6ek464hq2lg/4mamQcYRVEnJE4MrLefLJn/93a2a72ee98ffea0c8315ddce0f184c2/Bill___Ted-s_Excellent_Adventure_2__1080p_.mp4",
      "720p": "https://videos.ctfassets.net/a6ek464hq2lg/sXDVpQsgppNFhLIF23Eq4/069443d49fe9258d2bca13bcf8b841b5/Bill___Ted-s_Excellent_Adventure_2__720p_.mp4",
      "480p": "https://videos.ctfassets.net/a6ek464hq2lg/3B4337fbPBcV2LQT9mFAiK/5eab91f2051ee5048a759b08deebd951/Bill___Ted-s_Excellent_Adventure_2__480p_.mp4",
      "360p": "https://videos.ctfassets.net/a6ek464hq2lg/9mvRkjlcVwCjO3YnjxaH7/787f1ed3957490e8d756aa03129a148e/Bill___Ted-s_Excellent_Adventure_2__360p_.mp4"
    },
    "audio": "https://assets.ctfassets.net/a6ek464hq2lg/348YrzweMDNTu31S66KUvV/60cbdf53791f0bf2083df799c0cda96b/Bill___Ted-s_Excellent_Adventure_2.mp3"
  }
]
```

### Specify grouping behavior

Retrieve a random "whoa" and explicitly set its grouping behavior, if applicable.

By default, "whoa" instances that are part of a distinct consecutive group include the entire grouped "whoa" clip in their video and audio response fields.

The individual "whoa" clip from the grouping can be fetched, instead - [https://whoa.onrender.com/whoas/random?group_whoa_assets=false](https://whoa.onrender.com/whoas/random?group_whoa_assets=false)

### Specify year

Retrieve a random "whoa" from a specific year - [https://whoa.onrender.com/whoas/random?year=2011](https://whoa.onrender.com/whoas/random?year=2011)

### Specify movie

Retrieve a random "whoa" by the name of the movie it appears in - [https://whoa.onrender.com/whoas/random?movie=the%20matrix](https://whoa.onrender.com/whoas/random?movie=the%20matrix)

### Specify director

Retrieve a random "whoa" from a movie with a particular director - [https://whoa.onrender.com/whoas/random?director=eli%20roth](https://whoa.onrender.com/whoas/random?director=eli%20roth)

### Specify movie occurrence number

Retrieve a random "whoa" by the number of its occurrence in a movie - [https://whoa.onrender.com/whoas/random?whoa_in_movie=2](https://whoa.onrender.com/whoas/random?whoa_in_movie=2)

### Sort multiple results

Sort multiple random results by either `movie`, `release_date`, `year`, `director`, or `number_current_whoa`. Sort direction can be either `asc` (ascending) or `desc` (descending) - [https://whoa.onrender.com/whoas/random?results=10&year=2017&sort=movie&direction=desc](https://whoa.onrender.com/whoas/random?results=10&year=2017&sort=movie&direction=desc)

## Ordered "Whoa"

Retrieve a specific "whoa" by its index in the chronological order of all results - [https://whoa.onrender.com/whoas/ordered/0](https://whoa.onrender.com/whoas/ordered/0)

### Multiple Ordered "Whoa" Results

Retrieve all "whoa" results between a first index and a second index, inclusive, in the chronological order of all results - [https://whoa.onrender.com/whoas/ordered/3-7](https://whoa.onrender.com/whoas/ordered/3-7)

## All Movies

Retrieve all names of movies in which Keanu Reeves says "whoa" - [https://whoa.onrender.com/whoas/movies](https://whoa.onrender.com/whoas/movies)

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
