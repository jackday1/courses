const fs = require("fs");
const dbPath = `${__dirname}/../documents.json`;

module.exports.get = (req, res) => {
  try {
    const docsStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const docs = JSON.parse(docsStringify);

    res.status(200).send(docs);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
