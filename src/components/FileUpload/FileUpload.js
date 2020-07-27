import React, {useRef, useState, useEffect} from 'react';
import './FileUpload.css';
import Button from '../../components/customButton/customButton';

const FileUpload = props => {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      }, [file]);
        const pickedHandler = event => {
        let pickedFile;
        let fileIsValid = isValid;
     if(event.target.files && event.target.files.length !== 0) {
          pickedFile = event.target.files[0];
         setFile(pickedFile);
         setIsValid(true);
         fileIsValid = true;
     } else {
         setIsValid(false);
         fileIsValid = false;
     }
     props.onInput(props.id, pickedFile, fileIsValid)
    }
    const pickFileHandler = () => {
       filePickerRef.current.click();
    }
    return(
        <div>
            <input 
            id={props.id} 
            ref={filePickerRef}
            style={{display: 'none'}} 
            type='file' 
            accept=".jpg,.png,.jpeg, .pdf"
            onChange={pickedHandler}
            multiple
            />
            <div className={`image-upload ${props.center && 'center'}`}>
               <div className='image-upload__preview'>
              {/* {previewUrl &&  <img src={previewUrl} alt="Preview-design-عرض-مخطط-المقاولات-المعماري"/>} */}
             {previewUrl && <p>{file.name}</p>}
              {!previewUrl && <p>الرجاء اختيار ملف </p>}
               </div>
               <Button type='button' onClick={pickFileHandler}>ارفع مخططك</Button>
            </div>
            {/* {!isValid && <p>حصل خطأ</p>} */}
        </div>
    )
}
export default FileUpload;