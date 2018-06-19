/**
 * Created by XaviTorello on 30/05/18
 */
import React from 'react';
import ComposedComponent from './ComposedComponent';
import FileIcon from 'material-ui/svg-icons/editor/attach-file';
import Dropzone from 'react-dropzone';

const styles = {
    dropzone: {
        borderStyle: "dashed",
        borderRadius: "10px",
        padding: "10px",
        borderWidth: "2px",
    }
}

class Binary extends React.Component {
    constructor() {
      super()
      this.files = [];
    }

    handleUpdate = (selectorFiles: FileList) => {
        this.files = Object.assign([], this.files, selectorFiles)

        const {key, type} = this.props.form
        const file_attachment = selectorFiles;

        return this.props.onChange(key, file_attachment, type, this.props.form)
    }

    render() {
        // console.log('Binary', this.props);
        const description = (
            <div>
                <p><FileIcon/></p>
                <p>Drag some files here, or click to select files to upload.</p>
            </div>
        );

        // default all mime types
        const mime_types = [];

        return (
          <section>
            <div className="dropzone">
              <h4>{this.props.form.title || "Upload a file"}</h4>

              <Dropzone
                disabled={this.props.form.readonly}
                accept={this.props.form.mime_types || mime_types}
                style={{...styles.dropzone, ...this.props.form.style}}
                onDrop={(accepted, rejected) => { this.handleUpdate(accepted) }}
              >

                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                  if (isDragActive) {
                    return this.props.form.authorized_file_message || "This file is authorized";
                  }
                  if (isDragReject) {
                    return this.props.form.unauthorized_file_message || "Unauthorized file type";
                  }

                  return acceptedFiles.length?
                  		acceptedFiles.map(f => <li>{f.name}</li>)
                        :
                        this.props.form.description || description;
                }}
              </Dropzone>
            </div>
          </section>
        );
    }
}

export default ComposedComponent(Binary);
