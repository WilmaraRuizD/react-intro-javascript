
const getImagen=async()=>{

   try{
    const apiKey = 'LDJMyYoo64x73a8eCK0m0Pm7UKMqCWe9';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data}= await resp.json();

    const {url}=data.images.original;
    console.log(url)

    const img=document.createElement('img');
    img.src=url;

    document.body.append(img);
   }catch(err){
    console.log(err)
   }
}


getImagen()

