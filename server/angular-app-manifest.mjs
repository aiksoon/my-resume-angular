
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aiksoon.github.io/my-resume-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-resume-angular"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-resume-angular",
    "route": "/my-resume-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 761, hash: '00dff01f5685a553730e6aeff2531e132cae998b80cfbe9fe290e539046c3536', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '96bf7cb5ae78acb7fb78419673e86a7e38194645226b18ec88784fc16d036ffb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3385, hash: 'b406b18bae3580fe6741b954208ddb3d6b4e501868ac33d10331f66c5960b854', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3811, hash: 'a79362be23d205c7f82079318ca6ed6bf70436664e93729c83ebb7861baf3a22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 4227, hash: '9be83e0185099b3b6f190684c36597deac4600fb4747f9f933a1ed16fa8b4cf1', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'styles-27YI3TIF.css': {size: 1077, hash: 'VOZY8giP6As', text: () => import('./assets-chunks/styles-27YI3TIF_css.mjs').then(m => m.default)}
  },
};
