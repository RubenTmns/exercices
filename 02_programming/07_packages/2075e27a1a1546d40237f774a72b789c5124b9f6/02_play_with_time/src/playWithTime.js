

import date from "moment";



function formatDate(date1) {
  
  return  date(date1).format("dddd Do MMMM YYYY");
  

}


function yearsSinceDate(date2) {
  
  return parseInt(date(date2).fromNow());
}



function daysSinceDate(date4) {

  const currentDay = date();
  const pastDay = date(date4); 

  return Math.round(date.duration((currentDay - pastDay)).asDays());
   
 
  
  
}


function getDayFromDate(date3) {

  
  
  return date(date3).format("dddd");

}



export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
