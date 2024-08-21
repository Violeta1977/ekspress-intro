import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

// studentsRouter.get('/', (req, res) => {
//     // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//     // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in
//     // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//     //  Object.value grazina masyva, jei nedomina objekto raktai
//     // const studentsName = Object.values(students).map(students => students.name)
//     let studentNames = [];

//     for (let key in students) {
//         {
//             studentNames.push(students[key].name);
//         }
//     }
//     return res.send(`Mokosi ${studentNames.length} studentai: ${studentNames.join(', ')}`)
// });

// studentsRouter.get('/:studentName', (req, res) => {
//     const studentName = req.params.studentName.toLocaleLowerCase();
//     const student = students[studentName];
//     if (student) {
//         const isMarriedStatus = student.isMarried ? 'vedes' : 'ne vedes';

//         return res.send(`Studentas, vardu ${student.name}
//         yra ${student.age} metu amziaus ir yra  ${isMarriedStatus}.`);

//     } else {
//         return res.send(`Studento "${req.params.studentName}" vardu  nėra.`);
//     }
// });

studentsRouter.get('/', (req, res) => {
    const names = Object.values(students).map(student => student.name);

    if (names.length === 0) {
        return res.send(`Mokosi ${names.length} studentai: niekas.`);
    }

    if (names.length === 1) {
        return res.send(`Mokosi ${names.length} studentai: ${names[0]}.`);
    }

    const str = names.slice(0, -1).join(', ') + ' ir ' + names.at(-1);
    return res.send(`Mokosi ${names.length} studentai: ${str}.`);
});

studentsRouter.get('/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    let student = null;

    for (const key in students) {
        if (key.toLowerCase() === name) {
            student = students[key];
            break;
        }
    }

    if (student) {
        return res.send(`Studentas, vardu ${student.name} yra ${student.age} metu amziaus ir ${student.isMarried ? 'yra' : 'nera'} vedes.`);
    } else {
        return res.send(`Studento, vardu ${req.params.name} nera.`);
    }
});

// -----------------------------
/*

/students
Mokosi 4 studentai: Jonas, Maryte, Petras ir Ona.

/students/jonas
/students/Jonas
/students/JoNas
/students/JONAS
Studentas, vardu Jonas yra 99 metu amziaus ir yra vedes.

/students/chuck
Studento, vardu chuck nera.

/students/Chuck
Studento, vardu Chuck nera.

*/