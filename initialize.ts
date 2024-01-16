const fs = require('fs');
const path = require('path');

console.log("=========== Initializing Project ===========");


const jsonData = {
  "secure": {
    "TMDB_API": ""
  },
  "public": {
    "TMDB_BASE_URL": "https://api.themoviedb.org/3/",
    "TMDB_IMAGE_URL": "https://image.tmdb.org/t/p/"
  }
}

const json_path = "./env/keys.development.json"

const filePath = path.join(__dirname, json_path);

fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error('Error creating JSON file:', err);
  } else {
    console.log("=========== Project Initializing Done ===========");
  }
});
