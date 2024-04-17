<template> 
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <meta charset=”utf-8”>
        <link rel="icon" type="image/png" href="@/assets/LogoThotex.png">
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
        
        <nav class="sidebar">
            <li class="logo-container">
                <header>
                    <img src="@/assets/LogoThotex.png" alt="Logo de la empresa">
                </header>
            </li>

            <li class="tablero">
                <RouterLink :to="{name: 'dashboard'}" class="table">
                    <label>Tablero</label>
                    <ion-icon name="clipboard-outline"></ion-icon>
                </RouterLink>        
            </li>
           
            <li>
                <router-link :to="{name: 'payroll'}">
                    <label>Nominas</label>
                    <IconifyIcon icon="ion:id-card-outline" color="black"></IconifyIcon>
                </router-link>
            </li>

            <li>
                <label>Ventas</label>
                <ion-icon name="pricetag-outline"></ion-icon>
            </li>

            <li>
                <label>Compras</label>
                <ion-icon name="cart-outline"></ion-icon>
            </li>

            <li>
                <label>Inventario</label>
                <ion-icon name="reader-outline"></ion-icon>
            </li>

            <li>
                <label>Terceros</label>
                <ion-icon name="person-add-outline"></ion-icon>
            </li>

            <li>
                <label>Contabilidad</label>
                <ion-icon name="calculator-outline"></ion-icon>
            </li>

            <li>
                <label>Calendario</label>
                <ion-icon name="calendar-outline"></ion-icon>
            </li>

            <li>
                <RouterLink :to="{name: 'profile'}" class="table">
                    <label>Perfil</label>
                    <ion-icon name="person-outline"></ion-icon>
                </RouterLink>
            </li>
        </nav>
    </body>


</template>

<style lang="scss" scoped>

    .sidebar{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #203B70;
        height: 100%;
        display: flex;
        flex-direction: column;  
        padding-left: 0;   
        box-sizing: border-box;  
        margin-top: 0;
    }

    
            
    li{
                
        width: 85px;
        height: 70px;
        background-color: #203B70;
        font-size: 12px;
        font-weight: bold;
                color: white;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: normal;
            }
            li:hover{
                background-color: #4D6FB3;
            }
            

            img{
                width: 80px;
                align-items: center;
            }

    ion-icon{
        margin-top: 3px;
        font-size: 45px;
    }

    .table{
        text-decoration: none;
        color: white;
        
    } 
    
    .logo-container:hover{
        background-color: #203B70;

    }
    

</style>
