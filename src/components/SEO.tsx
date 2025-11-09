import { useEffect } from "react";

type Props = { title: string; description: string; canonical?: string; image?: string };
export default function SEO({ title, description, canonical, image = "/og-default.jpg" }: Props) {
  useEffect(() => {
    const full = `${title} | Rovedra Reformas`;
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

    ensure("description").setAttribute("content", description);

    // Canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    if (canonical) link.href = canonical;

    // Open Graph
    ensure("og:title", "property").setAttribute("content", full);
    ensure("og:description", "property").setAttribute("content", description);
    ensure("og:image", "property").setAttribute("content", image);
    ensure("og:type", "property").setAttribute("content", "website");

    // Twitter
    ensure("twitter:card").setAttribute("content", "summary_large_image");
    ensure("twitter:title").setAttribute("content", full);
    ensure("twitter:description").setAttribute("content", description);
    ensure("twitter:image").setAttribute("content", image);
  }, [title, description, canonical, image]);

  return null;
}

