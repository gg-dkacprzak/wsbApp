export function Navigation() {
    return `
  <div class="container-fluid">
      <a class="navbar-brand" href="http://127.0.0.1:5173/">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              O nas
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="http://127.0.0.1:5173/pages/o-nas.html">O firmie</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:5173/pages/oferta.html">Oferta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:5173/pages/promocje.html">Promocje</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
`
}