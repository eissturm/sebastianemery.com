+++
title = 'The Process'
date = 2024-07-27T21:58:08-04:00
tags = ["blog", "writing"]
keywords = ["writing process", "blog", "motivation", "success", "creativity", "planning", "book", "fiction", "automation", "reflection"]
+++

Writing is hard. Not in the way that manual labor is hard, or even in the way that a puzzle or a level in a video game can be hard. Instead, writing is hard like getting in shape is hard, like therapy is hard, like your job is hard. Sometimes success pours out of you, and others you can't get even the simplest of results. You get stuck, and making progress might as well be impossible. And yet in all of these things there are people who do them every day, succeeding consistently where you most often fail. How? What separates success from failure?

For me, that difference is in the attitude and the process. Do I take the steps each day to succeed? Do I motivate myself to continue?

They always say to trust to the process. In my experience, you have to test the process to trust the process, and continually refine until you reach a place where things are working well. A new process I've been trying has been working wonderfully for me, and for the first time in my life I can confidently tell someone when I *think* I will be done with a book. September, as a point of fact.

My process is especially nerdy, I suspect, but should make sense to someone who has worked in software delivery before. It  allows for a lot of automation, which simply delights me.

# Planning the Book

All books begin with an idea, something that rattles around and sticks in my head. Often its an image or a scene, sometimes it's a character, sometimes simply a phrase.

My second book, Desert Edge, started with the image of a behemoth rising out of the sand to destroy a caravan, sending them scrambling in a hostile, alien environment. It's very Dune. Over the next year or so, the rest of the story and the cast began to take shape and I actually had a book. I knew who my bad guy was, and what the outcome of the story was, and why we cared about it.

# Writing the Book

![workflow diagram](/images/Workflow%20Diagram.png)

Using a combination of Microsoft Word, git, and Github, I have built a workflow that feels smooth.

### Write 
The book is written in individual chapter .docx files, stored in the `/Manuscript`directory. I am writing in Word because it is "industry standard" and had a low barrier to entry for integrating and automating with Python. This also makes it easier to open multiple parts of the manuscript at once, something I was struggling with at time when writing in one continuous document. Back referencing shoutouts or name drops a hundred pages ago is a lot easier when I've broken the chapters into their own documents.

### Table of Contents
Also located in the `/Manuscript` directory, the `toc.yaml` file tracks the order to compile chapters at build time. This allows me to reorder the book as needed. If one chapter needs to move ahead of another one, it's a simple change without a lot of heavy lifting on my part. Usually.

### Compilation
A `/Manuscript/build.py` file compiles them, and can be triggered by a Github Action to build the book securely in the cloud, and is useful when working with collaborators.

### Branching
Using git's branching capabilities, we can track and control what versions of the story have been released to our collaborators and our readers.

| Branch | Purpose | Audience |
| ------ | ------- | -------- |
| working | track my work as I'm writing it | author |
| nightly | to review holistic state of the book as it is being written/refined | internal collaboration/editorial team |
| alpha | versions of the book that are ready for early feedback and testing | Close family/friends, external editorial/marketing |
| beta | the book is nearing its final form. Now open for wider feedback | Friends/family, trusted fans |
| main | candidates for final publication | publishing staff, advance readers/reviewers |
| release | the finalized, published version of the book | Public |

Github also offers collaboration benefits; coders long ago worked out how to allow people to both edit the same file at once and how to manage the conflicts between them. Their Projects offers some interesting timelining and project management capabilities that might work for some writers.

### Automation
Github Actions power automated compilation of the book when a new contribution is committed to the private repository. The output of these automations is protected and secured to only the author and allowed contributors. Branches `nightly`, `alpha`, `beta`, and `main` are currently configured for auto-build. The `nightly` branch is caught up to the `working` branch every night at 9pm*

### Statistics
The `/Stats` directory contains a jupyter notebook that processes the build and performs statistical analysis and trending of my progress. This outputs charts and stats blocks like the following, which have been incredibly motivating. Lets see if you can guess when I started doing this?

![word count chart](/images/word_count_progress.png)
```
Target wordcount: 135000
Current wordcount: 84099
Latest contribution: 548.0
Precent to completion: 62%
Estimated days to completion: 55
Estimated completion date: 2024-09-20
Average Daily Words written: 931.7640449438202
Highest single-day word count: 2718.0
```

### Private Notes
`/Notes` contains plot, setting, and character notes relevant to the writing process, but not directly part of the manuscript.