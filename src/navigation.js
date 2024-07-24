import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import Image from 'astro/components/Image.astro';

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
      href: getPermalink('/contact'),
    },

    { text:'Resenas',
      href: getPermalink('/resenas'),
    };
  ],
  actions: [{ text: 'Escribenos', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Menu',
      links: [
        { text: 'Inicio', href: '/' },
        { text: 'Nosotros', href: 'nosotros' },
        { text: 'Areas de practica', href: 'Areas' },
        { text: 'Blog', href: 'Blog' },
        { text: 'Contactanos', href: 'contact' },
        { text:'Abogados y reseñas', href:'reseñas' }
      ],
    },
    {
      title: 'Redes Sociales',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'Whatsapp', href: '+507 6637-4357' },
        { text: 'X', href: '#' },
      ],
    },
    {
      title: 'Contactanos',
      links: [
        { text: '+507 374-5019', href: '#' },
        { text: '+507 6637-4357', href: '#' },
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
    <Image class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://i.imgur.com/97pXs1x.jpeg" alt="onWidget logo" loading="lazy"></Image>
    <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Fernandez & Centella</a> · Todos los derechos reservados.
  `,
};
