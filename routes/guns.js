var express = require('express');
const guns_controlers= require('../controllers/guns');
var router = express.Router();
/*
class guns{
  constructor(gun_type, gun_name, gun_cost){
      this.gun_type=gun_type;
      this.gun_name=gun_name;
      this.gun_cost=gun_cost;
  }
}

/* GET home page. 
router.get('/', function(req, res, next) {
  let z1= new guns('pistel','blowgun',40);
  let z2= new guns('shot gun','Gatling gun',50);
  let z3= new guns('m416','air gun',45);
res.render('guns', { title: 'Search Results Gun',guns : [z1,z2,z3] });
});
*/
router.get('/', guns_controlers.guns_view_all_Page );
router.get('/detail', guns_controlers.guns_view_one_Page);
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
  /* GET update guns page */
  router.get('/update', secured,guns_controlers.guns_update_Page);
  router.get('/create',secured, guns_controlers.guns_create_Page);
  
router.get('/delete',secured, guns_controlers.guns_delete_Page);
module.exports = router;
