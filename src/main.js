import About from "../components/About.js";
import Home from "../components/Home.js";
import Nav from "../components/Nav.js";

const $app = document.querySelector(".App");
const $nav = document.querySelector(".Nav");

const routes = {
  "/": Home,
  "/about": About,
};

$app.innerHTML = routes["/"].template();
$nav.innerHTML = Nav.template();

export const changeUrl = (requestedUrl) => {
    // history.pushState를 사용해 url을 변경한다.
    history.pushState(null, null, requestedUrl);
  
    // routes 배열에서 url에 맞는 컴포넌트를 찾아 main.App에 렌더링 한다.
    $app.innerHTML = routes[requestedUrl].template();
  };


  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("moveToCart")) {
      // Home 페이지의 버튼이 클릭된 경우
      changeUrl("/about");
    } else if (e.target.classList.contains("moveToHomePageBtn")) {
      // About 페이지의 버튼이 클릭된 경우
      changeUrl("/");
    }
  });

  window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
  }); // 뒤로가기