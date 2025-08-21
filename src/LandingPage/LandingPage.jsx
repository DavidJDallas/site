import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h2>About Me</h2>
            </header>

            <main>
                <section className="landing-section">
                    <p className="main-body">
                        I'm a software engineer with a strong focus on backend web technologies, especially in C# and .NET. I've worked across cloud infrastructure, microservices, and monolithic APIs, all within modern development practices like CI/CD, observability, and agile delivery.
                    </p>
                    
                    <p className="main-body last-paragraph">
                        I love to learn and am driven by a constant desire to understand. Before software engineering, I completed two Masters degrees and a PhD in Philosophy - specifically, in the Philosophy of Science. My Thesis was on Empiricism in Science and the Philosophy of Science, both historically and contemporarily. The phil-sci Archive link can be found <a 
                            href="http://philsci-archive.pitt.edu/21458/" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>, and the official document can be found <a 
                            href="https://research-information.bris.ac.uk/en/studentTheses/empiricism-in-the-philosophy-of-science" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>.
                        </p>
                        <p className="main-body last-paragraph">I'm very interested in the foundations, philosophy and history of software and computer science more generally. I'm especially interested in philosophy of software design, or philosophies of architectural design in software, and am becoming very interested with the early historical figures around this such as Dijkstra and Parnas. 

                        </p>
                        <p className="main-body last-paragraph">
                        Long term, I intend to write semi-regularly about these topics and also on general topics of backend software engineering. The former aiming to be more research based and the latter more educational based aimed at junior/pre-junior engineers.
                        </p>
                   
                </section>

            </main>
        </div>
    );
}

export default LandingPage;