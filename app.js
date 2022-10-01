

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)



// first attempt: 
// function findMin(...args){
//     const min= args.reduce((min, currentValue)=>{
//  min<currentValue ? min : currentValue}); return min; }

 const findMin = (...args) => Math.min(...args)

const mergeObjects= (obj1, obj2)=>({...obj1, ...obj2})


const doubleAndReturnArgs= (arr,...args)=>[...arr, ...args.map(v => v *2)]



function removeRandom(items) { 
    let remItem= Math.floor(Math.random()*items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)]};


const extend= (array1, array2)=>{return [...array1,...array2]}


const addKeyVal=(obj, key, val)=>{
    return {...obj, [key]:val};
}

const removeKey = (obj, key) => {
let newObj = { ...obj };
 delete newObj[key]
    return newObj;}


const combine= (obj1, obj2)=> {return {...obj1, ...obj2};}


const update= (obj, key, val)=> { return{...obj, [key]: val};}
