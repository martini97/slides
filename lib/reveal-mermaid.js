mermaid.initialize({
    startOnLoad: false,
    theme: 'forest',
    logLevel: 3,
});

Reveal.addEventListener('ready', event => asyncMermaidRender(event));

async function asyncMermaidRender(event) {
    var graphs = document.getElementsByClassName("mermaid");
    graphs.forEach((item, index) => {
        let graphCode = item.innerText.trim(); //trim() becase of gantt, class and git diagram
        let mermaidDiv = document.createElement('div');
        mermaidDiv.classList.add('mermaid');
        mermaidDiv.setAttribute("data-processed", "true");

        try {
            // item.innerText ignores html elements added by revealjs highlight plugin.
            mermaid.mermaidAPI.render('theGraph' + index, graphCode, function(svgCode) {
                mermaidDiv.innerHTML = svgCode;
            });

            let parentDiv = document.createElement('div');
            parentDiv.appendChild(mermaidDiv);
            item.parentNode.parentNode.insertBefore(parentDiv, item.parentNode);
            item.parentNode.remove();
        }
        catch(err) {
            console.log("Cannot render mermaid diagram " + index + "\n" + graphCode);
            console.log(err.message);
        }
    })
}
