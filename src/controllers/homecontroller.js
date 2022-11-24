import db from '../models/index';
//su ly bat dong bo bang async + await
let gethomepage= async (req, res) =>{
    try {
    let data=  await db.User.findAll();
    return res.render('homepage.ejs',{
        data: JSON.stringify(data)
    }); // controller tro den file ejs
    }catch(e){
        console.log(e);
    }
     
}
let aboutme=(req, res) =>{
    return res.render('./test/about.ejs')
}
//exports ham de ben ngoai su dung
module.exports ={
    gethomepage: gethomepage,
    aboutme: aboutme
}