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
