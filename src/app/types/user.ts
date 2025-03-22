export interface User {
  access_token: string;
  msg: string;
  user: {
    _id: string;
    created_at: string;
    email: string;
    role: string;
    username: string;
  };
};
