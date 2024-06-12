const chai = require('chai');
const sinon = require('sinon');
const Alarm = require('../tire-pressure-monitoring-system/alarm.js');

chai.should();

describe('Tyre Pressure Monitoring System', function() {

    describe('Alarm', function() {

        it('should not trigger alarm when pressure is within range', function() {
            const sensorStub = sinon.stub();
            sensorStub.popNextPressurePsiValue = sinon.stub().returns(18);

            const alarm = new Alarm(sensorStub);

            alarm.check();

            alarm.alarmOn().should.equal(false);
        });

        it('should trigger alarm when pressure is below threshold', function() {
            const sensorStub = sinon.stub();
            sensorStub.popNextPressurePsiValue = sinon.stub().returns(15);

            const alarm = new Alarm(sensorStub);

            alarm.check();

            alarm.alarmOn().should.equal(true);
        });

        it('should trigger alarm when pressure is above threshold', function() {
            const sensorStub = sinon.stub();
            sensorStub.popNextPressurePsiValue = sinon.stub().returns(22);

            const alarm = new Alarm(sensorStub);

            alarm.check();

            alarm.alarmOn().should.equal(true);
        });

    });

});
