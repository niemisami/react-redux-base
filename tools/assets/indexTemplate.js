
/**
 * initialState must be JSON string
 */
export default ({ html, title, initialState }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${title}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1">
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/css/materialize.min.css">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="/styles/main.css">
            </head> 
            <body>
            <div id="app">${html}</div>
                    <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__INITIAL_STATE__ = ${initialState}
                </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js"></script>
            <script src="/bundle.js"></script>
            </body>
        </html>
        `
};