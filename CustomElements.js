console.log("Custom Elements are connected");

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
            <header>
                <h1>*Your Name* Portfolio</h1>
                <div id="navigationButtons">
                    <button onclick="window.location.href = 'index.html' ">HOME</button>
                    <button onclick="window.location.href = 'HTMLGames.html' ">HTML Games</button>
                    <button onclick="window.location.href = 'Game1.html' ">Game 1</button>
                    <button onclick="window.location.href = 'Game2.html' ">Game 2</button>
                </div>
            </header>        
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
            <p>This'll be the footer</p>
            </footer>
        `
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id ="opener">
                <form action="https://api.web3forms.com/submit" method="POST" id="visitorForm">
                    <input type="hidden" name="access_key" value="ba7863c2-3747-4387-be29-e34ffd7f5549">
                    <label for=""> Name <input type="text" id="visitorName" name="Visitor Name"> </label>
                    <label for=""> Company <input type="text" id="visitorCompany" name="Company Name"> </label>
                    <input type="submit" id="submitVisitor" value="Submit Details">
                    <input type="button" id="submitAnon" value="Abstain for now">
                </form>
            </div>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);