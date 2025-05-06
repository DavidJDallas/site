

const Projects = () => {
    return(
        <>
        <h2>Practical based</h2>

        <h3>Weather Trend Viewer</h3>
        <p>
        A while back I built an app that allows you to view historical weather trends for any location you'd like to see. It was built as a practical tool for trying to get a rough feel for temperatures and amount of rain you'd likely experience when taking trips to specific places around the world. It utilises the D3 library in JavaScript/TypeScript, and uses React as a front-end library. 

        The site is here: https://weathertrends.netlify.app/.

        </p>
        
        <h3>Word count viewer</h3>
        <p>This is a coding challenge from John Crickett's coding challenges blog. It's a script that functions the same as the wc tool in any Unix-based OS. Just started yesterday and currently works for counting bytes, counting line numbers, counting words, or counting characters. You can do this through denoting -c, -l, -w, or -m in the CLI, respectively. How to run in depth is explicated below.
            </p>
        <p>
        https://github.com/DavidJDallas/wc-tool
        </p>

        <h2>Research-based</h2>

        <h3>Computer Architecture</h3>
        <p>I made some notes to the first few lectures of Geoffrey Messier's online lecture series on Computer Architecture. See here https://github.com/DavidJDallas/Computer-Architecture for my notes, and here for his excellent lecture series. </p>

        </>
    )
}

export default Projects