export const camalCase = (str: string): string =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

export const columnNames = {
    alternative: 'Alternative',
    code: 'Code',
    edEmail: 'ED_Email',
    edName: 'ED_Name',
    enrollmentCap: 'Enrollment_Cap',
    gradeBand: 'Grade_Band',
    leaApprovalYear: 'LEA_Approval_Year',
    leaEnrollment: 'LEA_Enrollment',
    leaName: 'LEA_Name',
    leaOffice: 'LEA_Office',
    levels: 'Levels',
    newLeader: 'New_Leader',
    officeNumber: 'Office_Number',
    residential: 'Residential',
    siteType: 'Site_Type',
    wards: 'Wards',
    website: 'Website'
};
