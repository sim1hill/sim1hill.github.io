---
layout: post
title: A Blog Is Born
excerpt: The practical implications of ERB templating for creating a blog template.
tags: [first post, Ruby, methods]
comments: true
image:
  feature: laptop_photo.jpg
  credit: Simone Hill
---

##The Backstory

I've attempted blogging many, many times before this. And it just never stuck. Inevitably I'd ditch the pre-canned templates and seamless CMS interfaces of Wordpress, Blogger, Squarespace and the like. When we were told we'd have to blog as part of our participation in the Web Dev class at the Flatiron School I was prepared to make another throwaway blog with a pithy name that I'd cringe at two years from now. When I wrote my first post, which was really just me flexing my skills writing about a brand new topic (coding), I was determined to practice my front-end skills and customize my own without relying on a CMS. 

As it turns out I still have a long, long way to go with that. So when I realized that I didn't have the hours upon hours I wanted to spend getting my background image centered just so and floating divs with scrolling sections. So I decided for my first go-round I'd Frankenstein together a template using the little I know combined with the work of someone much, much more well-versed in web design. My search included keywords like "minimalist" and "simple" along with "HTML blog template."

That's when I stumbled across this template called Minimal Mistakes, I downloaded the file and committed it to my github.io profile. From my minimal experience with front-end basics I was familiar with index.html pages and css stylesheets and am familiar enough with javascript so when I opened the folders I was suprised to find code that looked like this: 

{% gist sim1hill/d5dfca459ec02cdc2432 %}

Look familiar? That's right...this blog template was created with ERB 

Despite being just a series of files with styles and templates and photos, the file structure is earily similar to a CMS. I made my discovery on the same day that we started learning ERB, which means that luckily I was able to make some sense of what this is. It got me thinking about ERB and the practical applications of being able to make dynamic webpages and why it's great for creating things like easy to use blog templates. 

