
/**
 * initialState must be JSON string
 */
export default ({ html, title, initialState }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            </head> 
            <body>
            <div id="app">${html}</div>
                    <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__INITIAL_STATE__ = ${initialState}
                </script>
            <script src="/bundle.js"></script>
            </body>
        </html>
        `
};