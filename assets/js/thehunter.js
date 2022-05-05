import { addHunter, showHunter } from "./utils/function.js";

const db = [
    {
        hunter: 'Justin',
        animal: 'Gnu',
        distance:'458,73',
        date:'31/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Búfalo',
        distance:'444,34',
        date: '30/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Órix',
        distance:'429,33',
        date: '30/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Órix',
        distance:'426,36',
        date: '31/12/2021'
    },
    {
        hunter:'Davi',
        animal: 'Órix',
        distance:'425,53',
        date: '30/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Órix',
        distance:'424,68',
        date: '30/12/2021'
    },
    {
        hunter:'Davi',
        animal: 'Órix',
        distance:'424,68',
        date: '30/12/2021'
    },
    {
        hunter:'Justin',
        animal: 'Búfalo',
        distance:'420,79',
        date: '29/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Gnu',
        distance:'416,70',
        date: '29/12/2021'
    },
    {
        hunter:'Samuel',
        animal: 'Gnu',
        distance:'416,70',
        date: '30/12/2021'
    }
];

showHunter(db);

console.log(db);