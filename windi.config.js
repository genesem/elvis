
// import { defineConfig } from 'windicss/helpers'
import typhography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'
import aspect from 'windicss/plugin/aspect-ratio'
import filters from 'windicss/plugin/filters'
//import line-clamp from 'windicss/plugin/line-clamp'
//import scroll-snap from 'windicss/plugin/scroll-snap'


//export default defineConfig({
export default {
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [
    typhography,
    forms,
    filters,
	//line-clamp,
    //scroll-snap
  ],
}
//})
