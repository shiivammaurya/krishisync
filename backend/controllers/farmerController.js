const farmers = require("../data/farmers");

// GET all farmers
const getAllFarmers = (req, res) => {
  res.status(200).json(farmers);
};

// GET single farmer
const getFarmerById = (req, res) => {
  const farmer = farmers.find(
    (f) => f.id === Number(req.params.id)
  );

  if (!farmer) {
    return res.status(404).json({
      message: "Farmer group not found",
    });
  }

  res.status(200).json(farmer);
};

// POST farmer
const createFarmer = (req, res) => {
  const newFarmer = {
    id: farmers.length + 1,
    ...req.body,
  };

  farmers.push(newFarmer);

  res.status(201).json(newFarmer);
};

// PUT farmer
const updateFarmer = (req, res) => {
  const farmer = farmers.find(
    (f) => f.id === Number(req.params.id)
  );

  if (!farmer) {
    return res.status(404).json({
      message: "Farmer group not found",
    });
  }

  Object.assign(farmer, req.body);

  res.status(200).json(farmer);
};

// DELETE farmer
const deleteFarmer = (req, res) => {
  const index = farmers.findIndex(
    (f) => f.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Farmer group not found",
    });
  }

  farmers.splice(index, 1);

  res.status(204).send();
};

// SEARCH farmer
const searchFarmers = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = farmers.filter(
    (f) =>
      f.groupName.toLowerCase().includes(query) ||
      f.village.toLowerCase().includes(query)
  );

  res.status(200).json(results);
};

module.exports = {
  getAllFarmers,
  getFarmerById,
  createFarmer,
  updateFarmer,
  deleteFarmer,
  searchFarmers,
};