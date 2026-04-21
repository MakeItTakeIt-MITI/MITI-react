

export const inquiriesListMockData = {
    pages: [
        {
            status_code: 200,
            message: "OK",
            data: {
                items: [
                    {
                        id: 3,
                        title: "문의 제목",
                        nickname: "고릴라",
                        num_of_answers: 0,
                        created_at: "2025-09-27T16:17:26.379239+09:00"
                    },
                    {
                        id: 2,
                        title: "경기 취소 문의",
                        nickname: "제이슴",
                        num_of_answers: 0,
                        created_at: "2025-08-18T00:42:02.423415+09:00"
                    },
                    {
                        id: 1,
                        title: "아이디 찾기 문의",
                        nickname: "miti",
                        num_of_answers: 0,
                        created_at: "2025-08-17T21:16:41.968181+09:00"
                    },
                    {
                        id: 4,
                        title: "아이디 찾기 문의",
                        nickname: "miti",
                        num_of_answers: 0,
                        created_at: "2025-08-17T21:16:41.968181+09:00"
                    }
                ],
                page_first_cursor: 3,
                page_last_cursor: 1,
                has_more: false
            }
        }
    ],
    pageParams: [1]
}