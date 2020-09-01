---
id: toolbelt
title: Toolbelt - VTEX Command Line Interface
---

# What is Toolbelt

VTEX CLI, Toolbelt, provides an informative experience to our users, focused on showing what can be done with the tool and the impacts actions have on their applications. We support users from all levels of expertise, creating interaction layers that allow simple update tasks as much as complex debug challenges. 

## Challenges

Our biggest usability challenge is how to make the CLI instructions and messages self-sufficient. 

- We want to tell, show or give the options of what to do next fo our user.
- We want it be know as a frictionless tool.
- We want to clean messages that call our team members to solve errors that don't exist, are just misinformation.

We don't need to create a tool free of errors, but one that gives our users information about how to pass then, ***giving the feeling of being in control.***


## 👍 Do's 

- **After running a command, the important information is always at the end of the content we show**. We don't want to do the user scroll up on the terminal.
- We communicate what happened and what to do next as a message pattern (for errors, success, and info).
- Our commands description explain why is it a good idea to use them: how can it improve the experience that's been created to the final users?
- Toolbelt is proactive: we precipitated what a user may need and suggest actions using the  `Y/n` from the command prompt. Our users usually don't have to *run the commands*, just confirm.


## Messages and Feedback

> We explain what is happening and what to expect

- Remember to explain what is happening and what to do next, so the users can feel they **control** the tool, **visualize** what to do next and have **feedback** about what they did. 
- Use "We" for the messages, the Toolbelt has not a persona for it self. It represents VTEX IO team.

| Message type | Do's                                                                                                                                |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Info         | Show only success, error, or instructive messages. Remove all extra information on the commands. To see more, user may run —verbose |
| Bug          | Start with "Error", which error occurred and, then, explain what happened and what to do to avoid the problem or what to do next.   |
| Success      | Start with "Success", then communicate what happens with all letters, and what was the impact of it to te application.              |

💡Examples 
Right! We are creating a workspace that works like a sandbox: the changes you make will impact only on the {{workspace name}} workspace until you publish them. (^C to quit). 


## User interactions

- We give visibility over the interactions. We explain and show that something is happening after user inputs.
- When a user runs a command, we send a message saing: "we understand the command", what will do with it and informing it can be stopped with `^C`. 
- We use spinners to show when something is loading.
- Toolbelt guides the user telling what she needs to do to keep going.


💡Examples 
 If she runs a command that needs a  workspace to work, we explain that and give the option to create a workspace with `Y/n` 


 ## Commands

 > We communicate what they do and why it's important

- Command Syntax needs **consistency**:

Ways to declare pattern `-- verbose` should be `-verbose` if `-help` calls for help. Note: if we use only one "-" in the flag.


## Colors 

> We use colors to help the visual scaning of the terminal.

- It can help users recognize what is a command, what is a success message and more.
- Use colors, icons, and emojis to make it easier for our users **to scan what the CLI is returning.** 
- It is possible that users learn what our colors mean and use them as decision fuel.
