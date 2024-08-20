<template>
  <footer>
    <ul class="footer-left">
      <li>
        <router-link to="/" class="direccion">
          <div class="logo">
            <img src="@/assets/logoamarillo.png" alt="logo" />
            <h1>Thot<span>ex</span></h1>
          </div>
        </router-link>
      </li>
      <li>      
        <label class="mUser" @click="showDialog">Manual de usuario</label>
      </li>
      <li>
        <a @click="scrollToPQR" class="mUser">Contactanos(PQRS)</a>
      </li>
      <li>
        <a @click="scrollToFAQs" class="mUser">Preguntas frecuentes</a>
      </li>
    </ul>

    <div class="informacion">
      <div class="redes-contenedor">
        <nav class="redes">
          <a href="https://www.facebook.com/profile.php?id=61556720878564" target="_blank" rel="noreferrer" class="button-side">
            <IconifyIcon class="iconos" icon="streamline:computer-logo-facebook-2-media-facebook-social" color="white" width="35px" height="20px"></IconifyIcon>
          </a>
          <a href="https://twitter.com/Thotex223715" target="_blank" rel="noreferrer" class="button-side">
            <IconifyIcon class="iconos" icon="ph:x-logo" color="white" width="35px" height="20px"></IconifyIcon>
          </a>
          <a href="https://www.tiktok.com/@thotexonline" target="_blank" rel="noreferrer" class="button-side">
            <IconifyIcon class="iconos" icon="ph:tiktok-logo" color="white" width="35px" height="20px"></IconifyIcon>
          </a>
          <a href="https://www.instagram.com/thopage37/" target="_blank" rel="noreferrer" class="button-side">
            <IconifyIcon class="iconos" icon="ph:instagram-logo" color="white" width="35px" height="20px"></IconifyIcon>
          </a>
        </nav>
      </div>
    </div>
    <MyDialog 
      v-model:modelValue="isDialogVisible"
      image="https://i.imgur.com/1nUVY6B.png"
      title="Manual de Usuario"
      content="Thotex, es un software para la administración de pequeñas o medianas empresas, facilitando algunas de las principales tareas a nivel contable que un negocio pueda presentar, como lo son: la factura electrónica,
      gestión de la nómina, documento soporte, contabilidad, cartera, cotizaciones, inventarios y más, permitiendo facilidad en el pago.
      El siguiente manual, presenta las funcionalidades de la aplicación Thotex. Las formas de acceder a la plataforma, así como las formas de usar sus principales funciones."
    >
    <template #subtitle>
      <h3>Introducción</h3>
    </template>
    <template #additionalContent>
      <img src="https://i.imgur.com/fzPMijs.png" alt="Image" />
      <h3>Acceso a la aplicación</h3>
      <p class="manual">En este apartado, puede encontrar los botones de ingreso a la aplicación o de registro si es la primera vez que se intenta ingresar en la parte superior derecha.</p>
      <img src="https://i.imgur.com/b94RU4N.png" alt="Image" />
      <p class="manual">En la parte superior izquierda, por otro lado, se encuentran los botones de inicio,la sección conócenos, muestra la visión y misión que tiene thotex como plataforma, así como las personas que desarrollaron la plataforma. La sección de precios, finalmente, muestra los planes disponibles que maneja la plataforma.
      Además, en la parte inferior derecha, tendrá acceso a las redes sociales y la forma de contactar a thotex por su correo electrónico. Las redes sociales disponibles son facebook, X, tiktok e instagram.
      </p>
      <img src="https://i.imgur.com/eUysPSh.png" alt="Image" /> 
      <p class="manual">Para ingresar a la plataforma, basta con haberse registrado previamente en el botón presentado anteriormente, seleccionando esta opción aparecerá una nueva ventana que se muestra en la figura, se muestra un formulario donde el usuario tiene que registrar su información personal. Una vez registrado, se puede acceder a la plataforma por medio del botón ingresar, donde se solicita el correo electrónico, así como la contraseña registrada anteriormente. </p>
      <img src="https://i.imgur.com/ICMgG2D.png" alt="Image" />
      <h3>Nomina</h3>
      <p class="manual">
        La gestión de nómina, involucra la creación de los empleados vinculados a la empresa, así como el registro del trabajo llevado a cabo por cada uno de ellos. La plataforma divide estos dos apartados en dos secciones llamados gestión de empleados, que permite la creación de los empleados solicitando los datos básicos del empleado como nombre, correo electrónico, entre otros además de los datos relacionados al cargo del empleado como la fecha de ingreso, el nombre de su cargo y el salario devengado. La sección de nómina es visible en la figura.
      </p>
      <img src="https://i.imgur.com/NynPvb3.png" alt="Image" />
      <h3>Ventas</h3>
      <p class="manual">
        La sección de ventas se distribuye en tres subsecciones, estas son: registrar venta, en donde se creará una factura para una venta hecha. Esta factura solicitará unos datos en un formulario referentes a la venta. El segundo apartado está presente para visualizar las ventas registradas, llamado historial de ventas. Finalmente, estadísticas de venta donde puede visualizar dos gráficas referentes a las ventas.
      </p>
      <img src="https://i.imgur.com/w9j0bvx.png" alt="Image" />
      <img src="https://i.imgur.com/nfAk24S.png" alt="Image" />
      <h3>Compras</h3>
      <p class="manual">
        Similar al módulo de ventas, las compras se dividen en tres secciones, el registro con un formulario similar al de ventas donde se podrán registrar las compras realizadas a algún proveedor. El historial de compras, que reflejan las compras realizadas y las estadísticas de compras, permitiendo visualizar las compras por medio de gráficos.
      </p>
      <img src="https://i.imgur.com/h248Rr2.png" alt="Image" />
      <h3>Inventario</h3>
      <p class="manual">
        Esta sección permite la creación y revisión de existencias de los productos comercializados que tenga el negocio. Para lo primero, se dispone el botón registrar productos, figura 7, aquí, el usuario registra en un formulario el nombre, la cantidad de dicho producto, el precio, así como la empresa y la región desde donde se comercializa.
      </p>
      <img src="https://i.imgur.com/Kno3cg5.png" alt="Image" />
      <h3>Terceros</h3>
      <p class="manual">
        En esta sección, se registran todos aquellos que se quieran vincular a la plataforma pero que no van a tener acceso o control sobre. Esta pestaña, hace referencia a todos los clientes y proveedores que el usuario desee registrar para tener acceso directo a ellos para generar facturas que necesiten la información del cliente sin digitar los datos cada vez que el cliente genere una venta. Del mismo modo, se puede registrar al proveedor para contactarlo de una forma más rápida y tener un mayor control sobre los productos que provengan de dicho proveedor.
      </p>
      <img src="https://i.imgur.com/sLQj5bt.png" alt="Image" />
      <h3>Calendario</h3>
      <p class="manual">
        El calendario, está destinado para que el usuario cree sus eventos y registre aquellas actividades relevantes en el tema contable que pueda tener un negocio, como por ejemplo el pago de impuestos como el ICA, o declaraciones de renta, así como el pago a proveedores o actividades que pueda tener el negocio. 
      </p>
      <img src="https://i.imgur.com/Nyl0pD3.png" alt="Image" />
    </template>
    
    </MyDialog>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyDialog from '@/components/ui/MyDialog.vue';

