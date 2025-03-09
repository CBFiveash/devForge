import type { LANGUAGES } from "../types/types";

export function generateHTML(payload: {
    html: string,
    css: string,
    js: string,
}) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <style>${payload.css}</style>
                <script>
                    ${payload.js}
                </script>
            </head>
            <body>
                ${payload.html}
            </body>
        </html>
    `;
}