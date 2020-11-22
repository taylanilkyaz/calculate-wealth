const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Shema = mongoose.Shema;

const units = {
    DOLLAR: 'Dolar',
    GOLD: 'Gold',
    EURO: 'Euro',
    POUND: 'Pound',
    TURKISHLIRA: 'TL'
}
const WealthSchema = mongoose.Schema({
    unit: {
        type: units,
        require: [true, "can't be blank"]
    },
    amount: {
        type: Number,
        require: [true, "can't be blank"]
    },    
    user: {
        type:Shema.Types.ObjectId,
        ref:"User" 
    },
}, { timestamps: true });

WealthSchema.pre('save', async function save(next) {
    if(UserSchema.mongoose.fin)
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model('Wealth', WealthSchema);