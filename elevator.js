/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentFloor, destFloor) {
    var result = 0;
    if (typeof currentFloor === 'number' && typeof destFloor === 'string') {
      currentFloor = Math.floor(currentFloor);
      destFloor = Math.floor(Number(destFloor));

      if (currentFloor <=3 && currentFloor >= 0 && destFloor <= 3 && destFloor >= 0) {
        result = destFloor - currentFloor;
      }
    }
    return result;
  }

};
