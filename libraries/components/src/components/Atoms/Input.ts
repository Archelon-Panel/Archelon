export enum InputType {
    TEXT = "text",
    PASSWORD = "password",
    NUMBER = "number",
    EMAIL = "email",
    TELEPHONE = "tel",
    URL = "url",

}

export default function Input(
    {
        type = InputType.TEXT,

    }
) {
    return <input
        type
    />
}