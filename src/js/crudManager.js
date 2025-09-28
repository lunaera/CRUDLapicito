export default class CrudManager {
    constructor(urlBase) {
        this.apiUrl = urlBase;
    }

    async createData(nombreTabla, dataForm, nombreArchivo) {
        try {
            const response = await fetch(this.apiUrl + nombreArchivo + '.php',
                {
                    method: 'POST', // método de la petición
                    headers: { 'Content-Type': 'application/json' }, // tipo de contenido que se envía al servidor
                    body: JSON.stringify({ datosFormulario: dataForm, tabla: nombreTabla }) // convierte el objeto a un string formato JSON

                }
            );
            if (!response.ok) {
                throw new Error('Error del servidor HTTP: ' + response.status); // lanza un error si el archivo o ruta es incorrecto
            }
            return await response.json(); // devuelve la respuesta JSON del servidor con los datos
        } catch (error) {
            return { errorServer: 'Error al insertar los datos: ' + error.message }; // manejo de error con el servidor
        }
    }


    async readAllData(nombreTabla) {
        try {

            const response = await fetch(this.apiUrl + 'readAllData.php',
                {
                    method: 'POST', // método de la petición
                    headers: { 'Content-Type': 'application/json' }, // tipo de contenido que se envía al servidor
                    body: JSON.stringify({ tabla: nombreTabla }) // convierte un objeto en cadena JSON

                }
            );
            if (!response.ok) {
                throw new Error('Error del servidor HTTP: ' + response.status); // lanza un error si el archivo o ruta es incorrecto
            }
            return await response.json(); // devuelve la respuesta JSON del servidor con los datos
        } catch (error) {
            return { errorServer: 'Error al obtener los datos: ' + error.message }; // manejo de error con el servidor
        }
    }

    async updateData(nombreTabla, datos) { }
    async deleteData(nombreTabla, datos) { }

} 