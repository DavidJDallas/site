import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <section className="projects-section">
                <h2>Practical Based</h2>

                <article className="project-article project-card">
                    <h3>Weather Trend Viewer</h3>
                    <p className="tech-stack">React, D3, TypeScript</p>
                    <p>
                        An interactive weather explorer built with D3.js. Helps get a feel for historical climate trends anywhere in the world. Use it to get a rough sense of temperature and rainfall before traveling. <a href="https://weathertrends.netlify.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    </p>
                </article>

                <article className="project-article project-card">
                    <h3>Word Count Viewer</h3>
                    <p>
                        This is a coding challenge from John Crickett's coding challenges blog. It's a script that functions the same as the wc tool in any Unix-based OS. This currently works for counting bytes, counting line numbers, counting words, or counting characters. You can do this through denoting -c, -l, -w, or -m in the CLI, respectively. How to run in depth is explicated below. It can be found <a href="https://github.com/DavidJDallas/wc-tool">here</a>.
                    </p>
                </article>
            </section>

            <section className="projects-section">
                <h2>Research Based</h2>

                <article className="project-article project-card">
                    <h3>Computer Architecture</h3>
                    <p>
                        I made some notes to the first few lectures of Geoffrey Messier's online lecture series on Computer Architecture. See <a href="https://github.com/DavidJDallas/Computer-Architecture">here</a> for the notes, and <a href="https://www.youtube.com/watch?v=Onf7AKGHBzg&list=PL7sWxFnBVJLV47Lrq9D-gfFh-mGv2CLCt">here</a> for his excellent lecture series.
                    </p>
                </article>

                <article className="project-article project-card multi-paragraph-project">
                    <h3>Introduction to Backend Software Engineering Course</h3>
                    <p>
                        I've started to create a course/lecture series that's called 'An Introduction to Backend Software Engineering'. Hopefully the title is relatively self-explanatory. It's aimed primarily at people who have a basic grasp of writing code and basic algorithms, but haven't had a chance to get to grips with the more theoretical and foundational elements in the field of backend software engineering.
                    </p>
                    <p>
                        This is currently being written, and will be a combination of both chapters going live on my GitHub, and video lectures being put onto YouTube. If you'd like to see contents of this or any previews I will probably be fine to do so.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Projects;