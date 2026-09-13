const reviewController = async (req, res) => {
    const { id } = req.params;
    res.render("listings/review.ejs", { id });
};

export default reviewController;
