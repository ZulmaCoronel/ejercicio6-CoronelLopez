var fs = require ("fs");

/*fs.appendFile('alumnos.txt',
 '14401025 Zulma Isabel Coronel Lopez 90\n15400035 Ana Paola Lopez Orozco 84\n14401027 Arturo Misael Escalante Licona 95',(err,dos)=>{
    if(err)
    throw err;
    console.log('Saved!');
    
});*/

    fs.writeFile('alumnos.txt','14401025 Zulma Isabel Coronel Lopez 90\n15400035 Ana Paola Lopez Orozco 84\n14401027 Arturo Misael Escalante Licona 95\n14401038 Ana Carolina Mondragon Rangel 98\n15401057 Carlos Emmanuel Zambrano Cortez 78\n16400189 Jonathan Zavala Duarte 87\n15401046 Issia Virgen Rivera 89\n16400198 Jorge Omar Mariscal 85\n15401002 Noe Jahir Rodriguez Castillo 94\n16400138 Lizbeth Araceli Luna Ceniceros 87',(err)=>{
        if(err)
        throw err;
        console.log('Saved!');
      
});