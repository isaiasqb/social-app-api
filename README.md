# social-app-api
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend lis
```

## Walk Trhough Videos

The following videos demosntrate the functionality of the back-end application.

https://drive.google.com/file/d/1cksGSgjiw2R-z9rRvf2sHGVSZ_Jakexj/view


https://drive.google.com/file/d/1Kq4tD0cN2OntYS74Oxj-wt4Nf_EcMFul/view

## Github

Repository Link
https://github.com/isaiasqb/social-app-api


Github Profile Link
https://github.com/isaiasqb


## References

Please note that for validating the email address within the **UserSchema (User.js)**. I used these websites as reference:

* Explanation for the Match property
https://thewebdev.info/2022/03/16/how-to-validate-email-syntax-with-mongoose/

* Failproof regex expression for validating email addresses
https://regexr.com/2ri2c
