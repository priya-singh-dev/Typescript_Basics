var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FBDetails = /** @class */ (function () {
    function FBDetails(_name, _gender, _DOB, _mobileNumber, Username) {
        var _this = this;
        this.contact_basic_info = [9811996296, "Gulabi Bagh", "javatpoint.com"];
        this.Family_And_Relationships = {
            rel_stat: "unmarried",
            family_mem: 7
        };
        // overview:{
        this.Univercity_name = "GGSIPU";
        this.cur_Place = "Delhi";
        this.professional_skills = ["C", "C++", "Javascript", "Typescript"];
        this.fav_quotations = ["Never give up", "Always smile"];
        this.nic_name = ["Rani", "Adi", "kittu", "lovi"];
        this.getDateOfBirthType = function () {
            return _this.DOB;
        };
        //Family_Relationship
        this.getFamilyAndRelationship = function () {
            for (var i in MyDetails.Family_And_Relationships) {
                console.log(MyDetails.Family_And_Relationships[i]);
            }
        };
        this.name = _name;
        this.gender = _gender;
        this.DOB = _DOB;
        this.mobileNumber = _mobileNumber;
        this.username = Username;
    } // constructor end here
    FBDetails.prototype.getMobileNumber = function () {
        console.log(this.mobileNumber);
    };
    return FBDetails;
}()); // end class
var MyDetails = new FBDetails("Priya", "female", 29 / 10 / 1996, 9811223410);
var ExtraInfo = /** @class */ (function (_super) {
    __extends(ExtraInfo, _super);
    function ExtraInfo(_name, _gender, _DOB, _mobileNumber, Username) {
        var _this = _super.call(this, _name, _gender, _DOB, _mobileNumber) || this;
        _this.isName = function () {
            return true;
        };
        return _this;
    }
    return ExtraInfo;
}(FBDetails));
var far = new ExtraInfo("Priya Singh", "female", 29 / 12 / 1995, 8823456780);
var getContactBasicInfo = function () {
    for (var i in MyDetails.contact_basic_info) {
        console.log(MyDetails.contact_basic_info[i]);
    }
};
console.log(getContactBasicInfo());
// Professional skills
var getProfessionalSkills = function () {
    for (var i in MyDetails.professional_skills) {
        console.log(MyDetails.professional_skills[i]);
    }
};
console.log(getProfessionalSkills());
console.log(MyDetails.getDateOfBirthType());
