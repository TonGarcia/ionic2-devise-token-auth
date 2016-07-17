export class AuthConfig {
  accessToken:string;
  tokenType:string;
  client:string;
  expiry:string;
  uid:string;
  authHeaders:Array<string>;
  globalHeaders:Array<Object>;

  constructor(config:any = {}) {
    this.accessToken = config.accessToken || 'access-token';
    this.tokenType = config.tokenType || 'token-type';
    this.client = config.client || 'client';
    this.expiry = config.expiry || 'expiry';
    this.uid = config.uid || 'uid';
    this.globalHeaders = config.globalHeaders || [];
    this.authHeaders = [
      this['Token-Type'],
      this['Access-Token'],
      this['Client'],
      this['Expiry'],
      this['Uid']
    ];
  }
}
