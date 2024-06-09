import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formLink = process.env.GOOGLE_FORM_LINK;
    if (!formLink) {
        return new NextResponse("Please configure the env variables", {
            status: 500,
        });
    }

    // configure this according to your google form
    const nameFieldId = process.env.GOOGLE_FORM_FIELD_ID_NAME;
    const emailFieldId = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
    const messageFieldId = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
    const socialFieldId = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

    try {
        const body = await req.json();
        const { name, message, social, email } = body;

        const res = await fetch(
            `${formLink}/formResponse?${nameFieldId}=${name}&${emailFieldId}=${email}&${messageFieldId}=${message}&${socialFieldId}=${social}`
        );

        console.log(res);

        return NextResponse.json("Success!");
    } catch (err) {
        console.log(err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}