/** @format */

import IconCloud from "./ui/icon-cloud";

const slugs = [
	"typescript",
	"javascript",
	"react",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"docker",
	"git",
	"github",
	"gitlab",
	"visualstudiocode",
	"figma",
	"firebase",
];

function IconCloudDemo() {
	return (
		<div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
			<IconCloud iconSlugs={slugs} />
		</div>
	);
}

export default IconCloudDemo;
