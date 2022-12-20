const tablausers = document.getElementById("tabla-users");
const table = document.createElement("table"); 
table.setAttribute("border","1");
tablausers.append(table);

let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
// botón para borrar un registro
const btnBorrar = document.createElement("button");
btnBorrar.textContent = "Borrar registro";
tablausers.append(btnBorrar);

const encabezado = document.createElement("thead");
for(const prop in users[0]){
  const th = document.createElement("th");
  th.textContent = prop.toUpperCase();
  th.addEventListener("click", (event) => {
    ordenarProductosPorAtributo(prop);
    table.innerHTML = "";
    table.append(encabezado);
    construirCuerpo();
    console.log(ordenarProductosPorAtributo(prop));
  })
  encabezado.append(th);
}

table.append(encabezado);
construirCuerpo()

function construirCuerpo(){
  for (const index in users){
    const tr = document.createElement("tr");
      for(const prop in users[index]){
        const td = document.createElement("td");
        td.textContent = users[index][prop]
        tr.append(td)
      }
    table.append(tr);
  }
}

function ordenarProductosPorAtributo(atributo){
  if (typeof users[0][atributo] === "string"){
      return users.sort((a,b) => {return a[atributo].localeCompare(b[atributo])});
  } else if (typeof users[0][atributo] === "number"){
      return users.sort((a,b) => {return a[atributo] - b[atributo]});
  } else {
      return "Por favor utiliza un atributo válido";
  }
}

/* eliminacion de datos */
btnBorrar.addEventListener("click", eliminarRegistro);

function eliminarRegistro(){
  let id = prompt("Ingrese el id del registro que desea borrar:");
  if(id){
    let registro = users.find(user => user.id == id);
    if(registro) {
      if (confirm("¿Está seguro de que desea eliminar el registro?")){
        users = users.filter(user => user.id != id);
        table.innerHTML = "";
        table.append(encabezado);
        construirCuerpo();
        alert("Registro eliminado exitosamente");
      }
    } else {
      alert("No se encontró ningún registro con ese id");
    }
  }
}









// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso deberia volver a la pagina inicial sin que se haya borrado ningun registro.













// ADICIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
 
// OPCIONAL: Crear un selector que permita filtrar los datos por fecha.

 

