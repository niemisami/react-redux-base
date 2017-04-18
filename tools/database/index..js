var records = [
    { id: 1, rfid: '12345667', password: 'salasana', fname: 'Sami', lname:'Nieminen', balance: 10},
    { id: 2, rfid: '9876543221', password: 'passu', fname: 'Piita', lname:'Koivisto', balance: -5}
];

export const findById = (id, cb) => {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

export const findByRfid = (rfid, cb) => {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.rfid === rfid) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}