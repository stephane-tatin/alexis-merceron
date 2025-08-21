export interface Data {
	id: string;
	title: string;
	path: string;
	texts: string[];
	images: Image[];
	links: {
		desc: string;
		url: string;
	}[];
}

interface Image {
	title: string;
	desc: string;
	path: string;
	width: number;
	height: number;
	src: string;
}
