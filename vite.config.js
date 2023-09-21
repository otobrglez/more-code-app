import { defineConfig } from 'vite'


const fileRegex = /\.(csv)$/

function csvToJS() {
  function compileFileToJS(src) {
    const rows = src.split("\n").map((r) => r.split("\,"));
    const out =`export let CSV = ${JSON.stringify(rows)};`;
    return out

  };

  return {
    name: 'transform-csv',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null,
        }
      }
    },
  }
}


export default defineConfig({
  plugins: [csvToJS()],

})
