---
layout: post
title: "The Lazy Lady's Guide to Cleaning Up Your Files With Ruby"
excerpt: "A lazy lady cleans up her files with code!"
tags: [script, Ruby, methods]
comments: true
---
<figure>
 <img src="/images/mrs-doubtfire.gif" alt="mrs.doubtfire vacumming">
</figure>
To say I'm a messy person is an understatement. I may look polished and put together most days (okay, some days) but the same cannot be said for just about everything else in my life. Try as I might to keep my living and working space in order, everything inevitably unravels shortly thereafter. My digital footprint is much the same and all the labs I've cloned for Flatiron haven't helped. That's how I came up with the idea to write a script. I became enamored with the idea after Steven mentioned that he wrote scripts for just about everything. Oh and also I didn't want to do anymore rails labs or reading, so I guess coding is how I procrastinate now. 

Normally, I'd spend an hour or two taking care of this with an elaborate system of filenames and folders to try and reign in the madness. But I figured now that I'm a programmer in training I'd write a simple program to do it for me. 

Turns out this was not the most efficient route. At all. What I first imagined to be a simple script that would move files around turned into a multi-day project. 

Much like a cat riding a roomba, while I did eventually do some cleaning it was a slow process I mostly ended up in stuck going in circles. I felt both confused and all-powerful at the same time. That's why I've illustrated each step with a cat riding a roomba gif, because cats are far cuter and more entertaining than the code.

<figure>
 <img src="/images/cat-riding-roomba.gif" alt="cat riding a roomba in a shark costume">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-2.gif" alt="cat riding a roomba">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-3.gif" alt="a bunch of kittens riding on a roomba">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-4.gif" alt="cat in box riding a roomba">
</figure>

Gem Name: Get Organized(it's lame, I know, so I'm taking suggestions for better names! Roomba is taken, but maybe File Roomba?)

Snippet: A simple script to organize your cluttered directory by date so that they're easier to find. 

Summary: A little bit about the gem I created. The idea is to run it in any current working directory, the script loops through each file and looks at it's created by date and makes a folder based on the month of the file's creation. If a directory named after that month already exists, then it just moves the file into that folder. After it's finished going through that path level then it moves into the first month

##Step 1. File, Dir and FileUtils Objects

When I sat down and started to write this code one of the hardest concept to grasp was how to abstract the concept of files and directories in my program so that I could manipulate them. If you've been working in your command line for a while then you may have some experience with moving around files and folders without a GUI (graphical user interface). I'd worked with both the File and FileUtils modules, but only to change one file at a time so I had to really dig into the documentation and look at code for other command line gems and scripts that use files. Here's what about each of these models with some examples from my code. 

**File Module:** Technically File is a subclass of the IO class which responds to methods of the module FileTest. And if that's confusing to you, don't worry because it meant just as little to me at the time I started working on this gem. Without getting into inheritence and models. But if you've ever called some class.ancestors then you may have noticed way towards the end something called Kernel. Well the IO class lives all the way in Kernel and basically makes your files into objects that are represented by strings. I did not anticipate the string part of the equation and it gave me some trouble down the line. Most of the methods for file take an argument of the file or file name.

{% gist sim1hill/943d845f457ed94b8392 %}

**Dir Module:** This is very similar to File with the exception that it represents, you guessed it, directories rather than files. For my purposes the most useful method was called Dir.glob which is what makes it possible to run your code from the current working directory. The asterisk tells it to look at all the files within the directory. 

{% gist sim1hill/7a4c1a4e782a3f2c27f7 %}

**FileUtils Module:** This comes in pre-packaged in Ruby (yeah, it's free.99!), but has to be required in your environment file for you to have access to it. FileUtils gives you access to all of the commands you'd use in your bash/command line/terminal. If you're familiar with bash/command line/terminal then all of these commands will look very simple -- even the errors are similar to those you might see if you get a bash mistake.  

{% gist sim1hill/6b1b4f0d2faff8502401 %}

##Step 2. Defining a Structure

Previously, the only things I'd built had been labs which are written and driven by someone else's design. So I started the only way I knew how, with one class called Get Organized. I thought the logic would be simple enough, but all of my class methods and helper methods quickly grew to a point that would make Sandi Metz very, very upset. I structured my gem in three classes, but the design was really dictated by the challenges I faced and the order in which I completed each feature which I now know is probably not the best way to do it. What I ended up with were three classes, one to handle the creation of month folders, one to trigger the creation of week folders and a runner to start the month folder. The idea was to loop these together so you run it once and it takes care of all the files in the current working directory -- but this is still a work in progress.

##Step 3. 

##Step 4. Overcoming Challenges

##Step 5. 
