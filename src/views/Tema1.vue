<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 El Cliente

    .row(data-aos="zoom-in")
      .col-sm-12.col-md-8.mb-mob
        p.mb-3 El cliente es la razón de existencia de las empresas, es la otra parte del mercado y el soporte para su subsistencia. Los clientes son aquellas personas o empresas que compran los productos, quienes generan demanda.
        p.mb-3 Todas las empresas crean sus marcas para ganarse la compra, y posteriormente, la lealtad de los clientes, desde el más pequeño hasta el más grande de ellos, y en los cuales pueden incluirse algunos productos o servicios.
        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 Es importante diferenciar entre un cliente y un consumidor, pues no siempre son los mismos, y es esencial que desde el mercado se entienda claramente el rol de cada uno. Ejemplo: un niño es un consumidor y usuario de toda clase de artículos necesarios, pero no es él quien define esta compra, son sus padres; por lo tanto, el niño sería el usuario y el cliente los padres, pues son quienes deciden y realizan la compra al final.
      .col-sm-12.col-md-4
        img(src='@/assets/curso/t1/img-1.png', alt='Intro')
    
    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#1_1 1.1 Perfil del cliente

    .row.mb-5(data-aos="zoom-in")
      .col-sm-8.col-md-2.d-flex.justify-content-center.align-items-center.mb-mob
        img(src='@/assets/curso/t1/img-2.png', alt='Intro')
      .col-sm-12.col-md-10
        .cajon.color-primario.p-4.mb-2.mb-mob.mb-4
          p.mt-5.mb-0 El cliente es esa persona o empresa que compra los productos o servicios que se ofrecen para la venta. En algunos lugares lo definen como comprador, pues no necesariamente el cliente es el usuario del producto o servicio, por tanto, se considera cliente a quien efectivamente paga por los productos ofrecidos. Por ello, es necesario analizar en detalle quién es, por qué está interesado, qué le apasiona, qué le gusta y qué no, qué necesita y desea. Aquí está la clave para diseñar, construir y ofrecer mejores productos, y por consiguiente, vender más; por ello todas las acciones y estrategias comerciales y de mercado tendrán que estar enfocadas en ellos y su satisfacción.
        p.mb-0 En el caso del organizador de eventos, debe definir muy bien quién es su cliente y quiénes los usuarios de los servicios, pues en este caso en particular debe trabajar para el cliente, buscando satisfacer las necesidades de muchos usuarios. Esto sucede, por ejemplo, cuando contratan a la empresa para organizar un evento de fin de año de una organización, pues el cliente es la empresa que lo contrata, pero los usuarios serán todos los invitados a la reunión.
    p.mb-2(data-aos="zoom-in") Para comprender mejor al cliente se debe iniciar entonces por entender qué es el mercado, pues las compañías satisfacen en muchos casos a diferentes compradores, quienes se encuentran en un mercado (demanda) en donde participan otras empresas que ofertan productos similares a las mismas personas, mejor conocidas como competencia. De ahí la necesidad de explicar los diferentes tipos de mercados que existen.

    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-8
        .cajon.color-acento-contenido.p-4.mt-5
          p.mb-0 A continuación se resumen cuantos tipos de mercados existen y qué determina cada uno de ellos:

    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
              img(src='@/assets/curso/t1/img-25.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.p-3(x="12%" y="1%" numero="+")
            .h5.mb-2.text-center Mercado de consumo
            p Es el mercado más grande en el cual estamos incluidos todos como personas y familias, demandando bienes y servicios que ofertan las empresas  para consumo personal.

          .tarjeta.color-primario.p-3(x="38%" y="44%" numero="+")
            .h5.mb-2.text-center Mercado Industrial
            p Ya no son personas sino empresas que requieren de bienes y servicios que sirvan como insumo para su gestión, para generar transformación por medio de la producción  y presentando productos para el consumo personal.

          .tarjeta.color-primario.p-3(x="63%" y="1%" numero="+")
            .h5.mb-2.text-center Mercados de Comercializadores
            p Son empresas o personas que compran los productos o servicios directamente al productor, sirviendo de intermediarios con los clientes y usuarios finales. Es decir, sirven de puente entre el productor y el cliente.

          .tarjeta.color-primario.p-3(x="88%" y="44%" numero="+")
            .h5.mb-2.text-center Mercados de subdistribuidores o revendedores
            p Aquellas empresas que compran los bienes y servicios a un comercializador, y luego los ponen en venta a los consumidores finales.
          .tarjeta.color-primario.p-3(x="24%" y="96%" numero="+")
            .h5.mb-2.text-center Mercados  de Gobierno
            p El gobierno de cualquier país representa un gran cliente debido a las grandes cantidades que compra para el desarrollo de sus gestión. Por ello, es considerado un mercado atractivo, y tiene una dinámica especial para solicitudes, requerimientos y pagos.
          .tarjeta.color-primario.p-3(x="49%" y="54%" numero="+")
            .h5.mb-2.text-center Mercados Institucionales
            p Todas aquellas empresas que realizan compras muy grandes con características  únicas de calidad, presentación o empaque. Entre los que se encuentran hoteles, restaurantes,, etc. También presentan una  dinámica especial para solicitudes, requerimientos y pagos. 
          .tarjeta.color-primario.p-3(x="74%" y="96%" numero="+")
            .h5.mb-2.text-center Mercados Internacionales
            p Aquellas empresas que exportan productos nacionales a otros países como comodities, tales como el café, las naranjas o productos desarrollados y transformados en el país que se venden en mercados externos.

    p.mb-2(data-aos="zoom-in") Continuando con el objetivo de conocer al cliente, uno de los principales propósitos del <i>marketing</i> con respecto a estos tiene que ver con el cumplimiento de estos dos objetivos primordiales:
    p.text-center.mb-5(data-aos="zoom-in") Dichos objetivos son:
    
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t1/img-3.png' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .text-white.p-4
              h2.text-center Atraer clientes nuevos
              p.text-center Toda empresa que se desarrolle y participe en un mercado debe trabrajar sobre este objetivo diariamente.
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t1/img-4.png' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .text-white.p-4
              h2.text-center Mantener clientes actuales
              p.text-center Después de hacer todo el esfuerzo por conseguir clientes, debe hacer el doble de esfuerzo para conservarlos.

    p.mb-5(data-aos="zoom-in") Todo empresario debe estar enfocado en atraer nuevos clientes, así como en crear estrategias para mantener a los clientes ya cautivos, esto como una regla que le permite mantenerse activo dentro del mercado en el cual se encuentra, mientras genera utilidades. 
    p.text-center.mb-5(data-aos="zoom-in") Sobre el perfil de los clientes se debe tener en cuenta:

    .row.mb-5(data-aos="zoom-in")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1/img-5.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
              p.mb-0 El perfil de cliente, o ahora denominado ‘<i>buyer persona</i>’, está directamente relacionado con la búsqueda, el análisis y el conocimiento de las características de ese consumidor ideal, ya sea una persona o empresa.


      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1/img-6.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
              p.mb-0 Las variables a tener en cuenta son: género, edad, ingresos; aspectos psicográficos como estilo de vida, valores, deseos y aspectos conductuales como hábitos y frecuencia de compra.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1/img-7.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.justify-content-center.align-items-center
              p.mb-0.text-white Entender y conocer a los clientes cada vez y con más detalle es una labor diaria en la que deben trabajar las áreas de mercadeo, y que por ningún motivo pueden dejar de realizar, ya que a partir de esa lectura se comienza con el desarrollo de nuevos productos y la participación en nuevos mercados, además se crean procesos de innovación constante; todos estos aspectos hacen crecer al negocio en todos los sentidos.  

    p.mb-5(data-aos="zoom-in") Para conocer a los clientes se deben tener en cuenta diferentes variables, las cuales vamos a agrupar en 4 categorías o aspectos.
    p.text-center.mb-5(data-aos="zoom-in") Los aspectos y sus variables son:

    .card-info(data-aos="zoom-in")
      .card_img
        img(src='@/assets/curso/t1/img-8.svg' alt='img-7')
      .card_text.p-0.m-0
        .row.p-0.m-0
          .col-12.p-0.m-0
            .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/t1/img-9.png')})`, 'background-repeat': 'no-repeat'}").height-card
              p.mb-3.text-bold Aspectos demográficos 
              ul.lista-ul
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Edad.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Género.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Nivel socioeconómico. 
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Ocupación.
                li.mb-0 
                  i.fas.fa-check.color-acento-botones
                  | Nivel de escolaridad.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Nacionalidad o región.
        .row.p-0.m-0
          .col-12.p-0.m-0
            .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/t1/img-10.png')})`, 'background-repeat': 'no-repeat'}").height-card
              p.mb-3.text-bold Aspectos psicográficos 
              ul.lista-ul
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Tipos de Necesidades.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Personalidad.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Percepción. 
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Actitudes.
        .row.p-0.m-0
          .col-12.p-0.m-0
            .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/t1/img-11.png')})`, 'background-repeat': 'no-repeat'}").height-card
              p.mb-3.text-bold Aspectos de estilo de vida
              ul.lista-ul
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Actividades y hobbies.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Intereses.
        .row.p-0.m-0
          .col-12.p-0.m-0
            .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/t1/img-12.png')})`, 'background-repeat': 'no-repeat'}").height-card
              p.mb-3.text-bold Aspectos Conductual
              ul.lista-ul
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Expectativas.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Valores.
                li.mb-0  
                  i.fas.fa-check.color-acento-botones
                  | Creencias, religión, espiritualidad, etc.

    p.my-5(data-aos="zoom-in") Cuando se habla de construir el <i>buyer</i> persona, el objetivo consiste en crear una representación gráfica y ficticia del perfil del cliente de una empresa, en donde se logre identificar cada una de las variables en forma detallada, con el objetivo de establecer estrategias efectivas de <i>marketing</i> de acuerdo con las necesidades de la persona.                   
    
    .row(data-aos="zoom-in").d-flex.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Gráfico 1. 
          span Ejemplo <i>buyer</i> persona
        figure
          img(src='@/assets/curso/t1/img-13.png', alt='Intro')
          figcaption Fuente: https://milcapeguero.com/crear-buyer-personas-es-importante/
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#1_2 1.2 Segmento objetivo
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-mob
          p.mb-3 Una vez claro el concepto del perfil del cliente, debemos pasar a hablar sobre el segmento objetivo. Cuando se habla de este en el mercadeo, siempre se debe iniciar por entender qué es la segmentación de mercados, para así comprender la participación de la empresa en el mismo. 
          p.mb-0 Entonces ¿cómo se realiza la segmentación de mercados?, se trata de agrupar a las diferentes personas de acuerdo con características comunes (homogéneas) para definir un perfil adecuado, el cual se encuentre con los productos o servicios que se diseña para ellos.
      .col-sm-12.col-md-6
        img(src='@/assets/curso/t1/img-14.png', alt='Intro')
    .row.mb-5(data-aos="zoom-in").d-flex.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Gráfico 2. 
          span <i>Segmentación del Mercado</i>
        figure.mb-5
          img(src='@/assets/curso/t1/img-15.png', alt='Intro')
          figcaption Nota. Elaboración propia
    
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-10.col-md-3.mb-mob
        img(src='@/assets/curso/t1/img-16.png', alt='Intro')
      .col-sm-12.col-md-9
          p.mb-0 Entendida la segmentación, identificar el segmento objetivo se refiere a analizar cuáles son aquellas características que definen ese grupo de personas que comprarán los productos o servicios que ofrecen las empresas, y a partir de allí, establecer estrategias oportunas y eficaces que permitan el encuentro de la demanda y la oferta, con el menor ruido posible, todo en razón de satisfacer sus necesidades y motivar la venta de productos en una relación constante y duradera. En otras palabras, es encontrar un submercado.
        
    p.mb-5(data-aos="zoom-in") Veamos el siguiente ejemplo: una empresa de eventos que se especializa en bodas requiere conocer su mercado objetivo, por tanto, inicia la identificación de sus clientes para conocer su mercado objetivo.     

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="zoom-in") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0.text-white En este caso se deberían analizar los siguientes aspectos:
        .col-lg-8
          .bloque-texto-a__texto.p-4
            ul.lista-ul
              li.mb-1  
                i.fas.fa-check.color-acento-botones
                | ¿A qué edades (mayores de edad) promedio se casan las personas de acuerdo con su cultura?
              li.mb-1  
                i.fas.fa-check.color-acento-botones
                | ¿Por qué se casan? Análisis de la religión, política, etc.
              li.mb-1  
                i.fas.fa-check.color-acento-botones
                | ¿Cuál es su nivel socioeconómico? Estratificación social.
              li.mb-0  
                i.fas.fa-check.color-acento-botones
                | ¿Cómo está el precio de mis productos o servicios frente a los ingresos de mis posibles clientes?
            

    p.mb-3(data-aos="zoom-in") Al unir todas aquellas características homogéneas de los prospectos de clientes que se relacionan con la oferta de los productos ofrecidos, ya se tiene el segmento objetivo (submercado) y se pueden comenzar a definir estrategias, tácticas y acciones para atraerlos a las diferentes marcas.
    p.mb-5(data-aos="zoom-in") Es importante establecer muy bien el segmento o grupo objetivo, y desde allí crear las estrategias del <i>marketing</i> mix, modelo creado por McCarthy en 1960 y actualmente utilizado.        

    p.text-center.mb-5(data-aos="zoom-in") En el <i>marketing mix</i> se consideran los siguientes elementos:

     TabsA.color-acento-contenido.my-5(data-aos="zoom-in")
      .tarjeta.p-5(titulo="Producto").text-start.bg-pasos-a-opc
        h4 Producto
        .row.mb-5
          .col-sm-12.col-md-3.m-0.p-0.mb-mob
            img(src='@/assets/curso/t1/img-26.png', alt='Intro')
          .col-sm-12.col-md-9
            p.mb-0 Bien o servicio creado por la empresa, aquello a vender o comercializar para satisfacer las necesidades de los consumidores. Se trata de las características que lo componen, como la marca, el empaque, los servicios adicionales y valores diferenciales, entre otros.
      .tarjeta.p-5(titulo="Precio").text-start.bg-pasos-a-opc
        h4 Precio
        .row.mb-5
          .col-sm-12.col-md-3.m-0.p-0.mb-mob
            img(src='@/assets/curso/t1/img-27.png', alt='Intro')
          .col-sm-12.col-md-9
            p.mb-0 Representa el valor comercial del producto o servicio, es decir, el costo en dinero que los consumidores pagarán por él. Se debe analizar el mercado, la competencia y los costos de fabricación. Esta variable es muy importante, ya que determina en gran medida el perfil de los consumidores.
      .tarjeta.p-5(titulo="Promoción").text-start.bg-pasos-a-opc
        h4 Promoción
        .row.mb-5
          .col-sm-12.col-md-3.m-0.p-0.mb-mob
            img(src='@/assets/curso/t1/img-28.png', alt='Intro')
          .col-sm-12.col-md-9
            p.mb-0 Es el mecanismo mediante el cual la empresa buscará dar a conocer el producto; los canales de medios y estrategias de publicidad para llamar la atención de aquellas personas que tienen la necesidad.

      .tarjeta.p-5(titulo="Plaza").text-start.bg-pasos-a-opc
        h4 Plaza
        .row.mb-5
          .col-sm-12.col-md-3.m-0.p-0.mb-mob
            img(src='@/assets/curso/t1/img-29.png', alt='Intro')
          .col-sm-12.col-md-9
            p.mb-0  Son aquellas acciones que la empresa desarrolla para acercar el producto al consumidor final, el diseño de los canales de venta, tiendas propias, canales de venta, ventas por internet <i>(e-commerce)</i>, entre otros. Esto incluye el desarrollo de la logística de acuerdo con las características del producto o servicio. 

    p.mb-5(data-aos="zoom-in") En el libro <i>Fundamentos de marketing</i>, William J. Stanton <i>et al.</i> proponen cuatro pautas para elegir mercados objetivo, a saber:
   
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-mob
        img(src='@/assets/curso/t1/img-30.png', alt='Intro')
      .col-sm-12.col-md-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario")
          .row(titulo="Pauta 1 ")
              p.pl-5-cus.mb-0 Mercados compatibles con las metas y con la imagen de la empresa, esto debido a que debe ser coherente la marca con los clientes. Ejemplo: una empresa que vende productos de alto costo no puede estar participando en canales de venta populares o viceversa.
          .row(titulo="Pauta 2 ")
              p.mb-0.pl-5-cus Definir la planeación estratégica, ya que se deben establecer muy bien los recursos de la compañía respecto al mercado en el que está. Ejemplo: una empresa que vende productos de bajo costo no puede crear un producto de alto costo e iniciar a participar de este mercado, puesto que las marcas que ya participan invierten muchos recursos en publicidad, y si la compañía no alcanza a cubrirlos, sería mejor tomar decisiones sacando al mercado productos que estén alineados a la planeación de la empresa.
          .row(titulo="Pauta 3 ")
              p.mb-0.pl-5-cus El negocio debe producir utilidades para sobrevivir. Seguramente al leer esta afirmación parezca absurda, pero al revisar muchas compañías que apenas sobreviven o que trabajan prácticamente en pérdidas, se entiende este planteamiento. Por ello, las empresas deben buscar mercados rentables en donde participar y que generen al final las utilidades que se requieren.
          .row(titulo="Pauta 4 ")
              p.mb-0.pl-5-cus La compañía debe buscar mercados en donde el número de competidores sea mínimo, en lo posible. Entrar a mercados muy competitivos no ayudará a la obtención de utilidades, por el contrario, significa mucho esfuerzo y pocas utilidades.

    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#1_3 1.3 Psicología del consumidor
    
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-8.bg-color-primario.m-0.p-0.d-flex.justify-content-center.align-items-center
        .bg-color-white.p-4.m-4
          p.mb-3 Una vez se logra conocer al cliente y el mercado, tanto el segmento en que participa como aquel en el que se encuentra, es indispensable analizar sus comportamientos. 
          p.mb-0 Todos los clientes son personas (seres humanos), independiente de que estén constituidos como empresas, pues estas son manejadas por personas. Los clientes compran productos o servicios basados en sus comportamientos (afectivo, cognitivo y conductual), por ello el mercadeo se basa en la <b>psicología</b>, que según el Diccionario de Oxford, es la ciencia que estudia los procesos mentales, las sensaciones, las percepciones y el comportamiento del ser humano, en relación con el medio ambiente, físico y social que lo rodea. Para crear caminos más claros entre las personas y las marcas (oferta - demanda) el <i>marketing</i> hace uso de la denominada “Psicología del consumidor,” la cual consiste en conocer qué es lo que las personas requieren o necesitan y cómo, por medio de estrategias creadas, es posible persuadir de acuerdo a las características de los productos ofrecidos. Cabe aclarar que no se trata de engañar, por el contrario, se trata de establecer caminos certeros entre personas y productos para que exista una relación de ganancia para todas las partes.
      .col-sm-12.col-md-4.m-0.p-0
        img(src='@/assets/curso/t1/img-17.png', alt='Intro')

    p.mb-5(data-aos="zoom-in") Al aplicar psicología del consumidor, las empresas pueden realizar pesquisas sobre las preferencias, establecer frecuencias de compra y analizar comportamientos frente a los productos (empaque, colores, degustación); de igual forma, hacen uso de los patrones de compra (por qué, dónde, cuándo y qué compran) y reacciones frente a mensajes publicitarios, entre muchos otros.     

    Separador
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2#1_4 1.4 Investigación de mercados
    
    .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-4.mb-mob
        img(src='@/assets/curso/t1/img-18.png', alt='Intro')
      .col-sm-12.col-md-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-3 Pero bien, ¿cómo puedo tener toda la información que me lleva al conocimiento de mis clientes potenciales? La investigación de mercados es una técnica que se utiliza en el <i>marketing</i> y que tiene como objetivo recolectar, analizar y evaluar información referente al mercado (clientes y productos), con el fin de tomar las mejores decisiones, por parte de las empresas, de sus productos en el mercado.
          p Lo importante de realizarla no es sencillamente la recolección sistemática y continua de datos, sino saber interpretarlos de manera acertada.
        p Imagine cuando asiste a un supermercado y hay una promotora de una marca entregando una degustación de un producto nuevo que va a salir al mercado, cuando preguntan en una esquina o por correo acerca de un producto específico, o cuando llenamos encuestas de satisfacción de clientes en algunos locales comerciales: todas estas estrategias se realizan bajo este tipo de investigación  y son las empresas, tanto las nuevas como las que ya participan de dichos mercados, las que están encargadas de realizar este trabajo de manera permanente. 
    
    p.text-center.mb-5(data-aos="zoom-in") Veamos cuáles son los pasos para realizar una investigación de mercados.

    PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="zoom-in")
      .row
        .col-md-8.mb-4.mb-md-0
          h3 Definir el problema
          p Es importante estar enfocados en la definición del problema, puesto que debe apuntar hacia donde requiere la compañía. Establecer los objetivos y analizar la situación actual ayudará a enfocarse en descubrir el problema a solucionar con la investigación.
        .col-md-3
            img(src='@/assets/curso/t1/img-19.png', alt='Texto que describa la imagen')
      .row.text-start
        .col-12
          .row.mb-3
            .col-md-3
                img(src='@/assets/curso/t1/img-20.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Definir la muestra
              p Realizar un acercamiento sin tener que llegar a todos los participantes de la investigación requiere de un ejercicio para determinar la muestra, es decir, identificar a un número menor pero representativo de personas a las cuales se le aplicará el estudio de mercados.
          p.mb-3 <b>Muestreo probabilístico:</b> se define la muestra al azar, garantizando que cualquier individuo de la población tendrá la misma probabilidad de ser escogido.
          p.mb-5 <b>Muestreo no probabilístico:</b> busca encontrar diferentes clases de personas, de modo que la muestra sea más representativa. Es importante conocer las características demográficas de la población, tales como el género, la edad, en donde viven, entre otros.
      .row
        .col-12
          .row.mb-4
            .col-md-8.mb-4.mb-md-0
              h3 Realizar la recolección de datos
              p Establecer cómo se va a obtener la información de la muestra, para ello se debe definir qué se quiere obtener y lograr con la investigación para escoger el método más acertado. A continuación, se presentan algunos métodos de recolección de información:
            .col-md-3
                img(src='@/assets/curso/t1/img-21.png', alt='Texto que describa la imagen')   
          p.mb-3 #[strong Observación: ] se puede realizar de manera presencial o virtual, incluso ahora por redes sociales. Es importante tener claridad en las preguntas que se van a realizar para mantener el control de la entrevista.
          p.mb-3 #[strong Entrevista: ] Es un método para obtener información del comportamiento del consumidor. Es económico ya que se realiza de manera directa en el lugar real, en donde se lleva a cabo la compra o la actividad a investigar, o se puede generar de manera controlada en lugares acondicionados, y analizar los comportamientos del consumidor frente al producto o servicio.
          p.mb-3 #[strong Encuestas: ] es el más común de los métodos y el más usado, su gran ventaja es que permite llegar a muchas personas (masivo). Sin embargo, tiene varias problemáticas que afectan la muestra, por ejemplo, si el encuestador no está capacitado puede sesgar las respuestas. Gracias a la tecnología, las encuestas se realizan por medio virtual, pero se generan muchas respuestas falsas por temor al manejo de la información por parte de la persona que está respondiendo dicha encuesta.
      .row.text-start
        .col-12
          .row.mb-3
            .col-md-3
                img(src='@/assets/curso/t1/img-22.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Análisis de resultados
              p Este es el paso más importante y el propósito de la observación, pues se deben analizar con responsabilidad los resultados, ya que de aquí se tomarán aspectos importantes y relevantes.
      .row
        .col-12
          .row.mb-4
            .col-md-8.mb-4.mb-md-0
              h3 Reporte de resultados
              p Se entrega el informe final de los resultados obtenidos, se recomienda ser creativos para no entregar los resultados planos o numéricos, sino apoyarse de manera creativa para que sea amigable y entendible.
            .col-md-3
                img(src='@/assets/curso/t1/img-23.png', alt='Texto que describa la imagen')     
      .row.text-start
        .col-12
          .row.mb-3
            .col-md-3
                img(src='@/assets/curso/t1/img-24.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Toma de decisiones
              p Este es el paso más complicado, pues es donde se definen las estrategias de acuerdo con los resultados obtenidos. Aquí inicia el proceso estratégico.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