const isDialogVisible = ref(false);

function showDialog() {
  isDialogVisible.value = true;
}

function scrollToPQR() {
  const element = document.getElementById('pqrFormSection');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToFAQs() {
  const element = document.getElementById('pqrFormFAQS');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: $custom-blue;
  padding: 10px 0;
  z-index: 3;
  flex-wrap: wrap; // Permite que los elementos se ajusten en dispositivos móviles
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.direccion {
    text-decoration: none;
}

.informacion {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  background-color: $custom-blue;
}

.redes-contenedor {
  display: flex;
  justify-content: center;
}

.redes {
  display: flex;
}

label {
  margin-bottom: 10px;
  color: white;
  cursor: pointer; // Añade un cursor pointer para el label que abre el modal
}

.button-side {
  background-color: #4D6FB3;
  width: 35px;
  padding: 2px;
  display: grid;
  border-radius: 20%; 
  margin: 0 5px; // Espaciado entre los iconos
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  width: 220px;
}

h1 {
  color: white;
  margin-left: 10px;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }

  .logo {
    justify-content: center;
  }

  .informacion {
    align-items: center;
    width: 100%;
  }

  .redes {
    justify-content: center;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    font-size: 18px;
  }

  .button-side {
    width: 30px;
    height: 30px;
  }
}
.manual{
  text-align: justify;
}

.mUser{
  text-decoration: underline;
  color: white;
}
.mUser:hover {
  color: #FFD700; /* Cambia el color al pasar el mouse */
  font-weight: bold; /* Cambia el peso de la fuente */
  transform: scale(1.1); /* Aumenta el tamaño del texto */
  cursor: pointer;
}
</style>

