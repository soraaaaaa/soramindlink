import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { changeField } from "../store/modules/write";

const Editor = ({ content }) => {
  const dispatch = useDispatch();

  return (
    <CKEditor
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData();
        dispatch(changeField(data));
      }}
      editor={ClassicEditor}
      config={{
        language: "ko"
      }}
    />
  );
};

export default Editor;
