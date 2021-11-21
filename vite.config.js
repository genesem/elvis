
import { svelte } from '@sveltejs/vite-plugin-svelte';
import WindiCSS from "vite-plugin-windicss";

const inputDir = process.env.INPUTDIR || "src";
const outDir = process.env.OUTDIR || "dist";
const outMaps = (process.env.OUTMAPS=='true') || false;  // otherwise false considered as string
const assetsDir = 'assets'; // default is 'assets'

console.log("inputDir", inputDir);
console.log("outDir", outDir);
console.log("outMaps", outMaps);
console.log("NODE_ENV", process.env.NODE_ENV);

// https://vitejs.dev/config/
export default {
  plugins: [
				
		WindiCSS({configPath: './windi.config.js'}),

  		svelte({
			/* plugin options */
			// configFile: 'svelte.config.js' // it is default
			// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md
		}),

  ],

  // root: "src",
  clearScreen: false, // This is to show Eleventy output in the console along with Vite output

  rollupDedupe: ['svelte'],

  build: {

    // This is important: Generate directly to _site and then assetsDir.
    // You could opt to build in an intermediate directory,
    // and have Eleventy copy the flies instead.
    outDir: outDir,
    assetsDir:  assetsDir, // default is 'assets'

    // Sourcemaps not critical for this to work
    sourcemap: outMaps,


    // This is critical: generate manifest.json in outDir
    manifest: true,

    // This is the default assetsDir. If you are using assets
    // for anything else, consider renaming assetsDir.
    // This can help you set cache headers for hashed output more easily.
    // assetsDir: "assets",

    rollupOptions: {
      // This is critical: overwrite default .html entry
      input: "/src/client/main.js",
    },

  },

  server: {

    // host: '127.0.0.1',  // default '127.0.0.1'
    port: 3000, // default 3000
    strictPort: true,  // don't try to use another avail. port

  	cors: {
		"origin": "*",
		"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
		"preflightContinue": false,
	    "optionsSuccessStatus": 204
  	},

  	// middlewareMode: 'html' 
  	// https://vitejs.dev/config/#server-middlewaremode
  }

}
