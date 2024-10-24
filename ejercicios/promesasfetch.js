function obtenerNoticias() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
        .then(respuesta => respuesta.json()) // Convierto mi respuesta en un objeto JSON
        .then(data => {
            // console.log('Datos obtenidos: ', data);
            for (let i = 0; i < data.results.length; i++) {
                console.log('Nombre ' + data.results[i].name);
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

obtenerNoticias();