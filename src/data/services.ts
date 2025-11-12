import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'albanileria',
    title: 'Albañilería',
    summary: 'Trabajos de construcción, reformas de baños y cocinas, alicatados, solados y reparaciones profesionales.',
    description: 'Somos especialistas en albañilería con más de 25 años de experiencia en Palma de Mallorca. Realizamos todo tipo de trabajos de construcción y reforma integral con materiales de primera calidad. Desde reformas completas de baños y cocinas hasta construcción de tabiques, solados y reparaciones. Garantizamos acabados profesionales y cumplimiento de plazos.',
    icon: '🏗️',
    features: [
      'Reformas completas de baños y cocinas',
      'Alicatados y revestimientos profesionales',
      'Construcción de tabiques y divisiones',
      'Solados con gres y piedra natural',
      'Reparación de grietas y humedades',
      'Presupuesto gratuito sin compromiso'
    ],
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585128792304-c3f011c11ea1?w=600&auto=format&fit=crop'
    ]
  },
  {
    slug: 'carpinteria',
    title: 'Carpintería',
    summary: 'Muebles a medida, cocinas personalizadas, armarios empotrados e instalación de parquet. Taller propio.',
    description: 'Carpinteros especializados en Palma de Mallorca con más de 25 años creando muebles únicos. Disponemos de taller propio donde fabricamos muebles a medida con diseño personalizado. Desde cocinas completas hasta armarios empotrados y suelos de parquet. Combinamos técnicas tradicionales con tecnología moderna para resultados excepcionales.',
    icon: '🪚',
    features: [
      'Muebles de cocina a medida con diseño 3D',
      'Armarios empotrados y vestidores',
      'Instalación de parquet y tarima',
      'Taller propio con fabricación personalizada',
      'Maderas nobles y materiales premium',
      'Instalación completa y acabados perfectos'
    ],
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&auto=format&fit=crop'
    ]
  },
  {
    slug: 'electricidad',
    title: 'Electricidad',
    summary: 'Instalaciones eléctricas completas, reparaciones urgentes, boletines oficiales y domótica. Instalador autorizado.',
    description: 'Electricistas autorizados en Palma de Mallorca con más de 25 años de experiencia. Realizamos instalaciones eléctricas completas para viviendas y comercios cumpliendo toda la normativa vigente. Emitimos boletines y certificados oficiales. Disponibles 24h para emergencias. Especialistas en domótica, cargadores de vehículos eléctricos y sistemas inteligentes.',
    icon: '⚡',
    features: [
      'Instalaciones eléctricas certificadas',
      'Reparaciones urgentes 24 horas',
      'Boletines y certificados oficiales',
      'Cargadores para vehículos eléctricos',
      'Domótica y automatización KNX',
      'Cuadros eléctricos y LED eficiente'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&auto=format&fit=crop'
    ]
  },
  {
    slug: 'fontaneria',
    title: 'Fontanería',
    summary: 'Instalaciones completas, reparaciones urgentes, termos y calentadores, desatascos y grupos de presión.',
    description: 'Fontaneros profesionales en Palma de Mallorca con más de 25 años de experiencia. Servicio urgente disponible 24 horas para emergencias. Realizamos instalaciones completas de fontanería, reparación de fugas, instalación y reparación de termos eléctricos y calentadores. Desatascos con maquinaria profesional y instalación de grupos de presión.',
    icon: '🚰',
    features: [
      'Servicio urgente 24 horas',
      'Instalaciones completas de fontanería',
      'Reparación de fugas y averías',
      'Termos eléctricos y calentadores',
      'Desatascos con maquinaria profesional',
      'Grupos de presión e instalaciones'
    ],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop'
    ]
  },
  {
    slug: 'climatizacion',
    title: 'Climatización',
    summary: 'Instalación de aire acondicionado, sistemas por conductos, bombas de calor y mantenimiento profesional.',
    description: 'Especialistas en climatización en Palma de Mallorca con más de 25 años de experiencia. Instalamos aire acondicionado para hogares, oficinas y comercios con equipos de máxima eficiencia energética. Splits, cassettes, sistemas por conductos y bombas de calor. Servicio técnico especializado con mantenimiento preventivo y reparaciones urgentes.',
    icon: '❄️',
    features: [
      'Instalación de aire acondicionado',
      'Sistemas split, cassette y conductos',
      'Bombas de calor eficientes',
      'Climatización residencial y comercial',
      'Mantenimiento y reparaciones',
      'Equipos de máxima eficiencia energética'
    ],
    image: 'https://images.unsplash.com/photo-1631545806609-2e8b1f1732e7?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1635274868701-13894000c2ff?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609266378844-4a8af797b45e?w=600&auto=format&fit=crop'
    ]
  }
];
