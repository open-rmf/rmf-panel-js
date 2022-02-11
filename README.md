# rmf-panel-js

![](https://github.com/open-rmf/rmf-panel-js/workflows/gh-page/badge.svg)

Front end rmf_demos_panel for [rmf demos](https://github.com/open-rmf/rmf_demos/)

Open link here: https://open-rmf.github.io/rmf-panel-js/

This frontend interface is meant for quick testing of rmf. For serious user, please refer to: 
[rmf-web](https://github.com/open-rmf/rmf-web/)

## Run local server

### Build Instructions

```bash
npm install --prefix rmf_panel
npm run build --prefix rmf_panel
```

### Run

```bash
cd rmf_panel
python3 -m http.server 3000
```
Then open http://localhost:3000/ on browser
