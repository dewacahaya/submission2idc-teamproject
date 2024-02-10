import { getFilmById, getFilms } from "./api.js";
import { generateRandomNumber, generateElement } from "./utils/index.js";

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

// ID yang kamu tambahkan di index.html sebagai pembungkus list film nya masukan disini
const listFilm = document.getElementById("list_film");
const containerDetail = document.getElementById("main-container") // Masukan disini ID nya

document.addEventListener("DOMContentLoaded", async () => {
  // Buatkan sebuah fungsi yang akan mengambil data film berdasarkan id yang diinginkan
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

      
      // console.log({ response });
    } catch (error) {
      console.error("Error : ", { error });
    }
  };
  handleGetFilmById([6]);
  

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
          className: "w-full self-center text-white py-4 px-4",
        });

        // Buat pembungkus untuk judul dan tahun rilis
        const containerTitle = generateElement({
          tag: "div",
          className: "text-white"
        });

        const cover = generateElement({
          tag: "a",
          href: `/public/pages/detail.html`,
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

  // async function handleFilmDetail(id) {
  //   try {
  //     const response = await getFilmById({id})
  //     console.log(response)

  //     if (!response) return;

  //     containerDetail.classList.add("pt-24 lg:pt-[132px] lg:containe");
  //     containerDetail.innerHTML = "";
  //     response?.forEach((detail) => {

  //       // pembungkus semuanya
  //       const cardDetail = generateElement({
  //         tag: "div",
  //         className: "block pb-2 mb-5",
  //       });
  //       // pembungkus semuanya

  //       // elemen top title
  //       const topTitleCon = generateElement({
  //         tag: "div",
  //         className: "w-full self-center",
  //       })

  //       const topTitle = generateElement({
  //         tag: "div",
  //         className: "bg-[#17191F] text-center font-poppins text-white font-semibold p-2 mb-2",
  //       })

  //       const topFilmTitle = generateElement({
  //         tag: "h3",
  //         id: "top-title",
  //         innerText: detail.title,
  //       });

  //       topTitle.append(topFilmTitle)
  //       topTitleCon.append(topTitle)
  //       // elemen top title

  //       // elemen image dan detail
  //       const detailFilmCard = generateElement({
  //         tag: "div",
  //         className: "lg:flex",
  //       });

  //       // pembungkus image
  //       const imageCard = generateElement({
  //         tag: "div",
  //         className: "w-full self-center py-4 px-4 lg:w-1/3"
  //       });

  //       const filmImage = generateElement({
  //         tag: "div",
  //         id: "detail-image",
  //         className: "w-[170px] h-[220px] mx-auto flex mb-2 lg:w-[270px] lg:h-[340px]",
  //       });

  //       const theImage = generateElement({
  //         tag: "img",
  //         src: detail.images,
  //         className: "min-h-0 rounded-md shadow-md",
  //         alt: "gambar",
  //       });

  //       filmImage.append(theImage);
  //       imageCard.append(filmImage);
  //       // pembungkus image

  //       const detailWrapper = generateElement({
  //         tag: "div",
  //         className: "w-full self-center lg:w-10/12",
  //       });

  //       const wrapperContent = generateElement({
  //         tag: "div",
  //         id: "detail-wrapper",
  //         className: "px-4 py-4 font-poppins font-medium text-base text-white lg:text-xl md:w-1/2",
  //       });

        
  //       const Content = {
  //         content: `
  //             <p>Title : <span id="filmtitle">${detail.title}</span></p>
  //             <p>Release : <span id="filmrelease">${detail.release}</span></p>
  //             <p>Duration : <span id="filmduration">${detail.runtime+"minute"}</span></p>
  //             <p>Genre : <span id="filmgenre">${detail.genre}</span></p>
  //             <p>Director : <span id="filmdirector">${detail.director}</span></p>
  //             <p>Writer : <span id="filmwriter">${detail.writer}</span></p>
  //             <p>Casts : <span id="filmcasts">${detail.cast}</span></p>
  //             <p class="mb-3">Language : <span id="filmlang">${detail.language}</span></p>
  //             <div class="flex justify-center px-4 py-4 mb-2">
  //               <a
  //                 class="text-base font-medium text-slate-950 bg-[#F8B319] px-12 py-3 rounded-full hover:shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out lg:px-20 lg:py-3"
  //                 >Watch</a
  //               >
  //             </div>
  //       `
  //     };

  //       wrapperContent.append(Content.content);
  //       detailWrapper.append(wrapperContent)

  //       const descCon = generateElement({
  //         tag: "div",
  //         className: "flex w-full",
  //       })

  //       const box = generateElement({
  //         tag: "div",
  //         className: "font-poppins text-base text-fontwhite-0 lg:text-lg",
  //       })

  //       const descFilm = generateElement({
  //         tag: "p",
  //         id: "filmdesc",
  //         value: detail.description,
  //         className: "text-justify px-4 py-4",
  //       })

  //       const rateIcon = generateElement({
  //         tag: "div",
  //         className: "flex justify-center px-4 py-4 mb-2",
  //       })

  //       const filmRate = generateElement({
  //         tag: "p",
  //         id: "rating",
  //         value: detail.rate,
  //         className: "text-base font-medium text-slate-950 bg-[#F8B319] px-12 py-3 rounded-full hover:shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out lg:px-20 lg:py-3",
  //       })

  //       rateIcon.append(filmRate)
  //       box.append(...[descFilm, rateIcon])
  //       descCon.append(box)
  //       // elemen image dan detail

  //       detailFilmCard.append(...[imageCard, detailWrapper, descCon])
  //       cardDetail.append(...[topTitleCon, detailFilmCard])
  //       containerDetail.append(cardDetail)
  //     })


  //     console.log({response})
  //   } catch (error) {
      
  //   }
  // }
  // handleFilmDetail();
});

