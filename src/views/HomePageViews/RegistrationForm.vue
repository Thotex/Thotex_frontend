<template>
    <div class="registration modal" @click="closeComponent">
        <div class="logo">
            <img src="@/assets/LogoThotex.png" alt="logo">
        </div>
        <div class="registration-box">
            <div class="form" @click.stop>
                <form class="registration-form">   
                    <h1>Registrarse</h1>   
                    <h2>Nombre</h2>
                    <input required type="text" placeholder="Nombre" v-model="userForm.name" @input="errors.name = false; error_messages.name = ''"/>
                    <p class="error" v-if="errors.name">{{ error_messages.name }}</p>
                    <h2>Apellido</h2>
                    <input required type="text" placeholder="Apellido" v-model="userForm.lastName" @input="errors.lastName = false; error_messages.lastName = ''"/>
                    <p class="error" v-if="errors.lastName">{{ error_messages.lastName }}</p>
                    <h2>Número telefónico</h2>
                    <input required type="number" placeholder="Número de telefónico" v-model="userForm.phoneNumber" @input="errors.phoneNumber = false; error_messages.phoneNumber = ''"/>
                    <p class="error" v-if="errors.phoneNumber">{{ error_messages.phoneNumber }}</p>
                    <h2>Correo electrónico</h2>
                    <input required type="email" placeholder="Correo electrónico" v-model="userForm.email" @input="errors.email = false; error_messages.email = ''"/>
                    <p class="error" v-if="errors.email">{{ error_messages.email }}</p>
                    <h2>Contraseña</h2>
                    <input required type="password" placeholder="Contraseña" v-model="userForm.password" @input="errors.password = false; error_messages.password = ''"/>
                    <p class="error" v-if="errors.password">{{ error_messages.password }}</p>
                    <h2>Confirmar contraseña</h2>
                    <input required type="password" placeholder="Confirmar contraseña" v-model="confirmPassword" />
                    <p class="error" v-if="errors.confirmPassword">{{ error_messages.confirmPassword }}</p>
                    <h2>Captcha</h2>
                    <vue-recaptcha class="captcha" sitekey="{{ process.env.VUE_APP_RECAPTCHA }}" @verify="captcha = true" @fail="captcha = false"/>
                    <p class="error" v-if="errors.captcha">{{ error_messages.captcha }}</p>
                    <div>
                        <label class="terms">
                            <input required type="checkbox" class="checkbox" v-model="userForm.checkedTerms" @input="errors.checkedTerms = false; error_messages.checkedTerms = ''" @click="showDialog"/>Acepto los términos de política y privacidad
                            <p class="error" v-if="errors.checkedTerms">{{ error_messages.checkedTerms }}</p>
                        </label>
                    </div>
                    <p class="message">Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
                    <button @click.prevent="registerUser" >Registrarse</button>
                </form>
            </div>
        </div>
    </div>
    <terms-and-conditions
      v-model:modelValue="isDialogVisible"
      image="https://i.imgur.com/1nUVY6B.png"
      title="Términos y condiciones"
      content='Este contrato describe los términos y condiciones generales (en adelante únicamente "TÉRMINOS Y CONDICIONES") que son 
      aplicables por el simple uso o acceso a cualquiera de las páginas, aplicaciones web y móviles, softwares, aplicaciones en general, 
      al uso de los contenidos, productos y servicios ofrecidos a través del sitio web thotex.online (en adelante y, conjunta e 
      indistintamente, el "PORTAL"), del cual es titular CountTex y/o sus subsidiarias, controladoras, partes relacionadas y 
      afiliadas (en adelante y, conjunta e indistintamente, el "TITULAR") quien tiene su domicilio establecido en la siguiente 
      dirección:'
    >
    <template #additionalContent>
      <p class="condiciones">Carrera 30 #45-03, , Bogotá, Colombia Bogotá, D.C., CP. 111321</p>
      <p class="condiciones"> Cualquier persona que desee acceder o hacer uso del sitio o los servicios que en él se ofrecen 
        (en adelante, el "USUARIO"), podrá hacerlo sujetándose a los presentes TÉRMINOS Y CONDICIONES, así como a políticas y 
        principios incorporados al presente documento. Por lo que entenderemos que los acepta y acuerda en obligarse a su cumplimiento. 
        En todo caso, cualquier persona que no acepte los presentes TÉRMINOS Y CONDICIONES, deberá abstenerse de utilizar el PORTAL y/o 
        adquirir los productos o servicios que en su caso sean ofrecidos.</p>
        <p class="condiciones"><span class="sub">I. DEL OBJETO. </span>El objeto de los presentes TÉRMINOS Y CONDICIONES es regular el acceso y la utilización del PORTAL, entendiendo por este cualquier tipo de contenidos, productos o servicios que se encuentre a disposición del público en general dentro del PORTAL.
        
      </p>
      <p class="condiciones">
        El TITULAR se reserva la facultad de modificar en cualquier momento y sin previo aviso, la presentación, los contenidos, los productos, los servicios, la funcionalidad, y la configuración que pudiera estar contenida en el PORTAL; en este sentido, el USUARIO reconoce y acepta que el TITULAR en cualquier momento podrá interrumpir, desactivar o cancelar cualquiera de los elementos que conforman el PORTAL o el acceso a los mismos.
      </p>
      <p class="condiciones">Además del costo de la conexión a internet en virtud de los servicios que el USUARIO tenga contratados con algún proveedor de telecomunicaciones, parte de los contenidos, productos o servicios ofrecidos en el PORTAL o, en su caso, por terceros pueden estar sujetos a la contratación previa de los mismos, en cuyo caso se especificará de forma clara y se pondrá a disposición del USUARIO las condiciones generales o particulares por las que se rija el acceso a dichos contenidos.</p>
      <p class="condiciones">
        Es posible que para la compra, el uso y/o contratación de algunos o todos los contenidos, s o servicios, sea necesario el registro del USUARIO y que este cuente con un método de pago automático y válido, asociado a dicho registro, método que podrá ser modificado o cancelado, a discreción del USUARIO. En su caso, el USUARIO se sujetará a los términos y condiciones de la plataforma de pagos.
      </p>
      <p class="condiciones">El USUARIO reconoce que los cargos que se realicen a tarjetas de débito o crédito, con motivo de los contenidos o servicios, no serán objeto de devolución y, que al realizar dichos pagos se sujeta a los términos y condiciones de los proveedores de servicios relacionados con dichos pagos.
        El USUARIO al usar el PORTAL, declara, bajo protesta de decir verdad, que tiene como mínimo 18 años de edad o la mayoría de edad legal en su jurisdicción; el USUARIO reconoce que es su responsabilidad cualquier actividad que se desarrolle con el uso del PORTAL, reconoce que tiene conocimiento y dispone de la capacidad jurídica para aceptar las condiciones establecidas en los presentes TÉRMINOS Y CONDICIONES.</p>
      <p class="condiciones">El PORTAL está dirigido principalmente al USUARIO residente en Colombia, por lo cual, el TITULAR no asegura que el PORTAL cumpla total o parcialmente con la legislación de otros países, de forma que, si el USUARIO reside o tiene su domicilio establecido en otro país y decide acceder o utilizar el PORTAL lo hará bajo su propia responsabilidad y deberá asegurarse de que tal acceso y navegación cumple con la legislación local que le es aplicable, no asumiendo el TITULAR ninguna responsabilidad que se pueda derivar de dicho acto.</p>
      <p class="condiciones">Se hace del conocimiento del USUARIO que el TITULAR podrá administrar o gestionar el PORTAL de manera directa o a través de un tercero, lo cual no modifica en ningún sentido lo establecido en los presentes TÉRMINOS Y CONDICIONES.</p>
      <p class="condiciones">
        <span class="sub">II. DEL USUARIO. </span>El acceso o utilización del PORTAL, confiere la condición de USUARIO del PORTAL, por lo que quedará sujeto a los presentes TÉRMINOS Y CONDICIONES, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación aplicable, por tanto, se tendrán por aceptados desde el momento en el que se accede al PORTAL. Dada la relevancia de lo anterior, se recomienda al USUARIO revisar las actualizaciones que se realicen a los presentes TÉRMINOS Y CONDICIONES.
        Es responsabilidad del USUARIO utilizar el PORTAL de acuerdo a la forma en la que fue diseñado; en este sentido, queda prohibida la utilización de cualquier tipo de software que automatice la interacción o descarga de los contenidos o servicios proporcionados a través del PORTAL. Además, el USUARIO se compromete a utilizar la información, contenidos, productos o servicios ofrecidos a través del PORTAL de manera lícita, sin contravenir lo dispuesto en los presentes TÉRMINOS Y CONDICIONES, la moral o el orden público, y se abstendrá de realizar cualquier acto que pueda suponer una afectación a los derechos de terceros, o perjudique de algún modo el funcionamiento del PORTAL.
        Asimismo, el USUARIO se compromete a proporcionar información lícita y veraz en los formularios habilitados en el PORTAL, en los cuales el USUARIO tenga que proporcionar ciertos datos o información para el acceso a algunos contenidos, productos o servicios ofrecidos por el propio PORTAL. En todo caso, el USUARIO notificará de forma inmediata al TITULAR acerca de cualquier hecho que permita suponer el uso indebido de la información registrada en dichos formularios, tales como, robo, extravío, o acceso no autorizado a cuentas y/o contraseñas, con el fin de proceder a su inmediata cancelación.
        En cualquier caso, el TITULAR no será responsable de las opiniones vertidas por el USUARIO a través de comentarios o publicaciones que estos realicen.
        El sólo acceso al PORTAL no supone el establecimiento de ningún tipo de relación entre el TITULAR y el USUARIO.
        El USUARIO puede contactar, en todo momento, al TITULAR para cualquier aclaración, comentario, duda y/o sugerencia relacionada con los contenidos, productos o servicios del PORTAL y/o con los presentes TÉRMINOS Y CONDICIONES a través de los datos de contacto disponibles en el propio PORTAL y/o a través de los siguientes medios: Correo electrónico: thotexweb@gmail.com

      </p>
      <p class="condiciones">
        <span class="sub">III. DEL ACCESO Y NAVEGACIÓN EN EL PORTAL. </span>El TITULAR no garantiza de ningún modo la continuidad y disponibilidad de los contenidos, productos o servicios ofrecidos a través del PORTAL, no obstante, el TITULAR Ilevará a cabo las acciones que de acuerdo a sus posibilidades le permitan mantener el buen funcionamiento del PORTAL, sin que esto suponga alguna responsabilidad de parte del TITULAR.
        De igual forma el TITULAR no será responsable ni garantiza que el contenido o software al que pueda accederse a través del PORTAL, se encuentre libre de errores, software malicioso, o que pueda causar algún daño a nivel de software o hardware en el equipo a través del cual el USUARIO accede al PORTAL.
        El TITULAR tampoco se hace responsable de los daños que pudiesen ocasionarse por un uso inadecuado del PORTAL. En ningún caso el TITULAR será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el sólo acceso o utilización del PORTAL.
      </p>
      <p class="condiciones">
      <span class="sub">IV. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS. </span>De conformidad con lo establecido en la legislación vigente, el TITULAR se compromete a adoptar las medidas necesarias que estén a su alcance para asegurar la privacidad de los datos personales recabados de forma que se garantice su seguridad, se evite su alteración, pérdida o tratamiento no autorizado.
        Además, a efecto de dar cumplimiento a lo establecido en la legislación vigente, todo dato personal que sea recabado a través del PORTAL, será tratado de conformidad con los principios de licitud, calidad, finalidad, lealtad, y responsabilidad. Todo tratamiento de datos personales quedará sujeto al consentimiento de su titular. En todo caso, la utilización de datos financieros o patrimoniales, requerirán de autorización expresa de sus titulares, no obstante, esta podrá darse a través del propio PORTAL utilizando los mecanismos habilitados para tal efecto, y en todo caso se dará la mayor diligencia y cuidado a este tipo de datos. Lo mismo ocurrirá en el caso de datos personales sensibles, considerando por estos aquellos que debido a una utilización indebida puedan dar origen a discriminación o su divulgación conlleve un riesgo para el titular.
        En todo momento se procurará que los datos personales contenidos en las bases de datos o archivos que en su caso se utilicen, sean pertinentes, correctos y actualizados para los fines para los cuales fueron recabados.
        El tratamiento de datos personales se limitará al cumplimiento de las finalidades previstas en la Política o Aviso de Privacidad.
        El PORTAL podrá incluir hipervínculos o enlaces que permitan acceder a páginas web de terceros distintos del TITULAR. Los titulares de dichos sitios web dispondrán de sus propias políticas de privacidad y protección de datos, por lo cual el TITULAR no asume ningún tipo de responsabilidad por los datos que sean facilitados por el USUARIO a través de cualquier sitio web distinto al PORTAL.
        El TITULAR se reserva el derecho a modificar su Política o Aviso de Privacidad, de acuerdo a sus necesidades o derivado de algún cambio en la legislación. El acceso o utilización del PORTAL después de dichos cambios, implicará la aceptación de estos cambios.
        Por otra parte, el acceso al PORTAL puede implicar la utilización de cookies, las cuales, son pequeñas cantidades de información que se almacenan en el navegador utilizado por el USUARIO. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación, para ello, pueden recabar información para ingresar al PORTAL, almacenar las preferencias del USUARIO, así como la interacción que este tenga con el PORTAL, como por ejemplo de manera enunciativa mas no limitativa, la fecha y hora en la que se accede al PORTAL, el tiempo que se ha hecho uso de este, los sitios visitados antes y después del mismo, el número de páginas visitadas, la dirección IP de la cual accede el USUARIO, la frecuencia de visitas, entre otros.
        Este tipo de información será utilizada para mejorar el PORTAL, detectar errores, y posibles necesidades que el USUARIO pueda tener, lo anterior a efecto de ofrecer al USUARIO contenidos, productos o servicios de mejor calidad. En todo caso, la información recopilada será anónima y no se identificará al USUARIO de manera individual.
        En caso de que el USUARIO no desee que se recopile este tipo de información deberá deshabilitar, rechazar, restringir y/o eliminar el uso de cookies en su navegador de internet. Los procedimientos para realizar estas acciones pueden diferir de un navegador a otro; en consecuencia, se sugiere revisar las instrucciones facilitadas por el desarrollador del navegador. En el supuesto de que rechace el uso de cookies (total o parcialmente) el USUARIO podrá continuar haciendo uso del PORTAL, aunque podrían quedar deshabilitadas algunas de las funciones del mismo.
        Es posible que en el futuro estas políticas respecto a las cookies cambien o se actualicen, por ello es recomendable revisar las actualizaciones que se realicen a los presentes TÉRMINOS Y CONDICIONES, con objetivo de estar adecuadamente informado sobre cómo y para qué utilizamos las cookies que se generan al ingresar o hacer uso del PORTAL.
      </p>
      <p class="condiciones">
        <span class="sub">V. POLÍTICA DE ENLACES. </span>El PORTAL puede contener enlaces, funciones, contenidos o servicios, de otros sitios de internet pertenecientes y/o gestionados por terceros, como por ejemplo de manera enunciativa mas no limitativa, imágenes, videos, comentarios, motores de búsqueda, entre otros.
        La utilización de estos enlaces, funciones, contenidos o servicios, tiene por objeto mejorar la experiencia del USUARIO al hacer uso del PORTAL, sin que pueda considerarse una sugerencia, recomendación o invitación para hacer uso de sitios externos. el TITULAR en ningún caso revisará o controlará el contenido de los sitios externos, de igual forma, no hace propios los contenidos, productos, servicios o cualquier otro material existente en los referidos sitios enlazados; por lo cual, tampoco se garantizará la disponibilidad, exactitud, veracidad, validez o legalidad de los sitios externos a los que se pueda tener acceso a través del PORTAL. Asimismo, el TITULAR no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el acceso o uso, de los contenidos, productos o servicios disponibles en los sitios web no gestionados por el TITULAR a los que se pueda acceder mediante el PORTAL.
        El USUARIO o terceros que realicen o publiquen un enlace web desde una página web externa, a este PORTAL deberán tomar en cuenta lo siguiente:
        <ul>
          <li>No se permite la reproducción (total o parcial) de los contenidos, productos o servicios disponibles en el PORTAL sin la autorización expresa del TITULAR. Tampoco se permitirán manifestaciones falsas, inexactas o incorrectas sobre el PORTAL, ni sobre sus contenidos, productos o servicios, pudiendo el TITULAR restringir el acceso al PORTAL a toda aquella persona que incurra en este tipo de actos.</li>
          <li>El establecimiento de un enlace al PORTAL desde cualquier sitio externo, no implicará la existencia de alguna relación entre el TITULAR y el titular del sitio web desde el cual se realice, tampoco implicará el conocimiento del TITULAR de los contenidos, productos o servicios ofrecidos en los sitios externos desde los cuales se pueda acceder al PORTAL.</li>
        </ul>      
      </p>
      <p class="condiciones">
        <span class="sub">VI. POLÍTICA EN MATERIA DE PROPIEDAD INTELECTUAL E INDUSTRIAL. </span>El TITULAR por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del PORTAL, entendiendo por este el código fuente que hace posible su funcionamiento así como las imágenes, archivos de audio o video, logotipos, marcas, combinaciones de colores, estructuras, diseños y demás elementos que lo distinguen. Serán, por consiguiente, protegidas por la legislación vigente en materia de propiedad intelectual e industrial, así como por los tratados internacionales aplicables. Por consiguiente, queda expresamente prohibida la reproducción, distribución, o difusión de los contenidos del PORTAL, con fines comerciales, en cualquier soporte y por cualquier medio, sin la autorización del TITULAR.
      </p>
      <p class="condiciones">
        El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial del TITULAR. No obstante, además de poder visualizar los elementos del PORTAL podrá imprimirlos, copiarlos o almacenarlos, siempre y cuando sea exclusivamente para su uso estrictamente personal.
      </p>
      <p class="condiciones">Por otro lado, el USUARIO, se abstendrá de suprimir, alterar, o manipular cualquier elemento, archivo, o contenido del PORTAL, y por ningún motivo realizará actos tendientes a vulnerar la seguridad, los archivos o bases de datos que se encuentren protegidos, ya sea a través de un acceso restringido mediante un usuario y contraseña, o porque no cuente con los permisos para visualizarlos, editarlos o manipularlos.</p>
      <p class="condiciones">En caso de que el USUARIO o algún tercero consideren que cualquiera de los contenidos del PORTAL suponga una violación de los derechos de protección de la propiedad industrial o intelectual, deberá comunicarlo inmediatamente al TITULAR a través de los datos de contacto disponibles en el propio PORTAL y/o a través de los siguientes medios:</p>
      <ul>
        <li>Correo electrónico: thotexweb@gmail.com</li>
      </ul>
      <p class="condiciones">
        <span class="sub">VII. LEGISLACIÓN Y JURISDICCIÓN APLICABLE. </span>El TITULAR se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del PORTAL, sus contenidos, productos o servicios, o por el incumplimiento de los presentes TÉRMINOS Y CONDICIONES.
      </p>
      <p class="condiciones">El USUARIO renuncia expresamente al fuero o jurisdicción de sus domicilios presentes o futuros y se somete a los Jueces y Tribunales de Bogotá, Colombia Bogotá, D.C., para la interpretación, cumplimiento y ejecución de los presentes TÉRMINOS Y CONDICIONES.
      </p>
    </template>
    </terms-and-conditions>
