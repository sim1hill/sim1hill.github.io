---
layout: post
title: A Blog Is Born
excerpt: The practical implications of ERB templating for creating a blog template.
tags: [first post, Ruby, methods]
comments: true
---
<figure>
 <img src="/images/laptop_photo.jpg" alt="laptop with blue background">
</figure>

I've attempted blogging many, many times before this. And it just never stuck. Inevitably I'd ditch the pre-canned templates and seamless CMS interfaces of Wordpress, Blogger, Squarespace and the like. When we were told we'd have to blog as part of our participation in the Web Dev class at the Flatiron School I was prepared to make another throwaway blog with a pithy name that I'd cringe at two years from now. When I wrote my first post, which was really just me flexing my skills writing about a brand new topic (coding), I was determined to practice my front-end skills and customize my own without relying on a CMS. 

As it turns out I still have a long, long way to go with that. So when I realized that I didn't have the hours upon hours I wanted to spend getting my background image centered just so and floating divs with scrolling sections. So I decided for my first go-round I'd Frankenstein together a template using the little I know combined with the work of someone much, much more well-versed in web design. My search included keywords like "minimalist" and "simple" along with "HTML blog template."

That's when I stumbled across this template called Minimal Mistakes, I downloaded the file and committed it to my github.io profile. From my minimal experience with front-end basics of creating a simple webpage with html,css and javascript so when I opened the folders I was suprised to find code that looked like this: 

{% gist sim1hill/d5dfca459ec02cdc2432 %}

Look familiar? That's right...this blog template was created with ERB (aka Embedded Ruby). That snippet above? It's basically my blog homepage, minus the header and footer. In fact this little bit of code creates a page with endless possibilities (no lengthy conditionals necessary!) and I never even have to touch this page. In fact, editing all of this is as easy as filling out a form. It's true! Take a look: 

{% gist sim1hill/1e4cc342917739c56b2f %}

That's basically all I needed to populate a ton of fileds across my blog. 

Despite being just a series of files with styles, templates, photos and files with a handfull of different file types when I started digging in I realized that it is eerily similar to using a CMS (more on that in a bit!). I made my discovery on the same day that we started learning ERB, which means that luckily I was able to make some sense of what this is and learn a bit more about why ERB makes Ruby so powerful. It got me thinking about ERB and the practical applications of being able to make dynamic webpages and why it's great for creating things like easy to use blog templates. 

###What Are All These Acronyms?!

I feel like I'm using a lot of jargon. I hate when people do that and assume that everyone knows what you're talking about so I'll clear some things up.  

CMS: This stands for Content Management System. If you've ever written a blog then you've probably used one, but basically it's an application that makes it easy to manage and publish content (words, photos, video, whatever) with an interface that's intuitive and familiar for non-coders. It will usually feature rich text editing features that are similar to using Word or another local text editor. 

