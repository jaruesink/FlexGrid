const path = require('path');
const fs = require('fs');

const export_path = path.resolve(__dirname, 'dist');

const copy_files = [
  '_grid_fixes.scss',
  '_grid_functions.scss',
  '_grid_helpers.scss',
  '_grid_mixins.scss',
  '_grid_variables.scss',
  '_grid.scss',
  'flex_grid.scss'
];

const remove_files = [...copy_files, 'flex_grid.min.css'];

// remove current flex_grid files to rebuild new one
remove_files.forEach((file) => {
  if (fs.existsSync(`${export_path}/${file}`)) {
  fs.unlinkSync(`${export_path}/${file}`);
  }
});

// copy new files to export_path
copy_files.forEach((file) => {
  fs.createReadStream(
    path.resolve(__dirname, `src/styles/${file}`)
  ).pipe(fs.createWriteStream(`${export_path}/${file}`));
});
