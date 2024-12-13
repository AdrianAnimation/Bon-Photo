import pool from '../config/db.js';

class CommentModel {
  static async createComment({ content, date, status, userId, photoId }) {
    const sql = `
      INSERT INTO comments (content, date, status, user_id, photo_id) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
      content,
      date,
      status,
      userId,
      photoId,
    ]);
    return result.insertId;
  }

  static async getCommentById(id) {
    const sql = 'SELECT * FROM comments WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
  }

  static async getCommentsByPhotoId(photoId) {
    const sql = 'SELECT * FROM comments WHERE photo_id = ?';
    const [rows] = await pool.execute(sql, [photoId]);
    return rows;
  }

  static async deleteComment(id) {
    const sql = 'DELETE FROM comments WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
  }
}

export default CommentModel;
