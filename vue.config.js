module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/views/home/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html'
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    about: 'src/views/about/main.js'
  }
}
