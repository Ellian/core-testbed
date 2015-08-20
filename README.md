cu-boilerplate-component
========================

> example CU component written in typescript

This example provides a `location` component which was written by [Mehuge](https://github.com/Mehuge) to give a working
example of how to write a component in `ts` and `tsx`

===

Installation
------------

You will need Git on your path. One way to do this is to install [Github For Windows](https://windows.github.com/) and use the "Git Shell" shortcut in your start menu. 

Clone the Repository and run:

```sh
npm install gulp -g
npm install
```

===


Structure
---------

The structure of this example library is as follows:

---

#### `src`

This directory is also where all assets will go, including `ts`, `tsx`, `html`, `styl`, `images` and `audio`.


#### `src/ts/main.tsx` or `src/ts/main.ts`

This is the entry point for the module.
The example `main.tsx` is importing `location.tsx` and rendering the react component.


#### `src/typings/*.d.ts`

This is managed by `tsd`.
To update this file for all node_modules run `tsd link` on the project root.
You can read the guides at [https://github.com/DefinitelyTyped/tsd](https://github.com/DefinitelyTyped/tsd) for more info


===


Developing
----------

The build process is provided by [cu-build-tools](https://github.com/CUModSquad/cu-build-tools#componentlibrary---builder)

The build can be configured in `cu-build.config.js`

You can view the gulp tasks here https://github.com/CUModSquad/cu-build-tools#componentlibrary---builder

===

Visual Studio
-------------

Visual Studio can't currently build Typescript 1.6. In order to manually add support you'll need to do the following:

1. Download and install [node.js.](https://nodejs.org/)
2. From the commandline run `npm install typescript@next -g`.
3. Open `C:\\Program Files (x86)\\Microsoft SDKs\\TypeScript` and make a copy of the `1.5` folder (renaming it to `1.6`).
4. Copy the contents of `%APPDATA%\\npm\\node_modules\\typescript\\lib` to the `1.6` folder, overwriting all files.

