var express = require('express');
var router = express.Router();
class guns{
  constructor(gun_type, gun_name, gun_cost){
      this.gun_type=gun_type;
      this.gun_name=gun_name;
      this.gun_cost=gun_cost;
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let z1= new guns('pistel','blowgun',40);
  let z2= new guns('shot gun','Gatling gun',50);
  let z3= new guns('m416','air gun',45);
res.render('guns', { title: 'Search Results Gun',guns : [z1,z2,z3] });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guns', { title: 'Express' });
});

module.exports = router;