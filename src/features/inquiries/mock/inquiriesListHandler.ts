import { HttpResponse, http } from "msw";
import { inquiriesListMockData } from "./InquiriesListMockData";

export const inquiriesListHandler = [
    http.get("*/dev/inquiries", () => {
        return HttpResponse.json({ id: 5, title: "hello" });
    })
];