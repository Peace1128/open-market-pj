class Nav {
    template() {
      return `
      <div class="flex__between">
        <img src="./assets/Logo-hodu.png" alt="logo" width="124px" />
        <div class="search-area flex__between">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img src="./assets/icon-search.svg" alt="" />
        </div>
      </div>
      <nav class="flex__between link-area">
        <a class="flex__between moveToCart">
          <img src="./assets/icon-shopping-cart.svg" alt="shop cart" width="32px"/>
          <p>장바구니</p>
        </a>
        <a class="flex__between moveToLogin">
          <img src="./assets/icon-user.svg" alt="login" width="32px"/>
          <p>로그인 test</p>
        </a>
      </nav>
      `;
    }
  }
  export default new Nav();