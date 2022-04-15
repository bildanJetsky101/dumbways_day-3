function sendData(e){
    e.preventDefault() // mencegah browser melakukan reload ketika html melakukan submit
    // alert("Tombol berhasil diklik")
    const name = document.getElementById("name").value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone-number').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById("message").value
    
    if(name == ""){
        return alert("Name cannot be empty")
    }

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    const emailReceiver = 'abcd@email.com'

    const a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, my subject is ${subject} and here my number ${phone}. This mail send from form.html: ${message}`

    a.click()
    alert("Email berhasil dibuat")
}
