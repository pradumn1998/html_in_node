// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import RangesController from "./RangesController"

export default class ContsController { 
    //Empty tag like <input type="text" class:'w3-red m-3 ' name="username" placeholder='username'>
    
     static emptag(tag,attribute){
        var cmplatribut = ' '
            for (let i in attribute){
                if(attribute[i] == ''){
                    cmplatribut = cmplatribut + i +' '
                }
                else{
                cmplatribut = cmplatribut + `${i}="`+`${attribute[i]}"`+  ' '
                }
            }
            return `<${tag} ${cmplatribut} >`
    }
// container type declare 
    static clsngtg(tag,attribute,containt){
        var cmplatribut = ' '
            for(let i in attribute){
                cmplatribut = cmplatribut + `${i}="`+`${attribute[i]}"`+  ' '
            }
          //  RangesController.print(`<${tag} ${cmplatribut} >${containt} </${tag}>`)
            return(`\n<${tag} ${cmplatribut}> ${containt} </${tag}>\n`)
    }
// label and input box give only two parameter label attribut and input attribute
    static lblinpt(lbl,inpt){
            var grp = []
            var label = this.clsngtg("label",lbl,lbl['for'])
                //grp.push(label)
                // create attribute using 'for' attribute 
                inpt['placeholder'] =  lbl['for']
                //inpt['placeholder'] = lbl['for']
                var a = lbl['for']
                a = a.replace("'",'')
                inpt['id'] = inpt['name'] = a.replace(' ','_')
                var input = this.emptag('input',inpt)
                //grp.push(input)
                var strng = `${label} ${input}`
                    grp.push(strng)
                return grp
    }
    

     static radio(name,value,checked){
    var attribut = {'type':'radio', 'name':name, 'value':value, 'checked':'','class':'form-check-input ','title':value}
        if(checked == 'no' || checked == "false" || checked  == "False" || checked == false || checked =='FALSE' || checked == "NO"){
            delete attribut['checked']
        }
        var radibtn = this.emptag('input',attribut)
        // create label 
        var lblatt = {'for':value,'class':'form-check-label'}
        var lbl = this.clsngtg('label',lblatt,value)
        var strng = `${radibtn} ${lbl}`
        //RangesController.print(strng)
        return(strng)
}



    // create field and labe by name
       static bxtyp(box){
            var insd = 'name'
            var bxtxt = box['for']
            // example x={for:'name'}
            //bxtyp(x)
        if (bxtxt.match(insd) || bxtxt.match('Name') || bxtxt.match("father") ){
            var label_attribute = {'for': box['for'],'class':'form-label'}
            var input_attribute = {'type': 'text','class':'form-control','required':'','title':box['for'],'aria-describedby':"emailHelp"}
            var a = this.lblinpt(label_attribute,input_attribute)
            return(`${a} \n`)
        }

            insd = 'number' // input type number 
        if(bxtxt.match(insd) || bxtxt.match("num")){
                 label_attribute = {'for': box['for'],'class':'form-label'}
                input_attribute = {'type': 'number','class':'w3-worm form-control','required':'','max':box['max'],'min':box['min'],'title': box['for']}
                if(bxtxt.match('adhar')){
                    input_attribute['max'] = 999999999999
                    input_attribute['min'] = 111111111111
                }
                if(bxtxt.match('mobile')){
                    input_attribute['max'] = 9999999999
                    input_attribute['min'] = 1111111111
                }
                if(bxtxt.match('pin')){
                    input_attribute['min'] = 111111
                    input_attribute['max'] = 999999
                }
            var a = this.lblinpt(label_attribute,input_attribute)
            return(`${a}`)
        }

            insd = 'password' // password box
        if(bxtxt.match(insd) || bxtxt.match('secrate') || bxtxt.match('code')){
             label_attribute = {'for':box['for'],'class':'form-label'}
             input_attribute = {'type':'password','class':'w3-worm form-control','required':'', 'title':box['for']}
            var a = this.lblinpt(label_attribute,input_attribute)
            return(`${a}`)
        }
            insd = 'email'
        if(bxtxt.match(insd) || bxtxt.match('gmail') || bxtxt.match('compose')){
             label_attribute = {'for':box['for'],'class':'form-label'}
             input_attribute = {'type':'email','class':'w3-worm form-control','required':'', 'title':box['for']}
            var a = this.lblinpt(label_attribute,input_attribute)
            return(`${a}`)
        }
        // create a button 
        insd = 'submit' // button create
        if(bxtxt.match(insd) || bxtxt.match('save') || bxtxt.match('create') || bxtxt.match('login') || bxtxt.match('reset password')|| bxtxt.match('search'))
        {
            var attribut = {'type':'submit','value':bxtxt,'class':'btn btn-success', 'title': bxtxt}
            var btn = this.emptag('input',attribut)
            return(btn)
        }
        insd = "reset"
        if(bxtxt.match(insd) || bxtxt.match("Reset") || bxtxt.match("rst")){
            var attribut = {'type':'reset','value':bxtxt,'class':'btn btn-success', 'title': bxtxt} 
            var rbtn = this.emptag('input',attribut)  
            return(rbtn)       
        }
        insd = 'gender'
        if(bxtxt.match(insd) || bxtxt.match('sex') || bxtxt.match('male') || bxtxt.match('female') || bxtxt.match('man')){
            // for male gender 
            var x = this.radio('gender','male','yes')    
            var divatt = {'for':'some','class':'col'}
            var col1 = this.clsngtg('div',divatt,x)
            // for female gender
            var y = this.radio('gender','female',false)
            var col2 = this.clsngtg('div',divatt,y)
            // for transgender 
            var trs = this.radio('gender','transgender',false)
            var col3 = this.clsngtg('div',divatt,trs)
            var rtnabl = `${col1} ${col2} ${col3}`
            return(rtnabl)
        }
    }
    
    static crtform(method,action,inptflds){
        var att = {' action':action,'method':method}
        var crt = `${inptflds}`
        var form = this.clsngtg('form',att,crt)
        return form
    } 
    static div(clas,id,inptflds){
        var att = {'Class':clas,'id':id}
        var form = this.clsngtg('div',att,inptflds)
        return form
    } 

    static form(name){
        if(name == 'login'){
              var username = this.bxtyp({'for':'username'})
              var col1 = this.div('col','col1',username)
              var password = this.bxtyp({'for':'password'})
              var col2 = this.div('col','col2',password)
              var row = this.div('row','row',`${col1} ${col2}`)
              return(this.crtform('POST','award',row))
        }
    }
    // end of class 
}