export type ImageData = {
	alt: string;
	thumb: string;
	fullsize: string;
	aspectRatio?: {
		width: number;
		height: number;
	};
};

export type EmbedImageData = {
	type: 'images';
	images: ImageData[];
	sensitive?: boolean;
	onclick?: (image: ImageData) => void;
};

export type EmbedExternalData = {
	type: 'external';
	external: {
		href: string;
		thumb: string;
		title: string;
		description: string;
	};
};

export type EmbedVideoData = {
	type: 'video';
	video: {
		playlist: string;
		thumb: string;
		alt: string;
		aspectRatio?: {
			width: number;
			height: number;
		};
	};
	sensitive?: boolean;
};

export type EmbedRecordData = {
	author: {
		displayName: string;
		handle: string;
		avatar?: string;
		href?: string;
	};
	href?: string;
	htmlContent?: string;
	createdAt?: string;
	embed?: Embed;
	onclick?: (data: EmbedRecordData, href?: string) => void;
	onclickhandle?: (handle: string, href?: string) => void;
};

export type EmbedRecord = {
	type: 'record';
	record: EmbedRecordData;
};

export type UnknownEmbed = {
	type: 'unknown';
} & Record<string, unknown>;

export type Embed =
	| EmbedImageData
	| EmbedExternalData
	| EmbedVideoData
	| EmbedRecord
	| UnknownEmbed;
