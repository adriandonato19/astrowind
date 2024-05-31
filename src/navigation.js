import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/nosotros'),
    },
    {
      text: 'Practicas',
      href: getPermalink('/practicas'),
      
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contactanos',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Escribenos', href: 'asistente@fercenabogados.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Menu',
      links: [
        { text: 'Inicio', href: '#' },
        { text: 'Nosotros', href: '#' },
        { text: 'Areas de practica', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Contactanos', href: '#' },
      ],
    },
    {
      title: 'Redes Sociales',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'Whatsapp', href: '#' },
        { text: 'X', href: '#' },
      ],
    },
    {
      title: 'Contactanos',
      links: [
        { text: ' 374-5019', href: '#' },
        { text: 'efernadez@fercenabogados.com', href: '#' },
        { text: 'dcentella@fercenabogados.com', href: '#' },
        { text: 'asistente@fercenabogados.com', href: '#' },
        ],
      },
      { 

      title: 'Direccion',
      links: [
        { text: 'Bella Vista, Calle 47 Este', href: '#' },
        { text: 'Ciudad de Panama, Panama', href: '#' },
      ],
    }
    
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
  <!--
  This image element (<img>) is styled with various utility classes for size, positioning, and appearance.
  - class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm":
    - w-5 h-5: Sets the width and height to 1.25rem (20px) each.
    - md:w-6 md:h-6: Sets the width and height to 1.5rem (24px) each on medium screens and larger.
    - md:-mt-0.5: Applies a negative top margin of 0.125rem (-2px) on medium screens and larger.
    - bg-cover: Ensures the background image covers the entire element.
    - mr-1.5: Adds a right margin of 0.375rem (6px).
    - rtl:mr-0 rtl:ml-1.5: Adjusts margins for right-to-left (RTL) text direction. Sets the right margin to 0 and the left margin to 0.375rem (6px).
    - float-left: Floats the image to the left.
    - rtl:float-right: Floats the image to the right for RTL text direction.
    - rounded-sm: Applies a small border radius for rounded corners.
  - src="/src/assets/images/icono.jpg": Specifies the path to the image file.
  - alt="onWidget logo": Provides alternative text for the image, useful for accessibility.
  - loading="lazy": Defers loading of the image until it is near the viewport, improving page load performance.
  <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/images/icono.jpg" alt="onWidget logo" loading="lazy">
  -->


    <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Fernandez & Centella</a> · Todos los derechos reservados.
  `,
};
