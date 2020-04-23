const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM articulos', (err,rows)=>{
            if(err){
                res.json(err);
            }
            console.log(customers);
            res.render('customer',{
            data:customer
        });
    });
});
 };

module.exports = controller;