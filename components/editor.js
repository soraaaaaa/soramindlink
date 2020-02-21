import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ content }) => {
  return (
    <CKEditor
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log("Change", { data });
      }}
      editor={ClassicEditor}
      config={{
        language: "ko"
      }}
    />
  );
};

export default Editor;
