module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const	DOCS_SRC = 'docs/src/',
			DOCS_DEST = 'docs/dest/',
			TEST_DEST = 'test/build/';

	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),

		'clean': {
			test : ['test/build'],
			css: ['dist/*.css'],
			js: ['dist/*.js']
		},

		'sass': {
			dist: {
				files: {
					'dist/animation.css': 'src/animation.scss',
					'docs/dest/css/animation.css': 'src/animation.scss',
					'docs/dest/css/elements.css': DOCS_SRC + 'css/elements.scss'
				}
			}
		},

		'webpack': {
			test: {
				// use babel loader to turn es6 to js for 
				// test/build dir
				entry: {
					'lib': ['./src/js/lib.js'],
					'spec': './test/js/DummySpec.js',
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
					'VERSION': '<%= package.version %>',
					'DESCRIPTION': '<%= package.description %>',
					'CSS_SASSQUATCH': 'https://meetup.github.io/sassquatch2/bundle/sassquatch.css',
					'CSS_FONT': 'https://secure.meetupstatic.com/fonts/graphik.css'
				},
			},
			docs: {
				src: DOCS_SRC + 'index.html',
				dest: DOCS_DEST + 'index.html'
			}
		},

		'gh-pages': {
			options: {
				base: 'docs'
			},
			src: ['**']
		}
	});

	// TODO grunt copy for js, lint, uglify?
	grunt.registerTask('compile', ['clean', 'sass', 'webpack']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('docs', ['compile', 'preprocess', 'gh-pages']);
	// grunt.registerTask('test', ['babel:test', 'webpack', 'jasmine', 'connect:jasmine_site:keepalive']);
	grunt.registerTask('test', ['clean:test', 'webpack', 'jasmine', 'connect:jasmine_site:keepalive']);
	grunt.registerTask('travis', ['clean:test', 'webpack', 'jasmine']);
};
