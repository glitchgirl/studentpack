const crypto = require('crypto')
const generateStudentUrl = (studentId, schoolId, secretKey) => {
    const signature = crypto.createHmac('sha256', secretKey)
        .update(`${schoolId}${studentId}`)
        .digest('hex');
    return `https://education.github.com/student/verify?school_id=${schoolId}&student_id=${studentId}&signature=${signature}`
}
// log the unique web address for student with student_id=YOUR_STUDENT_ID in the console
console.log(generateStudentUrl('YOUR_STUDENT_ID', 'YOUR_SCHOOL_ID', 'YOUR_SECRET_KEY'))
// export it, to use the `generateStudentUrl` function elsewhere in your code
module.exports = generateStudentUrl
