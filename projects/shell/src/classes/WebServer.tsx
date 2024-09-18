import Elysia from "elysia";
import Root from "../components/Root";
import html, { Html } from '@elysiajs/html'

export default class WebServer {
    port: number = 3000;
    app: Elysia

    constructor() {
        console.log(this)
        this.app = new Elysia()
        this.app.use(html())

        this.app.get("/", <Root><p>Test</p></Root>)

        this.app.listen(this.port)
    }
}