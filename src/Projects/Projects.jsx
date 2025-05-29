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

                <article style={{ marginBottom: '2.618rem' }}>
                    <h3 style={{
                        fontSize: '1.618rem',
                        marginBottom: '1rem',
                        fontWeight: '400',
                        color: '#34495e'
                    }}>
                        Weather Trend Viewer
                    </h3>
                    <p style={{
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        A while back I built an app that allows you to view historical weather trends for any location you'd like to see. It was built as a practical tool for trying to get a rough feel for temperatures and amount of rain you'd likely experience when taking trips to specific places around the world. It utilises the D3 library in JavaScript/TypeScript, and uses React as a front-end library.
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: '#555'
                    }}>
                        The site is <a 
                            href="https://weathertrends.netlify.app/" 
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