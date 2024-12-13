import pool from '../config/db.js';

class LikeModel {
  static async addLike({ userId, photoId, date }) {
    const sql = `
      INSERT INTO likes (date, users_id, photos_id) 
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [date, userId, photoId]);
    return result.affectedRows > 0;
  }

  static async getLikesByPhoto(photoId) {
    const sql = 'SELECT COUNT(*) as likes FROM likes WHERE photos_id = ?';
    const [rows] = await pool.execute(sql, [photoId]);
    return rows[0].likes;
  }

  static async removeLike(userId, photoId) {
    const sql = 'DELETE FROM likes WHERE users_id = ? AND photos_id = ?';
    const [result] = await pool.execute(sql, [userId, photoId]);
    return result.affectedRows > 0;
  }

  static async getLikesByUser(userId) {
    const sql = 'SELECT photos_id FROM likes WHERE users_id = ?';
    const [rows] = await pool.execute(sql, [userId]);
    return rows;
  }
}

export default LikeModel;
