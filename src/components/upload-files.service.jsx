import axios from 'axios';
class UploadFilesService {
  async upload(file, jobTitle, education, skill, experience, onUploadProgress) {

    const formData = new FormData();
    formData.append('cv', file);
    formData.append('job_desc', `"Job Title": ${jobTitle},"Education": ${education},"Skill": ${skill},"Work Experience": ${experience}`);


    const result = await axios.post(`http://127.0.0.1:5000/py/parse_cv_and_job`, formData )

  }

}

export default new UploadFilesService();
