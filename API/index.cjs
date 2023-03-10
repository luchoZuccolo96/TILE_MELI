const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const folderPath = './data/INFOCONTROL';

app.get('/v1/infocontrol/employee', (req, res) => {
// obtener los datos de los empleados
  const results = [];

  // buscar archivos json que empiecen con empleado en todas las subcarpetas de infopcontrol
  const buscar = (dir) => {
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
      file = path.resolve(dir, file);

      const stat = fs.statSync(file);

      if (stat && stat.isDirectory()) {
        if (path.basename(file).startsWith('empleado')) {
          // si la carpeta empieza con empleado llama a la función de buscar para buscar json que empiecen con empleado
          buscar(file);
        } else {
          // si la carpeta no empieza con empleado llama a la función de buscar para buscar otras subcarpetas (nose si hace falta)
          buscar(file);
        }
      } else {
        // si es un json y empieza con empleado lo agrega al array de resultados
        if (path.extname(file).toLowerCase() === '.json' && path.basename(file).startsWith('empleado')) {
          const fileData = fs.readFileSync(file, 'utf8');
          const jsonData = JSON.parse(fileData);
          if (Array.isArray(jsonData)) {
            // si es array lo agrega al array de resultados
            results.push(...jsonData);
          } else {
            // si es objeto lo agrega al array de resultados, sino me daba error nose xq
            results.push(jsonData);
          }
        }
      }
    });
  };

  buscar(folderPath);

  res.send(results);
});

app.get('/v1/infocontrol/status', (req, res) => {
// obtener los datos de los empleados
  const results = [];

  // buscar json que empiecen con estado
  const buscar = (dir) => {
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
      file = path.resolve(dir, file);

      const stat = fs.statSync(file);

      if (stat && stat.isDirectory()) {
        // si es una carpeta llama a la función buscar
        buscar(file);
      } else {
        // si es un json y empieza con estado lo agrega al array de resultados
        // desp funciona igual que para employee
        if (path.extname(file).toLowerCase() === '.json' && path.basename(file).startsWith('estado')) {
          const fileData = fs.readFileSync(file, 'utf8');
          const jsonData = JSON.parse(fileData);
          if (Array.isArray(jsonData)) {

            results.push(...jsonData);
          } else {
            results.push(jsonData);
          }
        }
      }
    });
  };
  
  buscar(folderPath);

  res.send(results);
});

app.listen(3000, () => console.log('Servidor en puerto localhost:3000'));
