const handerError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message;
    // console.error(err.stack);
    console.log(message);
    // Image file validation error
    if (statusCode === 405) {
        req.flash("error", message);
        return res.redirect("listings/new");
    }
    res.status(statusCode).render("error", {
        statusCode,
        message,
    });
};

export default handerError;
