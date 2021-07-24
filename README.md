# Github Mini Client

This shall become a tiny, SPA GitHub Client, with a few basic functions and a focus on _discovering_ trending repos, filerable by Language.

This will use GitHubs public REST API, docs can be found here:  
https://docs.github.com/en/rest

The API does not provide a "trending" endpoint, I'll construct one myself, based on the amount of stars a repository has gotten in the specified time frame.


## Stuff I'd consider useful:
- Basic sorting, by name, language author and stars (total/in the timeframe)
- Customizing the timeframe
- A basic "Hide" function for each repo

## Tech I wanna use
- React & Typescript
- SuitCss utility-classes and naming conventions
- eslint
- axios
- jest

## Rough timeline
1. Rough plan and writing the readme (This is _NOW_ 😋)
1. NPM and Git
2. Getting first results / get to know the GitHub API
3. Wireframe
4. Components, tests and docs
5. Refinement and optional features (_'Stuff I'd consider useful'_)