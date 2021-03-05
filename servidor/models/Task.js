const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    }
});

module.exports = mongoose.model('Task', taskSchema);
