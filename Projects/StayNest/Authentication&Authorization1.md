# Authorization

- **What can you do?** Checks what an **authenticated user is allowed to access or perform**.
- **Note:** Authorization start first check schema **owner** properties.

- Hide review **Delete** button - (User not Login || First time user)
  Check login - (use - **isLoggedIn && isUser**)

- Show review **Delete** button - (User Login with Owned by Listing)
  check user - (use - **isLogged && isUser** with owner of listing(**req.user**))

- Hide Listing **Delete, Edit, Review** button - (User not Login || First time user)
  Check login - (use - **isLoggedIn && isUser**)

- Show Listing **Delete, Edit, Review\*** button - (ser Login with Owned by Listing)
  check user - (use - **isLogged && isUser** with owner of listing(**req.user**))

## Authorization for listings

- Use middleware - isOwner
- Edit, Update, Delete

## Authorization for Review

- first check author in schema
- author hai to good nahi to add karenge schema me
- than get review add auther add in Database
- Delete Reviev only Author - front-end protect
- Delete Reviev only Author - back-end protect
- with middleware use - "isReviewAuthor"
