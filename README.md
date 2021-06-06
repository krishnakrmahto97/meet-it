# Take Me Back to Google Meet
**Version 2.0.0** <br/> <br/>
Go back to Meet tab, Mute and Unmute yourself from anywhere on Chrome using context menus.

## Simple to use
### Same window
![Demo](./static/back-to-google-meet-same-window.gif)

### Multiple windows
![Demo](./static/back-to-google-meet-multi-window.gif)

## Installation
1. Clone the repo
2. Go to [chrome://extensions](chrome://extensions)
3. Make sure `Developer mode` is toggled to on
4. Click `Load Unpacked`
5. Select the `dist/` directory from cloned files; done.
6. [More](https://developer.chrome.com/docs/extensions/mv3/getstarted/) on using unpacked extension

## Uninstall
Click `Remove` on the extension card from [chrome://extensions](chrome://extensions)

## Build your changes
The `dist/ ` director is all that you need to load on Chrome.
However, if you add your changes and want to see how it works out, you'll have to run the following on your terminal:
```sh
yarn
yarn build
```
`yarn` installs all the packages required by the project, and should be run only the first time. `yarn build` will update the `dist/` directory with all the js files along with your changes.

