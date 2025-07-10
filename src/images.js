// utils/loadImages.js
let images = {};
function importAll(r) {
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);

    console.log(images)
  });
}

importAll(require.context('../assets/logo', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));



export default images;






