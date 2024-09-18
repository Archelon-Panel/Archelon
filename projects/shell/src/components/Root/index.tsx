import Html from '@elysiajs/html'
console.log(Html)

export default function Root(
    { children }: { children: Html.Children }
) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Archelon</title>
            </head>
            <body>
                { children }
            </body>
        </html>
    )
}