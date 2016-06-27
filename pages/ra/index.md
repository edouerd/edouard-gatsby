---
title: IBM RapidApps
subtitle: An idealistic product built to empower and educate non-technical people to build applications using filetypes they knew best. I designed and utilized “spatially-concrete” interface/interaction models to simplify abstract software development concepts and led the design of RA's Rules/Logic composing interface.
date: "2013-01-01T22:40:32.169Z"
layout: post
readNext: "/mobility/"
path: "/ra/"
---

RapidApps, originally known as “Project 10X”, was a project I began working on in the winter of 2013. It was the first “real” project I tackled at IBM, and would end up taking over a year and a half to reach its' final resting state.

This project was incredibly special to me, as it was the first digital product I've worked end-to-end on. You can play with it and build an app yourself here: [https://developer.ibm.com/rapidapps/](https://developer.ibm.com/rapidapps/)

(as of 2015/8/1, the link above no longer works.)

###### Context —

Project 10X came into the world as an idea born from the following thesis:

> “There's a ton of people out there in business environments who can be empowered with taking their day-to-day work to a mobile–application format.
>
> If we were to empower these non-technical people to build these applications on their own time, with an easy-to-use platform, there would be (approximately) x10 the amount of capable “developers” out there in the world.”

While the validity of this statement could be debated (oh how we debated it), it was the driving force that structured the design efforts that followed.

What *if* we could empower everyday people to create applications for work?

###### —

