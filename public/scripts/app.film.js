import { getFilmById, getFilms } from "./api.js";
import { generateRandomNumber, generateElement } from "./utils/index.js";

const filmCover = document.getElementById("recomen-film");
const judul = document.querySelector("#title-film");
const tahunRilis = document.querySelector("#year-film");

// ID yang kamu tambahkan di index.html sebagai pembungkus list film nya masukan disini
const listFilm = document.getElementById("list_film");
const containerDetail = document.getElementById("main-container") // Masukan disini ID nya

document.addEventListener("DOMContentLoaded", async () => {
  // Buatkan sebuah fungsi yang akan mengambil data film berdasarkan id yang diinginkan
  const handleGetFilmById = async (id = 1) => {
    try {
      const response = await getFilmById(1);
      console.log(response);

      if (!response) return;

      // judul.innerText = response.title || "wait";

      // tahunRilis.innerText = response.year || "wait";

      // console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  };
  handleGetFilmById();

  // Buatkan sebuah fungsi yang akan mengambil data film semua
  const handleGetFilms = async () => {
    try {
      const response = await getFilms();

      if (!response) return;

      listFilm.innerHTML = "";
      // Karna response nya itu bentuk array maka lakukan perulangan untuk menampilkan semua film nya
      response?.forEach((film) => {
        // BENTUK FILM CARD supaya bisa di tampilkan di halaman web

        /**
         * Buat pembungkus nya
         */

        const containerCard = generateElement({
          tag: "div",
          className: "w-full self-center text-white py-4 px-4 lg:w-1/3",
        });

        // Buat pembungkus untuk judul dan tahun rilis
        const containerTitle = generateElement({
          tag: "div",
          className: "text-white"
        });

        const cover = generateElement({
          tag: "a",
          href: "/public/pages/detail.html",
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
          id: "title-film",
          value: film.title,
          className: "flex justify-center text-white lg:text-2xl",
        });

        // Buat tahun rilis film nya
        const year = generateElement({
          tag: "p",
          id: "year-film",
          value: film.year,
          className: "flex justify-center text-xs text-white lg:text-sm",
        });

        // Masukan judul dan tahun rilis ke dalam pembungkus nya
        containerTitle.append(...[title, year]);
         // Masukan pembungkus gambar ke dalam anchor
        cover.append(...[containerImage, containerTitle]);

        containerCard.append(cover);
        listFilm.appendChild(containerCard);

        /**
         * Tugas mu sekarang buat untuk bagian anchor nya yang ini
         * <a href="/public/pages/detail.html">
              <div
                id="recomen-film"
                class="w-[170px] h-[220px] mx-auto flex mb-2 lg:w-[240px] lg:h-[330px]"
              >
                <img
                  src="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
                  class="min-h-0 rounded-md shadow-md"
                  alt=""
                />
              </div>
            </a>
         * ke bentuk JS nya
         */

        /**
         * Lalu jika kamu mau gambar nya berubah mengikuti data nya ya
         * tinggal ganti aja src nya dengan data dari film nya
         * contoh: `src: film.cover` pas createElement nya
         */
      });

      console.log({ response });
    } catch (error) {
      console.error("Error nich : ", { error });
    }
  };

  // Panggil fungsi handleGetFilms nya
  handleGetFilms();

  async function handleFilmDetail(id) {
    try {
      const response = await getFilmById({id})
      console.log(response)

      if (!response) return;

      containerDetail.classList.add("pt-24 lg:pt-[132px] lg:containe");
      containerDetail.innerHTML = "";
      response?.forEach((detail) => {

        // pembungkus semuanya
        const cardDetail = generateElement({
          tag: "div",
          className: "block pb-2 mb-5",
        });
        // pembungkus semuanya

        // elemen top title
        const topTitleCon = generateElement({
          tag: "div",
          className: "w-full self-center",
        })

        const topTitle = generateElement({
          tag: "div",
          className: "bg-[#17191F] text-center font-poppins text-white font-semibold p-2 mb-2",
        })

        const topFilmTitle = generateElement({
          tag: "h3",
          id: "top-title",
          innerText: detail.title,
        });

        topTitle.append(topFilmTitle)
        topTitleCon.append(topTitle)
        // elemen top title

        // elemen image dan detail
        const detailFilmCard = generateElement({
          tag: "div",
          className: "lg:flex",
        });

        // pembungkus image
        const imageCard = generateElement({
          tag: "div",
          className: "w-full self-center py-4 px-4 lg:w-1/3"
        });

        const filmImage = generateElement({
          tag: "div",
          id: "detail-image",
          className: "w-[170px] h-[220px] mx-auto flex mb-2 lg:w-[270px] lg:h-[340px]",
        });

        const theImage = generateElement({
          tag: "img",
          src: detail.images,
          className: "min-h-0 rounded-md shadow-md",
          alt: "gambar",
        });

        filmImage.append(theImage);
        imageCard.append(filmImage);
        // pembungkus image

        const detailWrapper = generateElement({
          tag: "div",
          className: "w-full self-center lg:w-10/12",
        });

        const wrapperContent = generateElement({
          tag: "div",
          id: "detail-wrapper",
          className: "px-4 py-4 font-poppins font-medium text-base text-white lg:text-xl md:w-1/3",
        });

        
        // elemen image dan detail

        detailFilmCard.append(imageCard)
        cardDetail.append(...[topTitleCon, detailFilmCard])
      })


      console.log({response})
    } catch (error) {
      
    }
  }
  handleFilmDetail();
});

