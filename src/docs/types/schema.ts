import type { Component } from 'svelte';

export type PropType = {
	type: string;
	definition: string | Component;
	stringDefinition: string;
};

export type PropSchema = {
	default?: string;
	type: PropType | string;
	description: string;
	required?: boolean;
	bindable?: boolean;
	linked?: boolean;
	href?: string;
	tooltipContent?: string;
};

export type PropObj<T> = {
	[K in keyof T]-?: PropSchema;
};

export type APISchema<T = Record<string, unknown>> = {
	title: string;
	description: string;
	props?: PropObj<T>;
};
