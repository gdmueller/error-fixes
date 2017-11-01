# Fixing Errors

In this repository you will find javascript files that all have errors. Read this 
[Error Guide](https://docs.google.com/document/d/1UXORxbWVZMqOFs3qd-xOad_-RDSAf4rHSwsaxoWbcWY/edit?usp=sharing)
and make to sure to make commits after fixing each bug.

## Lesson Setup Forking and Cloning
First you will need to fork the repo. This will create a copy of the repository on you github account this allows the repository's 
owner to keep a clean working code base while you can make changes to the code on your own repo.
To fork the repository look for the fork button at the top right, under your profile image.
Once you fork the repository to your account you will then need to clone the project into cloud9. 
Cloning a repository is similiar to forking you will have a remote repository, or online repository on github
and a working repository on your cloud9. In order to clone your fix-errors repo click the clone or download button.
Then copy the url. Now back in cloud9 in your bash terminal from you challenges directory
```
    git clone <repo url>
```    
Make sure to replace `< repo url>` with the url you copied from the 
repository on github. Angle braces , `<>` are **not to be included** in the 
bash command. Angle braces commonly surround where the command needs 
information that is specific to you. If stuck further instruction on 
forking and cloning can be found 
[here](https://docs.google.com/document/d/14byPrWvvdGPgPINLrZcSBIC6hEICGr2nkMpUctL3Yi4/edit#heading=h.9g8b9kmlg2ei)


## Running the files
Step 1
    cd into the projects directory after cloning. 
```
 cd fix-errors
 
```
Step 2 
    To run any javascript file the command is:

```
node <file name>

```
For example to run lesson 1.
```
node lesson.js

```
## Once You Fix the Error
Upon fixing the error in the file. You need to commit and push your changes.
The proper git proceedure will be

#### Step 1

Check the status files in red are new or changed, green means those files have been added.
```
git status

```
#### Step 2

Adding files to the staging area to be commited. git add . will add all the files
that were listed in red during git status.

```
git add .

```

#### Step 3  

Now that we have added files to the staging area we need to commit to that code.
It is important in the commit message to leave a short yet detailed message about 
what you changed or fixed in this commit.
```
git commit -m "message about what you did here"
```

#### Step 4

This will push the commit to our remote github repository, the one we cloned. 
``` 
git push

```
[Git Cheat Sheet](https://drive.google.com/file/d/0B4BwMqLSws0ZZi13N2FwZW4wa3M/view?usp=sharing)

## Tips

[See Error Guide](https://docs.google.com/document/d/1UXORxbWVZMqOFs3qd-xOad_-RDSAf4rHSwsaxoWbcWY/edit?usp=sharing)

## Authors

* **Peter Horton**
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

