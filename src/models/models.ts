export interface UserShort {
  id: number;
  name: string;
}

export interface UserDetails {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}