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



    <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Fernandez & Centella</a> · Todos los derechos reservados.
  `,
};
