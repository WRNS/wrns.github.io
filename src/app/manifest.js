export default function manifest() {
  return {
    name: 'Winton Road Nursery School',
    short_name: 'WRNS',
    description: 'The public website for Winton Road Nursery School (WRNS).',
    start_url: '/',
    display: 'standalone',
    background_color: '#198667',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}