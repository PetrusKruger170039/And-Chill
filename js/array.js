


//Arrays for home page
var movieshomepage = [
        {title: "Blade Runner 2049", year: "2017", directors: "Denis Villeneuve", cast: "Harrison Ford, Ryan Gosling, Ana de Armas", user: "8.6", plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.", image: ""},
        {title: "American Assassin", year: "2017", directors: "Michael Cuesta", cast: "Dylan O'Brien, Michael Keaton, Sanaa Lathan", genre: "Action | Thriller", user: "6.6", plot: "After the death of his girlfriend at the hands of Islamic terrorists, Mitch Rapp is drawn into the world of counter-terrorism, mentored by tough-as-nails former U.S. Navy SEAL Stan Hurley.", image: ""},
        {title: "Guardians of the Galaxy Vol. 2", year: "2017", directors: "James Gunn", cast: "Chris Pratt, Zoe Saldana, Dave Bautista", user: "7.8", plot: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.", image: ""},
        {title: "Kingsman: The Golden Circle", year: "2017", directors: "Matthew Vaughn", cast: " Taron Egerton, Colin Firth, Mark Strong", genre: "Action | Adventure | Comedy", user: "7.3", plot: "When their headquarters are destroyed and the world is held hostage, the Kingsman's journey leads them to the discovery of an allied spy organization in the US. These two elite secret organizations must band together to defeat a common enemy.", image: ""},
        {title: "LEGO Ninjago Movie", year: "2017", directors: "Charlie Bean, Paul Fisher, Bob Logan", cast: "Jackie Chan, Dave Franco, Fred Armisen", genre: "Animation | Action | Adventure | Comedy | Family", user: "6.2", plot: "Shunned by everyone for being the son of an evil warlord, a teenager seeks to defeat him with the help of his fellow ninjas.", image: ""},
        {title: "Girls Trip", year: "2017", directors: "Malcolm D. Lee", cast: "Regina Hall, Queen Latifah, Jada Pinkett Smith", user: "6.6", plot: "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling, and romancing to make the Big Easy blush.", image: ""},
    ];

//blade
document.getElementById("title").textContent = movieshomepage[0].title;
document.getElementById("year").textContent = movieshomepage[0].year;
document.getElementById("director").textContent = movieshomepage[0].directors;
document.getElementById("cast").textContent = movieshomepage[0].cast;
document.getElementById("genre").textContent = movieshomepage[0].genre;
document.getElementById("user").textContent = movieshomepage[0].user;
document.getElementById("plot").textContent = movieshomepage[0].plot;


//American Assassin
document.getElementById("title-1").textContent = movieshomepage[1].title;
document.getElementById("year-1").textContent = movieshomepage[1].year;
document.getElementById("director-1").textContent = movieshomepage[1].directors;
document.getElementById("cast-1").textContent = movieshomepage[1].cast;
document.getElementById("genre-1").textContent = movieshomepage[1].genre;
document.getElementById("user-1").textContent = movieshomepage[1].user;
document.getElementById("plot-1").textContent = movieshomepage[1].plot;

//GOTG vol.2
document.getElementById("title-2").textContent = movieshomepage[2].title;
document.getElementById("year-2").textContent = movieshomepage[2].year;
document.getElementById("director-2").textContent = movieshomepage[2].directors;
document.getElementById("cast-2").textContent = movieshomepage[2].cast;
document.getElementById("genre-2").textContent = movieshomepage[2].genre;
document.getElementById("user-2").textContent = movieshomepage[2].user;
document.getElementById("plot-2").textContent = movieshomepage[2].plot;

//Kingsman
document.getElementById("title-3").textContent = movieshomepage[3].title;
document.getElementById("year-3").textContent = movieshomepage[3].year;
document.getElementById("director-3").textContent = movieshomepage[3].directors;
document.getElementById("cast-3").textContent = movieshomepage[3].cast;
document.getElementById("genre-3").textContent = movieshomepage[3].genre;
document.getElementById("user-3").textContent = movieshomepage[3].user;
document.getElementById("plot-3").textContent = movieshomepage[3].plot;

//Ninjago
document.getElementById("title-4").textContent = movieshomepage[4].title;
document.getElementById("year-4").textContent = movieshomepage[4].year;
document.getElementById("director-4").textContent = movieshomepage[4].directors;
document.getElementById("cast-4").textContent = movieshomepage[4].cast;
document.getElementById("genre-4").textContent = movieshomepage[4].genre;
document.getElementById("user-4").textContent = movieshomepage[4].user;
document.getElementById("plot-4").textContent = movieshomepage[4].plot;

//Girls Trip
document.getElementById("title-5").textContent = movieshomepage[5].title;
document.getElementById("year-5").textContent = movieshomepage[5].year;
document.getElementById("director-5").textContent = movieshomepage[5].directors;
document.getElementById("cast-5").textContent = movieshomepage[5].cast;
document.getElementById("genre-5").textContent = movieshomepage[5].genre;
document.getElementById("user-5").textContent = movieshomepage[5].user;
document.getElementById("plot-5").textContent = movieshomepage[5].plot;

//image array for homepage images
$(document).ready(function(){
    $("#img").attr("src", "img/home/small/Blade_Runner_2049.jpeg");
    $("#img-1").attr("src", "img/home/small/American_Assassin.jpg");
    $("#img-2").attr("src", "img/home/small/GOTG_vol2.jpg");
    $("#img-3").attr("src", "img/home/small/kingsman__the_golden_circle.jpg");
    $("#img-4").attr("src", "img/home/small/Lego_ninjago.jpg");
    $("#img-5").attr("src", "img/home/small/Girls_Trip.jpg");
});

//Array for Movies Page
var moviesImdb = [ 
    {title: "The Godfather", year: "1972", directors: "Francis Ford Coppola", cast: "Marlon Brando, Al Pacino, James Caan", imdb: "9.2", plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", image: "../images/"},
    {title: "The Godfather: Part 2", year: "1974", directors: "Francis Ford Coppola", cast: " Al Pacino, Robert De Niro, Robert Duvall", imdb: "9.0", plot: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.", image: "../images/" },
    {title: "The Dark Knight", year: "2008", directors: "Christopher Nolan", cast: " Christian Bale, Heath Ledger, Aaron Eckhart", imdb: "9.0", plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", image: "../images/" },
    {title: "12 Angry Men", year: "1957", directors: "Henry Fonda, Lee J. Cobb, Martin Balsam", cast: "Sidney Lumet", imdb: "8.9", plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", image: "../images/" },
    {title: "Schindler’s List", year: "1993", directors: "Steven Spielberg", cast: "Liam Neeson, Ralph Fiennes, Ben Kingsley", imdb: "8.9", plot: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", image: "../images/" },
    {title: "Pulp Fiction", year: "1994", directors: "Quentin Tarantino", cast: "John Travolta, Uma Thurman, Samuel L. Jackson", imdb: "8.9", plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", image: "../images/" },
    {title: "The Lord of the Rings: The Return of the King", year: "", directors: "Peter Jackson", cast: "Elijah Wood, Viggo Mortensen, Ian McKellen", imdb: "8.9", plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", image: "../images/" },
    {title: "The Good, the Bad, and the Ugly", year: "1996", directors: "Sergio Leone", cast: "Clint Eastwood, Eli Wallach, Lee Van Cleef", imdb: "8.9", plot: "The Good, the Bad, and the Ugly, 1996, IMDB: 8.9 A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", image: "../images/" },
    {title: "Fight Club", year: "1999", directors: "", cast: "", imdb: "8.8", plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.", image: "../images/" },
];

//ones with user ratings and genre

var moviesUser = [
    {title: "IT", year: "2017", directors: "Andy Muschietti", cast: "Bill Skarsgård, Jaeden Lieberher, Finn Wolfhard", genre: "Drama | Horror | Thriller", user: "7.8", plot: "A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children", image: ""},
    {title: "American Made", year: "2017", directors: "Doug Liman", cast: "Tom Cruise, Domhnall Gleeson, Sarah Wright", genre: "Action | Biography | Comedy | Crime | Drama | History | Thriller", user: "7.3", plot: "The story of Barry Seal, an American pilot who became a drug-runner for the CIA in the 1980s in a clandestine operation that would be exposed as the Iran-Contra Affair.", image: ""},
    {title: "Kingsman: The Golden Circle", year: "2017", directors: "Matthew Vaughn", cast: " Taron Egerton, Colin Firth, Mark Strong", genre: "Action | Adventure | Comedy", user: "7.3", plot: "When their headquarters are destroyed and the world is held hostage, the Kingsman's journey leads them to the discovery of an allied spy organization in the US. These two elite secret organizations must band together to defeat a common enemy.", image: ""},
    {title: "LEGO Ninjago Movie", year: "2017", directors: "Charlie Bean, Paul Fisher, Bob Logan", cast: "Jackie Chan, Dave Franco, Fred Armisen", genre: "Animation | Action | Adventure | Comedy | Family", user: "6.2", plot: "Shunned by everyone for being the son of an evil warlord, a teenager seeks to defeat him with the help of his fellow ninjas.", image: ""},
    {title: "Flatliners", year: "2017", directors: "Niels Arden Oplev", cast: "Ellen Page, Diego Luna, Nina Dobrev, James Norton", genre: "Drama | Horror | Sci-Fi | Thriller", user: "5", plot: "Five medical students, obsessed by what lies beyond the confines of life, embark on a daring experiment: by stopping their hearts for short periods, each triggers a near-death experience - giving them a firsthand account of the afterlife.", image: ""},
    {title: "Battle of the Sexes", year: "2017", directors: "Jonathan Dayton, Valerie Faris", cast: "Emma Stone, Steve Carell, Andrea Riseborough", genre: "Biography | Comedy | Drama | Sport", user: "6.8", plot: "The true story of the 1973 tennis match between World number one Billie Jean King and ex-champ and serial hustler Bobby Riggs.", image: ""},
    {title: "American Assassin", year: "2017", directors: "Michael Cuesta", cast: "Dylan O'Brien, Michael Keaton, Sanaa Lathan", genre: "Action | Thriller", user: "6.6", plot: "After the death of his girlfriend at the hands of Islamic terrorists, Mitch Rapp is drawn into the world of counter-terrorism, mentored by tough-as-nails former U.S. Navy SEAL Stan Hurley.", image: ""},
    {title: "Home Again", year: "2017", directors: "Hallie Meyers-Shyer", cast: "Reese Witherspoon, Michael Sheen, Lake Bell", genre: "Comedy | Drama | Romance", user: "5.7", plot: "Life for a single mom in Los Angeles takes an unexpected turn when she allows three young guys to move in with her.", image: ""},
    {title: "Til Death Do Us Part", year: "2017", directors: "Chris Stokes", cast: "Stephen Bishop, Mark G. Chapman, Jessica Vanessa DeLeon", genre: "Thriller", user: "3.1", plot: "Michael and Madison Roland had planned to spend the rest of their lives together, until one day Michael's controlling ways turned their perfect marriage. With the help of her best friend, Madison decides to get away. After adopting a new identity, she meets Alex Stone and learns to love again. All is well, until Michael discovers Madison's whereabouts, and recreates the nightmare she once lived all over again.", image: ""},
    {title: "Mother!", year: "2017", directors: "Darren Aronofsky", cast: "Jennifer Lawrence, Javier Bardem, Ed Harris, Michelle Pfeiffer7", genre: "Drama | Horror | Mystery", user: "7", plot: "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.", image: ""},
];


//Movies that trending in box office no genres

var moviesTrend = [
    {title: "Blade Runner 2049", year: "2017", directors: "Denis Villeneuve", cast: "Harrison Ford, Ryan Gosling, Ana de Armas", user: "8.6", plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.", image: ""},
    {title: "Star Wars: The Last Jedi", year: "2017", directors: "Rian Johnson", cast: "Daisy Ridley, John Boyega, Mark Hamill", user: "To be released", plot: "Having taken her first steps into a larger world in Star Wars: The Force Awakens (2015), Rey continues her epic journey with Finn, Poe, and Luke Skywalker in the next chapter of the saga.", image: ""},
    {title: "War for the Planet of the Apes", year: "2017", directors: "Matt Reeves", cast: "Andy Serkis, Woody Harrelson, Steve Zahn", user: "7.8", plot: "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.", image: ""},
    {title: "Thor: Ragnarok", year: "2017", directors: "Matt Reeves", cast: "Andy Serkis, Woody Harrelson, Steve Zahn", user: "To be released", plot: "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.", image: ""},
    {title: "Avengers: Infinity War", year: "2018", directors: "Anthony Russo, Joe Russo", cast: "Karen Gillan, Dave Bautista, Tom Holland", user: "To be released", plot: "The plot is unknown at this time.", image: ""},
    {title: "Guardians of the Galaxy Vol. 2", year: "2017", directors: "James Gunn", cast: "Chris Pratt, Zoe Saldana, Dave Bautista", user: "7.8", plot: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.", image: ""},
    {title: "Girls Trip", year: "2017", directors: "Malcolm D. Lee", cast: "Regina Hall, Queen Latifah, Jada Pinkett Smith", user: "6.6", plot: "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling, and romancing to make the Big Easy blush.", image: ""},
    {title: "xXx: Return of Xander Cage", year: "2017", directors: "D.J. Caruso", cast: "Vin Diesel, Donnie Yen, Deepika Padukone", user: "5.2", plot: "2 Xander Cage is left for dead after an incident, though he secretly returns to action for a new, tough assignment with his handler Augustus Gibbons.", image: ""},
    {title: "The Emoji Movie", year: "2017", directors: "Tony Leondis", cast: "T.J. Miller, James Corden, Anna Faris", user: "2.3", plot: "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.", image: ""},
];

document.getElementById("title-1").textContent = moviesImdb[0].title;
document.getElementById("year-1").textContent = moviesImdb[0].year;
document.getElementById("director-1").textContent = moviesImdb[0].directors;
document.getElementById("cast-1").textContent = moviesImdb[0].cast;
document.getElementById("imdb-1").textContent = moviesImdb[0].imdb;
document.getElementById("plot-1").textContent = moviesImdb[0].plot;

//GodFather: Part 2
document.getElementById("title-2").textContent = moviesImdb[1].title;
document.getElementById("year-2").textContent = moviesImdb[1].year;
document.getElementById("director-2").textContent = moviesImdb[1].directors;
document.getElementById("cast-2").textContent = moviesImdb[1].cast;
document.getElementById("imdb-2").textContent = moviesImdb[1].imdb;
document.getElementById("plot-2").textContent = moviesImdb[1].plot;

//The Dark night
document.getElementById("title-3").textContent = moviesImdb[2].title;
document.getElementById("year-3").textContent = moviesImdb[2].year;
document.getElementById("director-3").textContent = moviesImdb[2].directors;
document.getElementById("cast-3").textContent = moviesImdb[2].cast;
document.getElementById("imdb-3").textContent = moviesImdb[2].imdb;
document.getElementById("plot-3").textContent = moviesImdb[2].plot;

//12 Angry Men
document.getElementById("title-4").textContent = moviesImdb[3].title;
document.getElementById("year-4").textContent = moviesImdb[3].year;
document.getElementById("director-4").textContent = moviesImdb[3].directors;
document.getElementById("cast-4").textContent = moviesImdb[3].cast;
document.getElementById("imdb-4").textContent = moviesImdb[3].imdb;
document.getElementById("plot-4").textContent = moviesImdb[3].plot;

//Schindlers List 
document.getElementById("title-5").textContent = moviesImdb[4].title;
document.getElementById("year-5").textContent = moviesImdb[4].year;
document.getElementById("director-5").textContent = moviesImdb[4].directors;
document.getElementById("cast-5").textContent = moviesImdb[4].cast;
document.getElementById("imdb-5").textContent = moviesImdb[4].imdb;
document.getElementById("plot-5").textContent = moviesImdb[4].plot;

//Pulp Fiction 
document.getElementById("title-6").textContent = moviesImdb[5].title;
document.getElementById("year-6").textContent = moviesImdb[5].year;
document.getElementById("director-6").textContent = moviesImdb[5].directors;
document.getElementById("cast-6").textContent = moviesImdb[5].cast;
document.getElementById("imdb-6").textContent = moviesImdb[5].imdb;
document.getElementById("plot-6").textContent = moviesImdb[5].plot;

//LOTR
document.getElementById("title-7").textContent = moviesImdb[6].title;
document.getElementById("year-7").textContent = moviesImdb[6].year;
document.getElementById("director-7").textContent = moviesImdb[6].directors;
document.getElementById("cast-7").textContent = moviesImdb[6].cast;
document.getElementById("imdb-7").textContent = moviesImdb[6].imdb;
document.getElementById("plot-7").textContent = moviesImdb[6].plot;

//The Good, The Bad, The Ugly 
document.getElementById("title-8").textContent = moviesImdb[7].title;
document.getElementById("year-8").textContent = moviesImdb[7].year;
document.getElementById("director-8").textContent = moviesImdb[7].directors;
document.getElementById("cast-8").textContent = moviesImdb[7].cast;
document.getElementById("imdb-8").textContent = moviesImdb[7].imdb;
document.getElementById("plot-8").textContent = moviesImdb[7].plot;

//Fight Club
document.getElementById("title-9").textContent = moviesImdb[8].title;
document.getElementById("year-9").textContent = moviesImdb[8].year;
document.getElementById("director-9").textContent = moviesImdb[8].directors;
document.getElementById("cast-9").textContent = moviesImdb[8].cast;
document.getElementById("imdb-9").textContent = moviesImdb[8].imdb;
document.getElementById("plot-9").textContent = moviesImdb[8].plot;

//User and genre 

//IT
document.getElementById("title-10").textContent = moviesUser[0].title;
document.getElementById("year-10").textContent = moviesUser[0].year;
document.getElementById("director-10").textContent = moviesUser[0].directors;
document.getElementById("cast-10").textContent = moviesUser[0].cast;
document.getElementById("genre-10").textContent = moviesUser[0].genre;
document.getElementById("user-10").textContent = moviesUser[0].user;
document.getElementById("plot-10").textContent = moviesUser[0].plot;

//American Made
document.getElementById("title-11").textContent = moviesUser[1].title;
document.getElementById("year-11").textContent = moviesUser[1].year;
document.getElementById("director-11").textContent = moviesUser[1].directors;
document.getElementById("cast-11").textContent = moviesUser[1].cast;
document.getElementById("genre-11").textContent = moviesUser[1].genre;
document.getElementById("user-11").textContent = moviesUser[1].user;
document.getElementById("plot-11").textContent = moviesUser[1].plot;

//Kingsman
document.getElementById("title-12").textContent = moviesUser[2].title;
document.getElementById("year-12").textContent = moviesUser[2].year;
document.getElementById("director-12").textContent = moviesUser[2].directors;
document.getElementById("cast-12").textContent = moviesUser[2].cast;
document.getElementById("genre-12").textContent = moviesUser[2].genre;
document.getElementById("user-12").textContent = moviesUser[2].user;
document.getElementById("plot-12").textContent = moviesUser[2].plot;

//LEGO Ninjago
document.getElementById("title-13").textContent = moviesUser[3].title;
document.getElementById("year-13").textContent = moviesUser[3].year;
document.getElementById("director-13").textContent = moviesUser[3].directors;
document.getElementById("cast-13").textContent = moviesUser[3].cast;
document.getElementById("genre-13").textContent = moviesUser[3].genre;
document.getElementById("user-13").textContent = moviesUser[3].user;
document.getElementById("plot-13").textContent = moviesUser[3].plot;

//Flatliners
document.getElementById("title-14").textContent = moviesUser[4].title;
document.getElementById("year-14").textContent = moviesUser[4].year;
document.getElementById("director-14").textContent = moviesUser[4].directors;
document.getElementById("cast-14").textContent = moviesUser[4].cast;
document.getElementById("genre-14").textContent = moviesUser[4].genre;
document.getElementById("user-14").textContent = moviesUser[4].user;
document.getElementById("plot-14").textContent = moviesUser[4].plot;

//Battle of Sexes
document.getElementById("title-15").textContent = moviesUser[5].title;
document.getElementById("year-15").textContent = moviesUser[5].year;
document.getElementById("director-15").textContent = moviesUser[5].directors;
document.getElementById("cast-15").textContent = moviesUser[5].cast;
document.getElementById("genre-15").textContent = moviesUser[5].genre;
document.getElementById("user-15").textContent = moviesUser[5].user;
document.getElementById("plot-15").textContent = moviesUser[5].plot;

//American Assassin 
document.getElementById("title-16").textContent = moviesUser[6].title;
document.getElementById("year-16").textContent = moviesUser[6].year;
document.getElementById("director-16").textContent = moviesUser[6].directors;
document.getElementById("cast-16").textContent = moviesUser[6].cast;
document.getElementById("genre-16").textContent = moviesUser[6].genre;
document.getElementById("user-16").textContent = moviesUser[6].user;
document.getElementById("plot-16").textContent = moviesUser[6].plot;

//Home Again 
document.getElementById("title-17").textContent = moviesUser[7].title;
document.getElementById("year-17").textContent = moviesUser[7].year;
document.getElementById("director-17").textContent = moviesUser[7].directors;
document.getElementById("cast-17").textContent = moviesUser[7].cast;
document.getElementById("genre-17").textContent = moviesUser[7].genre;
document.getElementById("user-17").textContent = moviesUser[7].user;
document.getElementById("plot-17").textContent = moviesUser[7].plot;

//Til Death Do Us Part
document.getElementById("title-18").textContent = moviesUser[8].title;
document.getElementById("year-18").textContent = moviesUser[8].year;
document.getElementById("director-18").textContent = moviesUser[8].directors;
document.getElementById("cast-18").textContent = moviesUser[8].cast;
document.getElementById("genre-18").textContent = moviesUser[8].genre;
document.getElementById("user-18").textContent = moviesUser[8].user;
document.getElementById("plot-18").textContent = moviesUser[8].plot;

//Mother!
document.getElementById("title-19").textContent = moviesUser[9].title;
document.getElementById("year-19").textContent = moviesUser[9].year;
document.getElementById("director-19").textContent = moviesUser[9].directors;
document.getElementById("cast-19").textContent = moviesUser[9].cast;
document.getElementById("genre-19").textContent = moviesUser[9].genre;
document.getElementById("user-19").textContent = moviesUser[9].user;
document.getElementById("plot-19").textContent = moviesUser[9].plot;

//Trending Movies

//Blade Runner 2047
document.getElementById("title-20").textContent = moviesTrend[0].title;
document.getElementById("year-20").textContent = moviesTrend[0].year;
document.getElementById("director-20").textContent = moviesTrend[0].directors;
document.getElementById("cast-20").textContent = moviesTrend[0].cast;
document.getElementById("user-20").textContent = moviesTrend[0].user;
document.getElementById("plot-20").textContent = moviesTrend[0].plot;

//Star Wars
document.getElementById("title-21").textContent = moviesTrend[1].title;
document.getElementById("year-21").textContent = moviesTrend[1].year;
document.getElementById("director-21").textContent = moviesTrend[1].directors;
document.getElementById("cast-21").textContent = moviesTrend[1].cast;
document.getElementById("user-21").textContent = moviesUser[1].user;
document.getElementById("plot-21").textContent = moviesTrend[1].plot;

//War for the planet of the apes
document.getElementById("title-22").textContent = moviesTrend[2].title;
document.getElementById("year-22").textContent = moviesTrend[2].year;
document.getElementById("director-22").textContent = moviesTrend[2].directors;
document.getElementById("cast-22").textContent = moviesTrend[2].cast;
document.getElementById("user-22").textContent = moviesUser[2].user;
document.getElementById("plot-22").textContent = moviesTrend[2].plot;

//Thor 
document.getElementById("title-23").textContent = moviesTrend[3].title;
document.getElementById("year-23").textContent = moviesTrend[3].year;
document.getElementById("director-23").textContent = moviesTrend[3].directors;
document.getElementById("cast-23").textContent = moviesTrend[3].cast;
document.getElementById("user-23").textContent = moviesUser[3].user;
document.getElementById("plot-23").textContent = moviesTrend[3].plot;

//Avengers
document.getElementById("title-24").textContent = moviesTrend[4].title;
document.getElementById("year-24").textContent = moviesTrend[4].year;
document.getElementById("director-24").textContent = moviesTrend[4].directors;
document.getElementById("cast-24").textContent = moviesTrend[4].cast;
document.getElementById("user-24").textContent = moviesUser[4].user;
document.getElementById("plot-24").textContent = moviesTrend[4].plot;

//GOTG vol.2
document.getElementById("title-25").textContent = moviesTrend[5].title;
document.getElementById("year-25").textContent = moviesTrend[5].year;
document.getElementById("director-25").textContent = moviesTrend[5].directors;
document.getElementById("cast-25").textContent = moviesTrend[5].cast;
document.getElementById("user-25").textContent = moviesUser[5].user;
document.getElementById("plot-25").textContent = moviesTrend[5].plot;

//Girls Trip
document.getElementById("title-26").textContent = moviesTrend[6].title;
document.getElementById("year-26").textContent = moviesTrend[6].year;
document.getElementById("director-26").textContent = moviesTrend[6].directors;
document.getElementById("cast-26").textContent = moviesTrend[6].cast;
document.getElementById("user-26").textContent = moviesUser[6].user;
document.getElementById("plot-26").textContent = moviesTrend[6].plot;

//xXx
document.getElementById("title-27").textContent = moviesTrend[7].title;
document.getElementById("year-27").textContent = moviesTrend[7].year;
document.getElementById("director-27").textContent = moviesTrend[7].directors;
document.getElementById("cast-27").textContent = moviesTrend[7].cast;
document.getElementById("user-27").textContent = moviesUser[7].user;
document.getElementById("plot-27").textContent = moviesTrend[7].plot;

//emoji movie
document.getElementById("title-28").textContent = moviesTrend[8].title;
document.getElementById("year-28").textContent = moviesTrend[8].year;
document.getElementById("director-28").textContent = moviesTrend[8].directors;
document.getElementById("cast-28").textContent = moviesTrend[8].cast;
document.getElementById("user-28").textContent = moviesUser[8].user;
document.getElementById("plot-28").textContent = moviesTrend[8].plot;

//Image array for movies page
$(document).ready(function(){
    $("#mp-img").attr("src", "img/home/small/Godfather.jpg");
    $("#mp-img-1").attr("src", "img/home/small_mp/Godfather_2.jpg");
    $("#mp-img-2").attr("src", "img/home/small_mp/Dark_Knight.jpg");
    $("#mp-img-3").attr("src", "img/home/small_mp/12.jpg");
    $("#mp-img-4").attr("src", "img/home/small_mp/Schindler_List.jpg");
    $("#mp-img-5").attr("src", "img/home/small_mp/Pulp_Fiction.jpg");
    $("#mp-img-7").attr("src", "img/home/small_mp/Lord_of_Ring.jpg");
    $("#mp-img-8").attr("src", "img/home/small_mp/The_Good_The_Bad_The_Ugly.jpg");
    $("#mp-img-9").attr("src", "img/home/small_mp/Fight_Club.jpeg");
    $("#mp-img-10").attr("src", "img/home/small_mp/IT.jpg");
    $("#mp-img-11").attr("src", "img/home/small_mp/American_made.jpg");
    $("#mp-img-12").attr("src", "img/home/small_mp/kingsman__the_golden_circle.jpg");
    $("#mp-img-13").attr("src", "img/home/small_mp/Lego_ninjago.jpg");
    $("#mp-img-14").attr("src", "img/home/small_mp/Flatliners.jpg");
    $("#mp-img-15").attr("src", "img/home/small_mp/Battle_of_the_Sexes.jpg");
    $("#mp-img-16").attr("src", "img/home/small_mp/American_Assassin.jpg");
    $("#mp-img-17").attr("src", "img/home/small_mp/Home_again.jpg");
    $("#mp-img-18").attr("src", "img/home/small_mp/Til_Death_.jpg");
    $("#mp-img-19").attr("src", "img/home/small_mp/Mother!.jpeg");
    $("#mp-img-20").attr("src", "img/home/small_mp/Blade_Runner_2049.jpeg");
    $("#mp-img-21").attr("src", "img/home/small_mp/Star_Wars.jpg");
    $("#mp-img-22").attr("src", "img/home/small_mp/War_Of_Apes.jpg");
    $("#mp-img-23").attr("src", "img/home/small_mp/Ragnor.jpg");
    $("#mp-img-24").attr("src", "img/home/small_mp/Infinity_War.jpg");
    $("#mp-img-25").attr("src", "img/home/small_mp/GOTG_vol2.jpg");
    $("#mp-img-26").attr("src", "img/home/small_mp/Girls_Trip.jpg");
    $("#mp-img-27").attr("src", "img/home/small_mp/xXx.jpg");
    $("#mp-img-28").attr("src", "img/home/small_mp/xXx.jpg");
    
});
