import React from 'react'
import '../css/RegPersona.css'

const RegPersona = () => {
return (
    <div className='App'>
    <form>
    <label for="firstname2">Nombre</label>
    <input type="text" id="nombre" name="nombre"></input>

    <label for="firstname3">Rol</label>
    <select id="rol" name="rol">
    <option value="admin">Admin</option>
    <option value="normal">Normal</option>
    </select>

    <label for="firstname4">Direccion</label>
    <input type="text" id="firstname4" name="firstname4"></input>

    <label for="lastname1">Telefono</label>
    <input type="text" id="lastname1" name="lastname1"></input>

    <label for="email1">Correo</label>
    <input type="text" id="email1" name="email1"></input>

    <label for="lastname2">Contrasena</label>
    <input type="text" id="lastname2" name="lastname2"></input>

    <label for="email2">Estado Usuario</label>
    <select id="estadoUsuario" name="estado">
    <option value="A">A</option>
    <option value="B">B</option>
    </select>

    <label for="email2">Categoria</label>
    <select id="categoria" name="categoria">
    <option value="A">A</option>
    <option value="B">B</option>
    </select>

    <button type="submit">Registrar</button>
    </form>
</div>
)
}

export default RegPersona
