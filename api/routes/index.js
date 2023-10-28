const inforRouter = require("./information");
const techskillRouter = require("./techskill");
const otherskill = require("./otherskill");
const projects = require("./projects");
const education = require("./education");
const certificate = require("./certificate");
const activate = require("./activate");
const about = require("./about");
const contact = require("./contact");

function route(app) {
  app.use("/information", inforRouter);
  app.use("/techskill", techskillRouter);
  app.use("/otherskill", otherskill);
  app.use("/projects", projects);
  app.use("/education", education);
  app.use("/certificate", certificate);
  app.use("/activate", activate);
  app.use("/about", about);
  app.use("/contact", contact);
}

module.exports = route;
