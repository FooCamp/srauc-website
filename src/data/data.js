// TODO : organize data in folder structure
const pageData = {
  home: {
    sections: [
      {
        component: 'hero',
        image: {
          src: 'logo.jpeg',
          alt: 'SRAUC',
        },
        title: 'Listo para cuidar el ambiente?',
        text:
          'Promovemos la recolección del aceite usado de cocina, para que pueda ser utilizado nuevamente en una energía renovable.',
        button: {
          text: 'Registrate',
          href: '/registro',
        },
      },
      {
        component: 'pageTitle',
        eyebrow: 'Iniciativa',
        heading: 'Iniciativa',
      },
    ],
  },
  iniciativa: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Iniciativa',
        heading: 'Iniciativa',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'white',
        title: '¿Sabías que 1 litro de aceite contamina más de 1000 litros de agua?',
        text:
          'Hemos ideado una manera de deshacernos del aceite de manera responsable con el medio ambiente.',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'green',
        title: '¿Sabías que 1 litro de aceite contamina más de 1000 litros de agua?',
      },
      {
        component: 'timelineHeader',
        title: 'Como recoger el aceite',
      },
      {
        component: 'timelineItem',
        index: 0,
        title: 'Deja enfriar el aceite',
        text: 'Con esto evitamos posibles quemaduras o derretir el embase.',
        icon: '',
      },
      {
        component: 'timelineItem',
        index: 1,
        title: 'Filtra el aceite',
        text:
          'Filtre o cuele el aceite para que no pasen restos de comida, y viértelo en un envase de plástico, que puede ser el mismo frasco donde viene el aceite, cierre bien con la tapa.',
        icon: '',
      },
      {
        component: 'warningComp',
        title:
          'El aceite reciclado se convierte en energía limpia que contamina menos que el combustible fósil.',
        icon: '',
      },
      {
        component: 'warningComp',
        title: 'Evita mezclar el aceite usado con agua.',
        icon: 'icono-aviso@3x.png',
      },
      {
        component: 'timelineItem',
        index: 2,
        title: 'Trae el aceite',
        icon: '',
      },
      {
        component: 'mapComp',
        title: 'Institución Educativa República de Uruguay',
        text1: 'Calle 91a No 70a-193 Barrio Alfonso López Medellín',
        text2: 'Aula 2 -204 (bloque 2)',
        text3:
          'O deposítalo en la caneca color naranja que se encuentra al ingreso de la Institución.',
      },
    ],
  },
  contexto: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Contexto',
        heading: 'El ACU',
      },
      {
        component: 'introductionTextComp',
        backgroundColor: 'white',
        paragraphs: [
          {
            text:
              'En todos los hogares se preparan alimentos y en la elaboración de muchos de ellos se emplea el aceite vegetal o animal. Luego de ser usado se conoce como ACU; Aceite de Cocina Usado.',
          },
          {
            text:
              'Este producto al ser utilizado varias veces, llega un momento en que se quema y es desechado muchas veces de manera incorrecta. Lo que contamina el medio ambiente, tanto suelos como aguas.',
          },
        ],
      },
      {
        component: 'percentTimelineHeader',
        title: 'Según nuestro estudio:',
      },
      {
        component: 'percentTimelineItemSiphon',
        percent: '30%',
        title: 'Lo tiran por el desagüe',
        text: 'Contaminando ríos y depósitos de agua, creando focos de hongos y bacterías.',
        image: {
          src: 'sifon.svg',
          alt: 'sifon',
        },
      },
      {
        component: 'percentTimelineItemCan',
        percent: '20%',
        title: 'Lo tiran a la basura',
        text: 'Filtrándose en suelos, poniendo en riesgo la vida al rededor.',
        image: {
          src: 'caneca.svg',
          alt: 'caneca de basura',
        },
      },
      {
        component: 'percentTimelineItemPan',
        percent: '7%',
        title: 'Lo reutiliza',
        text: 'Poniendo en riesgo la salud propia.',
        image: {
          src: 'sarten.svg',
          alt: 'sarten',
        },
      },
      {
        component: 'scaledText',
        text: '¡Lo mejor es lo que hace la mayoría!',
      },
      {
        component: 'percentTimelineItem',
        percent: '35%',
        title: 'Lo recicla',
        text: 'Permitiendo que tengan un nuevo uso que además cuida el medio ambiente.',
        image: '',
        jarFlag: true,
      },
      {
        component: 'slider',
        title: 'El aceite se convierte en:',
        slides: [
          {
            image: {
              src: 'slider/img-slide-1.svg',
              alt: 'Texto alternativo de la imagen del slide 1',
            },
            text: {
              headline: 'Jabón',
              description:
                'Permitiendo que tengan un nuevo uso que además cuida el medio ambiente.',
            },
          },
          {
            image: {
              src: 'slider/img-slide-2.svg',
              alt: 'Texto alternativo de la imagen del slide 2',
            },
            text: {
              headline: 'Jabón',
              description:
                'Permitiendo que tengan un nuevo uso que además cuida el medio ambiente.',
            },
          },
          {
            image: {
              src: 'slider/img-slide-3.svg',
              alt: 'Texto alternativo de la imagen del slide 3',
            },
            text: {
              headline: 'Jabón',
              description:
                'Permitiendo que tengan un nuevo uso que además cuida el medio ambiente.',
            },
          },
        ],
      },
    ],
  },
  nosotros: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Nosotros',
        heading: 'SRAUC',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'white',
        text:
          'En todos los hogares se preparan alimentos y en la elaboración de muchos de ellos se emplea el aceite vegetal o animal. Luego de ser usado se conoce como ACU; Aceite de Cocina Usado. Este producto al ser utilizado varias veces, llega un momento en que se quema y es desechado muchas veces de manera incorrecta. Lo que contamina el medio ambiente, tanto suelos como aguas.',
      },
      {
        component: 'teamMembersComp',
        title: 'Integrantes',
        members: [
          {
            image: {
              src: 'https://place-hold.it/220x220/#d8d8d',
              alt: 'Foto de Gloria Correa Silva',
            },
            name: 'Gloria Correa Silva',
            job: 'Docente',
          },
          {
            image: {
              src: 'https://place-hold.it/220x220/#d8d8d',
              alt: 'Foto de Verónica Granados',
            },
            name: 'Verónica Granados',
            job: 'Estudiante',
          },
          {
            image: {
              src: 'https://place-hold.it/220x220/#d8d8d',
              alt: 'Foto de Juan Pablo Cobos',
            },
            name: 'Juan Pablo Cobos',
            job: 'Estudiante',
          },
        ],
      },
      {
        component: 'galleryComp',
        title: 'Galeria',
        photos: [
          {
            src: 'slider/slide-11.jpg',
            alt: 'Texto alternativo de la imagen del slide 1',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-12.jpg',
            alt: 'Foto de la galería 2',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-13.jpg',
            alt: 'Foto de la galería 3',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-14.jpg',
            alt: 'Foto de la galería 4',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-15.jpg',
            alt: 'Foto de la galería 5',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-16.jpg',
            alt: 'Foto de la galería 6',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-17.jpg',
            alt: 'Foto de la galería 7',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-18.jpg',
            alt: 'Foto de la galería 8',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-19.jpg',
            alt: 'Foto de la galería 9',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-110.jpg',
            alt: 'Texto alternativo de la imagen del slide 10',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-111.jpg',
            alt: 'Texto alternativo de la imagen del slide 11',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-112.jpg',
            alt: 'Texto alternativo de la imagen del slide 12',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-113.jpg',
            alt: 'Texto alternativo de la imagen del slide 13',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-114.jpg',
            alt: 'Texto alternativo de la imagen del slide 14',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
          {
            src: 'slider/slide-115.jpg',
            alt: 'Texto alternativo de la imagen del slide 15',
            description: 'Descripción de la fotografía',
            fecha: 'Fecha de la fotografía',
          },
        ],
      },
    ],
  },
  registro: {
    sections: [
      {
        component: 'registerFormComp',
        headline: 'Regístrate',
        subheadline: 'Nos pondremos<br class="form__break"> en contacto contigo.',
        fields: [
          {
            label: 'Nombre:',
            type: 'text',
            placeholder: 'Ingresa tu nombre',
          },
          {
            label: 'Correo:',
            type: 'text',
            placeholder: 'Ingresa tu correo',
          },
          {
            label: 'Teléfono:',
            type: 'number',
            placeholder: 'Ingresa tu teléfono',
          },
        ],
        buttonSend: {
          text: 'Enviar',
          href: './',
          image: {
            src: 'icon-arrow.svg',
            alt: 'Icono Flecha Enviar',
          },
        },
        buttonBack: {
          text: 'Volver',
          href: '/inicio',
        },
      },
    ],
  },
  common: {
    initalSections: [
      {
        component: 'header',
        image: {
          src: 'logo-srauc.svg',
          alt: 'SRAUC LOGO',
        },
        item: {
          href: '/inicio',
        },
        buttonMenu: {
          image: {
            src: 'icon-menu.svg',
            alt: 'Menu Button',
          },
        },
        items: [
          {
            text: 'Nosotros',
            href: '/nosotros',
          },
          {
            text: 'Contexto',
            href: '/contexto',
          },
          {
            text: 'Iniciativa',
            href: '/iniciativa',
          },
          {
            text: 'Registro',
            href: '/registro',
          },
        ],
      },
    ],
    finalSections: [
      {
        component: 'footer',
        title: {
          text: 'SRAUC',
          url: '/',
        },
        text: 'Contáctanos para más información.',
        email: {
          label: 'Correo:',
          text: ' srauc@gmail.com',
        },
        phone: {
          label: 'Teléfono:',
          text: ' 301 418 4986',
        },
        socialLinks: [
          {
            href: 'https://www.facebook.com',
            icon: 'facebook-logo.png',
            alt: 'facebook',
          },
        ],
      },
    ],
  },
};

export { pageData };
