import type { Component } from 'svelte';

export type PropType = {
	type: string;
	definition: string | Component;
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
	description?: string;
	props?: PropObj<T>;
};

export type ComponentSource = {
	href: string;
	label: string;
	package?: string;
	component?: string;
};

export type ComponentDoc = {
	slug: string;
	title: string;
	docs: Component;
	example?: Component;
	card?: Component;
	api?: APISchema[];
	sources?: ComponentSource[];
};

