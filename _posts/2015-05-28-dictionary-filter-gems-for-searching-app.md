---
layout: post
title: "Searchifying Your API Requests"
excerpt: "Some tips and tricks to making your API requests more useful when using search keywords"
tags: [script, Ruby, methods]
comments: true
---
<figure>
 <img src="/images/cat-reading.gif" alt="kitten reading a book">
</figure>

Now that we've entered project mode I've had my first opportunity to work with an API that uses a search function. A bit of background on how Chefly works: we take restaurant data from an API called Locu to create restaurant and Dish objects in our database. At first we fed the dish titles as the search term to find a recipe that was similar. But, like with all projects, we didn't realize until we'd already linked up both our restaurant-dish data with the recipe API that dish titles don't always result in the most accurate of results. Think about it, many restaurants have their own quirky naming conventions that are completely useless unless you either have a description of the dish or have eaten it before. 

There's actually quite a bit of skill involved in learnign to crafting search queries that actually return somethign useful. Let's take two examples:

"How to sanitize tweets so I don't get fired" 

versus

"Ruby dictionary gems to filter obscene words"

But creating that logic to make what you're looking for more searchable isn't easy to program into your app. Crafting a great search requires a few things 1. research to narrow down the topic to something niche enough that the results will be relevant and 2. some basic understanding of how SEO works. On a website you might have access to an advanced search tools or other filters, but when it comes to your API that may not be the case. We encountered this when working on Chefly and I've taken on the task of trying to better refine our search to get more accurate and relevant recipes back. 

If you're doing a basic filter the concept is simple enough. Create a collection of banned words or phrases, split apart the string you want to compare it to with RegEx or some other type of pattern matching, and then check to see if your string includes those banned words and either remove them or replace them. Like the reenactment in an infomercial this will get the job done (at least some of the time), but it's clunky. It also has the potential to be really taxing if you're working with a lot of strings, long strings or a large set of words and/or characters you want to ban. There also may be endless edge cases -- because, as we found with the Locu and Big Oven APIs you get back a string formatted in a different way almost every time. 

<figure>
 <img src="/images/struggle.gif" alt="infomercial struggle">
</figure>
<figure>
 <img src="/images/struggle-2.gif" alt="infomercial struggle">
</figure>
<figure>
 <img src="/images/struggle-3.gif" alt="infomercial struggle">
</figure>

##Bloom Filters

I won't get too much into this because just the word algorithim makes me cringe. But a Bloom filter is basically an efficient way to filter out whether something is contained in a set or not by just returning true or false. If this sounds familiar it's because that's basically what Ruby's enumerable .include? does! 

##Useful Dictionary Filter Gems

There are a lot of dictionary type gems out there -- simple ones that are great for spellchecking features, gems that recognize profanity or obscenities or even just random dictionaries that change your regular every day lingo into something a bit more fun (like Stef's Doge Speak example). I couldn't find one for exactly what I needed (removing of stop words and punctionation, boiling down words and phrases to small discreet parts that could be listed as ingredients). While some of these gems just use comparison to a library others (like Sentamentalizer) can give you a more nuanced comparison by using a scoring or rating system for assessing a match other quality (like positive and negative language). 






