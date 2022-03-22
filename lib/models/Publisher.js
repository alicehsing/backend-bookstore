const pool = require('../utils/pool');

module.exports = class Publisher {
  publisher_id;
  name;
  city;
  state;
  country;

  constructor(row) {
    this.publisherId = row.publisher_id;
    this.name = row.name;
    this.city = row.city;
    this.state = row.state;
    this.country = row.country;
  }

  static async getAllPublishers() {
    const { rows } = await pool.query(
      `SELECT
        *
      FROM
        publishers
        `
    );
    return rows.map((row) => new Publisher(row));
  } 
};
