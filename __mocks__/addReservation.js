export default function newReservation(houseId, start_date, end_date, myhouses) {
    myhouses.push({
        houseName: myhouses[houseId].name,
        location: myhouses[houseId].location,
        price: myhouses[houseId].price*end_date-start_date,
    })
}

