import axios from 'axios';

const MY_API_KEY = '33447943-79d2196749f400a54d8eaf5fb';
const ENDPOINT = 'https://pixabay.com/api/?key=';
// const axios = require('axios');

export default class ImgApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
    this.countImg = 0;
  }

  async AxioSearch() {
    return await axios
      .get(
        `${ENDPOINT}${MY_API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.queryPage}`
      )
      .then(response => {
        if (response.data.totalHits === 0) {
          throw new Error(response.statusText);
        }

        console.log(response.data.totalHits);
        return response.data;
      })
      .then(data => {
        this.incrementPage();
        console.log(data);
        return data;
      });
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
