# maplibre-tsc-skiplibcheck

Instructions to reproduce:

```shell
npm install
npm run build:tsc
```

You should see the following output:

```shell
../../node_modules/@types/css-font-loading-module/index.d.ts:22:9 - error TS2717: Subsequent property declarations must have the same type.  Property 'display' must be of type 'FontDisplay', but here has type 'string'.

22         display?: string | undefined;
           ~~~~~~~

  node_modules/typescript/lib/lib.dom.d.ts:557:5
    557     display?: FontDisplay;
            ~~~~~~~
    'display' was also declared here.

../../node_modules/@types/css-font-loading-module/index.d.ts:42:9 - error TS2717: Subsequent property declarations must have the same type.  Property 'display' must be of type 'FontDisplay', but here has type 'string'.

42         display: string;
           ~~~~~~~

  node_modules/typescript/lib/lib.dom.d.ts:8609:5
    8609     display: FontDisplay;
             ~~~~~~~
    'display' was also declared here.


Found 2 errors in the same file, starting at: ../../node_modules/@types/css-font-loading-module/index.d.ts
```