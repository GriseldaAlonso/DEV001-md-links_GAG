const { 
  pathExist,
  getAbsolutePath,
  isFileMd,
  isDirectory,
  searchFilesMd,
} = require('./functions.js')

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // variable que contendrá el arreglo de archivos md
  let files;
  // identificar si la ruta existe
  if (!pathExist(path)) {
    // si no existe la ruta, rechaza la promesa
    return reject(`Esta ruta no existe: ${path}`);
  } else {
    // chequear o convertir a ruta absoluta
    const pathAbsolute = getAbsolutePath(path)
    // chequear la ruta. Si este no es un directorio ni un md rechaza la promesa
    if (!isDirectory(pathAbsolute) && !isFileMd(pathAbsolute)) {
      return reject(`Esta ruta no es una carpeta ni un archivo md: ${pathAbsolute}`);
    } else {
      //función que lee el path buscando archivos md. Devuelve un array
      files = searchFilesMd(pathAbsolute);
      // si no contiene archivos md, rechazar la promesa
      if (files.length === 0) {
        return reject(`Esta ruta no contiene archivos md: ${pathAbsolute}`)
      }
    }
    
  }
});

module.exports = {
  mdLinks,
};
