<template> 
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <meta charset=”utf-8”>
        <link rel="icon" type="image/png" href="../assets/LogoThotex.png">
        <meta name="viewport" content="width=device-width">
        
        

    </head>

    <body>
        <div>
            <SideBarLeft></SideBarLeft>
        </div>
        <main>
            <header>
                <h1>Perfil</h1>
            </header>
            <form method="post" action="/" class="formulario">

                <section class="encabezado">
                    <h2>Información personal</h2>
                    <h2>Información de contacto</h2>
                </section>
               
                
                <section class="etiqueta1">
                    <label class="descripcion" >Rol</label>
                    <label class="descripcion" for="email">Email<span>*</span></label>

                </section>

                <section class="campo1">
                    
                    <select name="why" class="rol">
                        <option value="1">Independiente</option>
                        <option value="2">Empresa</option>  
                    </select>
                    
                    <input class="campo-entrada" type="email" id="email" name="email" required>

                </section>  

                <section class="etiqueta2">
                    <label class="descripcion" >Tipo de identificación</label>
                    <label class="descripcion" for="telefono">Teléfono</label>
                </section>

                <section class="campo2">
                    <div class="div-identificacion">
                        <section class="">
                            <select class="selec-identificacion">
                            <option value="1">Número identificación tributar</option>
                            <option value="2">xxxxxxxxx</option>  
                            </select>
                        </section>
                        <label class="descripcion" for="iden">Numero de indetificación<span>*</span></label>
                        <input class="campo-entrada" type="number" id="iden" name="iden" required>
                    </div>

                    <div>
                    
                    <input class="campo-entrada" type="tel" id="telefono" name="telefono" >
                    </div>

                </section>


                <div class="contenedor">

                    
                    
                    
                    <div>
                        <label class="descripcion" for="social">Razón social / Nombre completo</label>
                        <input class="campo-entrada" type="text" id="social" name="social">
                    </div>
                    
                    <div>
                        <label class="descripcion" for="ubi">Municipio / Departamento</label>
                        <input class="campo-entrada" type="text" id="ubi" name="ubi">
                    </div>
                

                <div>
                    <button type="submit" id="guardar">Guardar información</button>
                </div>
            </div>
            
            </form>
                


        </main>

    </body>
    
</template>

<script setup lang="ts">
    import SideBarLeft from '../components/SideBarLeft.vue';
</script>

<style>
body {
    background-color:rgb(211, 208, 203) ;
    font-family: "roboto";
    position: flex;
}

button {
    position: relative;
    background: #FCBB01;
    border: 0;
    border-radius: 13px;
    height: 35px;
    font-family: "roboto";
    font-weight: bold;
    margin-top: 200px;
    margin-bottom: 15px;
    left: 10px;
}

button:hover{
    background: #ffe6a1;
}

.formulario{
    position: absolute;
    border: 0; 
    background-color: white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    top: 10px;
    height: 85%;
    width: 90%;
    margin-left: 95px;
    margin-top: 65px;
    text-align: justify;
    
}
.campo-entrada{
    position: relative;
    left: 10px;
    display: flex;
    flex-direction: column; 
    border: 0 ;
    height: 20px;
    box-sizing: border-box;
    border-bottom: 2px solid black;                
    margin-bottom: 20px;
    width: 200px;
}

h2{
    margin-left: 10px;
    font-weight: bold;
    color: black;
    
}
.descripcion{
    color: #203B70;
    font-weight: bold;
    position: relative;
    left: 10px;
}
.div-rol{
    margin-left: 10px;
    margin-bottom: 10px;
}

.rol{
    width: 200px;
    height: 30px;
    border-radius: 3px;
    margin-left: 10px;
}
.rol:hover{
    background-color: #E6E3E5;
    
    }

.selec-identificacion{
    margin-left: 10px;
    margin-bottom: 10px;
    width: 200px;
    height: 30px;
}

.selec-identificacion:hover{
    background-color: #E6E3E5;
}

.encabezado{
    display: flex;
    justify-content: start;
    gap: 200px;
}

.etiqueta1{
    display: flex;
    justify-content: start;
    gap: 420px;
}

.campo1{
    display: flex;
    justify-content: start;
    gap: 235px;
}

input[type=number] {
  -moz-appearance: textfield;
  }
  
  input[type=number]::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .etiqueta2{
    display: flex;
    justify-content: start;
    gap: 285px;
  }

  .campo2{
    display: flex;
    justify-content: start;
    gap: 232px;
  }
</style>