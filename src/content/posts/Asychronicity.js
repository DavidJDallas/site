export const asycnhroncity = {
    id: 'async',
    title: "An Introduction to Asynchroncity",
    date: "2025-09-15",
    category: "practical",
    excerpt: "Current work in progress",
    readTime: "15 min read",
    content: `
        <h2> Introduction </h2>
    
        <p>
        Asynchroncity in modern day programming languages is often a feature that is so well hidden behind incredible abstractions that it is easy to not understand, forget, or never learn, the full sophistication of what is going on at a more foundational level. The beautiful syntactic sugar of async/await is perhaps the peak of this. The syntax fully came to being in C# in 2012, and was picked up in a large number of languages over the next decadeL: Haskell, Python, JavaScript, Rust, C++, and Swift. 
        </p>

        <p>
        This was/is a duel-edged sword. On the one hand, the abstraction that this creates allows for developers to write easier-to-read, safer code that is almost definitely more performative and easier to maintain. On the other hand, it allows developers to not understand what is really going on in their code. Jonathan Blow (perhaps hyperbolically) <a href= "https://www.youtube.com/watch?v=ZSRHeXYDLko"> warns of the dangers of this </a>, in that we have generations of developers (myself often included) who simply don't understand what is really going on in the codebase.
        </p>

        <p>
        The motivation for this article came from me, embarassingly, deeply misunderstanding some of the behaviour in async/await in C#. 
        In the code, we write to a table via EF Core. Async/Awaited. In the next line, after awaiting, we read that same table and have subsequent checks based on the newly written data. I, wrongly, thought that there was a chance for a race condition here, assuming that there's a chance that another thread could move onto the subsequent code and check the data before it was written to the database. I was corrected by other members of my team, and quickly found after googling it that they were entirely right. 
        </p>
        <p>
        Being so fundamentally wrong about such a basic feature set me off trying to understand it properly. And trying to understand it properly led me to realise that, really, I know embarassingly little about all things around this: asynchroncity, threads, parrallelism, etc. And so this article was born. 
        </p>
        <p>
        In this article, I explore asynchroncity in programming from the ground up. I go back to first steps, looking at threading in computers, and build up step-by-step as to what is really going on. I try to keep this as general as possible, but early examples are written in C, to demonstrate the lower-level workings. The later examples are written in C#, to demonstrate how the complexities are hidden away behind abstractions. But again, I try to keep it general so as to be as useful as possible to as many people as possible.
        </p>

        <h2> Blocking operations </h2>
       
        Performance issue of blocking operations is not just a software design choices; it's rooted in a fundamental architectureal limitation: Von Neumann bottleneck. 

        I/O bound refers to a condition in which the time it takes to complete a computation is determined principally by the period spent waiting for input/output operations to be completed, rather than being CPU bound. This occurs when more time is spent requesting data than procesesing it. 

        Programmes run on your computer at a user-level environment can't directly access hardware resources e.g. disk drives. This is a foundational security measure. To perform a privileged operation like I/O, a programme needs to make a formal request to the OS's kernel via a system call. 
    
        user mode vs kernel mode.

        A thread is the smallest unit of execution than an OS can schedule to run on a CPU core.Represents a single, sequential flow of control within a process.
        When a programme blocks, it is not the entire process that it blocks, but just the single thread that initiated the blocking operation. 

        IRP: I/O Request packet

        When the kernel receives a system call request, the kernel puts all the necessary details into an IRP. This will contain a complete description of the task, including type of operation, file descriptor or device handle, the location of the memory buffer where data will be stored, and the number of bytes to transfer. 

        Once the Kernel has offloaded the I/O task to the hardware via the device driver, the programme's original thread is no longer able to make process. 
        The kernel's scheduler is the component responsible for deciding which process or thread runs on a CPU core at any given moment. 


        `
};
