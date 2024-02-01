Please add the .env file in this code repository 

the .env file contains the ACCESS_TOKEN_SECRET and the REFRESH_TOKEN_SECRET which contains the 64-bit secret key used for the hashing which results in the creation of the strong Access and the refresh token which can be used to authorise the
users who log in to the server.

this JWT is used for the authorising the users in the multiple servers so that the users doesnt need to log in to every server he/she logs in
ex: if a website is facing lots of incoming traffic so the company decides to use the power of microservies so create multiple servers so if aa user logs in the authentication server then the JWT generastes the access and refresh tockens which
results the users to use the other servies without login each servers separately.



//IMPPORTANT NOTE:
To get the secret key use the CRYPTO Module in the node
1)type node in the terminal
2)enter the following command in the node terminal
require("crypto").randomBytes(64).toString('hex')

it will generate the random 64 bit key for our tokens

3)we need to run the aboe command twice so that we can get the two tocken one for the access and the another one for the Refresh token.
