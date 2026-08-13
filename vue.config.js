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
      title: 'GECK REKT — Coming Soon'
    },
    geckRekt: {
      entry: 'src/geck-wrecked/main.ts',
      template: 'public/geck-wrecked.html',
      filename: 'geck-rekt/index.html',
      title: 'GECK REKT — Coming Soon'
    },
    geckRektCompact: {
      entry: 'src/geck-wrecked/main.ts',
      template: 'public/geck-wrecked.html',
      filename: 'geckrekt/index.html',
      title: 'GECK REKT — Coming Soon'
    },
    geckWreckedCheckEmail: {
      entry: 'src/geck-wrecked/confirmation.ts',
      template: 'public/geck-wrecked-confirmation.html',
      filename: 'geck-wrecked/check-email/index.html',
      title: 'Check Your Email — GECK REKT'
    },
    geckWreckedConfirmed: {
      entry: 'src/geck-wrecked/confirmation.ts',
      template: 'public/geck-wrecked-confirmation.html',
      filename: 'geck-wrecked/confirmed/index.html',
      title: 'You’re In — GECK REKT'
    }
  }
}
