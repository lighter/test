
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

//GET Method
exports.sign = function(req, res){
  res.render('sign', {
    title: 'Show Result',
    account: req.query.account,
    pass: req.query.pass
  });
};

//POST Method
exports.sign2 = function(req, res){
  res.render('sign2', {
    title: 'Show Result',
    account: req.body.account,
    pass: req.body.pass
  });
};

//AJAX Method
exports.sign3 = function(req, res) {
  res.send('Account:' + req.body.account + ', Pass:' + req.body.pass)
};