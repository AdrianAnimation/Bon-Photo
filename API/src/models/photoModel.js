import pool from '../config/db.js';

class PhotoModel {
  static async createPhoto({
    title,
    description,
    photoUrl,
    alt,
    uploadDate,
    status,
    userId,
    categoryId,
  }) {
    const sql = `
      INSERT INTO photos (title, description, photo_url, alt, upload_date, status, users_id, categories_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      userId,
      categoryId,
    ]);
    return result.insertId;
  }

  static async getPhotoById(id) {
    const sql = 'SELECT * FROM photos WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
  }

  static async getAllPhotos() {
    const sql = 'SELECT * FROM photos';
    const [rows] = await pool.execute(sql);
    return rows;
  }

  static async updatePhoto(id, data) {
    const {
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      categoryId,
    } = data;
    const sql = `
      UPDATE photos 
      SET title = ?, description = ?, photo_url = ?, alt = ?, upload_date = ?, status = ?, categories_id = ? 
      WHERE id = ?
    `;
    const [result] = await pool.execute(sql, [
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      categoryId,
      id,
    ]);
    return result.affectedRows > 0;
  }

  static async deletePhoto(id) {
    const sql = 'DELETE FROM photos WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
  }
}

export default PhotoModel;
