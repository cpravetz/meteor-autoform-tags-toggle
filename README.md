Autoform Tags Toggle
============

User can togggle predefined tags.

![alt tag](https://raw.githubusercontent.com/yogiben/meteor-autoform-tags-toggle/master/readme/screenshot1.png)

###Setup###
1) Install `meteor add yogiben:autoform-tags-toggle`

2) Define your schema and set the `autoform` property like in the example below
```coffeescript
Schemas = {}

@Entries = new Meteor.Collection('entries');

Schemas.Entries = new SimpleSchema
	title:
		type:String
		max: 60

	tags:
		type: [String]
		autoform:
			type: 'tags-toggle'
			afFieldInput:
				tags: [
					'music',
					'book',
					# alternatively you can set different label than tag value:
					{ label: 'Movies', value: 'movies' }
				]

Entries.attachSchema(Schemas.Entries)
```

3) Generate the form with `{{> quickform}}` or `{{#autoform}}`

e.g.
```
{{> quickForm collection="Entries" type="insert"}}
```

or

```
{{#autoForm collection="Entries" type="insert"}}
    {{> afQuickField name="title"}}
    {{> afQuickField name="tags"}}
    <button type="submit" class="btn btn-primary">Insert</button>
{{/autoForm}}
```

Alternatively if you want to save tags as comma separated string, use this schema:

```coffeescript
Schemas.Entries = new SimpleSchema
	title:
		type:String
		max: 60

	tags:
		type: String
		autoform:
			afFieldInput:
				type: 'tags-toggle'
				tags: [
					'music',
					'book',
					# alternatively you can set different label than tag value:
					{ label: 'Movies', value: 'movies' }
				]
```
