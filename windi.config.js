import { defineConfig } from '@windicss/plugin-utils';
// import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: {
    prefix: 'w:'
  },
  safelist: [],
  shortcuts: {
    'x-y-full': 'h-100vh w-100vw',
    'border-area': 'border border-blue1 rounded p-4',
    clickable: ' hover:shadow-lg active:(shadow-inner shadow-gray-500) cursor-pointer'
  },
  theme: {
    extend: {
      backgroundColor: {
        'menu-blue1': '#4696FF',
        'menu-blue2': '#A8D2F8',
        'table-brown1': '#C88E2A',
        'table-gray1': '#8C7D97',
        'table-gray2': '#E5E5E5',
        'btn-green1': '#14849B',
        'btn-gray1': '#7B8A97',
        'btn-red1': '#C52D2D',
        'btn-brown1': '#D88D09',
        'page-blue1': '#EFF4FC'
      },
      textColor: {
        'menu-text1': '#1E3E80'
      },
      borderColor: {
        blue1: '#7B88C5',
        gray1: '#C7C0C0'
      }
    }
  }
});
