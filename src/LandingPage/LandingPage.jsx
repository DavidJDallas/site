import './LandingPage.css';

const LandingPage = () => {
    
        return (
            <div className="landing-container" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '2.618rem',
                lineHeight: '1.618',
                fontFamily: 'Georgia, serif'
            }}>
                <header style={{ marginBottom: '2.618rem' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '1.618rem',
                    fontWeight: '400',
                    color: '#2c3e50',
                    borderBottom: '1px solid #ecf0f1',
                    paddingBottom: '0.5rem',
                    letterSpacing: '-0.02em'
                }}>
                About Me
                </h2>

                </header>

                <main>
                    <section style={{ marginBottom: '2.618rem' }}>
                        <p className="main-body" style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.618rem',
                            color: '#444',
                            textAlign: 'justify'
                        }}>
                            I'm a pragmatic* software engineer with a strong focus on backend web technologies, especially in C# and .NET. I've worked across cloud infrastructure, microservices, and monolithic APIs, all within modern development practices like CI/CD, observability, and agile delivery.
                        </p>
                        
                        <p className="main-body" style={{
                            fontSize: '1.1rem',
                            marginBottom: '2.618rem',
                            color: '#444',
                            textAlign: 'justify'
                        }}>
                            I love to learn and am driven by a constant desire to understand. Before software engineering, I completed two Masters degrees and a PhD in Philosophy - specifically, in the Philosophy of Science. My Thesis was on Empiricism in Science and the Philosophy of Science, both historically and contemporarily. The phil-sci Archive link can be found <a 
                                href="http://philsci-archive.pitt.edu/21458/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#3498db',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid #3498db',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                here
                            </a>, and the official document can be found <a 
                                href="https://research-information.bris.ac.uk/en/studentTheses/empiricism-in-the-philosophy-of-science" 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#3498db',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid #3498db',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                here
                            </a>.
                        </p>
                    </section>

                    <aside style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        fontStyle: 'italic',
                        paddingLeft: '1.618rem',
                        borderLeft: '3px solid #ecf0f1',
                        marginTop: '1.618rem'
                    }}>
                        * I use the description 'Pragmatic' primarily to endorse something akin to John Ousterhout's position that opposes some of the more dogmatic elements of Robert Martin's 'clean code' ideology and some of the elements of SOLID.
                    </aside>
                </main>
            </div>
        );
}


export default LandingPage;