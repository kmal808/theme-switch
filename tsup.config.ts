import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'], // Build for commonJS and ESmodules
	dts: true, // Generate declaration file (.d.ts)
	splitting: false,
	sourcemap: true,
	clean: true,
	external: ['react', 'lucide-react'],
	noExternal: [],
	platform: 'browser',
	target: ['es2015', 'node14'],
	treeshake: true,
	minify: true,
	esbuildOptions(options) {
		options.bundle = true
		options.inject = ['./react-shim.js']
		options.define = {
			'process.env.NODE_ENV': JSON.stringify(
				process.env.NODE_ENV || 'production'
			),
		}
	},
})
