module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      PrepareLibrary : 'app/components/PrepareLibrary.jsx',
      PrepareLibraryForm : 'app/components/PrepareLibraryForm.jsx',
      PrepareLibraryMessage : 'app/components/PrepareLibraryMessage.jsx',
      SingleDocking: 'app/components/SingleDocking.jsx',
      drugdesignApi: 'app/api/drugdesignApi.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
