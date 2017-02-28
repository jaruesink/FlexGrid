const path = require('path');
const fs = require('fs-extra');

const flex_grid = path.resolve(__dirname, 'src/styles/flex_grid.scss');
const export_path = path.resolve(__dirname, 'dist');

// remove current flex_grid to rebuild new one
fs.unlinkSync(`${export_path}/flex_grid.scss`);
fs.unlinkSync(`${export_path}/flex_grid.min.css`);

// copy new flex_grid to export_path
fs.copySync(flex_grid, `${export_path}/flex_grid.scss`);
