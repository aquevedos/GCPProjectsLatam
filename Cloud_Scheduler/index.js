var http = require('http');
const Compute = require('@google-cloud/compute');
const compute = new Compute();
const default_zone = 'us-west1-b'

exports.startVM = function startVM(req, res) {
    
    try
    {
    var zone = compute.zone(default_zone);
    var vm_start = zone.vm('dev-instance');
    vm_start.start(function(err, operation, apiResponse) 
            {
                console.log('Successfully started');
            });
    }
    catch (err) {
    console.log(err);
    callback(err);
    }

};



exports.stopVM = function stopVM(req, res) {
    try{

    var zone = compute.zone(default_zone);
    var vm_stop = zone.vm('dev-instance');
    vm_stop.stop(function(err, operation, apiResponse) {
                console.log('Successfully stopped');
            });

    }
    catch (err) {
    console.log(err);
    callback(err);
    }

};
