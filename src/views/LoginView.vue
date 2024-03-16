<template>
  <div class="login">
    <html lang="en">
    <head>
      <img src="../assets/LogoThotex.png" alt="LogoThotex">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="/css/styles.css" rel="stylesheet">
    </head>
    <body>
      <div class="login-box">
        <div class="form">
          <form class="login-form">   
            <h1>Ingresa a tu cuenta</h1>   
            <h2>Nombre</h2>
            <input type="text" placeholder="Nombre"/>
            <h2>Apellido</h2>
            <input type="text" placeholder="Apillido"/>
            <h2>Número telefónico</h2>
            <input type="text" placeholder="Número de telefónico"/>
            <h2>Correo electrónico</h2>
            <input type="text" placeholder="Correo electrónico"/>
            <h2>Contraseña</h2>
            <input type="password" placeholder="Contraseña"/>
            <select name="profile_type">
              
            </select>
            <label>
              Acepto los términos de política y privacidad
            </label>
            <p class="message">Not registered? <a href="#">Create an account</a></p>
            <button>login</button>
          </form>
        </div>
      </div>
      </body>
    </html>
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Poppins:300);

body {
  background: linear-gradient(90deg, rgb(32, 59, 112) 0%, rgb(255, 255, 255) 50%);
  font-family: "Poppins";    
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh ;
}
.form {
  position: relative;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius:15px;
}
.form h2{
  position: relative;
  text-align: left;
  font-size: 12px;
  color: #203B70;

}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius:15px;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  background: #3324be;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  border-radius:15px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #2957d6;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #3324be;
  text-decoration: none;
}
</style>


