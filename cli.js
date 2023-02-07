#!/usr/bin/env nodo

const { mdLinks } = require('./index.js');
const { statLinks, statAndValidateLinks } = require('./functions')

const route = process.argv[2]
const opt = process.argv;
const validate = opt.includes('--validate');
const stats = opt.includes('--stats');


mdLinks(route, { validate })
  .then((res) => {
    if (validate && stats) {
      console.log(statAndValidateLinks(res))
    } else if (!validate && stats) {
      console.log(statLinks(res));
    } else if (validate && !stats) {
      console.log(res);
    } else if (!validate && !stats) {
      console.log(res);
    }
  })
  .catch((error) => {
    console.log(error);
  });
