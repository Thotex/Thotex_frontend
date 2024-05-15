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
                <RouterLink :to="{name: 'dashboard'}" class="button-side">
                    <label>Tablero</label>
                    <IconifyIcon class="iconos" icon="ant-design:book-outlined" color="white" width="50px" heigth="50px"></IconifyIcon >
                </RouterLink>        
            </li>
           
            <li>
                <router-link :to="{name: 'payroll'}" class="button-side">
                    <label>Nominas</label>
                    <IconifyIcon class="iconos" icon="ion:id-card-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </router-link>
            </li>

            <li>
                <RouterLink :to="{name: 'sales'}" class="button-side">
                    <label>Ventas</label>
                    <IconifyIcon class="iconos" icon="ion:pricetag-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'shopping'}" class="button-side">
                    <label>Compras</label>
                    <IconifyIcon class="iconos" icon="ion:cart-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>

            </li>

            <li>
                <RouterLink :to="{name: 'inventory'}" class="button-side">
                    <label>Inventario</label>
                    <IconifyIcon class="iconos" icon="ion:file-tray-full-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'third'}" class="button-side">
                    <label>Terceros</label>
                    <IconifyIcon class="iconos" icon="material-symbols:supervisor-account-outline-rounded" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'accounting'}" class="button-side">
                    <label>Contabilidad</label>
                    <IconifyIcon class="iconos" icon="material-symbols:android-calculator" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'calendar'}" class="button-side">
                    <label>Calendario</label>
                    <IconifyIcon class="iconos" icon="ion:calendar-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'profile'}" class="button-side">
                    <label>Perfil</label>
                    <IconifyIcon class="iconos" icon="ion:person-circle-outline" color="white" width="50px" heigth="50px"></IconifyIcon>
                </RouterLink>
            </li>
        </nav>
    </body>


</template>

<style lang="scss" scoped>

    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #203B70;
        height: 100vh;
        display: flex;
        flex-direction: column;  
        padding-left: 0;   
        box-sizing: border-box;  
        margin-top: 0;
    }

    
            
    li{
                
        width: $sidebar-left-width;
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

    .router-link-active{
        background-color: lighten($color: $custom-blue, $amount: 5%);
    }

    .button-side{
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    
    .logo-container:hover{
        background-color: #203B70;

    }
    

   


</style>
