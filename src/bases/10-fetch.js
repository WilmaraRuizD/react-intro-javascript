const apiKey = 'LDJMyYoo64x73a8eCK0m0Pm7UKMqCWe9';

/* const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
peticion.then( resp=>{
    resp.json().then(data=>{
        console.log(data)
    })
  
}) */
//promesa en cadena 
const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
 peticion
 .then(resp=>resp.json())
 .then( ({data})=>{
    const {url}=data.images.original
    console.log(url);

    const img=document.createElement('img');
    img.src=url;

    document.body.append(img);
 })

.catch(console.wa);
