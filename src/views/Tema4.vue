<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="zoom-in")
        .titulo-principal__numero
          span  4
        h1 Propuesta comercial

    .row.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-mob
        img(src='@/assets/curso/t4/img-1.png', alt='Intro')
      .col-sm-12.col-md-6
          p.mb-3 Las propuestas comerciales se diseñan para presentar la información de los productos o servicios a los clientes o prospectos que están interesados. No existe un esquema de propuestas, pues cada empresa elabora la suya dependiendo de su segmento, de los servicios que ofrezca y de la misión empresarial.
          p.mb-0 Hay elementos que es importante considerar al presentar una propuesta comercial, como lo son el análisis del cliente, el mercado, la competencia (competidores) y los aspectos legales y tributarios.
    
    .row.mt-5
      h3 Estructura y componentes  

    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-7
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Un organizador de eventos no debe olvidar incluir en la propuesta el objetivo del evento, los servicios ofrecidos, definir la fecha de la realización del evento, el valor total del evento discriminado por cada uno de los componentes que lo constituirán, las formas de pago y adelantos, si hay lugar a ellos.  
      .col-sm-12.col-md-3
        img(src='@/assets/curso/t4/img-2.png', alt='Intro')
    p.text-center.mb-5(data-aos="zoom-in") Una propuesta se estructura de la siguiente manera:
    
    PasosB.color-acento-contenido.pasos-b-primario.px-5.py-5(data-aos="zoom-in")
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-4.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Introducción y objetivos
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-5.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Beneficios del servicio a prestar
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-6.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Características del servicio a realizar (alcance y tiempos)
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-7.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Metodología de trabajo por parte del organizador
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-8.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Formas de pago
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-9.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Vigencia de la propuesta
      .row(titulo="").d-flex.align-items-center.px-lg-5
        .col-sm-2.col-md-2.mb-mob
          img(src='@/assets/curso/t4/img-10.png', alt='Intro').img-w-mob
        .col-md-6.mb-4.mb-md-0
          p Aspectos legales y políticas del servicio (aquí es importante definir qué es lo que incluye o no el producto o servicio)

    .row.mt-5
      h3 Estrategias de información y comunicación aplicadas
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-4.m-0.p-0
        img(src='@/assets/curso/t4/img-3.png', alt='Intro')
      .col-sm-12.col-md-8.bg-color-primario.m-0.p-0.d-flex.justify-content-center.align-items-center
        .bg-color-white.p-4.m-4
          p.mb-3 Dentro de la estrategia comercial de un operador de eventos es importante definir cuáles son los canales de comunicación con sus clientes y sus prospectos, pues por medio de ellos la empresa logrará captar su atención, con el fin de precisar, crear y enviar sus mensajes de forma eficaz. 
          p.mb-0 Dependiendo del momento en que se encuentre la empresa, existen algunas alternativas para desarrollar estrategias de información y comunicación entre la empresa y los clientes.
    p.text-center.mb-5(data-aos="zoom-in") A continuación, se nombrarán algunas:
    SlyderF.mb-5(columnas="col-lg-4 col-md-4")(data-aos="zoom-in")
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-11-full.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de lanzamiento: se aplica cuando se quiere ingresar al mercado como marca corporativa o con un nuevo producto.
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-12.png')})`}")
              .tarjeta-flip__contenido.p-4.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de confianza: en un mercado muy competitivo resulta indispensable generar tranquilidad en los clientes. Cuando la empresa ha tenido algún <i>impasse</i> necesita recuperar la credibilidad de los clientes mediante este tipo de estrategias.
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-13.png')})`}")
              .tarjeta-flip__contenido.p-4.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de posicionamiento: utilizada para desarrollar marca y afianzarse en el mercado, se hace mucho énfasis en los atributos de la empresa y en el mensaje que quieren posicionar en la mente de los clientes. 
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-14.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de relaciones públicas: cuando se quiere mostrar un giro empresarial o requiere hacerse visible por algún programa social que estratégicamente se necesite divulgar.
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-15.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de <i>marketing</i> digital: cuando la empresa comienza a introducirse en los medios digitales y tiene una estrategia digital definida.
      .row
        .col-12.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false").med-cus-ta-flip
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/img-16.png')})`}")
              .tarjeta-flip__contenido.p-4.d-flex.justify-content-center.align-items-center
                p.mb-0 Estrategia de crecimiento: cuando la empresa se encuentra en expansión o tiene un crecimiento acelerado y requiere comunicarlo al mercado y a sus clientes. 
      
     


    p(data-aos="zoom-in") Para un estudio completo del tema, recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
