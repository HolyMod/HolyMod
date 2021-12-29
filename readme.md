# Holymod
> A lightweight client mod focused on simplicity and performance. Adds ability to load custom JS, TS, Coffee plugins and CSS/SCSS themes.
## Requirements
- [Kernel](https://github.com/kernel-mod) electron clientmod.
- [Git](https://git-scm.com/) client
- [NodeJS](https://nodejs.org/) runtime
- Package mnager such as [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) *(recommended)*

# Installation
* Clone this repository into your kernel `packages` folder. (`git clone https://github.com/HolyMod/HolyMod` in your terminal.)
* Install NodeJS dependencies using `pnpm i` / `npm i`
* Restart your client (close from tray if it's opened there) and you're done.
* Enjoy.

# Installing plugins and themes
* Git clone the plugin/theme inside your `plugins` / `themes` folder.
* If a plugin requires you to, reload your client via `Ctrl + R` / `Cmd + R`

# Creating plugins and themes
* Look inside the [examples](https://github.com/HolyMod/HolyMod/tree/master/examples) folder for a example you need.

# Building manually
* Run `pnpx webpack --env=mode=(context)`<br>
Available contexts are: `main`, `preload`, `renderer`.