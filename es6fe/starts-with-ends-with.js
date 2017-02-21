const course = 'RFB1';


testerStart = function(str) {
 if (course.startsWith('RF')) {
   console.log("true");
 }else {
   console.log("false");
 }
};

testerEnd = function(str) {
 if (course.endsWith('RF')) {
   console.log("true");
 }else {
   console.log("false");
 }
};

testerStart(course);
testerEnd(course);
