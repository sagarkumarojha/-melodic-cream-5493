function navbar(){
    return `        <nav class="main-nav">
    <div class="nav-content">
      <a href="#" id="main-logo"></a>
      <div id="searchAndLogin">
          <input type="text" placeholder="Search" id="nav-search"></input>
      
          <button class="sign-in_btn">
            <p id="signin-btn_text">
              <i class="fa-solid fa-user fa-sm"></i> Sign In
            </p>
          </button>
      </div>

    </div>
  </nav>`
}

export {navbar}