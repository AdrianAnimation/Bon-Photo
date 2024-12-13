import pool from '../config/db.js';

class UserModel {
  static async createUser(username, email, password, roleId) {
    const sql =
      'INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(sql, [
      username,
      email,
      password,
      roleId,
    ]);
    return result.insertId;
  }

  static async getUserById(id) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
  }

  static async getAllUsers() {
    const sql = 'SELECT * FROM users';
    const [rows] = await pool.execute(sql);
    return rows;
  }

  static async updateUser(id, data) {
    const { username, email, roleId } = data;
    const sql =
      'UPDATE users SET username = ?, email = ?, role_id = ? WHERE id = ?';
    const [result] = await pool.execute(sql, [username, email, roleId, id]);
    return result.affectedRows > 0;
  }

  static async deleteUser(id) {
    const sql = 'DELETE FROM users WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
  }
}

export default UserModel;
