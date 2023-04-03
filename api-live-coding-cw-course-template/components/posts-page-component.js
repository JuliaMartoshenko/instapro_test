import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";

const dateDifference = (date) => {
  const nowDate = new Date();
  const timeDiff = nowDate.getTime() - date.getTime()
  const hoursDiff = Math.ceil(timeDiff/1000/3600);
  return hoursDiff;

}

export function renderPostsPageComponent({ appEl, user, goToPage, posts }) {

  
  const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>

               <div>${posts.map((post) => `
               <div class="image-container">
                  <img
                  class="photo-image"
                  src=${post.user.imageUrl}
                  />
                  ${post.user.name}
                </div> 
               
                <br/>
                <div class="image-container">
                  <img
                  class="photo-image"
                  src=${post.imageUrl}
                  />
                </div>
              <br/>
              <button class="button" id="add-button">Лайк</button>
              Нравится: никому
              <br/>
              ${post.user.name}: ${post.text}
              <br/>
              ${dateDifference(post.createdAt)} часов назад
              `
              )}</div>
              
              </div>`;

  appEl.innerHTML = appHtml;
  console.log(posts);

  renderHeaderComponent({
    user,
    element: document.querySelector(".header-container"),
    goToPage,
  });
}
