// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'KASTOR UI',
      //social: { github: 'https://github.com/withastro/starlight',},
      logo: {
        src: './src/assets/kastorUI.webp',
        replacesTitle: true, // Establece en true si el logotipo incluye el título del sitio
      },
      sidebar: [
        {
          label: 'Componentes-k2',
          items: [
            { label: 'Alertas flotantes', slug: 'componentes-k2/alertas-flotantes', badge: { text: 'Estable', variant: 'success' } },
            { label: 'Alertas de texto', slug: 'componentes-k2/alertas-de-texto', badge: { text: 'Estable', variant: 'success' } },
            { label: 'Badge o etiquetas', slug: 'componentes-k2/badge', badge: { text: 'Estable', variant: 'success' } },
            { label: 'Tooltips', slug: 'componentes-k2/tooltips', badge: { text: 'Test', variant: 'caution' } },
            { label: 'Modals', slug: 'componentes-k2/modals', badge: { text: 'Test', variant: 'caution' } },
            { label: 'Botones', slug: 'componentes-k2/botones', badge: { text: 'Test', variant: 'caution' } },
          ],
        },
        {
          label: 'Guía',
          items: [
            { label: 'Guía de ejemplo', slug: 'guides/example' },
          ],
        },
        {
          label: 'Referencia',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
