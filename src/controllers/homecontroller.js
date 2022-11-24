let gethomepage=(req, res) =>{
    return res.render('homepage.ejs')

}
let aboutme=(req, res) =>{
    return res.render('./test/about.ejs')
}
module.exports ={
    gethomepage: gethomepage,
    aboutme: aboutme
}