Delving into the world of [long-tail](http://en.wikipedia.org/wiki/Long_tail#User-driven_innovation) application development was a vivid look into the worlds of people who built “applications” from cobbled-together spreadsheets, among other things.

Here's an example of one. Note the many sheets, columns, and rows, all interconnected by an invisible network of custom macros:

![A messy spreadsheet](ra-1.png)

Not very pretty eh?

This is one of dozens of spreadsheets we collected over several weeks in an effort to analyze and research just how people went about sorting and making sense of large amounts of data they wanted to take action on. We collected spreadsheets from coaches, various members of various HR teams, colleagues on our recruiting team, and many more.

After some time, it turned out that despite the perceived ugliness of what we dubbed 'the spreadsheet app', a good deal of the people we interviewed lauded the flexibility and portability and sheer understandability of spreadsheets for hosting and inputting data.

![My teammate Miroslov performing a research study into how Vernoica uses spreadsheets](ra-7.jpg)

Veronica, for example (whom you see above during a usability test), was a master spreadsheet user. She proclaimed herself to be the "All-Knowing Spreadsheet Nerd".

The insights we gained into the work processes of people building these systems row by column would prove to be invaluable for defining the experience to come.

###### —

As early-stage user research winded down, and converging design effort picked up full steam, we were excited to generate new and exciting means of novel data manipulation; Asking a designer to build out data abstractions for non-technical folk is an exercise in some truly crazy stuff.

Here's a few examples of earlier systems we came up with:

![](ra-2.png)

 The image above is illustrating the concept of 'depth' to surface more technical interfaces 'deeper' in the interface. As the surrounding environment gets darker, a user will realize they are digging in the 'plumbing of their app', so to speak.

![](ra-3.png)

With both leading UX designers having a background in industrial design, it was clear we tended towards utilizing spatial relationships in the interface to orient a user in our system.

![](ra-4.jpg)

Noodle-based data modeling and logic writing were heavily utilized in some of the earlier interface design.

![](ra-5.jpg)

"With such an easy-to-parse visual system," we claimed, "our users would _simply have to_ understand the mechanics at play."

![](ra-6.jpg)

###### —

It turned out we were rather wrong!

Keep in mind the earlier point we'd discovered in research — people loved the straightforwardness and emergence of data represented by spreadsheets. It was a familiar medium, it was portable, and everyone just _gets it_. Spreadsheets are very much the lingua franca of the business world.

Several rounds of usability tests conducted alongside our design work enabled us as a design/research team to understand this conundrum —

— what proved to be exceedingly difficult was convincing our executive leadership and our development team to pivot current product development into an experience that was clearly resonating better with our users.

The situation called for a weeks' worth of high-intensity A/B testing to prove our point. We utilized a concise system of scoring known as [System Usability Scale](http://en.wikipedia.org/wiki/System_usability_scale) to gauge the performance of our two designs. We proceeded to find as many out-of-studio testers as possible.

![](ra-8.png)

Above was a record of a few of the earlier tests we conducted, below is an early draft of an 'assist document' we gave to our test users.

![](ra-9.png)

In the end, we were able to present the following scores to our various stakeholders::

![](ra-10.png)

This information, coupled with quotes/outtakes from our test users, documentation of the necessary design changes and how they'd affect development, and a roadmap to an eventual 'Version Two' release, was able to convince our stakeholders that an immediate shift in strategy was necessary.

###### —

After the proposed restructuring of RapidApps' design and development efforts, we were able to quickly churn out experiences and interfaces conducive towards our users' ideal workflow.

Our previous efforts evoked an 'open' system that gave an incredible amount of power and decision making to our user. This proved to not work very well, so our designs began to facilitate a more 'on-rails' app-building experience for ours users.

This comparison is best illustrated by how our users' dashboard evolved after the pivot:

![](ra-11.png)

Old ☝︎ and New ☟

![](ra-12.png)

After all was said and done, we ended up producing an easily sharable video which illustrated the various use cases for RapidApps, given our research and ideal product capability.

<iframe src="https://player.vimeo.com/video/121520728" width="100%" height="575" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


Skip to 0:45 to get to the juicy part.

###### —

Throughout the development of RapidApps, I served as point designer on the Logic/Rules composer that enabled our users to specify:

“If *something* happens to my data, do *something* in response.”

Here's the evolution of the “Rules” interface:

![](ra-13.png)

Initial takes on what was initially called the 'Logic' experience of RapidApps were clearly burdened by loads of unneeded complexity.

![](ra-14.png)

As the team realized that educating our users was a huge aspect of the interface design, the Logic experience reflected the ethos of clearly delineating that each part of the Logic structure performed a specific task.

![](ra-15.png)

The card-like nature of Logic/Rules disappeared over time, reflecting the textual nature of our redesigning efforts. In order to better serve our users' perception of how this system came together, we opted for design metaphors that relied less on spatial/physical quality.

![](ra-16.png)

The screen above heralds the very linear approach to application development we proposed switching to after our SUS Score usability testing initiative. Our users could now build Application Rules in a step-by-step manner.

![](ra-17.png)

In somewhat of a departure to the previous design, the above Rules editor opted to keep linear rules composing intact until a user needed to enact a more detailed Trigger Action, such as sending an email. The screen would react in such a way so that more real estate was diverted to a task that required the extra space, such as writing an email.

The final iterations of the Rules Composer interface remained text-centric, given that the phrasings and action nouns were primarily defined by the user. The pattern of updating specific words in sentences and phrases for the purpose of defining business Logic permeated the RapidApps platform, and has since been utilized in other IBM products.

![](ra-18.png)

![](ra-19.png)

Throughout the development of the Rules experience, I turned towards interactive prototyping whenever I could. Here's a few sketches I built with [Framer](http://framerjs.com/).

![](ra-23.gif)

☝︎ Adding another action

![](ra-20.gif)

☝︎ Rules target selectors

![](ra-21.gif)

☝︎ Deleting a Condition (later opted to nix the mouseover effect)

![](ra-22.gif)

☝︎ Opening the Rules Console

###### Postmortem —

After approximately spending a year in development, RapidApps lost its development and design team (all of whom have been distributed to other projects). A skeleton team currently maintains the service and keeps it running, but I've likened RapidApps to the Voyager Spacecraft that has been left to cruise the universe.

What happened?

Despite our turnaround in the platform's experience design, the incredible amounts of user research we had conducted, and the overall amount of outside help we had received, [RapidApps had yet to find a viable business case in the end](https://developer.ibm.com/rapidapps/2015/04/17/rapid-apps-beta-retirement/).

This issue had plagued RapidApps from the very beginning — who exactly _was_ the intended user? We did our share of legwork attempting to find the answer to this elusive question, ripping apart our given personae to work with, building up our own from scratch, throwing away our own work and basing the intended user off of archetypical behavior patters found in people we actually knew, and more.

What I intentionally left out in the preceding text was the fact that throughout RapidApps' short lifespan, us designers on the team were actively trying to kill the project off, realizing that if we were building this product for an imaginary person, there would obviously be no one in the end to use it.

A great way to paraphrase this notion:

> I can give you a laser butterknife that toasts bread as you cut it, but until you and a million other people are opting to trade out your old fashioned butterknives for my specialized laser knife, I and my product won't be going anywhere.

When it came down to it, the type of people who were orchestrating relatively complex tasks in spreadsheets would probably end up sticking with their spreadsheets as their primary interface, RapidApps or not.

![](ra-24.png)

Several times throughout the process of designing RapidApps, we proposed scrapping the product, taking its constituent componentry, and baking it into other IBM Product, but each effort was met with intense pushback. The example above displays one of these concepts (a storage solution for business documents which would allow you to 'appify' each document) which would ideally be used on a tablet-sized device.

![](ra-25.png)

The above image was another proposal to completely re-architect the flow of building and interacting with RapidApps applications.

###### —

Despite the eventual failure of this product from a business standpoint, I can't really emphasize enough that it was a process _laden_ in learning. My prior teammates and I still speak to the lessons learned from RapidApps in workshops we teach on prototyping and the product development process.

All-in-all, RapidApps' patterns, ethos, and idealistic spirit lives on.
