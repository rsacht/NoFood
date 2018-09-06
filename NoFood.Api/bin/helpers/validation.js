'use strict'

class ValidationContract {
    constructor(){
        this._errors = [];
    }
    isNotArrayOrEmpty(value, message){
        if(!value && value.lenght == 0)
            this._errors.push({message:message});
    }
    isTrue(value, message){
        if(value)
            this._errors.push({message:message})
    }
    isRequired(value, message){
        if (!value || value.length <= 0)
        this._errors.push({message:message});
    }
    hasMinLen(value, min, message){
        if(!value || value.length < min)
        this._errors.push({message:message});
    }
    hasMaxLen(value, max, message){
        if(!value || value.length > max)
        this._errors.push({message:message});
    }
    isEmail(value, message){
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-,]\w+)*\.\w+([-.]\w+)*$/);
        if(!reg.test(value))
        this._errors.push({message:message})
    }
    errors(){
        return this._erros;
    }
    clear(){
        this._errors = [];
    }
}
module.exports = ValidationContract;