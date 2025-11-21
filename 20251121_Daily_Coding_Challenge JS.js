function lcm(x, y) {
    if (x > y) {
        mayor = x
    } else {
        mayor = y
    }
    while(true){
        if(mayor % x == 0 && mayor % y == 0)
            break
        mayor++
    }
    return mayor
}

let mayor;


console.log(lcm(4, 6))
