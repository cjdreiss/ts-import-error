# ts-import-error
## This is a repo showing VS Code import issues

### Parent foler
This is the "parent" app.  It's package.json has all the angular and other depenndancies all in its package.json

It is our "library"

### Child folder
This is the "child" app.  It consumes the parent app.  Its only dependancy is the parent.  NPM will install Angulr and all the other needed dependances because the parent needs them.

### The issue
Running the child app is fine, but VS Code can't auto import from anything that is not in package.json.  For example, inside "app.component.ts" We have manually imported `Observable` from `rxjs`, but it won't auto import `BehaviorSubject`.  We can auto import `ExampleComponent` because `@cjdreiss/ts-import-error-parent` is in `package.json`.

This is using VS code with TS 3.9.x.

On my work machine, with an earlier version, if I change the VS Code version to use the editors TypeScript version `3.6.x`, auto imports work.  Using the libraries `3.9.x` causes it to not work.

### Running the project
1. Pull the repo from github
2. cd into the child directory
3. `npm install` to install everything
4. Try to auto import things from angular or rxjs, they don't work (unless your TS version is `3.6.x`)
5. Try to import from `@cjdreiss/ts-import-error-parent` (we only have `ExampleComponent` and `SharedModule`, you might need to go to a new file to test)