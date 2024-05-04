import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Practicas',
      
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contactanos',
      href: '#',
    },
  ],
  actions: [{ text: 'Escribenos', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
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
        { text: '+5076070-2162', href: '#' },
        { text: '+5076249-5039', href: '#' },
        { text: 'efernadez@fercenabogados.com', href: '#' },
        { text: 'dcentella@fercenabogados.com', href: '#' },
        { text: 'asistente@fercenabogados.com', href: '#' },
        ],
      },
      { 

      title: 'Direccion',
      links: [
        { text: 'Calle 50, Edificio Global Bank, Piso 25, Oficina 2501', href: '#' },
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/images/Icono Fernandez y Centella- JPG.jpg" alt="onWidget logo" loading="lazy"></img>
    <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Fernandez & Centella</a> · Todos los derechos reservados.
  `,
};
