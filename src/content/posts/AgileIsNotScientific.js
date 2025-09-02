export const agileScience = {
    id: 'software-engineering-science',
    title: "Software Engineering is Not Scientific. And That's Fine.",
    date: "2025-08-15",
    category: "research",
    excerpt: "Current work in progress",
    readTime: "15 min read",
    content: `
  

    -- NB investigate Hilel Wayne's work, especially on exactly this question.
    <h3> Introduction </h3>
    <p>
    This article is motivated by, and focuses on, Dave Farley's 'Modern Software Engineering'. At its core, the argument is that the foundations of Farley's system are not correct in several important ways. In brief
    <ol>
    <li> Farley mischaracterises what science is and especially what the scientific method and scientific reasoning is.
    <li> Even if a successful characterisation was put in place, Software Engineering would only be partially able to ground itself 'scientifically'.
    <li> <i>Even if </i>Software Engineering did have an entirely scientific foundation, and could thus be treated as 'Software Engineering' in the truest sense of the word, <b> engineering does not use scientific reasoning </b>
    </ol>
    </p>
    <p>
    However, and this is another point of disagreement with Farley, <b><i> this is fine </b></i>. Just because what we call Software Engineering is not true Engineering, and doesn't have full scientific foundations, that doesn't take away from either (a) that it has potential to be an excellent discipline that Software Engineers can stand by and be proud of, or (b) Farley's excellent contribution to Software Engineering, and his great advice and insights into the field. 
    </p>

    <p>
    I want to caveat all this with the fact that Dave Farley is, by any account, an incredibly accomplished and skilled Software Engineer. This article in no way seeks to change this claim, nor take anything away from him. I worry that the article may be seen in this light. In terms of concrete, practical advice on all things software, my knowledge and advice would pale in comparision to his. 
    </p>
    
    <p>The aim of this article is not to slight any of these facts; it's to critique a more foundational claim that he makes throughout his book. The overall, final note, of this article is that this is absolutely fine. The article, in an overly-simplified sentence, could read something like: <i> Software Engineering does not have the scientific foundations that Farley wants. But that's fine - his system and advice is good, and should be listened to. </i> I actually up-play non-scientific reasoning, which is contra to Farley's claims that scientific knowledge is humanities knowledge <i> par excellence </i>. </p>
    
    <p> Clearly, Farley's book is not the only text or author making similar claims to this around the Engineering status, or Scientific status of Software Engineering (find more references). But Farley's is the most explicit, and is the text I have found that most clearly lays out the author's views. It is therefore this that is most focused on. </p>

    <h3> Farley's Modern Software Engineering: An Overview </h3>
    <p>
    In what follows of this overview, I try and let Farley's words speak for themselves by offering more extensive quotations than is perhaps normal here. This is a critical piece, and I would hate to make it appear that I am putting words in Farley's mouth that he has not explicitly said.
    </p>
    <p>
    With that being said, let's dive in. In Farley's own words:
    </p>

    'This book puts the engineering back into software engineering. In it, I describe a practical approach to software development that applies a consciously rational, scientific style of thinking to solving problems'
    (pxxi).
    TO BE FINISHED

    <h3> The Mischaracterisation of Science </h3>

    <h4> The Mischaracterisation of the Scientific Method </h4>
    Farley writes:
    <blockquote>
    'The scientific method that most of us learned about in school is described by Wikipedia as:

    <ul>
    <li> Characterize: Make an observation of the current state.
    <li> Hypothesize: Create a description, a theory that may explain your observation.
    <li> Predict: Make a prediction based on your hypothesis.
    <li> Experiment: Test your prediction.
    <ul>
    (p3).
    </blockquote>

    <p>
    The problem with this definition is that it is both too narrow and too broad: it is too broad to be able to differentiate science from non-science, and too narrow to sufficiently capture the broad discipline that is science. Let me give a few examples of each side to illustrate my point
    </p>
    <p>
    <h5> Too Broad </h5>
    <br>
    Finding my car keys is, under this definition, scientific:
    <br> <b>Characterize </b>: I observe that my car keys are missing
    <br> Hypothesize: I theorise that since my car keys are relatively heavy, clunky, and generally hard to carry whilst moving around the house, I would have taken them out of my hands and put them down somewhere.
    <br> Predict: I predict that they will be near the door.
    <br> Experiment: I look on the table near the door. They are there. Therefore, a successful implementation of the scientific method.
    <br>
    I take it that no-one would really want to allow that me rationally thinking through finding my car keys is science. 
    </p>
    <p> In the car keys example, whilst this is evidently not science, we can certainly call it 'rational', by most standard definitions of rationality. Most people would be happy to accept that this is a solid, good methodology to look for keys. However, we can also find examples where this is both absolutely not scientific, and also deeply flawed reasoning. Let's now turn to a typical conspiracy theory, which we can see will also follow this same logical structure. </p>
    <p>
    <b>Too broad example two: Conspiracy theories</b>
    <br>
    <br>
    Conspiracy theories are, under this definition, scientific.
    <br>
    <b>Characterize </b>: I observe that a building collapsed unusually quickly and some reports seem inconsistent.
    <br>
    <b> Hypothesize </b>: The collapse was a deliberate demolition by hidden actors.
    <br>
    <b> Predict </b>: If that hypothesis is true, I will find anomalies: eyewitness contradictions, suspicious sounds in videos, or documents that appear to have been altered.
    <br>
    <b> Experiment </b>: I comb through footage and reports, catalog “inconsistencies,” and interpret several details as evidence of demolition. The prediction appears confirmed.
    <br>
    <br>
    Conclusion: Even if I iterate this cycle—refining the hypothesis, gathering more anomalies, and repeating the test—few would count this as science. The four-step recipe is so broad that it licenses practices that mimic scientific form without its safeguards (operationalization, falsifiability, controls, statistical testing, openness to refutation).
    </p>
    <p>
    Many, many more examples in both camps (too narrow, too strict) for Farley's characterisation - taken from Wikipedia - of the scientific method just cannot hold up. What Farley is describing is essentially a broad characterisation of abductive reasoning which, if the content that fills the premises is sound, can indeed provide a secure mode of reasoning. In philosophy, we label two types of reasoning - deductive, and inductive. Abductive is a specific type of inductive reasoning that works backwards in time, instead of working forwards in time. We also call abductive reasoning 'Inference to the Best Explanation'. 

    </p>

    <h5> Too Narow </h5>
    <h6> Example One: Discovery of Dark Energy </h6>

    <p>
    In the late 1990s, dark energy was discovered. Two independent teams of astronomers were observing supernovae to measure the expansion rate of the universe. According to all known physics of the time, the expansion should be slowing down due to gravity.
    </p>
       <b>Characterize </b>: Both teams observed distant supernovae to measure their distance and speed.
    <br>
    <b> Hypothesize </b>: The prevailing hypothesis was that the universe's expansion was decelerating.
    <br>
    <b> Predict </b>:  They predicted that distant supernovae would appear brighter than expected if the expansion was slowing.
    <br>
    <b> Experiment </b>: The 'experiment' involved a multi-year observational project. But, crucially, the data revealed the exact opposite of what was predicted: distant supernovae were dimmer than expected, which meant that the expansion was accelerating. 
    <br>
    <p>
    There discovery was the complete opposite of what their hypothesis was.
    </p>

    <p>
    To avoid boring the reader with repetitive examples too much, I'll leave the more extensive details there. But there are many, many more examples of major and typical 'science' and scientific discoveries that do not conform to this model. I will simply list just a few.
    <ol>
    <li> Einstein's discovery of general relativity (discovered mathematically and not empirically verified for several years after.)
    <li> Maxwell's unification of electricity and magnetism.
    <li> The discovery of the structure of DNA by Watson and Crick. Their breakthrough was not based on a single experiment but on synthesizing existing data from many other scientists, including the X-ray diffraction images from Rosalind Franklin and Maurice Wilkins. It was a moment of abductive reasoning and model-building, not a linear, experimental process.</li>
    <li> The discovery of the Cosmic Microwave Background (CMB) by Arno Penzias and Robert Wilson. They were working on a radio antenna for satellite communication and kept picking up a persistent, annoying "hiss" of static from all directions. It was a complete anomaly. After ruling out every possible cause—including pigeon droppings—they realized they had stumbled upon the leftover radiation from the Big Bang. The discovery was one of pure serendipity, driven by the unexpected results of an entirely different project. </li>
    <li> The discovery of penicillin by Alexander Fleming. In 1928, Fleming returned from a vacation to find that a mold had contaminated one of his bacterial cultures. The bacteria around the mold were dead. Instead of simply discarding the contaminated dish, he recognized the anomaly and investigated it. The discovery was a result of a keen eye and an open mind, not a planned experiment to find an antibiotic.</li>
    </ol>
    </p>

    <p>
    Farley goes on, at the end of the same chapter, to discuss Kuhn. There is a huge tension here, for Kuhn is one of the key philosophers and historians who begins the movement in philosophy of science against a unified scientific method. Kuhn's argument is that any sort of scientific method would only be applicable, if at all, to periods of 'normal science', i.e. the method would break down in periods of revolutionary science (paradigm shifts). This fundamentally makes the scientific method relative to specific eras. Kuhn is clear that paradigm shifts involve the loss of deeply rooted things in the era, such as important concepts, methodologies, and foundational assumptions. 
    </p>

    <p>
    What philosophers have constantly made clear over time is that defining 'the' scientific method with any sort of necessary and sufficient conditions seems to be an endeavour doomed to failure. Various programmes have tried - Popper's Falsficationist programme, the Logical Positivists and Logical Empiricists attempt to..., before the consensus seemed to be reached in Larry Laudan's seminal paper arguing that it simply cannot be done to a consensus, with necessary and sufficient conditions. 
    </p>
    <p>
    That isn't to say, by any means, that no definition of science can be given.

    <h4> The Mischaracterisation of Science More Generally </h4>

    <blockquote>
    Science is 'an approach that allows us the intellectual freedom to challenge and refute dogma and to differentiate between fashion, plain-old bad ideas and great ones, whatever their source. It allows us to replace the bad ideas with better ideas and to improve on the good ideas. Fundamentally, we need some structure that allows us to grow and to evolve improved approaches, strategies, processes, technologies, and solutions. We call this good example science!'. 
    (p6)
    </blockquote>

    <p>
    This is far more defensible than the definition of the scientific method set up prior. I actually think this captures important elements of what science is. However, it's still overly idealised, simplified, and glorifies science as something it is often not. Let's look at a few major counter-examples in the history of science that goes totally contra this
    </p>

    <p>
    Race science. Social dogma and social biases can corrupt the scientific process and resist correction for centuries.
    </p>
    <p>
    One may argue that this is too outlandish - surely modern science doesn't follow the same protocol as this? Let's look at more modern examples of science that are contra to Farley's points:
    </p>
    <p>
    String theory. Lack of empirical evidence can be overcome by mathematical beauty and elegance.
    </p>
    <p>
    </p>


    <h3> Software 'Engineering' Can Only Partially Have Scientific Foundations </h3>

    <p>
    Let's now move on from the previous argument, where it was charged that Farley did not give a definition of science that stands up to scrutiny. Let's now assume that this is fine - that Farley's definition of science is suitable. Let's operate on the premise that science is a clear, well understood entity, body of practices, or set of methods, that have some common ground across all things that we call 'science'.
    </p>
    <p>
    This section argues that, given this, any way we want to construe Software Engineering can only <i>partially</i> have scientific foundations. This will be spelled out in a lot more detail, but the core of it is this: the parts of Software Engineering that can have scientific foundations are the parts that directly ground themselves in scientific principles from computer science. All parts that aren't grounded in computer science, or indeed any other science, cannot be said to be grounded/have foundations in science. It is not enough to employ 'scientific reasoning' - the validity of this claim at all will be challenged later on -, it must reference science. 
    </p>
    <p>
    The overly simplified summary of my argument is that the elements that do have scientific foundations are parts like engineering for performance (aligning your algorithms to simpler O(n) complexity, opting for writing code that interacts with hardware more efficiently, etc). The elements that don't have scientific foundations are, amongst other parts, software architecture, software design philosophies, design patterns, etc. 
    </p>


     'Software engineering is the application of an empiricial, scientific approach to finding efficient, economic solutions to practical problems in software' 

    <h3> On 'Scientific Reasoning', and why Engineering does not use Scientific Reasonig </h3>

     'I describe a practical approach to software development that applies a consciously rational, scientific style of thinking to solving problems. These ideas stem from consistently applying what we have learned about software development over the last few decades'. (xxi)

     'Engineering is about adopting a scientific, rationalist approach to solving practical problems within economic constraints, but that doesn't mean that such an approach is either theoretical or bureaucratic. Almost by definition, engineering is pragmatic'. (xxii)

    <h3> Why this is Fine: On the Richness of Non-Scientific Reasoning </h3>
    'Humanit's best approach to learning is science, so we need to adopt the techniques and strategies of science and apply them to our problems.' (p3). Disagree with this. 

    'I describe a practical approach to software development that applies a consciously rational, scientific style of thinking to solving problems. These ideas stem from consistently applying what we have learned about software development over the last few decades'. (xxi)

    'This approach assembles a collection of important foundational ideas and builds on the work that went before. At one level there is nothing that is new here in terms of novel practices, but the approach that I describe assembles important ideas and practices into a coherent whole and gives us principles on which a software engineering discipline may be built'.

    

    'Software engineering is not production engineering in any form; that is not our problem. If when I say engineering it makes you think bureaucracy, please read this book and think again' (ibid).

   

    His Part 1: 'What is Software Engineering' is where I will be criticising. This forms the foundations of the book .In his own words, it 'begins by looking at what engineering really means in the context of software. This is about the principles and philosophy of engineering and how we can apply these ideas to software. This is a technical philosophy for software development'. 
    

    'Humanity's best approach to learning is science, so we need to adopt the techniques and strategies of science and apply them to our problems'. (p3)

    (1) Humanity's best approach to learning is science is incredibly contentious. Here are just 5 counter-examples to this.



    (2) What, exactly, the 'techniques' and 'strategies' of a body called science is highly problematic and contentious, in and of itself. Even more difficult is applying something like that to a discipline. 

    The reality of the situation is that Farley entirely ignores (1). It's a presupossition and treated as a given, with no justification. The same goes for (2). The scientifc method that he describes below is almost comically naieve. This is something like the Baconian method of science, developed in the late 1500s/early 1600s by Francis Bacon at the very advent of the Scientific Revolution. It has been torn apart time and time again ever since, to the point where to assert this almost feels like a joke to anyone who has done even a single module in philosophy of science. 

    A cursory history of the critiques of this method include:
    1748 - Hume's Problem of Induction
    Early 1900s: The Duhem-Quine thesis
    1930s-1940s: Popper's Critique of Inductivism
    1962: Kuhn's Paradigm Shifts
    1970s: Feyarabend's Methodological Anarchism
    1980s: The Bayesian work done on Scientific Confirmation: John EArmans' sophisticated mathematical frameworks for undestanding the relationship between evidence and how it supports theories.

    1990s: Mayo's error-statistical philosophy.
    1990s-now : The stats wars - how do humans learn about the world despite threats of error due to incomplete data?



    I'd like to showcase 10, extremely high-profile, non-pedantic cases in science that in no way conform to Farley's characterisation of the scientific method, nor science:

    (1) Darwin's theory of evolution. Developed through theoretical synthesis, not measurement. Key insight ws theoretical.

    (2) Einstein's theory of both Special and General Relativity (1905, 1915). Both developed through pure theoretical reasoning and thought experiments. Math came first, and experimental confirmation came years later. (1917, I think)

    (3) Plate techtonics theory (1960s): Wegener's contintental drift initially rejected despite geological evidence. Acceptance came through theoretical breakthroughts in seafloor spreading. 

    (4) DNA Double Helix Discvoer (1953): Watson and Crick succeeded through model-building and theoretical insight, not systematic measurement. 

    (5) The discvoery and development of Quantum Mechanics. (1900s-1930s). Planck, Heisenberg, Born, Schrodinger, etc, developed quantum mechanics through mathematical innovation and theoretical leaps that defied common sense. 

    (6) Discovery of Benzene structure (1865) Kekule reportedly discovered the benzene ring structure in a dream about a snake eating its own tail. 

    (7) NEwton's laws of motion in the Principia (1687).

    (8) Mendel's Laws of Inheritance (1866): Theoretical breakthroughs.
    
    In fact, I really can't think of any instances in the history of science that follow the method that Farley points out. Some contenders that come to mind are:

    - Kepler's planetary laws
    - Boyle's gas laws
    - Ohm's Law
    - Mendeleve's periodic table

    ButKepler wasn't just measuring more precisely - he made the creative leap to abandon circular orbits for ellipses, which was theoretically radical.
Boyle was guided by mechanical philosophy and corpuscular theory - the measurements were theory-laden from the start.
Ohm faced initial resistance because his mathematical approach challenged prevailing theories about electrical action.
Mendeleev made bold theoretical predictions about missing elements and corrected supposedly "precise" atomic weights based on his theoretical framework.

    p4: 'This book is deeply grounded in a practical, pragmatic approach to solving problems in software, based on an informal adoption of basic scientific principles, in other words, engineering!'. 

    Fives techniques that form the roots of the focus:
    - iteration
    -feedback
    -incrementalism
    - Experimentation
    - Empiricism

    6: 'That is the fundamental idea at the heart of this book, and its aim is to describe an intellectually consistent model that pulls together some foundational principles that sits at the roots of all great software development'.

    Science is 'an approach that allows us the intellectual freedom to challenge and refute dogma and to differentiate between fashion, plain-old bad ideas and great ones, whatever their source. It allows us to replace the bad ideas with better ideas and to improve on the good ideas. Fundamentally, we need some structure that allows us to grow and to evolve improved approaches, strategies, processes, technologies, and solutions. We call this good example science!'. 

    'This book is about what it means to apply scientific-style reasoning to our discipline and so achieve something that we can genuinely and acurrately refer to as software engineering'. 

    There is also a fundamental tension in Farley's work, for a few pages later he discusses Kuhn's idea of paradigm shfits. This is a poor reading of Kuhn. The great irony here is that Kuhn argues exactly that there is no universal scientific method, and that what counts as scineitific is entirely dependent on a particular paradigm

    Baconian Farley: "Here's THE scientific method that works across all domains and times"
Kuhnian analysis: "There is no universal scientific method - what counts as proper method changes with paradigms"
Baconian Farley: "Science progresses through better measurement and precision"
Kuhnian analysis: "Science progresses through revolutionary breaks that discard previous frameworks entirely"
Baconian Farley: "We can apply scientific techniques rationally to any problem"
Kuhnian analysis: "Scientific approaches are embedded in particular paradigms and can't be abstracted from their contexts"

    9: Argues that paradigm shifts 'give us an approach to learning more effectively and discarding bad ideas more efficiently'. 

    Chapter 2: What Is engineering

    11: Confusion between production engineering and design engineering.

    17: 'Engineering is the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems'. 

    Using 'empirical' means to learn and advance understanding and solutions towards the resolution of a problem;. 

    'for this book, when I talk about engineering, unless I qualify it specifically, I mean everything that it takes to make software. Process, tools, culture - all are part of the whole'. 


    Empiricism chapter

    To be fair, I actually think his definition, taken from Wikipedia, is a relatively ok definition.

    There are many wild things in here.But:

    82: 'our production systems will always surprise us, and they should! Ideally they will not surprise us too often in very bad ways, but any software system is really only the best guess so far of its developers. When we publish our software into production, this is, or should be, an opportunity to learn'. 

    Pages 83-84. Example of rational, solid thinking conflated with scientific reasoning. 

    What scientific reasoning actually involves:

Systematic methodology designed to control variables and eliminate bias
Attempts to discover generalizable principles or laws
Reproducible experiments that others can replicate
Statistical analysis of data across multiple cases
Peer review and community validation
Building theories that make novel predictions

What Farley describes:

A single incident of debugging
Ad hoc hypothesis formation ("maybe it's the messaging")
No controls, no systematic methodology
No attempt to generalize beyond this specific case
No quantitative analysis
Just rational troubleshooting

This is basic rational problem-solving - the kind any competent professional does. A plumber diagnosing a leak, a doctor diagnosing symptoms, a mechanic finding engine problems all use similar reasoning patterns. We don't call them scientists.
The philosophical point: Farley is committing a category error by conflating rational inquiry (which includes scientific reasoning as a subset) with scientific reasoning specifically. Science is a particular, highly disciplined form of rational inquiry with specific methodological requirements.

The problem here is that even if Farley's claim was correct - that Software Engineering is Engineering - it is a highly contentious claim that engineering, in any form, is a form of scientific reasoning. 


    92: There is an irony here (recognised by Farley) of using a quote from Feynman (an authority) to decry trusting authority. But, aside from this, the quotes that are used by Feynman are quite misleading as to what science actually is or does. 

    This decrying of authority is sort of true. But, again, misleading. A better principle in rational thinking is that we should defer expert opinion to the experts. See van Fraassen's work here. 
    `

}