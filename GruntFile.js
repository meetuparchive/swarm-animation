module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const DOCS_SRC = 'docs/src/',
		DOCS_DEST = 'docs/dest/',
		TEST_DEST = 'test/build/';

	const WATCH_PATHS = [
		'docs/index.html',
		'docs/templates/**/*.*',
		'scss/**/*.scss'
	];

	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),

		'clean': {
			css: ['dist/*.css', 'docs/processed'],
			test : ['test/build'],
			js: ['dist/*.js']
		},

		'sass': {
			dist: {
				files: {
					'dist/animation.css': 'src/animation.scss',
					// for jekyll
					'docs/src/css/animation.css': 'src/animation.scss',
					'docs/src/css/doc_styles.css': DOCS_SRC + 'css/doc_styles.scss',
					'docs/dest/css/animation.css': 'src/animation.scss',
					'docs/dest/css/doc_styles.css': DOCS_SRC + 'css/doc_styles.scss',
					'docs/dest/css/jekyll-github.css': DOCS_SRC + 'css/jekyll-github.css' // this doesnt need processing, just mv to dest
				}
			}
		},

		'webpack': {
			test: {
				// use babel loader to turn es6 to js for
				// test/build dir
				entry: {
					lib: ['./src/js/lib.js'],
					spec: './test/js/DummySpec.js',
				},
				// resolve: {},
				output: {
					path: './' + TEST_DEST,
					filename: '[name]_compiled.js'
				},
				module: {
					loaders: [{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader'
					}]
				}
			}
		},

		'webpack-dev-server': {},

		'connect': {
			jasmine_site: {
				options: {
					/*
					base: {
						path: './',
						options: {
							index: './test/build/SpecRunner.html'
						}
					},*/
					port: 8888
				}
			}
		},

		'jasmine': {
			src:  TEST_DEST + 'lib_compiled.js',
			options: {
				specs: TEST_DEST + 'spec_compiled.js',
				outfile: TEST_DEST + 'SpecRunner.html',
				keepRunner: true
				// host: 'http://127.0.0.1:8000/'
			}
		},

		'preprocess': {
			// preprocess docs
			options: {
				context: {
					VERSION: '<%= package.version %>',
					DESCRIPTION: '<%= package.description %>',
					SQ2_URL: 'https://meetup.github.io/sassquatch2/bundle/sassquatch.css',
					FONT_URL: 'https://secure.meetupstatic.com/fonts/graphik.css'
				},
			},
			docs: {
				files: {
					// doc.html seldon --> index.html
					'docs/src/index.html': DOCS_SRC + 'doc.html'
				}
			}
		},

		'gh-pages': {
			options: {
				base: DOCS_DEST
			},
			src: ['**']
		},

		'exec': {
			options: {
				shell: 'bash'
			},
			seldon: 'node node_modules/seldon/seldon.js seldon.config.json'
		},

		'watch': {
			files: WATCH_PATHS,
			tasks: ['local-docs']
		},
	});

	// TODO grunt copy for js, lint, uglify?
	grunt.registerTask('compile', ['clean', 'sass', 'webpack']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('local-docs', [ 'compile', 'exec:seldon', 'preprocess']);
	grunt.registerTask('docs', ['local-docs', 'gh-pages']);
	grunt.registerTask('test', ['clean:test', 'webpack', 'jasmine', 'connect:jasmine_site:keepalive']);
	grunt.registerTask('travis', ['clean:test', 'webpack', 'jasmine']);
};
