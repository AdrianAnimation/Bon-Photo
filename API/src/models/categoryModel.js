import pool from '../config/db.js';

class CategoryModel {
  static async getAllCategories() {
    const sql = 'SELECT * FROM categories ORDER BY name ASC';
    const [rows] = await pool.execute(sql);
    return rows;
  }

  static async getCategoryById(id) {
    const sql = 'SELECT * FROM categories WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
  }

  static async getCategoryByName(name) {
    const sql = 'SELECT * FROM categories WHERE name = ?';
    const [rows] = await pool.execute(sql, [name]);
    return rows[0];
  }

  static async createCategory(name) {
    const sql = 'INSERT INTO categories (name) VALUES (?)';
    try {
      const [result] = await pool.execute(sql, [name]);
      return result.insertId;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Category with this name already exists.');
      }
      throw error;
    }
  }

  static async updateCategory(id, name) {
    const sql = 'UPDATE categories SET name = ? WHERE id = ?';
    const [result] = await pool.execute(sql, [name, id]);
    return result.affectedRows > 0;
  }

  static async deleteCategory(id) {
    const sql = 'DELETE FROM categories WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
  }
}

export default CategoryModel;
