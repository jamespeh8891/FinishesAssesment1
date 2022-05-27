/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a program and version control system"
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is code platform that allows you to upload and save projects to it, you are also able to work with others through GitHub. You can also veiw other people projects."
console.log(gitHubDefinition)
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = "initialize a local repositorys and creates new repositories"
let initCode = 'git init'
console.log(init)
console.log(initCode)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let cloneDef = "used to find an existing repository, it can create as copy of the repository youre trying to target"
let cloneCode = 'git clone'
console.log(cloneDef)
console.log(cloneCode)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let statusDef = "Checks to see if everything is clean"
let statusCode = 'git status'
console.log(statusDef)
console.log(statusCode)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let addDef = "it adds files so they can be tracked"
let addCode = 'git add'
console.log(addDef)
console.log(addCode)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commitDef = "creates snapshots of the file you created"
let commitCode = 'git commit'
console.log(commitDef)
console.log(commitCode)


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let pushDef = "uploads local content to a repository"
let pushCode = 'git push'
console.log(pushDef)
console.log(pushCode)