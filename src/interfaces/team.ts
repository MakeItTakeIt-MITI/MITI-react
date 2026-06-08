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

export interface TeamCity {
  id: number;
  code: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface PlayerProfile {
  gender: 'male' | 'female' | 'mixed';
  height: number;
  weight: number;
  position: string;
  role: string;
}

export interface TeamMemberUser {
  id: number;
  name?: string;
  nickname: string;
  profile_image_url: string | null;
  phone?: string;
  birthday?: string;
  player_profile: PlayerProfile;
}

export interface TeamMembership {
  id: number;
  role: 'owner' | 'manager' | 'member';
  status: 'pending' | 'active' | 'inactive' | 'suspended' | 'banned' | 'withdrawn';
  team: number;
  team_meta: {
    id: number;
    name: string;
    status: string;
    level: string;
    introduction: string;
    city_id: number;
    city_name: string;
    latitude: string;
    longitude: string;
    num_of_members: number;
    image: string | null;
  };
  user: TeamMemberUser;
  created_at: string;
}

export interface TeamDetailData {
  id: number;
  name: string;
  city: TeamCity;
  introduction: string;
  images: string[];
  status: 'created' | 'active' | 'suspended' | 'inactive' | 'deleted';
  level: 'rookie' | 'division6' | 'division5' | 'division4' | 'division3' | 'elite';
  latitude: number;
  longitude: number;
  num_of_members: number;
  request_user_membership: TeamMembership | null;
}

export interface TeamDetailResponse {
  status_code: number;
  message: string;
  data: TeamDetailData;
}

export interface TeamMemberListItem {
  id: number;
  role: 'owner' | 'manager' | 'member';
  status: 'pending' | 'active' | 'inactive' | 'suspended' | 'banned' | 'withdrawn';
  team: number;
  user: TeamMemberUser;
  created_at?: string;
}

export interface TeamMembersResponse {
  status_code: number;
  message: string;
  data: {
    requested_user_role: 'owner' | 'manager' | 'member' | null;
    members: TeamMemberListItem[];
  };
}

