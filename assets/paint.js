// selecting the image elements  

function configureListeners() {
    const newLocal = document.getElementsByTagName('img');
    let images = newLocal 


    // Iterate over images and add mouseover event listeners 
     
    for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)    
    } 
}

// Adding appropriate CSS class

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    
    getProductInfo(event.target.id);     
}
//removing appropriate CSS class

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }
     
    let element = document.getElementById('ppg');
    let element = document.getElementById('color-price');
        element.textContent = '';
     
    let color = document.getElementById('color')
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function changeImage (elementId){
    let image = document.getElementById('imgDispaly');
    image.src = elementId.src;
}

function getProductionInfo(partNumber){
function getProductionInfo(paintColor){
            let price;
            let colorName;
        }



function getProductInfo(paintColor) {
    let price;
    let colorName;  
}

    
    switch (partNumber) {}
    switch (paintColor) {
        case 'pn1': 
        price = '$14.99' 
        colorName = 'Lime Green'
        updatePrice(colorName,price)
    

// set variables for price and color name and invoke a function to update the price    

            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)

 // set variables for price and color name and invoke a function to update the price 

            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)

// set variables for price and color name and invoke a function to update the price  

            break;   
        case 'pn4':
            price = '$4.99'
            colorName = 'Solid Black'
            updatePrice(colorName, price)

// set variables for price and color name and invoke a function to update the price  

            break;   
        case 'pn5':
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorName, price)

// set variables for price and color name and invoke a function to update the price 

            break;   
        case 'pn6':
            price = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(colorName, price)
// set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorName, price)

// set variables for price and color name and invoke a function to update the price 

            break;   
        case 'pn8':
         price: '$21.98'
         colorName: 'Solid White'
         updatePrice(colorName, price)

// set variables for price and color name and invoke a function to update the price  

            break;   
        case 'pn9':
            price: '$14.99'
            colorName: 'Solid Yellow'
            updatePrice(colorName, price)
            
// set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price) {
     let ppg = document.getElementById('ppg');
      ppg.textContent = price;
        
    let colorPrice = document.getElementById(colorName + 'price');
        colorPrice.textContent = price;
        
        let color = document.getElementById(colorName + 'name');
        color.textContent = colorName;
      }

