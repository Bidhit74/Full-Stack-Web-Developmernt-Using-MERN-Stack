const reviewController = async (req, res) => {
    const { id } = req.params;
    res.render("reviews/review.ejs", { id });
};

export default reviewController;
