{/*import type { AstroI18nextConfig } from "astro-i18next"; */}

export default  {
    defaultLocale: "es",
    locales: ["es", "en"],
    routes: {
      es: {
        "nosotros": "nosotros",
        "blog" : "blog",
        "contacto": "contacto",
        "politica-de-privacidad": "politica-de-privacidad",
        "terminos-y-condiciones":"terminos-y-condiciones",        
      },
      en: {
        "nosotros": "about",
        "blog" : "blog",
        "contacto": "contact",
        "politica-de-privacidad": "privacy-policy",
        "terminos-y-condiciones" : "terms-and-conditions",
      },      
    },
  };