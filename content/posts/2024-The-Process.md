+++
title = 'The Process'
date = 2024-07-07T21:58:08-04:00
+++

Writing is hard. Not in the way that manual labor is hard, or even in the way that a puzzle or a level in a video game can be hard. Instead, writing is hard like getting in shape is hard, like therapy is hard, like your job is hard. Sometimes success pours out of you, and others you can't get even the simplest of results. You get stuck, and making progress might as well be impossible. And yet in all of these things there are people who do them every day, succeeding consistently where you most often fail. How? What separates success from failure?

For me, that difference is in the attitude and the process. Do I take the steps each day to succeed? Do I motivate myself to continue?

They always say to trust to the process. In my experience, you have to test the process to trust the process, and continually refine until you reach a place where things are working well. A new process I've been trying has been working wonderfully for me, and for the first time in my life I can confidently tell someone when I *think* I will be done with a book. September, as a point of fact.

My process is especially nerdy, I suspect, but should make sense to someone who has worked in software delivery before. It  allows for a lot of automation, which simply delights me.

1. Each chapter is written in separate Word document files inside a `/Manuscript` folder
1. This folder also contains a `table-of-contents.yml` file, which lists which order the chapters appear in the final manuscript
1. A `build` script assembles the individual chapters into a single manuscript based on the table of contents file's direction. This script is run once daily.
1. The built document is analyzed, metrics are recorded, and charts are generated to show progress since the last writing session.
1. Writing plan is broken down into two week sprints, detailing which chapters need to be written.
1. While overall beats and plot structure is planned, individual chapters are not plotted in too much detail so as to allow for flexibility during the writing process.
1. Each chapter is commited to github in a private repository
1. Pull requests from various branches trigger builds of the entire book for release to that audience.

Doing things this way has accelerated my output significantly, offering the motivation and accountability I've often struggled with, without becoming so inflexible that I lose the joy I have for my project. I'm the kind of person who needs to see a line going up, and now I've got one for myself!
