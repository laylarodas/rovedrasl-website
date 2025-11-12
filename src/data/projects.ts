import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'cocina-moderna-palma-centro',
    title: 'Cocina Moderna en Palma Centro',
    cover: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&auto=format&fit=crop',
    tags: ['Cocina', 'Reforma integral'],
    excerpt: 'Reforma completa de cocina de 25m² con isla central, electrodomésticos de alta gama y acabados en madera natural.',
  },
  {
    slug: 'bano-suite-son-armadans',
    title: 'Baño Suite en Son Armadans',
    cover: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop',
    tags: ['Baño', 'Lujo'],
    excerpt: 'Transformación de baño principal con ducha de lluvia, mármol travertino y sistema de iluminación LED integrado.',
  },
  {
    slug: 'piso-completo-portixol',
    title: 'Reforma Integral Piso en Portixol',
    cover: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
    tags: ['Integral', 'Piso completo'],
    excerpt: 'Renovación total de un piso de 90m² incluyendo cocina, dos baños, salón y dormitorios con estilo mediterráneo.',
  },
  {
    slug: 'cocina-isla-santa-catalina',
    title: 'Cocina con Isla en Santa Catalina',
    cover: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    tags: ['Cocina', 'Diseño'],
    excerpt: 'Cocina abierta al salón con isla de 3 metros, encimera de cuarzo y almacenamiento optimizado.',
  },
  {
    slug: 'bano-principal-el-terreno',
    title: 'Baño Principal en El Terreno',
    cover: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop',
    tags: ['Baño', 'Moderno'],
    excerpt: 'Reforma de baño completo con doble lavabo, bañera exenta y revestimientos de gres porcelánico.',
  },
  {
    slug: 'apartamento-genova',
    title: 'Apartamento Completo en Génova',
    cover: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop',
    tags: ['Integral', 'Apartamento'],
    excerpt: 'Reforma integral de 70m² con redistribución de espacios, cocina abierta y baño moderno.',
  },
];

// Helper function to get unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Helper function to filter projects by tag
export const filterProjectsByTag = (tag: string): Project[] => {
  if (tag === 'Todos') return projects;
  return projects.filter(project => 
    project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};
