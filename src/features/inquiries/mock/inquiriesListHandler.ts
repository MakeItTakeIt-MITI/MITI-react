import { HttpResponse, http } from "msw";

export const inquiriesListHandler = [
    http.get("*/dev/inquiries", () => {
        return HttpResponse.json({ id: 5, title: "hello" });
    })
];