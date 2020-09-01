---
id: toolbelt
title: Toolbelt - VTEX IO Command Line Interface
---

## What is Toolbelt

VTEX IO's CLI, or Toolbelt, provides an informative experience to our users, focused on showing what can be done with the tool and the impact that actions have on their applications. We support users from all levels of expertise, creating interaction layers that allow both simple update tasks and also complex debug challenges. 


### Tone and Voice

We don't need to create a tool free of errors, but one that gives our users information about how to overcome them, giving the feeling of being in control. This is where authority comes in place. 


### Usability challenges

Our biggest usability challenge is how to make the CLI instructions and messages self-sufficient. 

- We want to tell, show or give the options of what to do next fo our user.
- We want it be known as a frictionless tool.
- We want to avoid messages that require our team members to solve errors that don't actually exist, and are instead just misinformation.


## 👍 Do's 

- After running a command, the important information is always at the end of the content we show. We don't want to do the user scroll up on the terminal.
- We communicate what happened and what to do next as a message pattern (for errors, success, and info).
- Our command's descriptions explain why it is a good idea to use them. We indicate how can it improve the experience that's been created to the final users.
- Toolbelt is proactive: we anticipate what a user may need and suggest actions using the `Y/n` from the command prompt. 
- Our users usually don't have to *run the commands*, just confirm.


## Messages and Feedback

> We explain what is happening and what to expect.

- Remember to explain what is happening and what to do next, so the users can feel they *control* the tool, *visualize* what to do next and receive *feedback* about what they did. 
- Use "we" for the messages. The Toolbelt has not a persona for itself. It represents the VTEX IO team.

| Message type | Do's                                                                                                                                |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Info         | Show only success, error, or instructive messages. Remove all extra information on the commands. To see more, user may run `-—verbose` |
| Bug          | Start the message with "Error". Then indicate which error occurred, and explain what happened. Finalize the message by pointing out how to avoid the problem, or what to do next.   |
| Success      | Start the message with "Success". Then communicate what happened with complete sentences, and what was the impact to the application.              |

💡Examples   

*Right! We are creating a workspace that works like a sandbox: the changes you make will impact only on the {{workspace name}} workspace until you publish them. (^C to quit).* 


## User interactions

- We give visibility over interactions. We explain and show that something is happening after user inputs.
- When a user runs a command, we send a message that includes:   
`We understand the command` +  what will happen + informing it can be stopped with `^C`.   
- We use spinners to show when something is loading.  
- Toolbelt guides the user telling what they need to do to keep going.  


💡Examples  

If they run a command that needs a workspace to work, we inform that and give the option to create a workspace with `Y/n` 


 ## Commands

 > We communicate what they do and why it matters.

- Command Syntax needs *consistency*.
- *Flags* are how complementary commands are written.
There is no variation between the use of `-` or `--`. Prefer using `--`, since it is the most common flag on our commands. 



## Colors 

> We use colors to help the visual scaning of the terminal.

- It can help users recognize what is a command, what is a success message, for example.  
- Use colors, icons, and emojis to make it easier for our users to scan what the CLI is returning.   
- It is possible that users learn what our colors mean and use them as decision fuel.  



