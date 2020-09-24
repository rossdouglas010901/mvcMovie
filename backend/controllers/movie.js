const movie = require("../models/movie");

exports.createmovie = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const movie = new movie({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename,
    title: req.body.title
  });
  movie
    .save()
    .then(createdmovie => {
      res.status(201).json({
        message: "movie added successfully",
        movie: {
          ...createdmovie,
          id: createdmovie._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Create movie failed!"
      });
    });
};

exports.updatemovie = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  const movie = new movie({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });
};

exports.getmovies = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const movieQuery = movie.find();
  let fetchedmovies;
  if (pageSize && currentPage) {
    movieQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  movieQuery
    .then(documents => {
      fetchedmovies = documents;
      return movie.count();
    })
    .then(count => {
      res.status(200).json({
        message: "movies fetched successfully!",
        movies: fetchedmovies,
        maxmovies: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};

exports.getmovie = (req, res, next) => {
  movie.findById(req.params.id)
    .then(movie => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).json({ message: "movie not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movie failed!"
      });
    });
};

exports.deletemovie = (req, res, next) => {
  movie.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting movies failed!"
      });
    });
};
