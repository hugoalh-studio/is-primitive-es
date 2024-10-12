import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.exports,
	generateDeclarationMap: true,
	metadata: {
		name: "@hugoalh/is-primitive",
		version: configJSR.version,
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
