<template>
    <div>
      <div id="paymentBrick_container"></div>
    </div>
</template>

<script setup lang="ts">
  /* eslint-disable */ 
  import { loadMercadoPago } from "@mercadopago/sdk-js";
  import { onMounted, onBeforeUnmount } from "vue";

  declare global {
    interface Window {
      MercadoPago: any;
      paymentBrickController: any;
    }
  }

  onBeforeUnmount(() => {
    if (window.paymentBrickController) {
      window.paymentBrickController.unmount();
    } else {
      console.error("paymentBrickController not found");
    }
  })

  onMounted( async () => {
    await loadMercadoPago();
    const mp = new window.MercadoPago("TEST-b80af940-4547-4360-b1a1-6de6882aa2f6", {
      locale: "es",
    });
    
    const bricksBuilder = mp.bricks();
    const renderPaymentBrick = async (bricksBuilder : any) : Promise<void> => {
      const settings = {
        initialization: {
          /*
          "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
          */
          amount: 10000,
          preferenceId: "<PREFERENCE_ID>",
            payer: {
              firstName: "",
              lastName: "",
              email: "",
            },
          },
          customization: {
            visual: {
              style: {
                theme: "default",
              },
            },
            paymentMethods: {
              creditCard: "all",
              debitCard: "all",
              ticket: "all",
              bankTransfer: "all",
              atm: "all",
              onboarding_credits: "all",
              wallet_purchase: "all",
              maxInstallments: 1
            },
          },
          callbacks: {
            onReady: () => {
              /*
              Callback llamado cuando el Brick está listo.
              Aquí puede ocultar cargamentos de su sitio, por ejemplo.
              */
            },
            onSubmit: ({ selectedPaymentMethod, formData }: { selectedPaymentMethod: string, formData: any }) => {
              // callback llamado al hacer clic en el botón de envío de datos
              return new Promise((resolve, reject) => {
                fetch("/process_payment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                .then((response) => response.json())
                .then((response) => {
                  // recibir el resultado del pago
                  resolve( response );
                })
                .catch((error) => {
                  // manejar la respuesta de error al intentar crear el pago
                  reject();
                });
              });
            },
            onError: (error : any) => {
              // callback llamado para todos los casos de error de Brick
              console.error(error);
            },
          },
        };
        window.paymentBrickController = await bricksBuilder.create(
        "payment",
        "paymentBrick_container",
        settings
        );
      };
      renderPaymentBrick(bricksBuilder);
    });

  
</script>

<style scoped lang="scss">

</style>