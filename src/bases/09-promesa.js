import { getHeroeById2, getHeroeByOwmer } from './08-impor-expor.js'

//promesas Asincronas donde resolve,reject son parametros por convencion 
/* const promesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // console.log('2 segundos despues')
       // resolve();
       const p1=getHeroeById2(2);
       //console.log(heroe);
       resolve(p1)
       //reject('No se puede encontrar el heroe')


    },2000)
})

promesa.then((heroe)=>{
    console.log('Then de la promesa',heroe)//para ver el valor de la variable al lado de un comentario uso (,)en vez de +
}).catch(err=>console.warn(err));///warn es un mensaje de advertencia  */

const getHeroeByAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues')
            // resolve();
            const p1 = getHeroeById2(id);
            //console.log(heroe);
            if (p1) { resolve(p1) }
            else{
            reject('No se puede encontrar el heroe')
        }

        }, 2000)
    });

}

getHeroeByAsync(1).then(console.log)
    .catch( console.warn)
