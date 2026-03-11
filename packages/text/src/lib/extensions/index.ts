export { HashtagDecoration } from '../components/hashtag-decoration';

// Re-export commonly used tiptap extensions so consumers
// don't need direct @tiptap/* dependencies.
export { default as Link } from '@tiptap/extension-link';
export { default as Placeholder } from '@tiptap/extension-placeholder';
export { default as History } from '@tiptap/extension-history';
export { default as Underline } from '@tiptap/extension-underline';
export { default as Strike } from '@tiptap/extension-strike';
// Re-export core tiptap types
export type { JSONContent, Content, Extensions } from '@tiptap/core';
