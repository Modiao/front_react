export function getEnv() {
    return ['localhost', '127.0.0.1', '//test'].find(url =>
      document.URL.includes(url),
    )
      ? 'dev'
      : 'prod';
  }