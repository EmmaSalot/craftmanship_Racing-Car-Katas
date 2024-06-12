const chai = require('chai');
const TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');

chai.should();

describe('Turn Ticket Dispenser', function() {

    describe('TicketDispenser', function() {

        it('should issue unique turn numbers', function() {
            const dispenser = new TicketDispenser();
            const issuedTurnNumbers = new Set();

            for (let i = 0; i < 100; i++) {
                const ticket = dispenser.getTurnTicket();
                const turnNumber = ticket.turnNumber();
                issuedTurnNumbers.should.not.include(turnNumber);
                issuedTurnNumbers.add(turnNumber);
            }
        });

    });

});
