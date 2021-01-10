const mongoose = require('mongoose');
const Schema = mongoose.Shema;

const units = {
    DOLAR: 'DOLAR',
    GOLD: 'GOLD',
    EURO: 'EURO',
    POUND: 'POUND',
    TL: 'TL'
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