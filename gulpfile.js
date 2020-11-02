const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify-es").default;

function styles() {
  return gulp.src([
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "./assets/scss/**/*.scss"
  ])
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(concat("styles.css"))
  .pipe(autoprefixer())
  .pipe(cleanCSS({ level: 2 }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("assets/css"))
  .pipe(browserSync.stream())
}

function scripts() {
  return gulp.src([
    "node_modules/jquery/dist/jquery.slim.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "./assets/js/common.js"
  ])
  .pipe(sourcemaps.init())
  .pipe(concat("scripts.min.js"))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("assets/js"))
  .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "assets"
    }
  })

  gulp.watch("assets/**/*.html").on("change", browserSync.reload);
  gulp.watch("assets/scss/**/*.scss", gulp.series(styles));
  gulp.watch("assets/js/common.js", gulp.series(scripts));
}

function build(done) {
  gulp.src(["assets/*.html", "assets/*.php"])
    .pipe(gulp.dest("dist"));

  gulp.src("assets/css/style.css")
    .pipe(gulp.dest("dist/css"))

  gulp.src("assets/js/scripts.min.js")
    .pipe(gulp.dest("dist/js"));

  gulp.src("assets/fonts/**")
    .pipe(gulp.dest("dist/fonts"));

  gulp.src("assets/images/**")
    .pipe(gulp.dest("dist/images"));

  done();
}

exports.default = gulp.series(gulp.parallel(styles, scripts), watch);
exports.build = gulp.series(gulp.parallel(styles, scripts), build);
