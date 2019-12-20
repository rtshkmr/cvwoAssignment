# Ritesh Kumar A0201829H

**_[contents:]_**

- [Ritesh Kumar A0201829H](#ritesh-kumar-a0201829h)
  - [Plan for CVWO Assignment:](#plan-for-cvwo-assignment)
    - [Resources](#resources)
  - [== Overall TODOs ==](#overall-todos)
  - [== KEYWORDS TOLEARN ==](#keywords-tolearn)
  - [== ACTUAL TASKS ==](#actual-tasks)
  - [== specification ==](#specification)
  - [== other checklists ==](#other-checklists)
- [INSTRUCTIONS:](#instructions)
  - [Required Understanding](#required-understanding)
  - [Brainstorming for features](#brainstorming-for-features)
  - [Setting Things Up](#setting-things-up)
    - [Mon Dec 16 13:04:56 +08 2019](#mon-dec-16-130456-08-2019)
    - [Fri Dec 20 14:58:57 +08 2019](#fri-dec-20-145857-08-2019)

## Plan for CVWO Assignment:

### Resources

- [solo project planning](https://m.mattmclaugh.com/project-planning-for-solo-developers-4c2af1337805)
- [parallax design](https://www.w3schools.com/howto/tryhow_css_parallax_demo.htm)

## == Overall TODOs ==

1. just do The Odin Project
2. learn Ruby, look out for them gotchas
3. basic database understanding. SQL...
4. front end stuff (HTML CSS) from HTML dog
5. JS stuff from various sites, use Eloquent JavaScript Chap 11 to supplement
6. React tutorial
7. To aid abstraction and modularisation,
   Create code templates whereever possible:
   . Headers and footers

8. Host on Heroku

## == KEYWORDS TOLEARN ==

- MVC patterns

Database: - SQL - primary key - foreign key - Entity-Relationship Diagram - relation cascading

HTML, CSS, JavaScript:

React: - components, composable components

## == ACTUAL TASKS ==

1. README: name and matriculation number
2. Planning Diagrams:
   - Write up on Basic Use cases and execution plan. Just a report on things,
     include suggestions and problems faced...
   - Draw the app's database Schema.
3. Installation and Setup:
   - React on Rails

## == specification ==

1. todo manager with basic CRUD operations
2. Categorizing Tasks:
   - tagging system to organise tasks for easy searchability
   - some sort of search functionality
3. Optional Tasks:
   - cron jobs:
     . updating things?
     . backups?
   - using TypeScript
   - Hosting it (on Heroku or AWS Elastic Beanstalk)
   - Redux [wtf difficulty level]
   - Docker [wtf difficulty level]
   - Other relevant Use Cases

## == other checklists ==

- test across all browsers
- abide by best practices
-

`Saturday, December 7, 2019 19:27:46`

# INSTRUCTIONS:

Overall Aims:

- website dev cycle (CVWO is one development cycle)
- learning proper code structure, techniques and familiarity w tools

## Required Understanding

1. Ruby on Rails

   - reusable boilerplate code
   - Puma and SQLite

2. Relational Database and database basics:

   - tables related to each other through foreign keys
   - Usually,an application will use one database, with several applications
     sharing the same database server.
   - Schema:
     . blueprint for tables, about their structure and relationships
   - Rows contain actual values, need to have a Primary Key that is unique for every row
   - Foreign key must map into the primary key column set of another table

3. JavaScript
   - need beautiful JS
4. React
   - Js library to build UIs.
   - components: module that renders some output
   - you can compose components and create a hierarchy of sorts

---

## Brainstorming for features

so far the features I hope to implement:

0. the assignment specification is tagging and tag-searching features, this is number one priority but tagging can be so useful for otherstuff... e.g. different views(module view / life-aspect view[familylife,sociallife, cca])
1. BE ABLE TO USE IT AS A NEWTAB PAGE!! sim to dreamafar
1. google account sync or telegram sync
1. have the ability to put a timer beside the currently working-on task! Added pressure, timed environment
1. theming (not impt)
1. group-work features (maybe as easy as creating a group account insstead?)
1. have different focus modes when making todos (maybe weekly/month vs daily or a per-module basis..)
1. look for apis to convert web-app to post-it widgets

## Setting Things Up

### `Mon Dec 16 13:04:56 +08 2019`

- followed instructions from [here](https://github.com/tiuweehan/CVWO-2020)

- updated Rails. Currently:
  - `Rails 6.0.0`
  - `ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-linux]`
- Chose to install `PostgreSQL` as per recommendation
- Set up `MySQL` too for the lolz

- I do have Rails installed though ![Odin Project Rails](/odin_rails_install.png)
- **_INCOMPLETE INSTALL. FACING ERROR W POSTGRESQL. SHALL POSTPONE SOLVING THIS UNTIL I LEARN IT FULLY_**

- solved the problem did it while following Odin Project tutorials. Just needed to set a user account properly

### `Fri Dec 20 14:58:57 +08 2019`

- tried out integrating react w rails, ![greetings_page](/hello_world_react.png)
