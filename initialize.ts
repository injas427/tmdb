const fs = require('fs');
const path = require('path');

const jsonData = {
  "secure": {
    "TMDB_API": ""
  },
  "public": {
  }
}

const json_path = "./env/keys.development.json"

const filePath = path.join(__dirname, json_path);

console.log(filePath);


fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error('Error creating JSON file:', err);
  } else {
    console.log('JSON file created successfully at', filePath);
  }
});
