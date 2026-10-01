# Authorization

**Authorization** answers: **“What can you do?”**
It checks whether an **authenticated user is allowed to access or perform an action**.

## Important

- Authentication checks **who the user is**.
- Authorization checks **what that user is allowed to do**.
- Store ownership information in the schema using references such as `owner` and `author`.

## Authorization for Listings

- A Listing should have an **`owner`** field referencing the `User`.
- Use an **`isOwner` middleware** to verify ownership.
- **Edit, Update, and Delete Listing** → allowed only for the listing owner.
- Front-end → Hide Edit/Delete buttons from users who are not the owner.
- Back-end → Always verify ownership before performing the action.

```text
req.user._id === listing.owner
        ↓
Owner ✅ → Allow
Not Owner ❌ → Deny
```

## Authorization for Reviews

- A Review should have an **`author`** field referencing the `User`.
- When creating a review, save the logged-in user as the **author**.
- **Delete Review** → allowed only for the review author.
- Front-end → Show the Delete button only to the review author.
- Back-end → Verify the author again using **`isReviewAuthor` middleware**.

```text
req.user._id === review.author
        ↓
Author ✅ → Allow
Not Author ❌ → Deny
```

### Access Control Summary

```text
Not logged in
    ↓
Login required

Logged in + Owner
    ↓
Edit / Update / Delete Listing ✅

Logged in + Review Author
    ↓
Delete Own Review ✅

Logged in + Not Owner/Author
    ↓
Access denied ❌
```

> **Key Point:** Front-end hiding is only for UI. **Back-end authorization is mandatory** because users can directly send requests without using the UI.
