function headerNavigation (){
    return `
            <nav class="header-navigation">
          <div class="navigation">
            <button class="arrow-left">
              <img src="src/assets/icons/small-left.png" alt="seta esquerda" />
            </button>
            <button class="arrow-right">
              <img src="src/assets/icons/small-right.png" alt="seta direita" />
            </button>
          </div>
          <div class="header-search">
            <img src="src/assets/icons/search.png" alt="" />
            <input
              id="search-input"
              maxlength="800"
              placeholder="O que você quer ouvir?"
              type="text"
             
            />
          </div>
          <div class="header-login">
            <button class="subscribe">inscreva-se</button>
            <button class="login">Entrar</button>
          </div>
        </nav>
    `
}