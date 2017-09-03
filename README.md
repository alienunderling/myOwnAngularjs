# myOwnAngularjs
My  own personal implementation of Angularjs.

## Best Project Setup Instructions

From the Book:

**TODO:** Set up a JavaScript library project using NPM and Browserify. Enable static analysis with JSHint and unit testing with Jasmine and Karma.

**1. Install Node and NPM.** See _http://nodejs.org/download/_
   * Before proceeding to create the project, make sure you have the node, and npm commands working in your terminal. 
   * Here’s what they look like on my machine:
      * **node -v**
      * v5.9.1
      * **npm -v**
      * 3.7.3
      
**2. Create The Project Directories** 

The project root directory, a src directory for sources, and a test directory for unit tests:
   * mkdir myangular
   * cd myangular
   * mkdir src
   * mkdir test
   
   As the project grows we will extend this directory structure, but this is enough to get going.
      
**3. Create package.json for NPM** 

In order to use NPM, we’re going to need a file called _package.json_. This file is used to let NPM know some basic things about our project and, crucially, the external NPM packages it depends on.
Create a basic _package.json_ in the project root directory with some basic metadata - the project name and version:

package.json
{
  "name": "my-own-angularjs",
  "version": "0.1.0"
}

We now have the directories and files necessary for a minimal JavaScript project in place.
