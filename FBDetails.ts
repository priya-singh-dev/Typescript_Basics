class FBDetails {

    // Declaring the properties 

    public name : string;
    gender : string;
   public DOB : string;
   public mobileNumber : number;
    city : "Delhi";
    education : string|undefined;
    collegeName : string;
    schoolName : string;
    company : string;
    username : any;
 public contact_basic_info = [9811996296, "Gulabi Bagh", "javatpoint.com"];
    public Family_And_Relationships = {
        rel_stat:"unmarried",
        family_mem: 7,
     };
     
    // overview:{

            Univercity_name="GGSIPU";
            cur_Place="Delhi";
      public professional_skills= ["C", "C++", "Javascript", "Typescript"]

            fav_quotations= ["Never give up", "Always smile"];
            nic_name= ["Rani", "Adi", "kittu", "lovi"]
        


    _company ?: string;

    constructor(

        _name ?:string, 
        _gender ?: string,
         _DOB ?:string,
         _mobileNumber ?:number,
         Username ?: any
          ){
        this.name =  _name;
        this.gender = _gender;
       this.DOB = _DOB;
       this.mobileNumber = _mobileNumber;
        this.username = Username;
    
    }// constructor end here

    getMobileNumber()
    {
        return this.mobileNumber;
    }
    
getDateOfBirthType = () =>
{
    return this.DOB;
}

        //Family_Relationship
        getFamilyAndRelationship = () => {
            for(let i in this.Family_And_Relationships)
            {
                console.log(this.Family_And_Relationships[i])
            }
        }
   
} // end class

let MyDetails = new FBDetails("Priya", "female", "29/10/1996", 9811223410);

class ExtraInfo extends FBDetails {
  constructor(_name ?:string, 
    _gender ?: string,
     _DOB ?:any,
     _mobileNumber ?:number,
     Username ?: any)
  {
    
    super(_name, _gender, _DOB, _mobileNumber)
  }
    isName = () => {
        return true;
    }
}
// call To print family_And_Relationship 
 console.log(MyDetails.getFamilyAndRelationship())

 // create object of FBDetails class
let far = new ExtraInfo("Priya Singh", "female", "29/12/1995", 8823456780)


    let getContactBasicInfo = () => {
     for(let i in MyDetails.contact_basic_info)
        {

            console.log(MyDetails.contact_basic_info[i])   

        }
    }

   console.log(getContactBasicInfo()) 
// Professional skills
   let getProfessionalSkills = () =>{

    for(let i in MyDetails.professional_skills)
    {
         console.log(MyDetails.professional_skills[i])

    }
}
console.log(getProfessionalSkills())

   console.log(MyDetails.getDateOfBirthType())
