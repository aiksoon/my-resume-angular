
export default {
  basePath: 'https://aiksoon.github.io/my-resume-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
