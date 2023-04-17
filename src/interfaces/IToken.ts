export interface IToken {
  grant_type: string;
  scope: string;
  resource: string;
  client_id: string;
  username: string;
  password: string
}