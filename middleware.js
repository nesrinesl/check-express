const verify =(req,res,next)=>{
    let today = new Date()
let day = today.getDay()
let time = today.getHours()
//let timeZ = today.getTimezoneOffset()+60
if (time < 9 || time > 17 || day === 3 || day ===6){
    res.redirect('/error')
}else{
    next()
}
}
module.experts = verify




//console.log(today)
//console.log(day)
//console.log(time)
//console.log(timeZ)