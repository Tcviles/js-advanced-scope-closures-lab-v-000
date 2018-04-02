function produceDrivingRange(blocks){
  return function(startingBlock, endingBlock){

   let start = parseInt(startingBlock);
   let end = parseInt(endingBlock);
   let distance = Math.abs(end - start);
   let difference = blocks - distance;

   if( difference > 0){
     return `within range by ${difference}`;
   } else {
     return `${Math.abs(difference)} blocks out of range`;
   };
 };
};

function produceTipCalculator(tipPercent){
  return function(fare){
    return fare*tipPercent;
  };
};

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    };
  };
};
