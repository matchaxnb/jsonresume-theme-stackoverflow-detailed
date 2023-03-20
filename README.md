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

#### Support for extra fields

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
#### Supported mastery levels

The following levels are supported:

- `beginner` = `basic` (will show in blue)
- `intermediate` (will show in orange)
- `advanced` = `fluent` = `fully proficient` (will show in darker green)
- `master` = `native speaker` = `expert` = `bilingual` (will show in lighter green)
## Contribution

Fork the project, add your feature (or fix your bug) and open a pull request OR

[Open an issue](https://github.com/francescoes/jsonresume-theme-stackoverflow/issues/new) if you find find or if you would like to have extra fields or changes 

## License

Available under the [MIT license](http://opensource.org/licenses/mit-license.php).
