import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'list', 'input' ]

  connect() {
    console.log('Hello from movies_controller.js')
    // console.log(this.testTarget)
    this.fetchOmdbAPI("star wars");
  }

  displayMovies(movies) {
    const list = this.listTarget
    list.innerHTML = "";
    movies.forEach((movie) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class='list-inline-item'>
          <img src="${movie.Poster}" height=100 alt="" />
        </li>`);
    });
  };
  
  fetchOmdbAPI(keyword) {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const movies = data.Search;
        this.displayMovies(movies);
      })
  };
  
  searchMovie(event) {
    const input = this.inputTarget
    event.preventDefault();
    const keyword = input.value;
    this.fetchOmdbAPI(keyword);
  }
}