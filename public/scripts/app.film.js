import { getFilmById, getFilms } from "./api.js";
import { generateElement } from "./utils/index.js";

const topTitle = document.getElementById("top-title")
const filmCover = document.getElementById("recomen-film");
const judul = document.querySelector("#filmtitle");
const tahunRilis = document.querySelector("#filmrelease");
const filmDur = document.getElementById("filmduration");
const filmGenre = document.getElementById("filmgenre")
const filmDirector = document.getElementById("filmdirector")
const writer = document.getElementById("filmwriter")
const casts = document.getElementById("filmcasts")
const language = document.getElementById("filmlang")
const desc = document.getElementById("filmdesc")
const rate = document.getElementById("rating")

const listFilm = document.getElementById("list_film");

document.addEventListener("DOMContentLoaded", async () => {

  const handleGetFilmById = async (id) => {
    try {
      const response = await getFilmById({id});
      console.log(response);

      if (!response) return;

      topTitle.innerText = response?.title

      filmCover.src =  response?.images

      judul.innerText = response?.title || "wait";

      tahunRilis.innerText = response?.year || "wait";

      filmDur.innerText = response?.runtime +"minute"

      filmGenre.innerText = response?.genre

      filmDirector.innerText = response?.director

      writer.innerText = response?.writer

      casts.innerText = response?.cast

      language.innerText = response?.language

      desc.innerText = response?.description

      rate.innerText = response?.rating

    } catch (error) {
      console.error("Error : ", { error });
    }
  };
  handleGetFilmById(1);
  

 
  const handleGetFilms = async () => {
    try {
      const response = await getFilms();

      if (!response) return;

      listFilm.innerHTML = "";
     
      response?.forEach((film) => {


        const containerCard = generateElement({
          tag: "div",
          className: "w-full self-center text-white py-4 px-4",
        });

        const containerTitle = generateElement({
          tag: "div",
          className: "text-white"
        });

        const cover = generateElement({
          tag: "a",
          href: '/public/pages/detail.html',
          onClick: "moviesDetail",
        });

        const containerImage = generateElement({
          tag: "div",
          id: "recomen-film",
          className:
            "w-[170px] h-[220px] mx-auto flex mb-2 lg:w-[240px] lg:h-[330px]",
        });

        const filmCover = generateElement({
          tag: "img",
          src: film.images,
          className: "min-h-0 min-w-0 w-full rounded-md shadow-md",
          alt: "Ini gambar",
        });

        // Masukan gambar ke dalam pembungkus nya
        containerImage.append(filmCover);
       
        

        // Buat judul film nya
        const title = generateElement({
          tag: "h3",
          id: "filmtitle",
          value: film.title,
          className: "flex justify-center text-white lg:text-base",
        });

        // Buat tahun rilis film nya
        const year = generateElement({
          tag: "p",
          id: "filmrelease",
          value: film.year,
          className: "flex justify-center text-sm text-white lg:text-sm",
        });

        // Masukan judul dan tahun rilis ke dalam pembungkus nya
        containerTitle.append(...[title, year]);
         // Masukan pembungkus gambar ke dalam anchor
        cover.append(...[containerImage, containerTitle]);

        containerCard.append(cover);
        listFilm.appendChild(containerCard);

      });


      console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  };

  // Panggil fungsi handleGetFilms nya
  handleGetFilms();


});

