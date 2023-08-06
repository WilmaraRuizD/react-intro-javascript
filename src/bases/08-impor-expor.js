//formas de exportar e importar 
// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes.js';
// console.log( owners );
        
 //console.log (heroes);

/*  funcion larga de metodo find();
    const getHeroeById=(id)=>{
    return heroes.find((heroes) =>{
        if(heroes.id===id ){
            return true;
        }else{
            return false;
        }})
    } */

//esto se puede reducir a 

    const getHeroeById=(id)=>{
    return heroes.find((heroes) =>heroes.id===id);
    }

  //  console.log(getHeroeById(2));

 export const getHeroeById2=(id)=> heroes.find((heroes) => heroes.id===id);

  //  console.log(getHeroeById2(3))

  export  const getHeroeByOwmer=(owner)=> heroes.filter((heroes) => heroes.owner===owner);

//console.log(getHeroeByOwmer('DC'))