</template>
  
  <script setup lang="ts">
    import { Ref, ref } from 'vue';
    import { defineEmits } from 'vue';
    import AuthService from '@/services/AuthService';
    import { IUserFormRegister } from '@/interfaces/IUsers';
    import swal from 'sweetalert';
    import vueRecaptcha from 'vue3-recaptcha2';
    import TermsAndConditions from '@/components/ui/TermsAndConditions.vue';
    const emits = defineEmits(['closeFormRegister', 'successRegister'])
    const isDialogVisible = ref(false);
      function showDialog() {
      isDialogVisible.value = true;
    }
    const captcha : Ref<boolean> = ref(false)
    
    /*
    interface IUserFormRegister {
      name: string,
      lastName: string,
      phoneNumber: number | null,
      email: string,
      password: string,
      confirmPassword: string,
      checkedTerms: boolean
    }
    */
  
    const userForm: Ref<IUserFormRegister> = ref({
      name: '',
      lastName: '',
      phoneNumber: null,
      email: '',
      password: '',
      checkedTerms: false
    })

    let confirmPassword: Ref<string> = ref('')

    const errors : Ref<{name: boolean, lastName: boolean, phoneNumber: boolean, email: boolean, password: boolean, confirmPassword: boolean, checkedTerms: boolean, captcha: boolean}> = ref({
        name: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        password: false,
        confirmPassword: false,
        checkedTerms: false,
        captcha: false
    })

    const error_messages : Ref<{name: string, lastName: string, phoneNumber: string, email: string, password: string, confirmPassword: string, checkedTerms: string, captcha: string}> = ref({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkedTerms: '',
        captcha: ''
    })

    const verifyEmail = () : boolean => {
        if (userForm.value.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return true
        }
        else {
            errors.value.email = true
            error_messages.value.email = 'Email no valido'
            return false
        }
    }

    const verifyPassword = () : boolean => {
        // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
        if ((
          //lowercase letter
          userForm.value.password.match(/[a-z]/g) &&
          //uppercase letter
          userForm.value.password.match(/[A-Z]/g) &&
          //number
          userForm.value.password.match(/[0-9]/g) &&
          //special character
          userForm.value.password.match(/[@$!%*?&]/g) &&
          //8 characters length
          userForm.value.password.length >= 8
        )) {
            if (userForm.value.password === confirmPassword.value) {
                return true
            }
            else {
                errors.value.confirmPassword = true
                error_messages.value.confirmPassword = 'Las contraseñas no coinciden'
                return false
            }
        }
        else {
            errors.value.password = true
            error_messages.value.password = 'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
            return false
        }
    }

    const verifyPhoneNumber = () : boolean => {
        if (userForm.value.phoneNumber === null) {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número es obligatorio'
            return false
        }
        else if (userForm.value.phoneNumber.toString().length === 10) {
            return true
        }
        else {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número debe ser de 10 digitos'
            return false
        }
    }

    const checkNonEmptyInputs = () : boolean => {
        const defaultValues : {name: string, lastName: string, phoneNumber: number | null, email: string, password: string, confirmPassword: string, checkedTerms: boolean} = {
            name: '',
            lastName: '',
            phoneNumber: null,
            email: '',
            password: '',
            confirmPassword: '',
            checkedTerms: false
        }

        let isFormValid = true

        if (userForm.value.name === defaultValues.name) {
            errors.value.name = true
            error_messages.value.name = 'El nombre es obligatorio'
            isFormValid = false
        }

        if (userForm.value.lastName === defaultValues.lastName) {
            errors.value.lastName = true
            error_messages.value.lastName = 'El apellido es obligatorio'
            isFormValid = false
        }

        if (userForm.value.phoneNumber === defaultValues.phoneNumber) {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número es obligatorio'
            isFormValid = false
        }

        if (userForm.value.email === defaultValues.email) {
            errors.value.email = true
            error_messages.value.email = 'El correo electrónico es obligatorio'
            isFormValid = false
        }

        if (userForm.value.password === defaultValues.password) {
            errors.value.password = true
            error_messages.value.password = 'La contraseña es obligatoria'
            isFormValid = false
        }

        if (confirmPassword.value === defaultValues.confirmPassword) {
            errors.value.confirmPassword = true
            error_messages.value.confirmPassword = 'La contraseña es obligatoria'
            isFormValid = false
        }

        if (!userForm.value.checkedTerms) {
            errors.value.checkedTerms = true
            error_messages.value.checkedTerms = 'Debes aceptar los terminos y condiciones'
            isFormValid = false
        }

        //captcha
        if (captcha.value === false) {
            errors.value.captcha = true
            error_messages.value.captcha = 'Debes aceptar el captcha'
            isFormValid = false
        }

        return isFormValid
        
    }


    const verifyForm = () : boolean => {
        if (checkNonEmptyInputs()) {
            //Verify at a time
            let validInputs = true
            if (!verifyEmail()) {
                validInputs = false
            }
            if (!verifyPhoneNumber()) {
                validInputs = false
            }
            if (!verifyPassword()) {
                validInputs = false
            }
            return validInputs
        }
        else {
            return false
        }
    }

    const registerUser = async () : Promise<boolean> => {
    if (verifyForm()) {
      const auth : AuthService = new AuthService();
      //TODO : MOVER A UNA INTERFAZ APARTE Y MODIFICAR EL AUTH PARA RECIBIR OBJETO USER
      const response : boolean = await auth.register(userForm.value);
      if (response) {
        swal("¡Registro exitoso!", "Por favor confirma tu correo para completar el registro", "success");
        emits('successRegister')
        return true;
      } else {
        swal("¡Registro fallido!", auth.getError().value , "error");
        return false;
      } 
    }
    else {
      return false
    }
  }


    const closeComponent = () => {
        emits('closeFormRegister')
    }

  </script>
  
  <style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Poppins:300);
  
  .registration-box {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    overflow: auto;
    z-index: 3;
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
    color: $custom-dark-blue;
  
  }
  .form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius:15px;
  }
  .form button {
    margin-top: 10px;
    text-transform: uppercase;
    outline: 0;
    background: $custom-blue;
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
    background: $custom-dark-blue;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: $custom-dark-blue;
    text-decoration: none;
  }

  .terms {
    margin-top: 10px;
    display: block;
    text-align: left;
    font-size: 12px;
    color: $custom-dark-blue;
    text-decoration: underline
  }

  input[type=checkbox] {
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 0;
    margin-right: 10px;
    vertical-align: bottom;
    position: relative;
    top: -1px;

  }

  input[type=number] {
    appearance: textfield;
  }

  input[type=number]::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  

  .error {
    display: block;
    background-color: lightcoral;
    border-radius: 15px;
    padding: 5px;
    font-size: 10px;
    color: white;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 240px;
  }

  .captcha {
    padding: 8px;
  }

  .condiciones{
    text-align: justify;
  }
  .sub{
    font-weight: bold;
  }
  </style>
  
  
  