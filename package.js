Package.describe({
  name: 'alxstx:meteor-skel',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/alxstx/meteor-skel',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.addFiles('bower_components/skel/dist/skel.min.js', 'client');
});
