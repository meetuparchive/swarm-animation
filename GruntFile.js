module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const DOCS_SRC = 'docs/src/',
		DOCS_DEST = 'docs/dest/',
		TEST_DEST = 'test/build/';

	const WATCH_PATHS = [
		'docs/templates/**/*.*',
		'src/*.scss',
		'src/js/*.js'
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
					// for docs
					'docs/dest/css/animation.css': DOCS_SRC + 'css/animation.scss',
					'docs/dest/css/doc_styles.css': DOCS_SRC + 'css/doc_styles.scss',
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
					base: {
						path: './test/build',
						options: {
							index: './test/build/SpecRunner.html'
						}
					},
					port: 8888
				}
			},
            docs: {
				options: {
                    base: {
						path: DOCS_DEST,
						options: {
							index: 'index.html'
						}
					},
					port: 8111,
                    keepalive: true
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
					'docs/dest/index.html': DOCS_DEST + 'doc.html'
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
	grunt.registerTask('_docs', [ 'compile', 'exec:seldon', 'preprocess']);
	grunt.registerTask('local-docs', [ '_docs', 'connect:docs']);
	grunt.registerTask('docs', ['_docs', 'gh-pages']);
	grunt.registerTask('test', ['clean:test', 'webpack', 'jasmine', 'connect:jasmine_site:keepalive']);
	grunt.registerTask('travis', ['clean:test', 'webpack', 'jasmine']);
};
