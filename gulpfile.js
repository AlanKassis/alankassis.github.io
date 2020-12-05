const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css
function style() {
  return (
    //where is scss file?
    gulp
      .src("./scss/*.scss")
      //pass file through the sass compiler
      .pipe(sass())
      //where do I save the compiled css
      .pipe(gulp.dest("./css"))
      //stream changes to all browserSync
      .pipe(browserSync.stream())
  );
}

function watch() {
  //Initialize the browserSync with a server object with baseDir and index props
  browserSync.init({
    server: {
      proxy: "Users/alankassis/Documents/atom/alankassis.github.io",
      index: "index.html"
    }
  })
  // Tell it what to watch
  gulp.watch("/Users/alankassis/documents/atom/alankassis.github.io/**/*.scss", style);
  // Tell it to reload
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp.watch("./**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
