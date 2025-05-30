const Projects = () => {
    return (
        <div className="projects-container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2.618rem',
            lineHeight: '1.618',
            fontFamily: 'Georgia, serif'
        }}>
            <section style={{ marginBottom: '4.236rem' }}>
                <h2 style={{
                    fontSize: '2.618rem',
                    marginBottom: '1.618rem',
                    fontWeight: '300',
                    color: '#2c3e50'
                }}>
                    Practical Based
                </h2>

                <article style={{
    background: '#fafafa',
    border: '1px solid #e1e4e8',
    borderRadius: '12px',
    padding: '1.618rem',
    marginBottom: '2.618rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)'
}}>
    <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        fontWeight: '500',
        color: '#2c3e50'
    }}>
        Weather Trend Viewer
    </h3>
    <p style={{
        fontSize: '0.95rem',
        color: '#777',
        fontStyle: 'italic',
        marginBottom: '0.5rem'
    }}>
        React, D3, TypeScript
    </p>
    <p style={{
        fontSize: '1rem',
        color: '#444',
        lineHeight: '1.6',
        marginBottom: '1rem'
    }}>
        An interactive weather explorer built with D3.js. Helps get a feel for historical climate trends anywhere in the world. Use it to get a rough sense of temperature and rainfall before traveling.
    </p>
    <a href="https://weathertrends.netlify.app/" target="_blank" rel="noopener noreferrer"
       style={{
           display: 'inline-block',
           backgroundColor: '#3498db',
           color: 'white',
           padding: '0.5rem 1rem',
           borderRadius: '5px',
           textDecoration: 'none',
           fontSize: '0.95rem'
       }}>
        View Project →
    </a>
</article>


                <article style={{ marginBottom: '2.618rem' }}>
                    <h3 style={{
                        fontSize: '1.618rem',
                        marginBottom: '1rem',
                        fontWeight: '400',
                        color: '#34495e'
                    }}>
                        Word Count Viewer
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        This is a coding challenge from John Crickett's coding challenges blog. It's a script that functions the same as the wc tool in any Unix-based OS. This currently works for counting bytes, counting line numbers, counting words, or counting characters. You can do this through denoting -c, -l, -w, or -m in the CLI, respectively. How to run in depth is explicated below. It can be found <a 
                            href="https://github.com/DavidJDallas/wc-tool"
                            style={{
                                color: '#3498db',
                                textDecoration: 'none',
                                borderBottom: '1px solid #3498db'
                            }}
                        >
                            here
                        </a>.
                    </p>
                </article>
            </section>

            <section>
                <h2 style={{
                    fontSize: '2.618rem',
                    marginBottom: '1.618rem',
                    fontWeight: '300',
                    color: '#2c3e50'
                }}>
                    Research Based
                </h2>

                <article style={{ marginBottom: '2.618rem' }}>
                    <h3 style={{
                        fontSize: '1.618rem',
                        marginBottom: '1rem',
                        fontWeight: '400',
                        color: '#34495e'
                    }}>
                        Computer Architecture
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        I made some notes to the first few lectures of Geoffrey Messier's online lecture series on Computer Architecture. See <a 
                            href="https://github.com/DavidJDallas/Computer-Architecture"
                            style={{
                                color: '#3498db',
                                textDecoration: 'none',
                                borderBottom: '1px solid #3498db'
                            }}
                        >
                            here
                        </a> for the notes, and <a 
                            href="https://www.youtube.com/watch?v=Onf7AKGHBzg&list=PL7sWxFnBVJLV47Lrq9D-gfFh-mGv2CLCt"
                            style={{
                                color: '#3498db',
                                textDecoration: 'none',
                                borderBottom: '1px solid #3498db'
                            }}
                        >
                            here
                        </a> for his excellent lecture series.
                    </p>
                </article>

                <article>
                    <h3 style={{
                        fontSize: '1.618rem',
                        marginBottom: '1rem',
                        fontWeight: '400',
                        color: '#34495e'
                    }}>
                        Introduction to Backend Software Engineering Course
                    </h3>
                    <p style={{
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        I've started to create a course/lecture series that's called 'An Introduction to Backend Software Engineering'. Hopefully the title is relatively self-explanatory. It's aimed primarily at people who have a basic grasp of writing code and basic algorithms, but haven't had a chance to get to grips with the more theoretical and foundational elements in the field of backend software engineering.
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        This is currently being written, and will be a combination of both chapters going live on my GitHub, and video lectures being put onto YouTube. If you'd like to see contents of this or any previews I will probably be fine to do so.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Projects;