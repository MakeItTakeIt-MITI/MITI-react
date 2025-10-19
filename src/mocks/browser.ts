import { setupWorker } from "msw/browser";
import { handlers } from "../features/games/mocks/handler";

export const worker = setupWorker(...handlers);
