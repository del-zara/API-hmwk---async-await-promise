const API = 'https://jsonplaceholder.typicode.com/users'


const getUsers = async ()=>{
    const request = await fetch(API)
    const response = await request.json()
    console.log(response);
    renderUser(response)
}
const renderUser=(user)=>{
    user.forEach(element => {

    let div = document.createElement('div')
    let name = document.createElement('h3')
    let surname = document.createElement('h3')
    let div2 = document.createElement('div2')
    let email = document.createElement('p')
    let phone = document.createElement('p')
    let address = document.createElement('p')
    let company = document.createElement('p')
    let website = document.createElement('p')
    name.innerHTML= element.name + ' ' +element.username
    // surname.innerHTML = element.username 
    email.innerHTML= element.email 
    phone.innerHTML= element.phone 
    address.innerHTML=element.address.city +' '+element.address.street+' '+element.address.suite 
    company.innerHTML=element.company.name
    website.innerHTML=element.website
    document.body.append(div)
    document.body.append(div2)
    div.append(name, surname)
    div2.append(email, phone, address, company, website)

    })
  
    
}
getUsers()