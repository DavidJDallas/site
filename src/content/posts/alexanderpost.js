export const alexanderPost = {
    id: 'alexander-notes-synthesis-form',
    title: "Alexander's Notes on the Synthesis of Form: A Summary",
    date: "2025-08-15",
    category: "summary",
    excerpt: "Current work in progress",
    readTime: "15 min read",
    content: `
        <h3> Introduction </h3>
    
        <p>
        Christopher Alexander’s <i>Notes on the Synthesis of Form</i> (henceforth <i>Notes</i>) occupies a curious position in the foundations of software architecture. It is often spoken of as important, yet remains far less visible than Alexander’s later work, <i>A Pattern Language</i>.
        </p>
        <p>
        Most software practitioners who know Alexander’s influence know it through his book <i>A Pattern Language</i>. This is the text cited explicitly in <a href = "https://en.wikipedia.org/wiki/Design_Patterns"><i>Design Patterns</i></a>, in <a href= "https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture"><i>Pattern-Oriented Software Architecture</a></i>, and by Martin Fowler both in talks and in <a href="https://martinfowler.com/books/eaa.html"><i>Patterns of Enterprise Application Architecture</i></a>. By contrast, aside from Richard P. Gabriel’s <a href="https://www.amazon.co.uk/Patterns-Software-Tales-Community/dp/0195121236"><i>Patterns of Software</i></a>
      
        and a <a href="https://davidwhitney.co.uk/blog/2025/01/06/notes_on_the_synthesis_of_form/">blog post</a> from David Whitney, explicit references to <i>Notes</i> in the software literature appear to be rare  <sup>
        <a href="#fn1" id="ref1" style="text-decoration: none;">
          <span style="font-size: 1.1em; font-weight: bold;">1</span>
        </a>
        </sup>.
        </p>
        <p>
        The question arises: why begin this series on summaries of important texts within software with a work that the software world barely cites? There's two main reasons. The first reason is that any series on foundational texts must include <i>A Pattern Language</i>, and <i>Notes</i> is the foundation from which <i>A Pattern Language</i> grew. One can use <i>A Pattern Language</i> in isolation and gain substantial practical insight, but to fully grasp the reasoning behind Alexander’s patterns — his conception of fit, his method for handling complexity — <i>Notes</i> is essential reading. The idea, therefore, is that <i> Notes</i> needs to be read in order to fully grasp <i>A Pattern Language</i>.
        </p>

        <p>
         The second reason is more philosophical, but builds from the first- beginning here sets the tone for the series. Using the relationship between <Notes</i> and <i>A Pattern Language</i>: this series has as one of its aims the goal to bring the more foundational, pre-requisite texts to life, and to explore the foundational philosophy that goes into the more well-known texts. Thus, the philosophy of this series is that texts like <i>Notes </i>are just as important as the texts that build from it.
         <br>
         The series will also be slower paced, performing deeper dives and reflecting on the texts in various ways. I want to spend time exploring vital texts for software engineering, and not have a series that is rushed or superficial. Being able to explore not just critical and foundational texts, but going even deeper and exploring the pre-requisities of these foundational and critical texts.
        </p>
        <p>
        Moving on from motivaions and onto the text itself: <i>Notes</i> is Alexander’s manifesto for good (non-software) architectural design. It addresses: (1) the meaning of “goodness of fit”; (2) the historical design paradigms he terms the self-conscious and the unself-conscious; and (3) a systematic method for achieving good design in the unself-conscious paradigm — the most extensive section of the book. This post will follow that same broad structure, but be divided in two sections: Goodness of Fit, and Design Methods. In the latter section, I will discuss briefly the self-conscious and unself-concious paradigms.
        <sup>
          <a href="#fn2" id="ref2">
            <span style="font-size: 1.1em; font-weight: bold;">2</span>
          </a>
        </sup>
        </p>

        <h3>Goodness of Fit</h3>

        <p>
        <i>Goodness of Fit</i> is Alexander’s way of defining the aim of design in the face of what he calls “insoluble levels of complexity” (p. 3). In his terms, design succeeds when the <b>form</b> (the thing designed) fits harmoniously with the <b>context</b> (the conditions, forces, and requirements acting on it), leaving no significant “misfits.” The more mismatches remain between form and context, the poorer the fit. 
        </p>
        <p>
        While Alexander develops this in an architectural setting, the problem is equally real in software architecture. Even small projects can become unmanageably complex very quickly unless proper precaution is taken. Many software design paradigms - from John Ousterhout’s pragmatic design philosophy to the Clean Code and SOLID principles - can be read as attempts to manage this same problem: reducing complexity and maintaining fit.
        </p>
        <p>
        Alexander also issues a warning to architects about avoiding the hard questions that goodness of fit demands. Confronted with the challenge of asking “why” we should prefer one design approach over another, or generally questioning foundational assumptions of the field and design, designers can retreat into the safety of established “styles”:
        </p>
        <p>
        <blockquote>
        <i>“Rather than face the responsibility of these difficult questions, designers turned instead to the authority of resurrected ‘styles.’ The architectural decisions made within a style are safe from the nagging difficulty of doubt, for the same reason that decisions are easier to make under tradition and taboo than on one’s own responsibility.”</i> (p. 10)
        </p>
        </blockquote>
        <p>
        Whilst aimed at architects, this clearly applies also to software architects and designers of software generally. We can often see dogmatic adherence to various well-established software paradigms (e.g. OOP, SOLID, Clean Code, Microservices, etc), using them as fix-all solutions that avoid deeper reasoning about the specific problem at hand.
        </p>
        <p>
        Briefly recapping, and spelling some key concepts out a bit more clearly: <br>
        <b>Form</b>: The thing designed; the end product. For a 'normal' architect, this is the building, the church, the warehouse. For software architecture, if designing a new system to import data from a third party at a faster rate, the form is whatever design implements that capability in the most fitting way for its environment.<br>
        <b>Context</b>: The forces, constraints, and requirements shaping the design.<br>
        <b>Ensemble</b>: The form and context taken together, considered as a single interdependent whole.
        </p>

        <p>
        With the essential concepts here covered, let's dive a bit deeper with the following two direct quotations:
        </p>
        <blockquote>
        <p>
        <em>"...when we speak of design, the real object of discussion is not the form alone, but the ensemble comprising the form and its context. Good fit is a desired property of this ensemble which relates to some particular division of the ensemble into form and context."</em>
        </p>
        <p>(p. 16)</p>
        </blockquote>

        <blockquote>
        <p>
        <em>"The rightness of form depends, in each of these cases, on the degree to which it fits the rest of the ensemble"</em>
        </p>
        <p>(p. 17)</p>
        </blockquote>

        <p>
        Context is everything when considering the form; indeed, the form should only ever be created by fully understanding the context, as much as is physically possible. Let's examine this more concretely with a basic example: we are designing a new basket feature in an e-commerce app where users can select an item and it will be saved into this basket where they can subsequently check out. What's the form? In other words, what will the final product look like? Well, that depends entirely on the context.
        </p>

        <p>
        This context is given by your stakeholders and constraints. As a developer, you will likely want to know about: 
        <ol> 
        <li> How long do we have to implement this?  
        <li> How many developers are available to build this feature? 
        <li> What is the current architecture of the app, and what components will we be connecting to?
        <li> What are our storage requirements, both permanent and temporary? 
        <li> How many concurrent users do we expect?
        <li> What is our budget for infrastructure costs? 
        </ol>
        This will just be the start of the questions a good designer will ask.
        </p>

        <p>
        Contextual constraint clearly shapes the form. A tight two-week deadline with one developer will undoubtedly lead to a simpler solution; a three-month deadline with a full team might justify a sophisticated distributed system with event sourcing and real-time synchronization. This mirrors Alexander's insight that the rightness of any design depends not on abstract principles, but on how well it fits within its specific ensemble of constraints and requirements. 
        <br>
        We can imagine a very different solution here based on the more dogmatic adherents to any particular paradigm than the designer who is willing to really take into account all the context.

        </p>
        <h4> Good Fit is Defined Negatively </h4>
        <p>
        Alexaner argues that 'Good Fit' can also usually only be determined negatively (p22); and achieving good fit should be seen as a negative process of neutralising the incongruities. Alexander justifies by pointing to the fact that we already do this in practice (p24). 
        </p>
        <p>
        Returning to our e-commerce basket: instead of vague positive requirements like "fast" or "user-friendly," we can specify precise failure conditions to avoid:
        </p>

        <ul>
        <li>Users losing basket contents during normal browsing</li>
        <li>System unresponsiveness under expected concurrent load</li>
        <li>Confusion in add/remove item workflows</li>
        <li>Data loss during checkout processes</li>
        </ul>

        <p>
        This approach creates more reliable design criteria because we can test concretely against these failure modes. Alexander justifies this by noting we already do this instinctively - we notice when something fails to work far more readily than we can articulate abstract positive qualities (p. 24).
        </p>
        <p>
        It seems, though, that in Software Design it can certainly go the other way. In other words, that we can define Good Fit in a mix of positive and negative terms. For example, in the functional requirements of a system, we can specify that we want latency to be less than x ms. Or that we want the system to be able to process x number of transactions per second; that we want x numbers of users to be able to simultaneously access the one basket.
        </p>
        <p>
        Perhaps a first attempt at a heuristic for this could be something like: <i> negative requirements work best for the UX of the software, whereas a mix of both positive and negative requirements work best for the quantifiable properties of the system and for functional requirements. </i> This seems to correlate with how easily each domain can be measured objectively - UX qualities are often subjective, making negative boundary conditions more practical. System properties are more objective, or at least have the potential to be, and can support precise positive specifications. 
    
        </p>
       
        <h4> Whitney and the Subversion of Form </h4>
        <p>
        David Whitney has written an <a href="https://davidwhitney.co.uk/blog/2025/01/06/notes_on_the_synthesis_of_form/""> excellent blog post</a> that pays homage to Alexander's <i>Notes </i>. An especially illuminating point he makes is around the <b><i>subversion of form</i></b>. The subversion of form is where the 'usual' or 'normal' way of doing things in design is subverted, usually for pragmatic reasons, i.e. to achieve a specific goal. 
        </p>
        
        <p>
        His blog serves as an excellent warning and reminder <i>why</i> it is that designers/architects in software will make the choice of falling into pre-established forms: subverting form (going against the established way) is risky. Well-established forms in software - providing that they are forms that are estbalished <i>having understood the context correctly</i> - are usually safe, and well understood. For example, in C#/.NET, it's a pretty safe bet to split your project up by using design choices like Dependency Injection, manage your business logic in a 'Service' layer, and to manage all database access in a 'Repository' layer. Further, people will at the very least understand using principles like 'Single-Responsbility' and 'Dependency-Inversion' in your codebase. If heading up a department, this is a pretty safe, tried-and-tested way of implementing Form. 
        <br>
        To stray from this - to subvert this form - is risky:
        </p>
       
        <blockquote>
  
        It’s easy to subvert regular form and make your code harder to understand, or to subvert regular form and make your code harder to maintain. It’s a tool that should be used sparingly, and with intent. 
        <br>
        </blockquote>

        <p>
        Whitney's key point is that to subvert form successfully, first <b><i>you have to completely understand why the form is successful</b></i>. He points to Chesterton's Fence analogy to brilliantly illustrate this:
        </p>

        <blockquote>
        "In the matter of reforming things, as distinct from deforming them, there is one plain and simple principle; a principle which will probably be called a paradox. 
        <br>
        There exists in such a case a certain institution or law; let us say, for the sake of simplicity, a fence or gate erected across a road. The more modern type of reformer goes gaily up to it and says, "I don't see the use of this; let us clear it away." 
        <br>
        To which the more intelligent type of reformer will do well to answer: "If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.""
        </blockquote>

        <p>
        To summarise and conclude, Whitney writes:
        </p>
        <blockquote>
        You are absolutely allowed, and should, with maturity as a designer, subvert regular form, but only when in your context you have something that achieves the same goals as the regular form, with better outcomes that says something about the design of your software, APIs, or modules.
        </blockquote>
        <p>
        This echoes Alexander sentiments about the ensemble. Understanding the context is everything here. Whitney applies the principle of the importance of understanding context to other Forms in Software.
        </p>

        <h4> Synthesising the Views </h4>
        <p>
        I want to draw out something that could be seen as a tension in the views put forward here, taken together. It could seem that Alexander is saying do not stick to existing paradigms, but start every problem afresh and find the simply find the best match for the context. And that Whitney is being far more cautious here and saying that existing paradigms work for a reason, and feel free to subvert them but only if you fully understand. Phrased slightly differently: that Alexander seems to advocate starting afresh with each problem, and that Whitney advises caution against the departure from normal form. 
        </p>
        <p>
        I think that this would be the wrong reading. I suggest that they are saying the same thing, but with Whitney giving a much clearer and well-emphasised version. I read Alexander's argument as arguing that sticking to existing paradigms is fine, providing the context matches. I think the architectural design of using micro-services is a good way to illustrate this. Micro-services is certainly a well-established paradigm that is incredibly useful for certain things in architecture. But it definitely has a time and a place. Using a micro-services architecture for a 1 person team trying to get a product off the ground is almost definitely adding unecessary complexity into your project; using a micro-service architecture for a 15 person team where there are several services with distinct, modular features is probably a smart choice, since it allows the develoeprs to split naturally into teams and work on these different services without stepping on each other's toes. They can build independently, scale independently, QA independently, etc.
        </p>
        <p>
        In my reading, Alexander would say that the decision of whether or not to use a micro-services architecture is entirely dependent on the context, which I've highlighted above. I imagine that Alexander would have no qualms whatsoever with using a micro-services architecture for the latter example, but would object strongly to using micro-services in the first example. The same would apply, I imagine, for Whitney. My reading is that Whitney's post <i>extends</i> Alexander's argument: <i>the possibilty of the subversion of form would apply only to instances where the standard form is a good, viable solution. </i> This makes Whitney's piece an excellent extension of Alexander, who doesn't much discuss subverting form, as opposed to standing in something of a tension, which an alternative reading could give. 
        </p>


        <p>
        To summarise the key takeaways here from this section:
        <ol>
          <li>Form and context taken together are the ensemble.</li>
          <li>The aim of design is to allow form to arise naturally from understanding the context.</li>
          <li>We can create specifications only by defining the absence of negatives, not asserting the positives.</li>
          I disagreed with (3), in the context of Software Engineering.
          <li> Whitney's writing on the Subversion of Form provides an excellent extension of Alexander's framework here. </li>
        </ol>
        </p>


        <h3>Design Methods</h3>
        <h4> The Self-Conscious and Unself-Concious paradigms </h4>
        <h4>Constructive Diagrams</h4>
        <h4>Programme vs Problem</h4>
        <h4>Explicit vs Vague Criteria</h4>
        <h4>Modelling Vague Criteria in Subsystems</h4>

        <hr>
        <ol>
          <li id="fn1">
            In this book, Alexander actually writes the foreword for Gabriel. He discusses, amongst other things, his reaction to being so influential in the Software community.
            <a href="#ref1">↩</a>
          </li>
          <li id="fn2">
            All quotations with a page number are from Christopher Alexander’s 
            <i>Notes on the Synthesis of Form</i> (Harvard University Press, 1964), unless otherwise stated.
            <a href="#ref2">↩</a>
          </li>
        </ol>
    `
};
