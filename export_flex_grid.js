const path = require('path');
const fs = require('fs-extra');

const grid = path.resolve(__dirname, 'src/styles/_grid.scss');
const flex_grid = path.resolve(__dirname, 'src/styles/flex_grid.scss');
const grid_variables = path.resolve(__dirname, 'src/styles/_grid_variables.scss');
const export_path = path.resolve(__dirname, 'dist');

// remove current flex_grids to rebuild new one
if (fs.existsSync(`${export_path}/_grid.scss`)) {
	fs.unlinkSync(`${export_path}/_grid.scss`);
}
if (fs.existsSync(`${export_path}/flex_grid.scss`)) {
	fs.unlinkSync(`${export_path}/flex_grid.scss`);
}
if (fs.existsSync(`${export_path}/_grid_variables.scss`)) {
	fs.unlinkSync(`${export_path}/_grid_variables.scss`);
}
if (fs.existsSync(`${export_path}/flex_grid.min.css`)) {
	fs.unlinkSync(`${export_path}/flex_grid.min.css`);
}

// copy new file to export_path
fs.copySync(grid, `${export_path}/_grid.scss`);
fs.copySync(flex_grid, `${export_path}/flex_grid.scss`);
fs.copySync(grid_variables, `${export_path}/_grid_variables.scss`);
