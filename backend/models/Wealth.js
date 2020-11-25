const mongoose = require('mongoose');
const Schema = mongoose.Shema;

const units = {
    DOLLAR: 'Dolar',
    GOLD: 'Gold',
    EURO: 'Euro',
    POUND: 'Pound',
    TURKISHLIRA: 'TL'
}

const WealthSchema = new mongoose.Schema({
    unit: {
        type: units,
        require: [true, "can't be blank"]
    },
    amount: {
        type: Number,
        require: [true, "can't be blank"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Wealth', WealthSchema);