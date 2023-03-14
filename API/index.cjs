const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const folderPath = './data/INFOCONTROL';
const Employee = require('./DTOs/Employee.cjs');
const Status = require('./DTOs/Status.cjs');

let employees = [];
let status = [];

app.get('/v1/infocontrol/employee', (req, res) => {
// obtener los datos de los empleados
  // vaciar la lista
  employees = [];

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
            jsonData.forEach((employeeData) => {
              const employee = new Employee(
                employeeData.PersonNumber, 
                employeeData.ReportstoManager, 
                employeeData.HomeBusinessStructureLevel1, 
                employeeData.HomeBusinessStructureLevel2, 
                employeeData.HomeBusinessStructureLevel3, 
                employeeData.HomeBusinessStructureLevel4, 
                employeeData.HomeBusinessStructureLevel5, 
                employeeData.HomeBusinessStructureLevel6, 
                employeeData.HomePrimaryJob, 
                employeeData.HomeLaborCategoryLevel1, 
                employeeData.ExecutionID
                );
              employees.push(employee);
            });
          } else {
            // si es objeto lo agrega al array de resultados, sino me daba error nose xq
            const employee = new Employee(
              jsonData.PersonNumber, 
              jsonData.ReportstoManager, 
              jsonData.HomeBusinessStructureLevel1, 
              jsonData.HomeBusinessStructureLevel2, 
              jsonData.HomeBusinessStructureLevel3, 
              jsonData.HomeBusinessStructureLevel4, 
              jsonData.HomeBusinessStructureLevel5, 
              jsonData.HomeBusinessStructureLevel6, 
              jsonData.HomePrimaryJob, 
              jsonData.HomeLaborCategoryLevel1, 
              jsonData.ExecutionID
              );
            employees.push(employee);
          }
        }
      }
    });
  };

  buscar(folderPath);

  res.send(employees);
});

app.get('/v1/infocontrol/status', (req, res) => {
// obtener los datos de los empleados
  // vaciar la lista
   status = [];

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
            // si es array lo agrega al array de status
            jsonData.forEach((statusData) => {
              const stat = new Status(
                statusData.ID,
                statusData.Fecha, 
                statusData.Estado, 
                statusData.Transacciones, 
                statusData.ExecutionID, 
                statusData.TipoAccion
                );
            status.push(stat);
            });
          } else {
            // si es objeto lo agrega al array de status
            const stat = new Status(
              jsonData.ID,
              jsonData.Fecha, 
              jsonData.Estado, 
              jsonData.Transacciones, 
              jsonData.ExecutionID, 
              jsonData.TipoAccion
              );
          status.push(stat);
          };
        }
      }
    });
  };
  
  buscar(folderPath);

  res.json(status);
});

app.listen(3000, () => console.log('Servidor en puerto localhost:3000'));