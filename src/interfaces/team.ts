export interface TeamListItem {
  id: number;
  name: string;
  city_id: number;
  city_name: string;
  latitude: number;
  longitude: number;
  level: 'rookie' | 'division6' | 'division5' | 'division4' | 'division3' | 'elite';
  introduction: string;
  num_of_members: number;
  image: string | null;
}

export interface TeamListResponse {
  status_code: number;
  message: string;
  data: {
    items: TeamListItem[];
    page_first_cursor: string | null;
    page_last_cursor: string | null;
    has_more: boolean;
  };
}
