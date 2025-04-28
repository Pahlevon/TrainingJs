Cars = ["Buggati","Ferrari","Lamborgini"]

Cars.forEach(
    (car,index)=>{
    console.log(`The ${index+1} Car Top Of The World is ${car} No Name`)}
)

const CarinCars = (car,index)=>{
    console.log(`The ${index+1} Car Top Of The World is ${car} With Name`)
}

Cars.forEach(CarinCars)