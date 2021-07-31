const fs = require("fs");
const path = require("path");

const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");

const OLD_PHOTOS_DIR = './Photos'
const NEW_PHOTOS_DIR = './Photos/Edited'
const LOGO = './logo.png';

function run(x_POS, y_POS) {
  fs.readdir(OLD_PHOTOS_DIR, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file) => {
      let oldImage = path.join(OLD_PHOTOS_DIR, file);

      fs.stat(oldImage, (error, stat) => {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }

        if (stat.isDirectory()) {
          return;
        }

        mergeImages(
          [
            { src: oldImage, x: 0, y: 0 },
            { src: LOGO, x: x_POS, y: y_POS, opacity: 0.8 },
          ],
          {
            Canvas: Canvas,
            Image: Image,
            width: 640,
            height: 640,
          }
        ).then((b64) => {
          let buffer = new Buffer.from(b64.split(",")[1], "base64");
          fs.writeFile(
            `${NEW_PHOTOS_DIR}/${oldImage.slice(7)}`,
            buffer,
            (err) => {
              if (err) console.error(err);
            }
          );
        });
      });
    });
  });
}


module.exports = run;