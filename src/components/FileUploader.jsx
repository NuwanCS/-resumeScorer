import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import '../css/fileUploader.css'
import styled from 'styled-components'
import UploadService from './upload-files.service';
import WidgetSm from './WidgetSm';

const ContainerWidget = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`

const WidgetSmTitle = styled.div`
     font-size: 22px;
    font-weight: 600;
` 

const WidgetSmList = styled.form`
    margin: 0;
    padding: 0;
    list-style: none;

`

const NewUserField = styled.div.attrs({className:'p-3 shadow-md align-center'})`
    width: 400px;
  display: flex;
  /* flex-direction: column; */
  margin-top: 10px;
  margin-right: 20px;
`

const NewUserFieldLabel = styled.label.attrs({className:'px-3 align-center rounded'})`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  /* color: rgb(151, 150, 150); */
`

const NewUserFieldInput = styled.textarea.attrs({className:'px-3 align-center rounded'})`
    margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  /* color: rgb(151, 150, 150); */
`

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',
      fileInfos: [],
      education: '',
      skills: '',
      experience: '',
      jobTitle: '',
    };
  }

//   componentDidMount() {
//     UploadService.getFiles().then((response) => {
//       this.setState({
//         fileInfos: response.data,
//       });
//     });
//   }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, this.state.jobTitle, this.state.education, this.state.skills, this.state.experience, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })

    this.setState({
      selectedFiles: undefined,
    });
  }

  onDrop(files) {
    console.log('files--', files);
    if (files.length > 0) {
      this.setState({ selectedFiles: files });
    }
  }

  render() {
    const { selectedFiles, currentFile, progress, message, fileInfos } =
      this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + '%' }}
            >
              {progress}%
            </div>
          </div>
        )}

        <Dropzone onDrop={this.onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {selectedFiles && selectedFiles[0].name ? (
                  <div className="selected-file">
                    {selectedFiles && selectedFiles[0].name}
                  </div>
                ) : (
                  'Drag and drop file here, or click to select file'
                )}
              </div>
              <ContainerWidget>
                <WidgetSmTitle>Enter Job Description</WidgetSmTitle>
                <WidgetSmList>
                <NewUserField>
                  <NewUserFieldLabel>Job Title</NewUserFieldLabel>
                  <NewUserFieldInput type="textarea" placeholder="Enter Job Title"  onChange={(e) => this.setState({ jobTitle: e.target.value })}/>
                </NewUserField>
                <NewUserField>
                  <NewUserFieldLabel>Education</NewUserFieldLabel>
                  <NewUserFieldInput type="textarea" placeholder="Enter Education"  onChange={(e) => this.setState({ education: e.target.value })}/>
                </NewUserField>
                <NewUserField>
                  <NewUserFieldLabel>Skills</NewUserFieldLabel>
                  <NewUserFieldInput type="text" placeholder="Enter Skills"  onChange={(e) => this.setState({ skills: e.target.value })}/>
                </NewUserField>
                <NewUserField>
                  <NewUserFieldLabel>Work Experience</NewUserFieldLabel>
                  <NewUserFieldInput type="text" placeholder="Enter Experience" onChange={(e) => this.setState({ experience: e.target.value })} />
                </NewUserField>
                </WidgetSmList>
            </ContainerWidget>
              <aside className="selected-file-wrapper bg-blue-400 w-20 rounded text-center">
                <button
                  className="btn btn-success my-2 py-2 px-4"
                  disabled={!selectedFiles}
                  onClick={this.upload}
                >
                  Upload
                </button>
              </aside>
            </section>
          )}
        </Dropzone>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        {fileInfos.length > 0 && (
          <div className="card">
            <div className="card-header">List of Files</div>
            <ul className="list-group list-group-flush">
              {fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

      
      </div>
    );
  }
}
