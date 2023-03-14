// Define the Employee class
class Employee {
    constructor(personNumber, reportsToManager, homeBusinessStructureLevel1, homeBusinessStructureLevel2, homeBusinessStructureLevel3, homeBusinessStructureLevel4, homeBusinessStructureLevel5, homeBusinessStructureLevel6, homePrimaryJob, homeLaborCategoryLevel1, executionID) {
      this.PersonNumber = personNumber;
      this.ReportstoManager = reportsToManager;
      this.HomeBusinessStructureLevel1 = homeBusinessStructureLevel1;
      this.HomeBusinessStructureLevel2 = homeBusinessStructureLevel2;
      this.HomeBusinessStructureLevel3 = homeBusinessStructureLevel3;
      this.HomeBusinessStructureLevel4 = homeBusinessStructureLevel4;
      this.HomeBusinessStructureLevel5 = homeBusinessStructureLevel5;
      this.HomeBusinessStructureLevel6 = homeBusinessStructureLevel6;
      this.HomePrimaryJob = homePrimaryJob;
      this.HomeLaborCategoryLevel1 = homeLaborCategoryLevel1;
      this.ExecutionID = executionID;
    }
}

module.exports = Employee;