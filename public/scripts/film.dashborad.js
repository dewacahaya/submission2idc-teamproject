import { 
    getFilms, 
    getFilmById, 
    createFilm, 
    deleteFilmById, 
    updateFilmById 
} from "./api.js"
import { generateElement, Icon } from "./utils/index.js"

// INPUT
const inputCover = document.getElementById("form-image")
const inputTitle = document.getElementById("form-title")
const inputRelease = document.getElementById("form-year")
const inputDesc = document.getElementById("form-desc")
const inputGenre = document.getElementById("form-genre")
const inputRate = document.getElementById("form-rate")
const inputRuntime = document.getElementById("form-duration")
const inputDirector = document.getElementById("form-direc")
const inputWriter = document.getElementById("form-writer")
const inputCast = document.getElementById("form-cast")
const inputLang = document.getElementById("form-lang")

const inputSearch = document.getElementById("form-search")

const inputId = document.getElementById("form-id");
// INPUT

// SUBMIT
const submitButton = document.getElementById("button-submit")
// SUBMIT

// LIST FILM
const filmContent = document.getElementById("film-content")
// LIST FILM

document.addEventListener("DOMContentLoaded", () => {

async function handleDeleteFilm(id) {
    try {
        const result = await deleteFilmById({ id });

        if (!result) return;

        if (result?.code === 200) {
        alert("Berhasil menghapus data");

        window.location.reload();
        }
    } catch (error) {
        console.error("Error : ", {
        error,
        });
    }
    }

// Fungsi untuk menampilkan data berdasarkan id
  async function handleShowFilmById(id) {
    try {
      const result = await getFilmById({ id });
      console.log(result);
      if (!result) return;

      inputCover.value = result?.images;
      inputTitle.value = result?.title;
      inputRelease.value = result?.year;
      inputDesc.value = result?.description;
      inputGenre.value = result?.genre;
      inputRate.value = result?.rating;
      inputRuntime.value = result?.runtime;
      inputDirector.value = result?.director;
      inputWriter.value = result?.writer;
      inputCast.value = result?.cast;
      inputLang.value = result?.language;
      inputId.value = result?.id;

      submitButton.classList.remove(...["bg-green-500", "text-black", "px-8", "py-2", "rounded-xl", "hover:bg-green-700", "duration-300", "transition-all"]);
      submitButton.classList.add("button-submit-edit");

      submitButton.innerText = "Update";

    } catch (error) {
      console.error("error:  ", {
        error,
      });
    }
  }

//   Fungsi untuk menambahkan data baru
  async function addNewFilm(payload) {
    try {
      const result = await createFilm({payload: payload});
      if (result?.code === 201) {
        alert("Berhasil")
        
        inputCover.value = "";
        inputTitle.value = "";
        inputRelease.value = "";
        inputDesc.value = "";
        inputGenre.value = "";
        inputRate.value = "";
        inputRuntime.value = "";
        inputDirector.value = "";
        inputWriter.value = "";
        inputCast.value = "";
        inputLang.value = "";

        window.location.reload()

      }
  }catch(error){
    console.log("Ada error :", {
        error,
    })
  }
}


// Fungsi untuk mengupdate data
async function handleUpdateFilmById(id, payload) {
    try {
    const result = await updateFilmById({ id, payload });

      if (!result) return;

      if (result?.code === 200) {
        alert("Berhasil mengupdate data");

        window.location.reload();
      }
    } catch (error) {
        console.log("Ada error :", {
            error,
        })
    }
}

// Fungsi untuk menampilkan data pada dashboard list
async function handleFilms(){
    try {
        const films = await getFilms()
        const filteredFilms = [...films]

        if (!films) return;

        inputSearch.addEventListener("keyup", (e) => {
            e.preventDefault();

        const searchKey = inputSearch.value.trim().toLowerCase();
        const filtered = filteredFilms.filter(
          (film) =>
            film.title.toString().toLowerCase().includes(searchKey) ||
            film.year.toString().toLowerCase().includes(searchKey) ||
            film.genre.toString().toLowerCase().includes(searchKey) ||
            film.language.toString().toLowerCase().includes(searchKey)
        );

        renderFilms(filtered)
        })
        // console.log(films)

        renderFilms(films)
    } catch (error) {
        console.log("Ada error :", {
            error,
        })
    }
}
handleFilms()

function renderFilms(films) {
    filmContent.innerHTML = "";

    films.forEach((film) => {
        const filmContainer = generateElement({
            tag: "div",
            id: `film-${film?.id}`,
            className: "w-11/12 mx-auto text-white flex items-center my-8 p-4 bg-slate-700 rounded-xl border border-red-300",
          });
    
          // Kita buat element pembungkus section kiri
          const leftSection = generateElement({
            tag: "div",
            className: "block pr-10 w-full ",
          });
    
          // Buat element h4 untuk menampilkan pertanyaan
          const titleElement = generateElement({
            tag: "h4",
            id: "filmtitle",
            value: film.title,
          });
    
          // Buat element p untuk menampilkan jawaban
          const yearElement = generateElement({
            tag: "p",
            id: "filmyear",
            value: film.year,
          });
    
          // Kita buat juga element untuk quiz category nya
          const genreElement = generateElement({
            tag: "p",
            id: "filmgenre",
            value: film.genre,
          });

          const langElement = generateElement({
            tag: "p",
            id: "filmlang",
            className: "w-1/2",
            value: film.language,
          })
    
          // Sekarang kita masukan element h4 dan p ke dalam section kiri
          leftSection.append(...[titleElement, yearElement, genreElement]);
    
          // Dan kita buat element pembungkus section kanan
          const rightSection = generateElement({
            tag: "div",
            className: "block pl-10 w-1/3 block",
          });
    
          // Buat element button untuk edit
          const buttonEdit = generateElement({
            tag: "button",
            id: "button-edit",
            className: "btn btn-edit",
            elementHTML: Icon.update,
          });
    
          buttonEdit.addEventListener("click", async (e) => {
            e.preventDefault();
    
            handleShowFilmById(film.id);
          });
    
          // Buat element button untuk delete
          const buttonDelete = generateElement({
            tag: "button",
            id: "button-delete",
            className: "btn btn-delete",
            elementHTML: Icon.delete,
          });
    
          // Ketika tombol delete di klik maka akan menjalankan fungsi handleDeleteQuestion
          buttonDelete.addEventListener("click", async (e) => {
            e.preventDefault();
    
            handleDeleteFilm(film.id);
          });
    
          // Sekarang kita masukan element button edit dan delete ke dalam section kanan
          rightSection.append(...[buttonEdit, buttonDelete]);
    
          // Terakhir kita masukan semua element ke dalam container quiz
          filmContainer.append(
            ...[leftSection, langElement, rightSection]
          );
    
          filmContent.appendChild(filmContainer);
    })
}

submitButton.addEventListener("click", async (e) => {
    /**
     * e.preventDefault() adalah untuk mencegah
     * form mengirim data ke halaman lain
     */
    e.preventDefault();

    /**
     * Kita akan mengambil data dari inputan
     * Lalu value inputan tersebut akan kita masukkan ke dalam objek payload
     */
    const payload = {
      year: inputRelease?.value || "",
      title: inputTitle?.value || "",
      description: inputDesc?.value || "",
      images: inputCover?.value || "",
      rating: inputRate?.value || "",
      runtime: inputRuntime?.value || "",
      genre: inputGenre?.value || "",
      director: inputDirector?.value || "",
      writer: inputWriter?.value || "",
      cast: inputCast?.value || "",
      language: inputLang?.value || "",
    };

    if (inputId.value === "") {
      addNewFilm(payload);
    } else {
      handleUpdateFilmById(inputId.value, payload);
    }
  });

});
