Package.describe({
  name: 'yogiben:autoform-tags-toggle',
  summary: 'Select tags with autoForm',
  version: '0.0.1',
  git: 'https://github.com/yogiben/meteor-autoform-tags-toggle'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
  	'templating',
  	'reactive-var',
  	'coffeescript',
  	'aldeed:autoform@5.5.1'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-tags-toggle.html',
    'lib/client/autoform-tags-toggle.coffee',
  	'lib/client/autoform-tags-toggle.css'
  ]);
});
