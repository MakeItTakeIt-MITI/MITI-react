import { http, HttpResponse } from 'msw';



// npx msw init ./public

export const handlers = [
    http.get('https://miti.mock/games/list', () => {
        return HttpResponse.json({
            status_code: 200,
            message: "OK",
            data: [
                {
                    id: 8,
                    game_status: "canceled",
                    title: "테스트경기",
                    startdate: "2025-01-14",
                    starttime: "22:50:00",
                    enddate: "2025-01-14",
                    endtime: "23:50:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 0,
                    fee: 10000,
                    info: "테스트",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                },
                {
                    id: 7,
                    game_status: "canceled",
                    title: "MITI 픽업게임",
                    startdate: "2025-01-14",
                    starttime: "21:00:00",
                    enddate: "2025-01-14",
                    endtime: "21:10:00",
                    min_invitation: 10,
                    max_invitation: 12,
                    num_of_confirmed_participations: 0,
                    fee: 1000,
                    info: "주차 가능합니다. 실내화를 착용해주세요.🥇",
                    court: {
                        id: 1,
                        name: "더모스트 베스킷볼 동탄오산점",
                        address: "경기 오산시 동부대로568번길 87-15",
                        address_detail: null,
                        latitude: "37.1529123326082",
                        longitude: "127.088354885662"
                    }
                },
                {
                    id: 6,
                    game_status: "completed",
                    title: "테스트경기",
                    startdate: "2025-01-13",
                    starttime: "18:20:00",
                    enddate: "2025-01-13",
                    endtime: "19:20:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 1,
                    fee: 1000,
                    info: "테스트",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                },
                {
                    id: 5,
                    game_status: "canceled",
                    title: "테스트경기",
                    startdate: "2025-01-12",
                    starttime: "18:00:00",
                    enddate: "2025-01-12",
                    endtime: "19:00:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 0,
                    fee: 10000,
                    info: "테스트",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                },
                {
                    id: 4,
                    game_status: "canceled",
                    title: "테스트경기",
                    startdate: "2025-01-12",
                    starttime: "18:00:00",
                    enddate: "2025-01-12",
                    endtime: "19:00:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 0,
                    fee: 10000,
                    info: "테스트",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                },
                {
                    id: 3,
                    game_status: "canceled",
                    title: "테스트경기",
                    startdate: "2025-01-12",
                    starttime: "18:50:00",
                    enddate: "2025-01-12",
                    endtime: "19:50:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 0,
                    fee: 10000,
                    info: "테스트",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                },
                {
                    id: 2,
                    game_status: "canceled",
                    title: "testf",
                    startdate: "2025-01-12",
                    starttime: "17:00:00",
                    enddate: "2025-01-12",
                    endtime: "18:00:00",
                    min_invitation: 1,
                    max_invitation: 2,
                    num_of_confirmed_participations: 0,
                    fee: 1000,
                    info: "test",
                    court: {
                        id: 2,
                        name: "더모스트 베스킷볼 분당수지점",
                        address: "경기 용인시 수지구 동천로 417-1",
                        address_detail: null,
                        latitude: "37.3430807801627",
                        longitude: "127.060624877289"
                    }
                }
            ]
        });
    })
];

