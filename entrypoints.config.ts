import { defineEntrypoint } from '@a35hie/entrypoints'

export default defineEntrypoint({
  dir: 'dist',
  title: 'ash\'s Discord Themes',
  description: 'My CSS mods for Discord desktop.',
  favicon: 'https://a35hie.me/favicon.ico',
  buttons: [
    {
      type: 'prominent',
      title: 'Learn More',
      icon: 'solar:book-line-duotone',
      href: 'https://l.a35.dev/dmods'
    }
  ]
})
