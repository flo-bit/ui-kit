const text =
  "'backdrop-blur-lg bg-accent-100/70 shadow-lg transform-all inset-shadow-sm inset-shadow-accent-700/10 dark:inset-shadow-accent-500/5 shadow-accent-500/10 dark:shadow-accent-500/5 dark:bg-accent-950/40 [&>div:first-of-type]:text-accent-800 [&>svg]:text-accent-700 dark:[&>svg]:text-accent-400 dark:[&>div:first-of-type]:text-accent-300 text-accent-800 dark:text-accent-300 border-accent-500/20 dark:border-accent-500/10',";

const replaceColor = (color: string) => {
  return color + ':' + text.replaceAll('accent', color);
};

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
];

const result = colors.map(replaceColor).join('\n');

console.log(result);
