const Contact = require("../models/Contact");

class ContactController {
  async create(req, res, next) {
    try {
      const requestData = req.body;

      // Tạo một bản ghi mới sử dụng mô hình Contact
      const newContact = new Contact({
        name: requestData.name,
        jd: requestData.jd,
      });

      // Lưu bản ghi vào cơ sở dữ liệu
      await newContact.save();

      const response = { message: "Data received and saved successfully" };
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Lỗi khi lưu dữ liệu vào cơ sở dữ liệu." });
    }
  }
}

module.exports = new ContactController();
