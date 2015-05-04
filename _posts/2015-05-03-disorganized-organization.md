---
layout: post
title: "The Lazy Lady's Guide to Cleaning Up Your Files With Ruby"
excerpt: "A lazy lady cleans up her files with code!"
tags: [script, Ruby, methods]
comments: true
---

To say I'm a messy person is an understatement. I may look polished and put together most days (okay, some days) but the same cannot be said for just about everything else in my life. Try as I might to keep my living and working space in order, everything inevitably unravels shortly thereafter. My digital footprint is much the same and all the labs I've cloned for Flatiron haven't helped. That's how I came up with the idea to write a script. I became enamored with the idea after Steven mentioned that he wrote scripts for just about everything. 

Normally, I'd spend an hour or two taking care of this with an elaborate system of filenames and folders to try and reign in the madness. But I figured now that I'm a programmer in training I'd write a simple program to do it for me. 

Turns out this was not the most efficient route. At all. What I first imagined to be a simple script that would move files around turned into a multi-day project. 


Much like a cat riding a roomba, while I did eventually do some cleaning it was a slow process I mostly ended up in stuck going in circles. I felt confused and all-powerful at the same time. At first I was tentative, but then I just went with it. Before I jump into the code, these gifs will give you a good idea of what the experience was like (and cats are far cuter and more entertaining than the code).

<figure>
 <img src="/images/cat-riding-roomba" alt="cat riding a roomba in a shark costume">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-2" alt="cat riding a roomba">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-3" alt="a bunch of kittens riding on a roomba">
</figure>
<figure>
 <img src="/images/cat-riding-roomba-4" alt="cat in box riding a roomba">
</figure>

##Step 1. File and FileUtils Objects
