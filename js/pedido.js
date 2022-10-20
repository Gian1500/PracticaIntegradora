const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaCompra = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn= document.getElementById('vaciar-carrito')
const procesarPedidoBtn = document.getElementById('procesar-pedido');

var nombre = document.getElementById('nombreRecomendacion');
var imagen =  document.getElementById('imgRecomendacion');
var ciudad =  document.getElementById('ciudadRecomendacion');
const traerData = async()=>{
    const resp = await 
    fetch('https://randomuser.me/api/');
    const data = await resp.json();

    nombre.innerText = `${data.results['0'].name.first} ${data.results['0'].name.last}`;
    ciudad.innerText = `${data.results['0'].location.city}`;
    imagen.src = `${data.results['0'].picture.large}`;

  
}

traerData();
cargarEventos();

function cargarEventos (){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorageCompra());

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});

}
