module.exports = function reverse (n) {

    let numberArr = Math.abs(n).toString().split('');
    let newNumberArr =[]
    
    
    for(let i=numberArr.length-1; i>=0 ; i--){
      
        newNumberArr.push(numberArr[i]);
        
    }
    
    return +newNumberArr.join('')
    }
