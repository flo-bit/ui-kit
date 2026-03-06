import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'DownloadButton',
		description: 'A button that triggers a file download with a title and optional description.',
		props: {
			title: {
				type: 'string',
				description: 'The display title of the download.',
				required: true
			},
			description: {
				type: 'string',
				description: 'Optional description text below the title.'
			},
			fileUrl: {
				type: 'string',
				description: 'The URL of the file to download.',
				required: true
			},
			fileName: {
				type: 'string',
				description: 'The name for the downloaded file. Defaults to the filename parsed from fileUrl.'
			}
		}
	}
] satisfies APISchema[];
