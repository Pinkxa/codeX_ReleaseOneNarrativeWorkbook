#Narrative workbook

This is a companion workbook that will assist you to work through the codeX Narrative that is to be provided. Resources and references provided will assist you in your journey will be published in the repository.

Note:

* This is a living document, it will change over time
* please contribute to this workbook by pull requests
* check back here regularly for new information

## Javascript on the command line

So far all the Javascript you wrote ran in a web browser. That don't need to be the case, one can run Javascript on the command line and use it to program much more than buttons, fields and elements in the browser. A world of programming Web Servers, Robots and Databases to name but a few options awaits.

You can read more about Node JS here: http://eloquentjavascript.net/20_node.html

You need to have node installed locally: [Node Setup](NodeSetup.md)

##Node school

Here are some [background information](NodeBackground.md) about some Node JS concepts.

Now do this [Node Tutorial](node-tutorial/README.md) - you can track your progress through by checking how many of the unit tests are passing.

#Try this

Now that you have a better idea about what Node JS are try to install and use some modules from npmjs.org.

These modules to try out is:

* https://www.npmjs.com/package/text-animation
* https://www.npmjs.com/package/figlet
 
Be sure to create a ```NarrativeWorkbook``` folder in your projects folder.
* in that create a ```modules101``` folder
* then type ```npm init``` - follow along, you will need to press enter a few times, you can change the defaults if you like
* in the ```modules101``` folder there should be package.json file - see what it looks like.
* node install the figlet module using this command: ```npm install --save figlet```
* check how the package file changed
* now write a program using the figlet module to display 'codeX is cool!'
* take a look on the figlet npmjs.org page to see how to use it.
* Now use the text-animation module and animate 'codeX is cool'. Pro-tip: you'll need to install it first

If you feel you need some more practice with Node JS before you move on try to do some [these exercises](NodeExercises.md)

#Things to come

Here is a high level [overview](OtherOverview.md) of things to come later in this release, the details will be provided

