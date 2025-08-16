+++
title = 'What the Tech? Art and Artificial Intelligence'
date = 2024-01-07T16:20:00-06:00
tags = ["blog", "technology", "AI", "art"]
keywords = ["artificial intelligence", "AI", "art", "technology", "blog", "creativity", "automation", "security", "business", "trending topics"]
+++

> *Welcome to **What the Tech**, a series where we explore and make sense of technologies and trending topics impacting IT, Security, and Business.*

# Art and Artificial Intelligence

![header](/images/wtt-2024-art-and-ai/header.png)
> Please read this blog post and generate some images to accompany it. Let's start with a title/Header Image

For a while now, many have been stoking fears of automation and artificial intelligence taking away jobs and ruining things for creatives.  Why automate art when there's other bs we could be automating away? Well, we'll get to that, but I want to assert here that AI is not replacing artists, writers, performers or any other creative person.

I think it's important to clear up as much fear, uncertainty, and doubt about these things as we can. Generative Artificial Intelligence has some very powerful uses, but it is not here to replace us.


# What do we mean when we say AI?

Today, when we talk about AI, we are generally speaking about highly complex, often expensive systems that use computers to perform specific tasks at or above the level of a human being. While an AI may be able to outperform a human in tasks like playing chess, mathematics, or quickly reading and summarizing information, an AI good at one of these tasks is going to struggle with the others in ways a human being simply would not.

And so most of the time, when we talk about Artificial Intelligence in the real world, we are talking about highly specialized, narrow scope “intelligences”. In fact, most modern applications of artificial intelligence are training machines to recognize and predict patterns, such as whether or not a picture has a cat in it, whether or not someone said your name, or translating audio waveforms into specific english text (speech-to-text). While things are rapidly evolving in the AI space, and the capability of machine learning is growing, we are still quite a ways away from a general purpose AI as of the time of this writing. That said, the things researchers are doing with "teams" of LLMs is producing some remarkable results at a very rapid pace.

It’s important to understand how these narrow scope AIs work, so you can better understand how they are able to do things like draw photorealistic anime girls.

> ![nirrow-vs-general-ai](/images/wtt-2024-art-and-ai/nirrow-vs-general-ai.png)
> An infographic or diagram explaining the different types of AI (Narrow AI vs. General AI) or illustrating how machine learning works.

# How AI Works

While we’re going to touch on some highly technical topics, we’re only scratching the surface of most of these concepts. In short though, most modern AI are made up of a combination of one or more Machine Learning techniques.


## What is Machine Learning

Machine learning is a process of training a computer to recognize patterns in data, and then to predict the results given new input. It does this through use of specialized software called a Neural Network, which is essentially just a flow chart of different criteria when making a decision, with each criteria holding a certain “weight” when making the decision.

Generally, machine learning tasks are best at things that might take a human a second to do.



* Predicting the next word in a sentence
* Recognizing cats in photographs
* Recognizing your name when spoken aloud

Most practical uses of Machine Learning require lots and lots of labeled data to train on in a process called supervised learning. There are some unsupervised applications where you do _not_ provide labeled data to train a model, which are more typically used to identify patterns in data than to take action or make active predictions.

For example, a smart speaker uses multiple types of machine learning to function.  “Hey Siri, what is the weather like today?”



1. Speech recognition to hear its trigger word -> Does this audio chunk match “Hey Siri”?
2. Speech to text in order to be able to process your command into something the machine can understand
3. Intent detection to interpret what you want -> “what is the weather”->weather status report
4. Call functions or tools matching the detected intent. -> Call Weather API, read results


## Limitations of AI and Machine Learning

While AI and ML are able to do some very, very cool things, they also have some pretty serious limitations.

* Specialized use.  Most models have a very narrow scope of actual functionality. Even something as flexible as an LLM is really only outputting the most likely text to follow your given inputs.
* Limited training data and cutoff dates. Without using additional techniques, LLMs and AI are often stuck operating on months-old information.
* No understanding. Most LLMs use fancy math to “group” words and predict which is next. They don’t know what words mean.
* No memory. LLMs do not retain context between runs; some applications are working around this limitation, but for the most part it is helpful to think of the LLM as a new “fresh college graduate” every time you ask it something. It has no idea what the last kid did.
* Poor quality. LLMs are usually trained on the widest dataset possible, meaning that it lacks voice. If anything, the lack of voice almost serves as a marker for AI generated content

> ![ai-created-art](/images/wtt-2024-art-and-ai/ai-created-art.png)
> A humorous or thought-provoking cartoon or illustration highlighting AI limitations, such as an AI trying to understand human emotions or creating an absurd piece of art.

## So how is it making art?

Applications like ChatGPT and DallE are combinations of several different machine learning techniques, but both fundamentally are built on the same principals that make predictive text on your phone work.

### GPT and LLMs

Large Language Models like GPT-4 work by taking in a batch of input text (the prompt) and outputting a “completion” to that prompt. It works just like predictive text on your phone’s keyboard, only bigger, and with much more context. Trained on text from the internet, LLMs generally take your prompt input and figure out what the most likely thing the internet would say next would be. It’s not all that smart, but it IS good at stringing words together and passably summarizing information that makes for a useful starting point.

