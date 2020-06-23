# How to hand in homework

In this module you'll submit your homework only using GIT and GitHub.

1. [GitHub](https://www.github.com/HackYourFuture/JavaScript2)

## 1. GitHub homework guide

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CpYARPYGQU8" target="_blank"><img src="./assets/submit-homework.png" width="400" height="250" alt="HYF Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your homework:

ONE TIME ONLY (START OF EVERY MODULE)

1. Create a [fork](https://help.github.com/en/articles/fork-a-repo) of the following repository: [HackYourHomework/JavaScript2](https://www.github.com/hackyourhomework/javascript2). You do this by using the `fork` option on the top right
2. Navigate to the URL of the forked repository (it should be in your personal GitHub account, under "repositories", under the name `<YOUR_GITHUB_ACCOUNTNAME>/JavaScript2`)
3. Clone the repository, using SSH, to your local machine. You can do this by typing in `git clone <git url>` in the command line
4. On your local machine, navigate to the folder using the command line
5. Make sure you've cloned it correctly by running `git status` and `git remote -v` from the command line

EVERY WEEK

1. Create a new branch for each week you have homework. For example, for the week 1 homework for JavaScript2 create a branch called `week-1-homework-YOUR_NAME`
2. Inside the week folder, create another folder called `homework`. Create your homework files in there, while on the correct branch
3. Once you're finished, `add` and `commit` everything. Make the commit message meaningful, for example `finished project for homework week1`
4. Push the branch to your forked repository (`<YOUR_GITHUB_ACCOUNTNAME>/JavaScript2`)
5. On the GitHub page of this repository, click on the `create pull request` button. Make sure the `base repository` is `HackYourHomework/JavaScript2`, on branch master
6. Give the pull request a title in the following format:

```markdown
Homework week 1 <Your name>
```

7. Submit the pull request from your forked repository branch into the `master` branch of the original repository (`HackYourHomework/JavaScript2`)
8. Do a little victory dance because you did it! Good job!

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!
