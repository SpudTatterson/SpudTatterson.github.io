const legacyPath = window.location.pathname.replace(/\/+$/, '')

let destination = 'https://geckrekt.com/'

if (legacyPath.endsWith('/check-email')) {
  destination = 'https://geckrekt.com/check-email/'
} else if (legacyPath.endsWith('/confirmed')) {
  destination = 'https://geckrekt.com/confirmed/'
}

window.location.replace(destination + window.location.search + window.location.hash)
