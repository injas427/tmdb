const fs = require('fs');
const path = require('path');

console.log('\x1b[0;32m=========== Initializing Project ===========\x1b[0m');

const jsonData = {
  secure: {
    TMDB_API: '',
  },
  public: {
    TMDB_BASE_URL: 'https://api.themoviedb.org/3/',
    TMDB_IMAGE_URL: 'https://image.tmdb.org/t/p/',
  },
};

const json_path = './env/keys.development.json';

const filePath = path.join(__dirname, json_path);

fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
  if (err) {
    console.error('\x1b[0;31mError creating JSON file:\x1b[0m', err);
  } else {
    console.log(
      '\x1b[0;32m=========== Project Initializing Done ===========\x1b[0m',
    );
    console.log(
      `\x1b[0;36m=========== Please update your API key at ${json_path}  ===========\x1b[0m`,
    );
  }
});
