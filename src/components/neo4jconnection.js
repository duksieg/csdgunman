import neo4j from 'neo4j-driver'

const uri = 'bolt://182.52.63.50:8023:8023'
const user = 'neo4j'
const pwd = 'shooter_crimes'


export async function getwanted_list() {
  let result =[]
  const limitquery = 60
  const wanted_query = (`match (p:Person)-[wanted:wanted_in]-(wanteddoc:Wanted_doc)-[doc:doc_in]->(crimecase:Crimescase)-[ch:charge_case_in]-(chargecase:Chargecase) where wanteddoc.statusdoc CONTAINS 'Active' return p.name ,p.idcard,wanteddoc.charge,wanteddoc.courtName,crimecase.name,crimecase.station limit ${limitquery}`)
  let driver = neo4j.driver(uri, neo4j.auth.basic(user, pwd))
  let session = driver.session()
  try {
    let querydata = await session.run(wanted_query)
    let tempArry =[]
    const maximumCards = 8
      while (tempArry.length<maximumCards){
        let random = Math.floor(Math.random() * limitquery);
        if(!tempArry.includes(random)){
          tempArry.push(random)
        }else{
          continue
        }
      }
      for (let index = 0; index < tempArry.length; index++) {
        console.log(tempArry[index] +'get record')
        console.log(querydata.records[tempArry[index]])
        result.push(querydata.records[tempArry[index]])
    }
  }
       catch (err) {
    console.error(err)
    }
  finally {
    await session.close()
  }
  await driver.close()
  if(result!==null || result!==undefined){
    console.log('query successful')
    console.log(result)
  }else{
    console.error('Result error')
  }
  
  return result
}






