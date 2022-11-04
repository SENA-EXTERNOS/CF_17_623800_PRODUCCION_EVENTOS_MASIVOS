export default {
  global: {
    componenteFormativo: 'Portafolio de servicios y productos para eventos',
    descripcionCurso:
      'Analizar, desarrollar y ejecutar el plan de mercado es fundamental para cualquier estrategia corporativa, además de lograr el cumplimiento de objetivos comerciales empresariales trazados. Con el fin de establecer las mejores estrategias y tácticas, que logren una ejecución acertada y eficaz, es indispensable definir el mercado, los productos y clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Perfil del cliente',
            hash: '1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Segmento objetivo',
            hash: '1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Psicología del consumidor',
            hash: '1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Investigación de mercados',
            hash: '1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pasos para un plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan de mercadeo',
            hash: '2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Neuromarketing',
            hash: '2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias de venta',
            hash: '2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Canales de comunicación',
            hash: '2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Portafolio de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Productos y servicios para eventos',
            hash: '3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fijación de precios',
            hash: '3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas y plataformas para el diseño del portafolio',
            hash: '3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estructura y componentes',
            hash: '4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategias de información y comunicación aplicadas',
            hash: '4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Libro electrónico	Carrascal-Bello, L. C. y Mangones-Jiménez, Y. P. (2020). Guía práctica para la elaboración de un plan de marketing (Generación de contenidos impresos N.º 4). Bogotá: Ediciones Universidad Cooperativa de Colombia. ',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/17525/3/2019_GP_Marketing_Carrascal.pdf',
    },
    {
      referencia:
        'Blog	Content, Rock. (2018, agosto).¡Aprende los secretos para hacer una buena propuesta comercial! [Web log post]. rockcontent.',
      link: 'https://rockcontent.com/es/blog/propuesta-comercial/ ',
    },
    {
      referencia:
        'Libro electrónico	Hoyos Ballesteros, Ricardo. (2018) Plan De Marketing: Con Enfoque En Gerencia De Mercadeo. 1a. ed. Web.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8802&pg=1 ',
    },
    {
      referencia:
        'Libro	Kotler, P. y Armstrong, G. (2013) Fundamentos de marketing. (11 ed.) Pearson Educación.Página Web	MGlobal. (s.f.) Neuromarketing; Qué es y cómo aplicarlo en tu empresa. MGlobal.',
      link:
        'https://mglobalmarketing.es/blog/neuromarketing-en-la-mente-del-consumidor-1/ ',
    },
    {
      referencia:
        'Libro electrónico	Pineda Ayala, L., Armstrong, G., Kotler, P., & Amador Araujo, Lourdes traductor. (2017). Marketing (16a. ed.). Pearson Education. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426',
    },
    {
      referencia:
        'Página web	Sordo, M. (2022) Estrategias de comunicación: qué son, tipos y ejemplos. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/estrategias-comunicacion ',
    },
    {
      referencia:
        'Libro	Stanton, W., Etzel, M. y Walker, B. (2007). Fundamentos de marketing. (14. Ed.) The McGraw-Hill Companies. ',
      link:
        'https://mercadeo1marthasandino.files.wordpress.com/2015/02/fundamentos-de-marketing-stanton-14edi.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ADN',
      significado:
        'Sigla de ácido desoxirribonucleico, proteína compleja que se encuentra en el núcleo de las células y constituye el principal constituyente del material genético de los seres vivos. Oxford Language. (2022) Definición de ADN. https://languages.oup.com/google-dictionary-es/ ',
    },
    {
      termino: 'Business to Business',
      significado:
        'En español de negocio a negocio, es un modelo de transmisión de información en la red relacionado con las transacciones comerciales que las empresas realizan.',
    },
    {
      termino: 'Business to consumer',
      significado:
        'En español de negocio a consumidor, es un tipo de práctica existente en el ámbito del marketing. Esta, habitualmente, es empleada por firmas comerciales que persiguen llegar de manera directa a un cliente o consumidor final.',
    },
    {
      termino: 'Buyer Persona',
      significado:
        'Representación ficticia de un cliente ideal muy utilizado en marketing digital.',
    },
    {
      termino: 'Catering',
      significado:
        'Servicio que consiste en elaborar y/o servir bebidas y alimentos en un evento, un lugar público o un medio de transporte. Pérez Port, J. Merino, M (2018). Definiciones: Definición de catering (https://definicion.de/catering/)',
    },
    {
      termino: 'Chat',
      significado:
        'Sistema de comunicación en tiempo real que se realiza entre varios usuarios, cuyos dispositivos están conectados a una red, generalmente internet; los usuarios escriben mensajes en su teclado y el texto aparece automáticamente y al instante en el monitor de todos los participantes.',
    },
    {
      termino: 'DOFA',
      significado:
        'Sigla de Debilidades, Oportunidades, Fortalezas y Amenazas.',
    },
    {
      termino: 'Tácticas',
      significado:
        'Sistema o método que se desarrolla para ejecutar un plan y obtener un objetivo en particular. El término también se usa para nombrar a la habilidad para aplicar dicho sistema. Pérez Port, J. Gardey. A (2021). Definición de: (https://definicion.de/tactica/) ',
    },
    {
      termino: 'Marketing mix',
      significado:
        'Análisis de estrategia de aspectos internos y desarrollada comúnmente por las empresas. Se tienen en cuenta cuatro variables principales del negocio: producto, precio, distribución y promoción.',
    },
    {
      termino: 'Neurociencia',
      significado:
        'Especialidad científica que se dedica al estudio integral del sistema nervioso, teniendo en cuenta sus funciones, su estructura y otros aspectos. De este modo ayuda a explicar diversas características de la conducta y de los procesos cognitivos a través de la biología. Pérez Porto, J. Gardey, A. (2022). Definición de: https://definicion.de/neurociencia/ ',
    },
    {
      termino: 'Página web',
      significado:
        'Conjunto de información que se encuentra en una dirección determinada de internet.',
    },
    {
      termino: 'Realidad virtual',
      significado:
        'Conjunto de técnicas informáticas que permiten crear imágenes y espacios simulados en los que una persona, mediante un dispositivo visual, tiene la sensación de estar y poder desenvolverse dentro de ellos. Vive libre página web. (2022) Realidad virtual y salud: ¿el futuro ya está aquí? https://www.vivelibre.es/realidad-virtual-y-salud-el-futuro-ya-esta-aqui/ ',
    },
  ],
  complementario: [
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Carrascal-Bello, L. C. y Mangones-Jiménez, Y. P. (2020). Guía práctica para la elaboración de un plan de marketing (Generación de contenidos impresos N.º 4). Bogotá: Ediciones Universidad Cooperativa de Colombia. doi: https:// doi.org/10.16925/gcgp.22',
      tipo: 'Artículo, manual',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/17525/3/2019_GP_Marketing_Carrascal.pdf   ',
    },
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Méndez, J. (2018). Qué es y Cómo hacer un plan de Marketing [Video] YouTube. https://www.youtube.com/watch?v=4LmLWpkUVYU',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4LmLWpkUVYU',
    },
    {
      tema: 'Marketing Mix',
      referencia:
        'Méndez, J (2020) Marketing Mix Las 4Ps, 7Ps [Video] YouTube.https://www.youtube.com/watch?v=8eiXiL4JktY',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8eiXiL4JktY ',
    },
    {
      tema: 'El plan de mercadeo',
      referencia:
        'Toro, P (2017) El Plan de Marketing y Plan Estratégico [Video] YouTube. https://youtu.be/ZTsvfmaRBHA',
      tipo: 'Video',
      link: 'https://youtu.be/ZTsvfmaRBHA ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
