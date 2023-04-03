import { renderHeaderComponent } from "./header-component.js";

export function renderAddPostPageComponent({ appEl, user, goToPage}) {
  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="scc-row">
                    
                    <input
                    type="text"
                    id="scr-input"
                    class="input"
                    placeholder="Ссылка на фотографию"
                    />
      </div>
      <br/>
      <div class="form-row">
                    <input
                    type="text"
                    id="text-input"
                    class="textarea"
                    placeholder="Комментарий"
                    />
                </div>
      <br/>
      <button class="button" id="add-button">Добавить пост</button>
    </div>
  `;

  appEl.innerHTML = appHtml;

  const addButtonElement = document.getElementById('add-button');
  const imageElement = document.getElementById('scr-input');
  const textElement = document.getElementById('text-input');

  addButtonElement.addEventListener('click', () => {
    const newPost =
      {
        id: "1",
          imageUrl: imageElement.value,
          text: textElement.value,
          createdAt: new Date(),
          likes: 0,
          isLiked: false,
          user: {
            id: "gf",
            name: "Глеб Админ",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBU1pvapd3uB42CStKcS-yZmCrmrC_XSgUDrSYRS5Rw&s",
          },
      }
    console.log(newPost);
    })

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
    user,
    goToPage,
  });
}
