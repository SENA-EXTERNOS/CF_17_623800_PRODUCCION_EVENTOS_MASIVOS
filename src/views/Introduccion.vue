<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-sm-12.col-md-6
        .cajon.color-primario.p-4.mb-4
          p.mb-3 Apreciado Aprendiz, bienvenido a este componente formativo, donde  se abordarán los temas necesarios para la elaboración de un portafolio de servicios y las estrategias para desarrollar sus propuestas comerciales. Aprenderá a enfocarse, tanto en el  producto como en los clientes y el mercado, con el fin de contar con información clara y oportuna que le permita desarrollar las estrategias y tácticas, que serán enmarcadas y justificadas al aprender a desarrollar el plan de mercadeo de la empresa de eventos.  Obtendrá conocimientos sobre cómo analizar a los clientes y entenderlos, de modo que pueda diseñar productos y/o servicios que coincidan con sus necesidades y deseos, con precios y portafolios bien definidos.

          p En el siguiente video encontrará una visión general de esta experiencia de aprendizaje.
      .col-sm-12.col-md-6
        img(src='@/assets/curso/intro/img-1.png', alt='Intro')
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HRrv2JfWVxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
