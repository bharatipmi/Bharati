const showLogin = () => {
    let login_btn = document.querySelector('.colorLink')
    let loginAnswer= prompt("Enter Email 4 Login")
    let screen = document.querySelector('.screen')
    // conditional
        if(loginAnswer.includes("@") && loginAnswer.includes(".") ){
            screen.innerHTML = loginAnswer
        }else {
            screen.innerHTML = "Nah Bruh, You did SUmn Wrong"
        }

}

 
const grillKnicksFan = () =>{
    let location = prompt("Where are you born? ")

    const temperature = prompt("Well, is it cold?  ")
    let skin = prompt("Whats temperature? ")

    const height = prompt("Well, what is your height?  ")

    const weight = prompt("Well, is weight?  ")


    let user = {
        name: 'Jordan',
        location: location,
        temp: temperature, 
        height: height, 
        weight:weight
    }

let theater = document.querySelector('.screen')
   for(let key in user)


    theater.innerHTML(` ${key} is and value is ${user[key]}`);
}
