function TotalCost(quantity) {
    const pricePerBag = 10; 
    let discount = 0; 
    
    if (quantity >= 5 && quantity <= 10) {
        discount = 0.1; 
    } else if (quantity > 10) {
        discount = 0.2; 
    }
    
    const discountedPrice = pricePerBag - (pricePerBag * discount);
    const totalCost = discountedPrice * quantity;
    
    return totalCost;
}

const quantity = 8; 
const totalCost = TotalCost(quantity);
console.log(`Total cost for ${quantity} bags of coffee: $${totalCost.toFixed(2)}`);
