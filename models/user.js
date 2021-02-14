const mongoose =require('mongoose');
const bycrpt=require('bcrypt');

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },

    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },

    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
        
    },
     email:{
        type:String,
        required:true,
        trim:true,
        min:3,
        
    },

    hash_password:{
        type:String,
        required:true
    },
    
    role:{
        type:String,
        emum:['user' , 'admin'],
        default:'user'
    },
    contactNumber:{type:String},
    profilePicture:{type:String},
    
},{timestamps:true})

userSchema.virtual('password').set(function(password){
    this.hash_password=bycrpt.hashSync(password , 10)
});

userSchema.methods={
    authenticate:function(password){
        return bycrpt.compare(password , this.hash_password);
    }
}

module.exports=mongoose.model('User', userSchema);