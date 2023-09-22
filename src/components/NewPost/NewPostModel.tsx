import { useState } from "react";
import styled from "styled-components";

//Styled Components
const ModelContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #B11313;
width: 100%;
height: 100px;
padding-left: 20px;
border-radius: 2px;
border: 1px solid #fff;
margin-bottom: 20px;
`;

const ModelInput = styled.textarea`
  /* Your styling for the input field */
`;

const ModelButtons = styled.div`
  /* Your styling for the buttons container */
`;

const SubmitButton = styled.button`
  /* Your styling for the submit button */
`;

const CancelButton = styled.button`
  /* Your styling for the cancel button */
`;

//Interface
interface NewPostModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}

const NewPostModel: React.FC<NewPostModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [postContent, setPostContent] = useState("");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    onSubmit(postContent);
    onClose();
    setPostContent(""); // Clear the input field
  };

  return (
    <ModelContainer style={{ display: isOpen ? "block" : "none" }}>
      <ModelInput
        placeholder="Enter your new post..."
        value={postContent}
        onChange={handleContentChange}
      />
      <ModelButtons>
        <SubmitButton onClick={handlePostSubmit}>Submit</SubmitButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModelButtons>
    </ModelContainer>
  );
};

export default NewPostModel;