# LokaTables plug-in for jQuery

LokaTables is a basic responsive table that allows you to create tables without losing the headers of your tables.

## Installation

In most cases, to use LokaTables all you need to do is include jQuery, the LokaTables Javascript in your HTML page. 


## Usage

In its simplest case, LokaTables can be initialised with a single line of Javascript:

```js
	lokatable = new LokaTable(); // allow all table tags
```

where the jQuery selector is used to obtain a reference to the table you want to enhance with LokaTables. Optional configuration parameters can be passed in to DataTables to have it perform certain actions by using a configuration object as the parameter passed in to the DataTables constructor. For example:

```js
lokatable = new LokaTable({
	'id':'table',
	'minWidth': 400,
	'maxHeight': 100,
}); 
```

### id
	
The id param allows you to enhace one table with the Lokatables plugin, by default all table tags will be enhace with Lokatables

### minWidth

The minWidth param allows the scroll-x to scroll in your table, this is for when you want responsive tables. the default width is 400

### maxHeight

The maxHeight params makes flexible height tables by default is 100