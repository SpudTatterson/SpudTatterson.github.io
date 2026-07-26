module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    geckWrecked: {
      entry: 'src/geck-wrecked/main.ts',
      template: 'public/geck-wrecked.html',
      filename: 'geck-wrecked/index.html',
      title: 'GECK WRECKED — Coming Soon'
    },
    geckWreckedCheckEmail: {
      entry: 'src/geck-wrecked/confirmation.ts',
      template: 'public/geck-wrecked-confirmation.html',
      filename: 'geck-wrecked/check-email/index.html',
      title: 'Check Your Email — GECK WRECKED'
    },
    geckWreckedConfirmed: {
      entry: 'src/geck-wrecked/confirmation.ts',
      template: 'public/geck-wrecked-confirmation.html',
      filename: 'geck-wrecked/confirmed/index.html',
      title: 'You’re In — GECK WRECKED'
    }
  }
}
