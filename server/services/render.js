
exports.homeRoute = (req,res)=>{
    res.render('index');
}

exports.addRoute = (req,res)=>{
    res.render('add_user');
}

exports.updateRoute = (req,res)=>{
    res.render('update_user');
}