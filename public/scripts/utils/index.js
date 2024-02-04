export function generateRandomNumber(min = 1, max = 20) {
  const randomNumber = Math.floor(Math.random() * max);

  return randomNumber + min;
}

export function generateElement({
  tag,
  id,
  className,
  value,
  elementHTML,
  href,
  src,
}) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;
  if (elementHTML) element.innerHTML = elementHTML;
  if (tag === "a") element.href = href;
  if (tag === "img") element.src = src;

  return element;
}

export const Icon = {
  update: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pencil"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
      />
      <path d="M13.5 6.5l4 4" />
    </svg>
    `,
  delete: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-trash"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
    `,
};

// export const Details = {
//   content: `
  
//   <p>Title : <span id="filmtitle">${title}</span></p>
//   <p>Release : <span id="filmrelease"></span></p>
//   <p>Duration : <span id="filmduration"></span></p>
//   <p>Genre : <span id="filmgenre"></span></p>
//   <p>Director : <span id="filmdirector"></span></p>
//   <p>Writer : <span id="filmwriter"></span></p>
//   <p>Casts : <span id="filmcasts"></span></p>
//   <p class="mb-3">Language : <span id="filmlang"></span></p>
//   <div class="flex justify-center px-4 py-4 mb-2">
//     <a
//       class="text-base font-medium text-slate-950 bg-[#F8B319] px-12 py-3 rounded-full hover:shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out lg:px-20 lg:py-3"
//       >Watch</a
//     >
//   </div>
  
//   `,
// };
