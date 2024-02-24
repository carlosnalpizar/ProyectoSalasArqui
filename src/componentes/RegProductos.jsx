import React from 'react'
import '../css/RegProducto.css'

const RegProductos = () => {
return (
<div className='App'>
    <form>
    <label>Codigo del Producto</label>
    <input type="text" id="firstname1" name="idProducto"></input>

    <label>Nombre</label>
    <input type="text" id="firstname2" name="nombreProducto"></input>

    <label>Cantidad</label>
    <input type="number" id="lastname1" name="cantidad"></input>

    <label >Estado del Producto</label>
    <select id="estadoProducto" name="estadoProducto">
    <option value="A">A</option>
    <option value="B">B</option>
    </select>

    <label >Precio</label>
    <input type="text" id="lastname2" name="precio"></input>

    <label >Ubicacion</label>
    <select id="ubicacionProd" name="ubicacionProd">
    <option value="A">A</option>
    <option value="B">B</option>
    </select>

    <label >Fecha de ingreso</label>
    <input type="date" id="firstname3" name="fechaIngreso"></input>

    <label >Fecha de egreso</label>
    <input type="date" id="firstname4" name="fechaEgreso"></input>

    <button type="submit">Registrar</button>
</form>
</div>
)
}

export default RegProductos
