import {
	getEntrypointsFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: await getEntrypointsFromConfig("jsr.jsonc"),
	generateDeclarationMap: true,
	metadata: {
		name: "@hugoalh/is-primitive",
		version: "1.0.3",
		description: "A module to determine whether the item is a primitive.",
		keywords: [
			"is",
			"primitive"
		],
		homepage: "https://github.com/hugoalh-studio/is-primitive-es#readme",
		bugs: {
			url: "https://github.com/hugoalh-studio/is-primitive-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh-studio/is-primitive-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "npm",
	outputDirectoryPreEmpty: true
});
