class Footer extends HTMLElement {
    constructor() {
      super();
    }
//   https://www.instagram.com/dsaicoep/
// https://www.facebook.com/dsaicoep/
// https://www.linkedin.com/company/dsaicoep/
    connectedCallback() {
      this.innerHTML = `
      <footer class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container-fluid">
      <div class="collapse navbar-collapse" id="footerSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="https://www.linkedin.com/company/dsaicoep/"><img class="footer-img" src="images/linkedin.png"></img></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.facebook.com/dsaicoep/"><img class="footer-img" src="images/facebook.png"></img></a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="https://www.instagram.com/dsai_coep/"><img class="footer-img" src="images/instagram.png"></img></a>
         </li>
      </ul>
    </div>
      </div>
    </footer>
      `;
    }
  }
  
customElements.define('footer-comp', Footer);
  