# File Uploading Process

## Image Upload Process

- Normal form not send file data
- in MongoDb size limit - file
- A normal HTML form does **not send file data correctly**.
- To upload files, use:

```html
<form enctype="multipart/form-data">
    <input type="file" name="image" />
</form>
```

### How send and recive image file

- Form capable for sending file - **enctype="multipart/form-data"**
- in MongoDb file not store - size limit
- use third party service for store a file - like AWS, Cloud base service
- Third party store and give a links/URL
- Than store in MongoDB - links/URL

### Manipulating Form

- First inside the form - **enctype="multipart/form-data"**
- input type is **file**
- This form capable to send a file type data from **Back-end**

#### Multipart/form-data

- multipart/form-data ko direct access nahi kar sakete
- esiliye hame middleware use karn hoga
- like **Multer** Middleware to give functionallity to access multipart/form-data.

### Important Points

- **MongoDB can store files**, but normal documents have a **16 MB BSON size limit**.
- For large files, MongoDB provides **GridFS**, but cloud storage is commonly used for application images.
- **Multer** parses `multipart/form-data` and makes uploaded files available to Express.
- Store the **file URL/path in MongoDB**, rather than storing the image itself in the listing document.

### How It Works

```text
User selects image
       ↓
Form: multipart/form-data
       ↓
Multer middleware
       ↓
Backend receives file
       ↓
Cloud storage (Cloudinary / AWS S3, etc.)
       ↓
Storage returns image URL
       ↓
Store URL in MongoDB
```

### Key Point

> **Multer handles the upload → Cloud storage stores the image → MongoDB stores the image URL.**

### Cloud Setup - Cloudinary

- API environment variable difene in **.env** file.
- Note share anyone **environment credentials**
- **.ENV** store - Cloud - Name, API Key, API Secret

### Store Files

- **Multer** receives the uploaded file from `multipart/form-data`.
- **Cloudinary** stores the actual image/file.
- Cloudinary returns a **URL** for the uploaded file.
- Store the **Cloudinary URL** in MongoDB, not the actual image.
- Use Multer **memoryStorage()** and then upload the buffer to Cloudinary.
- Cloudinary officially supports **upload_stream()** for Node.js uploads, and Multer's memory storage provides the uploaded file as **req.file.buffer**.

#### Flow

```text
User uploads file
      ↓
Multer receives file
      ↓
Cloudinary stores file
      ↓
Cloudinary returns URL
      ↓
MongoDB stores URL
```

> **Key Point:** File → Cloudinary, URL → MongoDB.

#### Middleware

```js
const uploadToCloudinary = (buffer, options = {}) => {
    // buffer → uploaded file ka actual binary data.
    // Usually: req.file.buffer
    // options → Cloudinary upload settings:
    // { folder: "staynest/listings",
    //      public_id: "listing-123"  // public_id automatically मिलता है, लेकिन manually define करने पर आप उसका नाम/control खुद तय कर सकते हो।
    //  format: "webp" }
    // = {} ka matlab options na mile to empty object use hoga.
    return new Promise((resolve, reject) => {
        // Cloudinary upload asynchronous hai. Promise hume allow karta hai:
        // await uploadToCloudinary(...); Yani upload complete hone ka wait kar sakte hain..
        const stream = cloudinary.uploader.upload_stream(
            // What's: upload_stream() Cloudinary ka upload method hai.
            // Why: File ko stream/buffer ke through Cloudinary par upload karta hai
            options,
            (error, result) => {
                // Cloudinary upload complete hone ke baad callback run hota hai.
                if (error) {
                    return reject(error);
                }
                // Upload successful hua → Cloudinary ka result return.
                resolve(result);
            },
        );
        // What's: Buffer ko upload stream mein bhejta hai.
        // Why: req.file.buffer ko actual Cloudinary upload process mein send karna hai.
        stream.end(buffer);
    });
};
```

##### Complete Flow

User selects image
↓
Multer
↓
req.file.buffer
↓
uploadToCloudinary(buffer)
↓
new Promise()
↓
cloudinary.uploader.upload_stream()
↓
stream.end(buffer)
↓
Cloudinary
↓
resolve(result)
↓
secure_url + public_id
↓
MongoDB में URL save

###### Options (Format) || Cloudinary `format`

`format` upload की **file format/extension** specify करता है।

```text
jpg / jpeg → JPEG image
png        → PNG image
webp       → WebP image
avif       → AVIF image
gif        → GIF image
```

```js
const result = await uploadToCloudinary(req.file.buffer, {
    folder: "staynest/listings",
    format: "webp",
});
```

- for pdf : **accept="application/pdf"** & **format: "pdf"**

- Which use - **format: "webp"** is a good choice because it generally gives **good quality with smaller file size**.

- Why WebP?
  Usually smaller file size than JPEG/PNG
  Good image quality
  Faster web loading
  Supports transparency

> Note: `format` is different from HTML `accept`. `accept` controls which files the user selects; `format` controls the Cloudinary upload/output format.

- accept is only a client-side hint. It does not securely validate the file.
- For actual validation, also check the file type on the server.

- Delete image from Cloudinary

```js
await cloudinary.uploader.destroy(deleteListing.image.public_id);
```
