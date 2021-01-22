function leapyear(year){
    const reminder = (year%4)
    if (reminder==0){
        return(true)
    }
    else{
        return(false)
    }
}
console.log(leapyear(2020)