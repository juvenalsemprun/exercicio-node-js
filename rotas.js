module.exports = function(app){
    const ts = require("./control")
    
   app.route("/task").get(ts.toda)
   app.route("/task").post(ts.new)
   app.route("/task/:id").get(ts.id)
   app.route("/task/:id").put(ts.update)
   app.route("/task/:id").delete(ts.delete) 
}