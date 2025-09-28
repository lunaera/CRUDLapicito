//  endPoints.js es donde defines todas las funciones específicas que tu aplicación necesita. 

import CrudManager from "./crudManager.js";

const apiService = new CrudManager('./src/database/');

const createProduct = (dataForm) => apiService.createData('producto', dataForm, 'insertaProducto');
const selectAllProducts = () => apiService.readAllData('producto');
const selectAllCategoria = () => apiService.readAllData('categoria');
// UPDATE
// DELETE

export default {
    createProduct,
    selectAllProducts,
    selectAllCategoria
}
