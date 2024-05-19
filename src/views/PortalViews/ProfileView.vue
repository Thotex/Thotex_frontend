<template>
        <main>
            <h1 class="titulo">Perfil</h1>
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
         
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
main {
    font-family: "roboto";
    height: 100%;
    width: 80%;
    position: absolute;
    top: 0;
    left: 80;
    text-align: left;
    align-items: start;
}

button {
    position: relative;
    background: #FCBB01;
    border: 0;
    border-radius: 13px;
    height: 35px;
    font-family: "roboto";
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 15px;
    left: 10px;
}

button:hover{
    background: #ffe6a1;
}

.formulario{
    position: relative;
    top: flex;
    box-sizing: border-box;
    border: 0; 
    background-color: white;
    top: 10px;
    height: 80%;
    width: 800px;
    text-align: justify;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
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
    justify-content: flex-start;
    gap: 200px;
}

.etiqueta1{
    display: flex;
    justify-content: flex-start;
    gap: 420px;
}

.campo1{
    display: flex;
    justify-content: flex-start;
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
    justify-content: flex-start;
    gap: 285px;
  }

  .campo2{
    display: flex;
    justify-content: flex-start;
    gap: 232px;
  }
  .titulo{
    color: black;
    padding-left: 30px;
    margin: 0;
    margin-top: 30px;
  }

</style>