In general, I’ve found LLMs to be a better rubber ducky than anything else. Oh, and they’re helpful with boilerplate coding tasks. But really, I find myself testing ideas and brainstorming things with the LLM more than I use its output in “production”.

Some LLMs and chatbots are being given the ability to run commands or make function calls as part of their operations. These can enable LLMs to overcome a lot of their own failures, but still struggle with complex tasks.


### Dall-E and Stable Diffusion

Generating images works on a similar principle, but are trained upon labeled images rather than text from the internet. When you prove you're human and identify a blurry picture of a car?  Yeah you've been helping train stable diffusion models.

These models are trained by feeding them noisier versions of clear pictures, and seeing how well it does de-noising. Taking this a step further and through many iterations, we can take completely random noise and turn it into an anime girl. Really, it's similar to how a sculptor cuts away stone to reveal a statue.

> ![original-vs-ai-fake](/images/wtt-2024-art-and-ai/original-vs-ai-fake.png)
> Examples of artwork created by DALL-E or other AI like Stable Diffusion. You might use before and after images showing the input and the AI-generated output.

You’ll notice something important here. There needs to be a human prompting it. None of this stuff is just being spat out by an endless machine, it requires a human to start the process and to refine its outputs. In the case of AI art, this can be a very complex, specialized process and require applying multiple different models to get the desired outcome. AI generated art may not have been drawn, but it is NOT going to be replacing good artists or designers any time soon.


# What should we do?

Like most technologies, we should be embracing machine learning and generative AI. We can have tools that edit and review our work live as we go, getting quicker feedback on issues or problems you might be having in your work. You can ask it to generate a placeholder image. I can’t imagine someone taking the raw output of an AI and going into production with it.


## Brainstorming and Research

So far, I’ve found ChatGPT to be remarkably useful when trying to get my head around a topic or concept that I’ve never encountered before. Especially with the recent improvements to web browsing by the bot, it is actually very handy in gathering and summarizing information quickly, letting me get on with it.


## Mockups and Stock Images

Alright. As impressive as AI art can be, it’s just got a certain quality to it that screams “wrong”, to me. One, I can’t get the dang thing to stop making everything Anime. Two, even when you embrace the anime, it won’t retain a consistent style or anything between prompts. Three, while sometimes you can look past it, the results are always really weird.

If it isn't obvious, each of the images in this presentation were generated by an AI.


## Editing and Proofreading

Similar to its ability to read and summarize information, LLMs such as ChatGPT are also very useful for doing copy edits, proofreading, or even rewriting something you’re working on. It does not fully replace a human, but is quite good at noticing grammar, spelling, and stylistic errors. I often use these capabilities to help me evaluate if a piece is meeting my own goals for it before I hand it off for publishing.

## Our Jobs

It's important to note here that while AIs are very good at performing *tasks* to the level a human might, they are not able to perform *jobs* in the same way. A job is a collection of tasks, and while an AI might be able to perform one or two of those tasks, it is not able to perform the job as a whole. This is why I think it's important to understand how these technologies work, so that we can better understand how they can be used to help us do our jobs better. For example, an animator might use an AI to generate a background for a scene, but they would still need to animate the characters and objects in the scene themselves. And for years already, AI have been used to help produce the "in-between" frames of animation, allowing animators to focus on the key frames and the overall look of the animation. Coders might use copilot to auto-complete boilerplate code, or to draft the skeleton of a bigger project, but most will still need to actually do the real work and implement the business logic themselves. And writers might use an AI to help them brainstorm ideas, or to help them edit and proofread their work, but they will still need to write the story themselves. In short, AI are not here to replace us, but to help us do our jobs better.

> ![creative-flowchart](/images/wtt-2024-art-and-ai/creative-flowchart.png)
> A flowchart or diagram showing how AI integrates into creative professions, perhaps showing a human and AI in a collaborative workflow.

An AI, may have suggested some of that last paragraph. Doesn't mean it wasn't getting exactly what I as going to say. I've also passed this article to an LLM for further editing.


# Conclusion

While it is undeniable that generative Artificial Intelligence is going to have massive impacts on creative fields, I am of the opinion that it is not the death of human made art, just the opposite. These new technologies and tools allow more people than ever before to be able to express their ideas. Like all new tools and mediums, there is an initial period of experimentation and exploration and a lot of pushback. But as we go forward, we will see that these new technologies allow an even greater proliferation of art and ideas than ever before.

> ![ai-gallery](/images/wtt-2024-art-and-ai/ai-gallery.png)
> A futuristic-looking image that inspires thoughts about the future of AI and creativity, like a person interacting with a large, advanced holographic interface or a gallery of AI-created art pieces.

## Sources and Further Reading

* [Embracing Creativity: How AI Can Enhance the Creative Process](https://www.sps.nyu.edu/homepage/emerging-technologies-collaborative/blog/2023/embracing-creativity-how-ai-can-enhance-the-creative-process.html#:~:text=AI%20can%20analyze%20existing%20compositions,can%20kickstart%20the%20writing%20process.) - NYU.edu
* [Stanford AI Index](https://hai.stanford.edu/research/ai-index-2023) - Stanford.edu
* [Generative AI for Everyone](https://www.coursera.org/learn/generative-ai-for-everyone) - Coursera.org
* [The Current Absurd State of Generating AI Images](https://www.youtube.com/watch?v=-JQDtzSaAuA) - YouTube.com