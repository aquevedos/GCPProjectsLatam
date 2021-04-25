var http = require('http');
const Compute = require('@google-cloud/compute');
const compute = new Compute();
const default_zone = 'us-west1-b'

exports.startVM = function startVM(req, res) {
    try
    {
        var zone = compute.zone(default_zone);
        var vms_start = zone.vm('devinstance');
        vms_start.start(function(err, operation, apiResponse) 
            {
                console.log('Successfully started');
            });
        res.status(200).send('Success!!');
    }
    catch (err) {
    console.log(err);
    callback(err);
    }

    

};



exports.stopVM = function stopVM(req, res) {
     try
    {
         var zone = compute.zone(default_zone);
         var vms_stop = zone.vm('devinstance');
         vms_stop.stop(function(err, operation, apiResponse) {
                console.log('Successfully stopped');
            });
         res.status(200).send('Server usually takes around 10 minutes to full stop');
    }
    catch (err) {
    console.log(err);
    callback(err);
    }

   


};
