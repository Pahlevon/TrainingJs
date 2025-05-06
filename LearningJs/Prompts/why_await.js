const sayBoom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boom")
            resolve()
        }, 2000)
    })

}

const main = async () => {
    console.log("In 2 Sec , I'm Gonna Shoot")
    await sayBoom()
    console.log("You're dead") 
}

main() // main is async , but we dont call with await
