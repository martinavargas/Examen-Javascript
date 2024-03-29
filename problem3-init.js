const movies = [
  {
    UserId: 10,
    id: 1,
    movie: "The Godfather",
    genre: "Thriller",
    watched: "2022-04-01 09:40:48",
    rate: 7.6,
  },
  {
    UserId: 7,
    id: 2,
    movie: "The Texas Chain Saw Massacre",
    genre: "Horror",
    watched: "2020-05-25 13:11:24",
    rate: 7.4,
  },
  {
    UserId: 1,
    id: 3,
    movie: "The Shining",
    genre: "Horror",
    watched: "2022-02-24 00:21:22",
    rate: 5.8,
  },
  {
    UserId: 3,
    id: 4,
    movie: "Toy Story",
    genre: "Animation|Children|Comedy|Fantasy",
    watched: "2022-06-17 23:21:12",
    rate: 5.9,
  },
  {
    UserId: 5,
    id: 5,
    movie: "New York: A Documentary Film",
    genre: "Documentary",
    watched: "2022-06-25 15:39:15",
    rate: 7.2,
  },
  {
    UserId: 8,
    id: 6,
    movie: "Halloween: The Curse of Michael Myers",
    genre: "Horror|Thriller",
    watched: "2020-04-18 15:47:33",
    rate: 0.7,
  },
  {
    UserId: 5,
    id: 7,
    movie: "Die Hard",
    genre: "Action|Crime|Thriller",
    watched: "2020-06-15 22:49:31",
    rate: 3.3,
  },
  {
    UserId: 2,
    id: 8,
    movie: "The Dark Knight Rises",
    genre: "Action|Adventure|Crime",
    watched: "2022-11-16 04:22:21",
    rate: 4.7,
  },
  {
    UserId: 3,
    id: 9,
    movie: "Fight Club",
    genre: "Action|Crime|Drama|Thriller",
    watched: "2022-10-26 07:04:17",
    rate: 4,
  },
  {
    UserId: 5,
    id: 10,
    movie: "Avengers: Infinity War",
    genre: "Action|Adventure|Sci-Fi",
    watched: "2022-07-12 20:36:17",
    rate: 2.8,
  },
  {
    userId: 7,
    id: 11,
    movie: "The Hangover",
    genre: "Comedy",
    watched: "2020-08-13 01:17:10",
    rate: 1.4,
  },
  {
    userId: 4,
    id: 12,
    movie: "Your Name",
    genre: "Animation|Drama|Fantasy|Romance",
    watched: "2020-10-06 00:08:50",
    rate: 1,
  },
  {
    userId: 7,
    id: 14,
    movie: "No Country for Old Men",
    genre: "Crime|Drama|Thriller",
    watched: "2020-12-04 00:45:40",
    rate: 3.4,
  },
  {
    userId: 9,
    id: 15,
    movie: "How to Train Your Dragon",
    genre: "Adventure|Animation|Children|Fantasy",
    watched: "2022-01-11 23:06:04",
    rate: 9.1,
  },
  {
    userId: 9,
    id: 16,
    movie: "The Matrix",
    genre: "Action|Sci-Fi|Thriller",
    watched: "2022-03-17 18:03:19",
    rate: 9.4,
  },
  {
    userId: 8,
    id: 17,
    movie: "Robin Hood",
    genre: "Adventure|Animation|Children|Comedy|Musical",
    watched: "2021-08-05 18:57:45",
    rate: 5.8,
  },
  {
    userId: 6,
    id: 19,
    movie: "Whiplash",
    genre: "Drama|Musical",
    watched: "2022-04-23 00:44:02",
    rate: 0.7,
  },
  {
    UserId: 5,
    id: 20,
    movie: "Life Is Beautiful",
    genre: "Comedy|Drama|Romance|War",
    watched: "2022-05-02 20:00:04",
    rate: 6.4,
  },
];

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    adress: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    adress: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    adress: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    adress: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    adress: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    adress: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    adress: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    adress: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    adress: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    adress: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

function listUsersMovies(users, movies) {
  const userMovies = [];
  users.map(function (user) {
    const userEmail = user.email;
    const userName = user.name;
    const userMoviesWatched = movies.filter(function (movie) {
      return movie.userId === user.id;
    });
    if (userMoviesWatched.length > 0) {
      const userMovieTitle = userMoviesWatched[0].movie;
      userMovies.push({
        name: userName,
        email: userEmail,
        movie: userMovieTitle,
      });
    }
  });
  return userMovies;
}
