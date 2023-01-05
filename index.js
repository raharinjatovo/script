const fs = require("fs");
const { parse } = require("csv-parse");
var mysql = require('mysql');
const util = require('util');
const getStream = require('get-stream');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'doc_tech_irm'
});

const query = util.promisify(conn.query).bind(conn);

let result = async function() {
    var userCourse = [];
    try {
        const rows = await query('select * from `inpi_v2_pm`');
        return rows;
    } catch (e) {

    }finally
    {
        conn.end();
       
    }
};




readCSVData = async (filePath) => {
    const parseStream = parse({ delimiter: ";", from_line: 2 });
    const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
    return data;
  }

(async () => {

    const query_result = await result();
    //console.log(query_result[0])
    const path = await readCSVData("./0101_S1_20170504_1_PM.csv")
    path.map((e,index) =>{
        
        if(parseInt(e[0])!=query_result[index].Code_Greffe)
        {
            console.log("line "+index+" not same in Code_Greffe")
        }
        if(e[1]!=query_result[index].Nom_Greffe){
            console.log("line "+index+" not same in Nom_Greffe")
        }
        if(e[2]!=query_result[index].Numero_Gestion){
            console.log("line "+index+" not same in Numero_Gestion")
        }
        if(e[3]!=query_result[index].Siren){
          //  console.log("line "+index+" not same in Siren csv "+e[3]+" in db "+query_result[index].Siren)
        }
        if(e[4]!=query_result[index].Type_Inscription){
            console.log("line "+(index+1)+" not same in Type_Inscription csv "+e[4]+" in db "+query_result[index].Type_Inscription)
        }
        if(e[13]!=query_result[index].Denomination){
            console.log("line "+(index+1)+" not same in Denomination csv "+e[13]+" in db "+query_result[index].Denomination)
        }
        if(e[14]!=query_result[index].Sigle){
            console.log("line "+(index+1)+" not same in Denomination csv "+e[14]+" in db "+query_result[index].Sigle)
        }
        if(e[15]!=query_result[index].Forme_Juridique){
            console.log("line "+(index+1)+" not same in Forme_Juridique csv "+e[15]+" in db "+query_result[index].Forme_Juridique)
        }
        if(e[16]!=query_result[index].Associe_Unique){
            console.log("line "+(index+1)+" not same in Associe_Unique csv "+e[15]+" in db "+query_result[index].Associe_Unique)
        }
        if(e[17]!=query_result[index].Activite_Principale){
           // console.log("line "+(index+1)+" not same in Activite_Principale csv => {"+e[17]+"}  in db =>{"+query_result[index].Activite_Principale+"}")
        }
        if(e[18]!=query_result[index].Type_Capital){
            //console.log("line "+(index+1)+" not same in Type_Capital csv => {"+e[18]+"}  in db =>{"+query_result[index].Type_Capital+"}")
        }
        if(e[19]!=query_result[index].Capital){
            console.log("line "+(index+1)+" not same in Capital csv => {"+e[19]+"}  in db =>{"+query_result[index].Capital+"}")
        }
        if(e[20]!=query_result[index].Capital_Actuel){
           console.log("line "+(index+1)+" not same in Capital_Actuel csv => {"+e[20]+"}  in db =>{"+query_result[index].Capital_Actuel+"}")
        }
        if(e[21]!=query_result[index].Devise){
            console.log("line "+(index+1)+" not same in Devise csv => {"+e[21]+"}  in db =>{"+query_result[index].Devise+"}")
        }
        if(e[22]!=query_result[index].Date_Cloture){
            console.log("line "+(index+1)+" not same in Date_Cloture csv => {"+e[22]+"}  in db =>{"+query_result[index].Date_Cloture+"}")
        }
        if(e[23]!=query_result[index].Date_Cloture_Except){
           // console.log("line "+(index+1)+" not same in Date_Cloture_Except csv => {"+e[23]+"}  in db =>{"+query_result[index].Date_Cloture_Except+"}")
        }
        if(e[24]!=query_result[index].Economie_Sociale_Solidaire){
            console.log("line "+(index+1)+" not same in Economie_Sociale_Solidaire csv => {"+e[24]+"}  in db =>{"+query_result[index].Economie_Sociale_Solidaire+"}")
        }
        if(e[25]!=query_result[index].Duree_PM){
            console.log("line "+(index+1)+" not same in Duree_PM csv => {"+e[25]+"}  in db =>{"+query_result[index].Duree_PM+"}")
        }
        if(e[27]!=query_result[index].Libelle_Evt){
            console.log("line "+(index+1)+" not same in Libelle_Evt csv => {"+e[27]+"}  in db =>{"+query_result[index].Libelle_Evt+"}")
        }


        
        
        //console.log(query_result[index].Code_Greffe)
        
       
        
    })
   
})();


