# Installation:

It is not working with bower nor npm, so you might clone/download it addon and create a folder called __auth_lib__, 
add it to your ionic project, just like bellow:

![ionic2-devise-token-auth structure](https://github.com/TonGarcia/ionic2-devise-token-auth/blob/master/1.%20ionic2-devise-token-auth%20structure.png?raw=true)


__on next step import it file & config your devise target URL, just like that__:

![ionic2-devise-token-auth settings config](https://github.com/TonGarcia/ionic2-devise-token-auth/blob/master/2.%20ionic2-devise-token-auth%20settings%20config.png?raw=true)


__To perform the request, import it ```AuthService, AuthHttp```__:

![ionic2-devise-token-auth perform sign request](https://github.com/TonGarcia/ionic2-devise-token-auth/blob/master/3.%20ionic2-devise-token-auth%20perform%20sign%20request.png?raw=true)


__For any request forward, that need a signed session user, just call the authHttp, like that__:

![ionic2-devise-token-auth perform signed request](https://github.com/TonGarcia/ionic2-devise-token-auth/blob/master/4.%20ionic2-devise-token-auth%20perform%20signed%20request.png?raw=true)
