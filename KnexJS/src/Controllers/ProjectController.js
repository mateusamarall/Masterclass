const { update, andWhere } = require("../database");
const knex = require("../database");
module.exports = {
  async index(req, res, next) {
    try {
      const { page = 1 } = req.query;

      const query = knex("projects")
        .limit(5)
        .offset((page - 1) * 5)
        .whereNull("deleted_at");

      const countObj = knex("projects").count();

      const [count] = await countObj;

      res.header("X-Total-Count", count["count"]);

      const results = await query;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async store(req, res, next) {
    try {
      const { title, user_id } = req.body;
      await knex("projects").insert({
        title,
        user_id,
      });

      return res.json({ message: "Projeto criado com sucesso" });
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { title } = req.body;
      const { id } = req.params;

      await knex("projects").update({ title }).where({ id });
      return res.json({ id, title });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("projects").where({ id }).update("deleted_at", new Date());
      return res.json({ message: "Projeto deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  },
};
