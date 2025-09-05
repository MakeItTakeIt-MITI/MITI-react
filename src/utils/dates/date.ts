export function getTodaysDateKorea() {
    // Get the current date
    const now = new Date();

    //Extract today's date to Korea Standard Time (KST)
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    // Break the formatted date into parts (year, month, day)
    const parts = formatter.formatToParts(now);
    const year = parts.find((p) => p.type === "year")?.value ?? "";
    const month = parts.find((p) => p.type === "month")?.value ?? "";
    const day = parts.find((p) => p.type === "day")?.value ?? "";

    // Export year, month, day
    //   const { year, month, day } = getTodaysDateKorea();
    return { year, month, day };
}
