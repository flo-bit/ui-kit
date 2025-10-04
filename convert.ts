const text =
  "'backdrop-blur-md backdrop-brightness-105 shadow-lg transform-all shadow-accent-500/5 dark:shadow-accent-500/2 disabled:shadow-md active:shadow-md focus-visible:inset-shadow-accent-500/15 inset-shadow-sm inset-shadow-accent-700/5 dark:inset-shadow-accent-500/2 focus-visible:outline-accent-500 border border-accent-500/15 dark:border-accent-500/15 hover:bg-accent-200/60 dark:hover:bg-accent-950/30 bg-accent-200/50 dark:bg-accent-950/20 text-accent-800 dark:text-accent-400',";
const replaceColor = (color: string) => {
  return color + ':' + text.replaceAll('accent', color);
};

const colors = [
  'base',
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
