let animales = (() => { 
    const url = "http://localhost:5500/animales.json" 
    
    const getdata = async  () =>  {
        const res = await fetch (url);
        const data = await res.json();
        return data;
    } ;

    return { getdata };
})();

export default animales;