const BASE_URL = "http://128.199.167.159/v1/idc";

export async function getFilmById({ id }){
  try {
    const response = await fetch(`${BASE_URL}/film/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function getFilms() {
  try {
    const response = await fetch(`${BASE_URL}/films`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function createFilm({ payload = payload }) {
  try {
    const response = await fetch(`${BASE_URL}/film`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function updateFilmById({ id = 1, payload = payload }) {
  try {
    const response = await fetch(`${BASE_URL}/film/${id}/edit`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function deleteFilmById({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/film/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}
