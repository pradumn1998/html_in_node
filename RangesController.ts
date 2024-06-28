// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// range function
// replace function
// print function
// number to word 

export default class RangesController {
    // make range function in this method 
    static range(start, end, inc){
        var rtnbl = []
        for (start; start<=end ; start =start+inc){
            rtnbl.push(start)
        }
        return rtnbl
    }
    // return repalce value in this function 
    static rplctxt = (txt) =>{
        var usrurl = txt.replace('%20'," ")
        usrurl = txt.replace('/',"")
        return usrurl
    }
    // create print function 
    static print = (txt) =>{
        console.log(txt)
    }    
    //create test function for test purpose 
    static text(txt){
        this.print(txt.name)
        this.print(txt.address)
    }

    static bgnumber(nmb,min,say){
        var rtn =""
        if(nmb % min == 0){
            if(nmb / min == 1){
                rtn = 'one' + " " + say
            }
            else{
                var reminder = nmb / min    // reminder 999/100 = 9
                rtn = this.numb2word(reminder)+ " " + say 
            }
        }
        else{
            var remnd = nmb % min   //9999/1000 = 999
            var div10 = nmb - remnd // 9999 - 999 = 9000
            var newdigit =  this.numb2word(remnd) 
            var new10digit = this.numb2word(div10) + 's'
            rtn = new10digit + ' ' + newdigit 
        }
        return rtn
    }



    // number to word
    static numb2word(nmb){
        var nmbr = {0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',20:'tweenty',30:'thirty',40:'fourty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety'}
        var rtnabl =""    
        if (nmb <= 20 ){
               rtnabl = nmbr[nmb]
            }
        if(nmb >20 &&  nmb <100 ){
            if (nmb % 10 == 0 ){
                rtnabl = nmbr[nmb]
            }
            else{
                var remnd = nmb%10 
                var div10 = nmb - remnd
                var newdigit =  this.numb2word(remnd)
                var new10digit = this.numb2word(div10)
                rtnabl = new10digit + ' ' +  newdigit
            }
        }

        var min = 100 
        var max = min * 10
        var say = 'hudred'
        if (nmb >=min && nmb < max){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 10
        say = 'thousand'
        if(nmb >= min && nmb < min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'Lakh'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }
        min = min * 100
        say = 'crore'
        if(nmb >= min && nmb < min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }
        
        min = min * 100
        say = 'arab'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'Kharab'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'neel'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'padam'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'sankh'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }

        min = min * 100
        say = 'mha sankh'
        if(nmb >= min && nmb< min*100){
            rtnabl = this.bgnumber(nmb,min,say)
        }
      

        return rtnabl

    }
}