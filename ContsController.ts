// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext

import { timeStamp } from "console"
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
            var attribut = {'type':'submit','value':bxtxt,'class':'btn btn-success mt-2', 'title': bxtxt}
            var btn = this.emptag('input',attribut)
            return(btn)
        }
        insd = "reset"
        if(bxtxt.match(insd) || bxtxt.match("Reset") || bxtxt.match("rst")){
            var attribut = {'type':'reset','value':bxtxt,'class':'btn btn-success mt-2', 'title': bxtxt} 
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
        var att = {'class':clas,'id':id}
        var form = this.clsngtg('div',att,`\t ${inptflds}`)
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
    // i accept list in image in this is function 
    static slideimg(lst){
        // create button list
            var crtobj = ''
            var btns = ''
            var btnattribut = {type:"button" ,"data-bs-target":"#carouselExampleIndicators", "data-bs-slide-to":"0",'aria-label':'Slide 1'}
            for(let i in lst){
                if( i == "0"){
                    btnattribut['class'] = 'active'
                    btnattribut['aria-current'] = 'true'
                    btns = this.clsngtg('button',btnattribut,'')
                    crtobj = `\n ${btns}`
                }
                else{
                    delete btnattribut['aria-current']
                    delete btnattribut['class']
                    btnattribut['data-bs-slide-to'] = i
                    var num = Number(i)+1
                    btnattribut['aria-label'] = `Slide ${num}`
                    btns = this.clsngtg("button",btnattribut,'')                   
                    crtobj = `${crtobj}\n ${btns}`
                }
            }
        // create image list
        var allimgobj  = ''
        for(let i in lst){
            var img = this.emptag('img',{src:lst[i],class:'d-block w-100',alt:i})
            if (i =='0'){
                allimgobj = this.div('carousel-item-active',"",`\n \t ${img}`)
            }
            else{
                var new_div = this.div('carousel-item',"",`\n \t${img}`)
                allimgobj =  `${allimgobj} ${new_div}`
            }
        }
        var tag  = '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n \t <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> \n </button> \n \t<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"> \n<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span> </button>'


        var innerdiv = this.div("carousel-inner","",allimgobj)
        var btndiv = this.div("carousel-indicators","",crtobj)
        var twodiv = ` ${innerdiv} ${btndiv}`
        var div = this.div("carousel slide","carouselExampleIndicators",twodiv)
        return div
    }

    static newslid(lst){
        var divcls = {"class":'carousel-item active'}
        var div = ''

        for( let i in lst ){
            if(i == '0'){

                div = this.div(divcls['class'],'',`<img src="${lst[i]}" class="d-block w-100 h-800" alt="...">`)
            }
            else{
                divcls['class'] = 'carousel-item'
                div = `${div} ${this.div(divcls['class'],'',`<img src="${lst[i]}" class="d-block w-100 h-800" alt="...">`)}`
            }
        }
        // start div
        var btns  = '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n \t <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> \n </button> \n \t<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"> \n<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span> </button>'
        var x = `<div id="carouselExample" class="carousel slide">
        <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="566264.jpg"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="184541.jpg"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="704151.jpg"></button>
    </div>
    <div class="carousel-inner">
        ${div}
    </div>
    ${btns}
</div>`
        
        return x
    }
    // end of class 
    static newsld(lst){
        // this is a part of create button and image list 
            var divcls = {"class":'carousel-item active'}
            var div = ''
            var btnnew
            var btnatt  = {type:"button", 'data-bs-target':"#carouselExampleIndicators" ,'data-bs-slide-to':"0", class:"active", 'aria-current':"true", 'aria-label':"Slide 1"}
            for( let i in lst ){
                if(i == '0'){
                    btnnew = this.clsngtg('button',btnatt,'') 
                    div = this.div(divcls['class'],'',`<img src="${lst[i]}" class="d-block w-100 h-800" alt="...">`)
                }
                else{
                    btnatt['data-bs-slide-to'] = i
                    delete btnatt['class']
                    delete btnatt['aria-current']
                     btnatt['aria-label'] = `Slide ${Number(i+1)}`
                    btnnew = `${btnnew} ${this.clsngtg('button',btnatt,"")}`
                    divcls['class'] = 'carousel-item'
                    div = `${div} ${this.div(divcls['class'],'',`<img src="${lst[i]}" class="d-block w-100 h-800" alt="...">`)}`
                }
            }

        var all = `<div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        ${btnnew}
                    </div>
                    <div class="carousel-inner">
                         ${div}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>`
        return all
    }

}
