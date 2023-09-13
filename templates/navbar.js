class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="navbar-img" src="./logos/CoEP.jpeg"></img><img class="navbar-img" src="./logos/DSAI.jpeg"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active" id="home">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item" id="team"> 
              <a class="nav-link" href="team2.html">Team</a>
            </li>
            <li class="nav-item" id="events">
               <a class="nav-link" href="events2021.html">Events</a>
             </li>
             <li class="nav-item" id="work">
               <a class="nav-link" href="work.html">Work</a>
             </li>
             <li class="nav-item" id="photo-gallery">
               <a class="nav-link" href="photoGallery2.html">Photo Gallery</a>
             </li>
          </ul>
        </div>
      </div>
    </nav>
    <script>

      `;
    }
  }

customElements.define('header-comp', Header);
  