<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="zoom-in")
        .titulo-principal__numero
          span  3
        h1 Portafolio de productos y servicios

    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-8.mb-mob
          p.mb-3 Todo negocio debe contar con un número de productos o servicios que representa una oferta y que se pone a disposición de sus clientes. Sin este, sencillamente no habría nada que vender, por lo tanto, no existiría un negocio: sin oferta ni demanda no hay mercado. 
          p.mb-3 Para un organizador de eventos se hace necesario identificar en qué negocio está, qué es lo que vende, cuáles son sus propuestas de valor, cuáles son sus ventajas y atributos, así como tener claro su potencial de trabajo, y todo esto reunirlo y describirlo en un documento denominado portafolio de servicios.
          p.mb-0 Hay empresas que se dedican solo a la organización de eventos académicos, otras a eventos familiares, así como aquellas que solo se dedican a eventos culturales, deportivos, de esparcimiento o empresariales, entre muchos más. También hay empresas que tienen un portafolio variado y ofrecen diferentes servicios dentro de este.
      .col-sm-12.col-md-4
        img(src='@/assets/curso/t3/img-1.png', alt='Intro')
    p.text-center.mb-5(data-aos="zoom-in") A continuación, se presentan las variables para tener en cuenta para desarrollar un portafolio de servicios:
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-5.mb-mob
        img(src='@/assets/curso/t3/img-2.png', alt='Intro').mb-2
        img(src='@/assets/curso/t3/img-3.png', alt='Intro')

      .col-sm-12.col-md-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario")
          .row(titulo="Variable 1 ")
              p.pl-5-cus.mb-0 Se debe iniciar por describir de manera acertada a qué se dedica el negocio, muchas veces el empresario se pierde al hablar del negocio pues quiere abarcar lo que más pueda, confundiendo al cliente; es importante ser precisos y adicionar un poco de la historia sobre la creación del negocio, si se quiere.
          .row(titulo="Variable 2 ")
              p.mb-0.pl-5-cu Crear y mostrar la visión y la misión de la empresa, escribirla con el objetivo de que el cliente pueda ver el alcance y el compromiso de la empresa.
          .row(titulo="Variable 3 ")
              p.mb-0.pl-5-cu Se debe desarrollar y describir en detalle el número de productos o servicios que la empresa oferta uno a uno, si se tienen por categoría, entonces se procede a agruparlos y definir cada uno de ellos.
          .row(titulo="Variable 4 ")
              p.mb-0.pl-5-cu Al nombrar cada uno se recomienda dar información acerca de lo que se realiza en cada evento y acompañarlo de fotografías o imágenes alusivas a cada evento.
          .row(titulo="Variable 5 ")
              p.mb-0.pl-5-cu Dentro del portafolio, y dependiendo de la experiencia adquirida, se puede mostrar a aquellos clientes lo que se ha atendido o provisto, esto como una señal de respaldo e indicación de cuántos eventos se han realizado en la empresa. 
          .row(titulo="Variable 6 ")
              p.mb-0.pl-5-cu Si la compañía o algunos de sus propietarios se destacan por algo, es importante evidenciarlo, como sellos de calidad o premios. 
          .row(titulo="Variable 7 ")
              p.mb-0.pl-5-cu Dependiendo del tamaño de la empresa, se puede informar en el portafolio con cuanto personal cuenta la empresa por categoría, y con qué proveedores trabaja, para demostrar respaldo y seguridad al cliente.
    
    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#3_1 3.1 Productos y servicios para eventos
    .row.mb-2(data-aos="zoom-in")
      .col-sm-12.col-md-8.bg-color-primario.m-0.p-0.d-flex.justify-content-center.align-items-center
        .bg-color-white.p-5.m-4
          p.mb-3 A partir de la creación del portafolio es posible ver el segmento en el cual se va a desarrollar y los clientes potenciales. A partir de allí, se crea su portafolio de productos o servicios. 
          p.mb-0 El desarrollo de un evento, sin importar el tipo, lleva consigo muchos productos y servicios que deben considerarse muy bien para que se desarrolle de manera exitosa.
      .col-sm-12.col-md-4.m-0.p-0
        img(src='@/assets/curso/t3/img-4.png', alt='Intro')
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 Uno de los secretos del éxito de un organizador de eventos son los proveedores con los cuales trabaja, ya que respaldan su visión y calidad, y eso es lo que le permite asesorar a los clientes.
    p.text-center.mb-5(data-aos="zoom-in") Algunos de los productos o servicios que un organizador de eventos debe considerar y tener en cuenta son:
    
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
      
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-7.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Servicios de alimentación y <i>catering</i>.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-8.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Servicios de montaje y desmontaje.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-9.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Servicios de transporte aéreo, terrestre y fluvial.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-10.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de hospedaje.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-11.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de <i>hardware y software </i> para eventos con carnetización, escarapelas, controles de acceso, bases de datos, etc.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-12.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de soluciones tecnológicas, como televisores, computadores, pantallas gigantes, proyectores, iluminación, tarimas, cámaras, traducción simultánea, realidad virtual, etc. 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-13.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de mobiliario, ambientación y escenografía.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-14.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de menaje, mesas, manteles, sillas, copas, vidriería, loza, ollas, cubiertos, etc.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-15.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Recintos feriales.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-17.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de fotografía y realización de video.	 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-18.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de entretenimiento, como música, DJ, cómicos, presentadores, magos, bandas, pirotecnia (pólvora guiada y controlada), etc.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-19.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de decoración (flores, globos. etc.) y ambientación.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-20.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Representantes de artistas e <i>influencers.</i>
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-21.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de montajes de <i>stands</i> y carpas. 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-22.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Restaurantes y espacios para eventos.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-23.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Personal de cocina y servicio a la mesa (chefs, meseros, barman, etc.).	
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-24.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Modistas y diseñadores de modas.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-25.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Empresas de personal especializado.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-26.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Proveedores de elementos publicitarios. 
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-27.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Empresas de turismo.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-28.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Agencias de publicidad.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-29.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Medios de comunicación.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-30.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Diseñadores gráficos y web.
            p Administradores de contenidos digitales.
      .tarjeta-avatar
        img(src='@/assets/curso/t3/img-31.png' alt='AvatarTop')
        .tarjeta.color--acento-contenido-cus.med-cus-ta
          .p-4
            p Base de datos de profesores, facilitadores y académicos.


    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#3_2 3.2 Fijación de precios
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-mob
        img(src='@/assets/curso/t3/img-5.png', alt='Intro')
      .col-sm-12.col-md-6
        .cajon.color-primario.p-4.mb-4
          p.mb-3 El precio es una de las variables más complicadas de implementar en cualquier negocio, producto o servicio, pues obedece a muchos factores tanto internos como de percepción de las personas. Sin embargo, el precio siempre estará directamente relacionado al segmento y el cliente objetivo en el que la empresa se ha enfocado. 
          p.mb-0 El precio nos ayuda a filtrar los clientes y encontrar los segmentos. Esto no significa que si el precio es bajo el servicio es malo, o si el precio es alto el servicio es bueno, representa que dentro de los segmentos y los clientes objetivo hay características y una de ellas son los ingresos. Realizar una boda para un segmento de ingresos medios no significa que no incluirá los mismos pasos que una boda para un segmento de ingresos altos, la diferencia está en los proveedores que se contraten de acuerdo con los presupuestos.
    .bloque-texto-b.color-acento-contenido.p-4(data-aos="zoom-in")
        .bloque-texto-b__texto
          p.mb-3 La competencia es importante también en la asignación de precios, pues dependiendo de esta varían los precios: a mayor competencia menores márgenes, a menor competencia mayores márgenes de ganancia. Se deben conocer los precios de la competencia tanto directa como indirecta para presentar precios que estén dentro del mercado. 
          p.text Es muy importante que el organizador de eventos se concentre en crear un presupuesto ajustado a las necesidades del evento y del cliente para establecer los costos reales y su ganancia. Cada evento es diferente, por lo tanto, cada evento debe presupuestarse independientemente. Por la experiencia, los organizadores tienen costos preconcebidos que les ayudan a pronosticar los costos totales de un evento, pero estas son meras aproximaciones, lo definitivo es presupuestar muy bien, considerando el número de participantes del evento y las actividades a desarrollar durante este.     

    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#3_3 3.3 Herramientas y plataformas para el diseño del portafolio

    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-9.mb-mob
          p.mb-3 La creación del portafolio consiste en brindar a los clientes y al mercado la información acerca de quién es la empresa, a qué se dedica y qué ofrece. Se recomienda al organizador crear portafolios creativos y estructurados. 
          p.mb-0 Actualmente, los portafolios se pueden crear virtuales, incluso inmersos dentro de la página web corporativa, y además, en muchos casos, se permite que sean descargables, esto para evitar el consumo de papel y los costos que esto representa. Así que solo se requiere de creatividad y ánimo para crear su propio portafolio en internet.
      .col-sm-12.col-md-3
        img(src='@/assets/curso/t3/img-6.png', alt='Intro')

    .row.mb-3.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 En internet se encuentra una alta variedad de ofertas. Aquí se puede crear una página web corporativa y el portafolio de productos o servicios, algunas gratuitas y otras a muy bajos costos. Estas plataformas permiten diseñar y crear la página web por el mismo organizador de eventos, sin necesidad de contratar diseñadores web, ya que por medio de plantillas y con formatos guiados muy sencillos, se realiza el montaje. Algunas ofrecen desde un servicio de alojamiento hasta tiendas virtuales listas para vender por internet, solo es cuestión de explorar.
    p.text-center.mb-5(data-aos="zoom-in") Dentro de las plataformas más usadas actualmente encontramos:
    SlyderA(tipo="b").color-primario.px-cus-5.py-5.mb-5(data-aos="zoom-in")
      .px-cus-5.py-2.text-center
        h4 www.wix.com
        img(src='@/assets/curso/t3/img-32.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.webnode.com.co
        img(src='@/assets/curso/t3/img-36.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.zyro.com
        img(src='@/assets/curso/t3/img-33.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.jimdo.com
        img(src='@/assets/curso/t3/img-34.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.godaddy.com 
        img(src='@/assets/curso/t3/img-35.png', alt='Intro')

    p.mb-5(data-aos="zoom-in") A continuación, se presentan algunas herramientas de internet que permiten diseñar de manera sencilla y fácil, bien sea anuncios, manejo de publicaciones en redes sociales, portafolios, <i>posters</i>, invitaciones, tarjetas, entre muchas otras acciones que le permiten mejorar la productividad y ahorrar costos al organizador de eventos.
    p.text-center.mb-5(data-aos="zoom-in") Entre las más usadas se encuentran:
    
    SlyderA(tipo="b").color-primario.px-cus-5.py-5.mb-5(data-aos="zoom-in")
      .px-cus-5.py-2.text-center
        h4 www.canva.com
        img(src='@/assets/curso/t3/img-37.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.piktochart.com
        img(src='@/assets/curso/t3/img-38.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.pexels.com
        img(src='@/assets/curso/t3/img-39.png', alt='Intro')
      .px-cus-5.py-2.text-center
        h4 www.freepik.es
        img(src='@/assets/curso/t3/img-40.png', alt='Intro')
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
