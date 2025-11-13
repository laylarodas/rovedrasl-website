import { useEffect } from "react";

type Props = { 
  title: string; 
  description: string; 
  canonical?: string; 
  image?: string;
  type?: string;
};

export default function SEO({ 
  title, 
  description, 
  canonical, 
  image = "https://reformasrovedra.es/og-default.jpg",
  type = "website"
}: Props) {
  useEffect(() => {
    const full = `${title} | Rovedra Reformas`;
    const baseUrl = "https://reformasrovedra.es";
    const fullUrl = canonical || baseUrl;
    const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
    
    document.title = full;

    const ensure = (name: string, attr: "name"|"property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el;
    };

    // Basic Meta
    ensure("description").setAttribute("content", description);
    ensure("keywords").setAttribute("content", "reformas Palma, reformas Mallorca, reformas integrales, cocinas, baños, albañilería, fontanería, electricidad, climatización");

    // Canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    if (canonical) link.href = canonical;

    // Open Graph
    ensure("og:site_name", "property").setAttribute("content", "Rovedra S.L. - Reformas en Palma");
    ensure("og:title", "property").setAttribute("content", full);
    ensure("og:description", "property").setAttribute("content", description);
    ensure("og:image", "property").setAttribute("content", fullImage);
    ensure("og:image:width", "property").setAttribute("content", "1200");
    ensure("og:image:height", "property").setAttribute("content", "630");
    ensure("og:image:alt", "property").setAttribute("content", title);
    ensure("og:type", "property").setAttribute("content", type);
    ensure("og:url", "property").setAttribute("content", fullUrl);
    ensure("og:locale", "property").setAttribute("content", "es_ES");

    // Twitter
    ensure("twitter:card").setAttribute("content", "summary_large_image");
    ensure("twitter:title").setAttribute("content", full);
    ensure("twitter:description").setAttribute("content", description);
    ensure("twitter:image").setAttribute("content", fullImage);
    ensure("twitter:image:alt").setAttribute("content", title);
    
    // Additional SEO
    ensure("format-detection").setAttribute("content", "telephone=no");
  }, [title, description, canonical, image, type]);

  return null;
}

