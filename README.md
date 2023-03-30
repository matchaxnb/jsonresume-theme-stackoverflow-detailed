# Stack Overflow Detailed theme for jsonresume [![npm version](https://badge.fury.io/js/jsonresume-theme-stackoverflow.svg)](http://badge.fury.io/js/jsonresume-theme-stackoverflow-detailed)

Derivative of [jsonresume-theme-stackoverflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow)
## Getting started

### Install the command line

Create your resume in json on [jsonresume](https://jsonresume.org)

The official [resume-cli](https://github.com/jsonresume/resume-cli) to run the development server.

Go ahead and install it:

```
npm install -g resume-cli
```

### Install and serve theme

Clone the repository

```
git clone https://github.com/matchaxnb/jsonresume-theme-stackoverflow-detailed.git
```

Create a 'resume.json' file in the current folder and follow the [json resume schema](https://jsonresume.org/schema/)

Simply run:

```
resume serve --theme .
```

### Social Profiles Icons

**Profiles supported with brand colors:**

Please note that all the [Font awesome brands icons](https://fontawesome.com/search?s=brands) are supported. Although only the ones listed below have a color code associated with it in my CSS file:

github, stack-overflow, linkedin, dribbble, twitter, facebook, pinterest, instagram, soundcloud, wordpress, youtube, flickr, google plus, tumblr, foursquare.

To have a social icon close the social link profile (or username) it is enough to set a `network` the name of the Social Network (es: 'Stack Overflow'). I am replacing spaces with dashes (`-`) and transforming all the network name to all lowercase to match the Font awesome naming convention for brands icons.

### Support for extra fields

With the stackoverflow theme it is possible to add:

- `keywords` to each 'work', 'publication' and 'volunteer' item
- `summary` to each 'interests' and 'education' item
- `birth` to 'basics' (might be commonly used in Europe)

example of the extra `birth` object:

```
"birth": {
  "place": "New York",
  "state": "USA",
  "date": "1988"
}
```

This detailed theme adds a `details` field to each 'skills' item. This allows you to enter a list of details of where you used that skill.
You may also specify `subskills` in each 'skills' item that take `name` and `level` properties, allowing to specify mastership more granularly.

This detailed theme also adds a `more_info` field to 'basics' that you may set to redirect to another version of the resume, more complete.

### Supported mastery levels

The following levels are supported:

- `beginner` = `basic` (will show in blue)
- `intermediate` (will show in orange)
- `advanced` = `fluent` = `fully proficient` (will show in darker green)
- `master` = `native speaker` = `expert` = `bilingual` (will show in lighter green)

### Date helpers

In order to better render date ranges, two helpers have been added and are in use in the templates.

`RIGHTDATE` gives the properly accurate formatting of a date based on the input length:
- 4 characters are parsed as just the year,
- up to 7 characters are considered as year + month
- more than 7 characters is a full date
- providing "9999" as date causes the string "Continuous" to be returned, while "8999" returns "Current". If you need a date within these years, please provide them with more accuracy so they can be displayed.

`DATESPANMY` takes the startDate and endDate parameters and does the following:
- if both are undefined, the `undefined` value is returned
- if one is undefined but not the other, then `RIGHTDATE(startDate || endDate)` is returned, to provide the most accurate representation of the provided date
- if their string renderings are identical, only one occurence of that identical string is returned. i.e. if you pass it arguments "2022-01, 2022-01", the output will be "Feb 2022" and not "Feb 2022 - Feb 2022"
- otherwise a string "RIGHTDATE(startDate) - RIGHTDATE(endDate)" with the most accurate date representations is issued. 

Due to the way date precision is managed, it is advised to avoid specifying day of month in dates when it makes little sense semantically speaking.

### Logical operators

Two logical operators have been added: `and` and `or`. Example uses are visible in various templates, for example `education.hbs` uses it as follows:

```hbs
{{#if (and startDate endDate)}}
<span class="rangeDate">{{DATESPANMY startDate endDate}}</span>
{{/if}}
```

## Contribution

Fork the project, add your feature (or fix your bug) and open a pull request OR

[Open an issue](https://github.com/francescoes/jsonresume-theme-stackoverflow/issues/new) if you find find or if you would like to have extra fields or changes 

## License

Available under the [MIT license](http://opensource.org/licenses/mit-license.php).
