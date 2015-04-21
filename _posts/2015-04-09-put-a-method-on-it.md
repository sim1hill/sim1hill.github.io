---
layout: post
title: "Put a Method On It"
excerpt: "My first post!"
tags: [sample post, images, test]
comments: true
---

<figure>
  <img src="images/bird_photo.jpg"></a>
  <figcaption>From <em>Portlandia</em> Season 1</figcaption>
</figure>

I like writing because it's the act of immediately taking something out of your head and putting it down on a page. But just like you can create complex meaning like metaphors and allusions out of words, I've found methods do something similar. Figuring out how methods could be called as a sort of proxy for their return is something that gave me a lot of trouble at first. While I do find that Ruby reads a lot like English in some ways, it's the implicit return values that aren't always what you think.

Just in case you're new to this whole Ruby thing (like I was up until just a few days ago). Ruby comes with some pre-built in methods for it's most important and useful built-in classes (more on this when I can better explain what those are!) including arrays, strings, integers, ranges to name a few. These built-in methods are powerful tools that can manipulate the data held within each of these very useful classes. Almost every reading I've done on methods describes them of the verbs of the coding world. Easy, right?

Wrong.

But here's where things get fun.

And by fun frustrating to the point where if you were a sim the little diamond above your head would turn red and maybe even shatter into a million pieces, but you got something that's actually useful. And by useful I mean you can actually do something with it. I mean more than tinker around in your terminal puts-ing simple strings or operations like "Hello World" and 1+1.

Take the methods select and collect, each's more sophisticated siblings. Don't get me wrong, I love a good each. I'll each through your array or hash all.day.long. Here's why. I get each. I know where each is coming from and I'm less likely to fall into an infinite loop. I understand what each will give back to me. And that it will change all of the things I shove into it in whatever way I tell the block to do it. I'm a true each-ist at heart. For now, until I get really good at something else and find a better way.

infinite-loop-meme
Everything moves really quickly at Flatiron. Things that might as well have been quantum physics to me just four days ago, now make much more sense. So fast that when I actually present this blog post it will probably already seem simplistic (and I wrote it the morning of). So while I came in having a good understanding of each and the things that it could do for me, others like collect and select were more elusive. Like Christian Grey of the infamous 50 Shades of Grey series, it's not until you get close and intimate with them that you find out they have a hidden sex chamber in their apartment. Or in collect and selects' case, that they return array values and not just a number or a string. Eventually you each enough times that you realize you need something more than just Joe Schmoe. You want a billionaire publishing magnate with smoldering eyes and a dark past.

Okay, enough with this example.

That's where the documentation comes in when it comes to the built-in methods. But documentation is kind of boring and just tells you what things do, but doesn't give you a sense of their immense applications. So I like to get creative with Google, frame a problem and look for others who were looking to get something similar out of their methods. Like I mentioned above collect and select give you back an array. Which is awesome. Because once you have what you want you can keep collecting, selecting or eaching your array in different ways to get the result set you need to shove into your next method.

When you're own method where the input and output can be anything you want, that's where the real creativity and challenge comes in. Writing just one method it's pretty easy to plan out what you want to get out of it. But things escalate quickly, from one to a few methods. You write a helper method to simplify and avoid repetition. Segmenting an application into small specific methods is ideal, but it's a little harder to hold in your head as some of those small functionalities are things you don't see in the page, when you've got a web of functions running behind the scenes before you can even get to the one that actually gives you what you want. As things build, so do the size of your methods.

And I guess that's where you come to options as far as process. On the one hand you could plan out each and every step you'll need to take to get exactly what you want. Lay it out for yourself to see. Or just start writing and see where it takes you. Have a general sense of the start and end and improvise as you go along. Right now I'm trying to figure out which works best for me. I've never really been a planner. Even when I write I just have a vague notion of shape and flow (as evidenced by this blog post!) and then I just write until I get where I want to be. I guess a 3rd option could be write on the fly and edit with a plan.

That brings me here. Literally, to the end of this blog post. Where I want to be with all this talk of methods is that I'm trying to establish my own philosophy and workflow, and I welcome ideas, suggestions and tips.